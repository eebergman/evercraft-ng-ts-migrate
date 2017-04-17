import { EvercraftMigratePage } from './app.po';

describe('evercraft-migrate App', () => {
  let page: EvercraftMigratePage;

  beforeEach(() => {
    page = new EvercraftMigratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
