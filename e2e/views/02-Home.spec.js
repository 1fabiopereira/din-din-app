describe('Home Screen', () => {
  before(async () => {
    await device.reloadReactNative();
    await element(by.id('start-button')).tap();
  });

  it('Should render New Home', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('Should show app icon', async () => {
    await expect(element(by.id('app-icon'))).toBeVisible();
  });

  it('Should have add transaction button', async () => {
    await expect(element(by.id('add-transaction'))).toBeVisible();
  });

  it('Should have balance field', async () => {
    await expect(element(by.id('balance'))).toBeVisible();
  });

  it('Should have balance message', async () => {
    await expect(element(by.id('balance-message'))).toBeVisible();
  });
});
