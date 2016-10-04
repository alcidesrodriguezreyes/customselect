import { CustomselectPage } from './app.po';

describe('customselect App', function() {
  let page: CustomselectPage;

  beforeEach(() => {
    page = new CustomselectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
