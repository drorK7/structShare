// homePage.js
class catalog {
  constructor(page) {
    this.page = page;
    this.signUpButtonSelector = '#signin2';
    this.loginButtonSelector = '#login2';
    this.catalogProductSelector = '.card-title';
    this.cartButtonSelector = '#cartur';
    this.cartButtonSelector = '#cartur';
    
  }

  async clickSignUpButton() {
    await this.page.click(this.signUpButtonSelector);  // Corrected property name
  }

  async loginButton() {
    await this.page.click(this.loginButtonSelector);
  }
  async pickCatalogProduct(text) {
    await this.page.locator(this.catalogProductSelector, { hasText: `${text}` }).click();
  }
  async navigateToCart() {
    await this.page.click(this.cartButtonSelector)
  }
}

module.exports = catalog;
