import { NgNexmoPage } from './app.po';

describe('ng-nexmo App', () => {
  let page: NgNexmoPage;

  beforeEach(() => {
    page = new NgNexmoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
