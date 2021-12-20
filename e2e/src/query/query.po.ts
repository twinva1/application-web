import { $, browser } from 'protractor';

export class QueryPage {
  url = `${browser.baseUrl}apply`;
  loginUrl = `${browser.baseUrl}login`;

  static setIdentity() {
    return browser.executeScript(
      `window.localStorage.setItem('malbekUser', '{"id":1,"name":"admin001","account":"admin","role_id":1}')`
    );
  }

  navigateTo() {
    return browser.get(this.url);
  }
}
