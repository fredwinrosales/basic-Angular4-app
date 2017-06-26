import { BasicAngular4AppPage } from './app.po';

describe('basic-angular4-app App', () => {
  let page: BasicAngular4AppPage;

  beforeEach(() => {
    page = new BasicAngular4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
