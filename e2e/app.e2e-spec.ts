import { IvanWebsitePage } from './app.po';

describe('ivan-website App', () => {
  let page: IvanWebsitePage;

  beforeEach(() => {
    page = new IvanWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
