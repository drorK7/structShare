// common.js
const Catalog = require('../pages/catalog');
const productPage = require('../pages/productPage');
const { cartPage, placeOrder } = require('../pages/cartPage');
const { expect } = require('playwright/test');
const toolBar = require('../genericComponents/toolbar.js');
const fs = require('fs');
const csv = require('csv-parser');

class CommonFunctions {
  constructor(page) {
    this.page = page;
    this.catalog = new Catalog(page);
    this.productpage = new productPage(page);
    this.cartpage = new cartPage(page);
    this.placeOrderModal = new placeOrder(page);
    this.toolbar = new toolBar(page)
  }

  async addProductsToCart(productNames) {
    for (const productName of productNames) {
      await this.catalog.pickCatalogProduct(productName);
      await this.productpage.validateProductName(productName);
      const responsePromise = this.page.waitForResponse('**/addtocart');
      await this.productpage.clickaddToCartButton();
      await responsePromise;
      await this.toolbar.navigateToHome();

    }
  }

  async readProductsFromCSV(filePath) {
    const productNames = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          productNames.push(row.product_name);
        })
        .on('end', () => {
          resolve(productNames);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}

module.exports = CommonFunctions;
