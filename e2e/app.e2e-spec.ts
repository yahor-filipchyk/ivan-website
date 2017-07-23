import { IvanWebsitePage } from './app.po';

describe('ivan-website App', () => {
  let page: IvanWebsitePage;

  beforeEach(() => {
    page = new IvanWebsitePage();
  });

  const title = 'We are working hard...';

  it(`should display message saying '${title}'`, () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual(title);
  });
});
