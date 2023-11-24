// homePage.js
const { expect } = require('@playwright/test');

class productPage {
    constructor(page) {
      this.page = page;
      this.addToCartSelector = '.btn';
      this.pageTitle = '.name'

    }
  
    async clickaddToCartButton() {
        await this.page.locator(this.addToCartSelector, { hasText: 'Add to cart' }).click();
    }
    async validateProductName(text) {
        await expect(this.page.locator(this.pageTitle)).toContainText(text);
    }

  }
  
  module.exports = productPage;
  