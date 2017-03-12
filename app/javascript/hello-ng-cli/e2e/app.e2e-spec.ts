import { HelloNgCliPage } from './app.po';

describe('hello-ng-cli App', function() {
  let page: HelloNgCliPage;

  beforeEach(() => {
    page = new HelloNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
