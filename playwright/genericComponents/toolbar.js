// homePage.js
class toolbar {
    constructor(page) {
      this.page = page;
      this.signUpButtonSelector = '#signin2';
      this.loginButtonSelector = '#login2';
      this.cartButtonSelector = '#cartur';
      this.homeButtonSelector = 'a.nav-link:has-text("Home")';
      
    }
  
    async clickSignUpButton() {
      await this.page.click(this.signUpButtonSelector);  // Corrected property name
    }
  
    async loginButton() {
      await this.page.click(this.loginButtonSelector);
    }
    async navigateToCart() {
      await this.page.click(this.cartButtonSelector)
    }
    async navigateToHome() {
        await this.page.click(this.homeButtonSelector)
      }
  }
  
  module.exports = toolbar;
  