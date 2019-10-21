import { NetflixMiniApp } from './app.po';

describe('netflix-movies App', () => {
  let page: NetflixMiniApp;

  beforeEach(() => {
    page = new NetflixMiniApp();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
