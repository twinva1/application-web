import { $, browser } from 'protractor';

export class LoginPage {
  url = `${browser.baseUrl}login`;
  successUrl = `${browser.baseUrl}apply`;

  navigateTo() {
    return browser.get(this.url);
  }

  typeAccount(str: string) {
    return $('#account').sendKeys(str);
  }

  typePassword(str: string) {
    return $('#password').sendKeys(str);
  }

  submitLogin() {
    return $('.login-btn').click();
  }

  async typeAndLogin(account: string, password: string) {
    await this.typeAccount(account);
    await this.typePassword(password);
    await this.submitLogin();
  }
}
