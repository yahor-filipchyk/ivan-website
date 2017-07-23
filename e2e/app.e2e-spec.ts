import { MainPage } from './app.po';

describe('ivan-website App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  const title = 'We are working hard...';

  it(`should display message saying '${title}'`, () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual(title);
  });
});
