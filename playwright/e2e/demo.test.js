const { setup, teardown } = require('../config/config.js');
const { cartPage, placeOrder } = require('../pages/cartPage');
const CommonFunctions = require('../utils/common.js');
const toolBar = require('../genericComponents/toolbar.js');
const commonConfig = require('../config/commonConfig.js');

const { test, expect } = require('@playwright/test');

test.describe('E-commerce Purchase Test Suite', () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    const setupResult = await setup();
    browser = setupResult.browser;
    page = setupResult.page;
  });

  test.afterAll(async () => {
    await teardown(browser);
  });

  test('Sanity flow - Make a purchase', async () => {
    const cartpage = new cartPage(page);
    const placeOrderModal = new placeOrder(page);
    const common = new CommonFunctions(page);
    const toolbar = new toolBar(page);

    const products = await common.readProductsFromCSV(commonConfig.csvFilePath);
    await common.addProductsToCart(products);
    await toolbar.navigateToCart();

    await cartpage.validateCartItems(products);
    await cartpage.clickPlaceOrder();
    await placeOrderModal.totalCartPrice('1150');
    await placeOrderModal.NameTextBoxInput('name');
    await placeOrderModal.countryTextBoxInput('country');
    await placeOrderModal.cityTextBoxInput('city');
    await placeOrderModal.cardTextBoxInput('card');
    await placeOrderModal.monthTextBoxInput('month');
    await placeOrderModal.yearTextBoxInput('year');
    await placeOrderModal.clickPurchaseButton();
    await expect(placeOrderModal.confirmationMessage('Thank you for your purchase!')).toBeVisible();
  });
});
