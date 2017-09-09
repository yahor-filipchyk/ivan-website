import { MainPage } from './app.po';

describe('ivan-website App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  const title = 'Thanks for your patience!';

  it(`should display message containing '${title}'`, () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toContain(title);
  });
});
