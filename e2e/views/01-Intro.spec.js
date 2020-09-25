describe('Intro Screen', () => {
  before(async () => {
    await device.reloadReactNative();
  });

  it('Should render Intro screen', async () => {
    await expect(element(by.id('intro'))).toBeVisible();
  });

  it('Should show app name', async () => {
    await expect(element(by.id('app-name'))).toBeVisible();
  });

  it('Should show app icon', async () => {
    await expect(element(by.id('app-icon'))).toBeVisible();
  });

  it('Should show welcome title', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Should show welcome message', async () => {
    await expect(element(by.id('message'))).toBeVisible();
  });

  it('Should show start button', async () => {
    await expect(element(by.id('start-button'))).toBeVisible();
  });

  it('Should navigate to Home view', async () => {
    await element(by.id('start-button')).tap();
    await expect(element(by.id('home'))).toBeVisible();
  });
});
