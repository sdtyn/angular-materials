import { Material.Nli.IoPage } from './app.po';

describe('material.nli.io App', () => {
  let page: Material.Nli.IoPage;

  beforeEach(() => {
    page = new Material.Nli.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
