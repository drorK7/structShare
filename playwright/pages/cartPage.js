const { expect } = require("playwright/test");

// homePage.js
class cartPage {
    constructor(page) {
      this.page = page;
      this.cartItemsSelector = '.success';
      this.placeOrderSelector = '.btn';   
    }
  
    async validateCartItems(products) {
      for (const product of products) {
        const element = await this.page.locator(this.cartItemsSelector, { hasText: `${product}` })
  
        if (!element) {
          throw new Error(`Element with class ${this.cartItemsSelector} and text ${item} not found.`);
        }
      }
    }
    async clickPlaceOrder() {
      await this.page.locator(this.placeOrderSelector, { hasText: 'Place Order' }).click();
    }

  }
class placeOrder{
    constructor(page) {
        this.page = page;
        this.totalCartSelector = '#totalm';
        this.nameTextBoxSelector = '#name';   
        this.countryTextBoxSelector = '#country';
        this.cityTextBoxSelector = '#city';  
        this.cardTextBoxSelector = '#card';    
        this.monthTextBoxSelector = '#month';   
        this.yearTextBoxSelector = '#year'; 
        this.purchaseSelector = '.btn';    
        this.confirmationMessageSelector = 'h2'
      }
      async totalCartPrice(text) {
        const element = await this.page.locator(this.totalCartSelector);
        try {
          await expect(element).toHaveText(`Total: ${text}`);
        } catch (error) {
          throw new Error(`Failed to assert total cart price: ${error.message}`);
        }
      }
      async NameTextBoxInput(text) {
        await this.page.locator(this.nameTextBoxSelector).fill(text)
      }
      async countryTextBoxInput(text) {
        await this.page.locator(this.countryTextBoxSelector).fill(text)
      }
      async cityTextBoxInput(text) {
        await this.page.locator(this.cityTextBoxSelector).fill(text)
      }
      async cardTextBoxInput(text) {
        await this.page.locator(this.cardTextBoxSelector).fill(text)
      }
      async monthTextBoxInput(text) {
        await this.page.locator(this.monthTextBoxSelector).fill(text)
      }
      async yearTextBoxInput(text) {
        await this.page.locator(this.yearTextBoxSelector).fill(text)
      }
      async clickPurchaseButton() {
        await this.page.locator(this.purchaseSelector, { hasText: 'Purchase' }).click()
      }
      confirmationMessage(text) {
        return this.page.locator(this.confirmationMessageSelector, { hasText: `${text}` })
      }
}
  
  module.exports ={
    cartPage,
    placeOrder
  } 
  