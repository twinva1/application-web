import { browser } from 'protractor';
import { LoginPage } from './login.po';
import { sleep } from '../util';

describe('Login Page', function () {
  let page: LoginPage;

  beforeEach(async () => {
    page = new LoginPage();
    await page.navigateTo();
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('login success with normal user', async () => {
    await page.typeAndLogin('user', '123456');
    expect(await browser.getCurrentUrl()).toEqual(page.successUrl);
    // await page.navigateTo();
    // expect(await browser.getCurrentUrl()).toEqual(page.successUrl);
  });

  it('login success with admin', async () => {
    await page.typeAndLogin('admin', '123456');
    expect(await browser.getCurrentUrl()).toEqual(page.successUrl);
  });

  it('login fail', async () => {
    await page.typeAndLogin('wrongaccount', '1234567');
    await sleep(1000);
    expect(await browser.getCurrentUrl()).toEqual(page.url);
  });
});
