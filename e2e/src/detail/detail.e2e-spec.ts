import { browser } from 'protractor';
import { DetailPage } from './detail.po';
import { sleep } from '../util';

describe('Detail Page', function () {
  let page: DetailPage;

  beforeAll(async () => {
    await browser.get('/');
    await DetailPage.setIdentity();
  });

  beforeEach(() => {
    page = new DetailPage();
    page.navigateToDetailPage(3);
  });

  afterAll(() => {
    browser.executeScript('window.localStorage.clear()');
  });

  it('access page', async () => {
    expect(await browser.getCurrentUrl()).toEqual(page.detailUrl + 3);
  });
});
