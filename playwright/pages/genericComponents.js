class SignUpModal {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#sign-username';
      this.emailInput = '#email';
      this.passwordInput = '#password';
      this.signupButton = '#signin2';
    }
  
    async enterUsername(username) {
      await this.page.fill(this.usernameInput, username);
    }
  
    async enterEmail(email) {
      await this.page.fill(this.emailInput, email);
    }
  
    async enterPassword(password) {
      await this.page.fill(this.passwordInput, password);
    }
  
    async clickSignUpButton() {
      await this.page.click(this.signupButton);
    }
  }

  class LoginModal {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#sign-username';
      this.emailInput = '#email';
      this.passwordInput = '#password';
      this.signupButton = '#signin2';
    }
  
    async enterUsername(username) {
      await this.page.fill(this.usernameInput, username);
    }
  
    async enterEmail(email) {
      await this.page.fill(this.emailInput, email);
    }
  
    async enterPassword(password) {
      await this.page.fill(this.passwordInput, password);
    }
  
    async clickSignUpButton() {
      await this.page.click(this.signupButton);
    }
  }
  
  module.exports = {
    SignUpModal,
    LoginModal,
  };