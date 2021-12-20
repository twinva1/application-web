import { browser } from 'protractor';
import { QueryPage } from './query.po';
import { sleep } from '../util';

describe('Query Page', function () {
  let page: QueryPage;

  beforeAll(async () => {
    await browser.get('/');
    await QueryPage.setIdentity();
  });

  beforeEach(() => {
    page = new QueryPage();
    page.navigateTo();
  });

  afterAll(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('access page', async () => {
    expect(await browser.getCurrentUrl()).toEqual(page.url);
  });
});
