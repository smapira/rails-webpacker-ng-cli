import { FrontendPage } from './app.po';
import {} from 'jasmine';

describe('frontend App', function() {
  let page: FrontendPage;

  beforeEach(() => {
    page = new FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('app works!');
  });
});
