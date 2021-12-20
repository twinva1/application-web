import { $, browser } from 'protractor';

export class DetailPage {
  addUrl = `${browser.baseUrl}apply/add`;
  detailUrl = `${browser.baseUrl}apply/view/`;

  static setIdentity() {
    return browser.executeScript(
      `window.localStorage.setItem('malbekUser', '{"id":1,"name":"admin001","account":"admin","role_id":1}')`
    );
  }

  navigateToDetailPage(id: number) {
    return browser.get(this.detailUrl + id);
  }
  navigateToAddPage() {
    return browser.get(this.addUrl);
  }
}
