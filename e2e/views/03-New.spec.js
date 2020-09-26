describe('New Transaction Screen', () => {
  before(async () => {
    await device.reloadReactNative();
    await element(by.id('start-button')).tap();
    await element(by.id('add-transaction')).tap();
  });

  it('Should render New Transaction screen', async () => {
    await expect(element(by.id('transaction'))).toBeVisible();
  });

  it('Should show wallet icon', async () => {
    await expect(element(by.id('wallet-icon'))).toBeVisible();
  });

  it('Should show In button', async () => {
    await expect(element(by.id('in-button'))).toBeVisible();
  });

  it('Should show Out button', async () => {
    await expect(element(by.id('out-button'))).toBeVisible();
  });

  it('Should have Input name', async () => {
    await expect(element(by.id('name-input'))).toBeVisible();
  });

  it('Should have Input value', async () => {
    await expect(element(by.id('value-input'))).toBeVisible();
  });

  it('Should have Input description', async () => {
    await expect(element(by.id('description-input'))).toBeVisible();
  });

  it('Should have Register button', async () => {
    await expect(element(by.id('register-button'))).toBeVisible();
  });

  it('Should create new transaction "In"', async () => {
    await element(by.id('in-button')).tap();

    const name = element(by.id('name-input'));
    await name.tap();
    await name.typeText('Paypal');

    const value = element(by.id('value-input'));
    await value.tap();
    await value.typeText('99.99');

    const description = element(by.id('description-input'));
    await description.tap();
    await description.typeText('Venda camiseta estampada');

    const button = element(by.id('register-button'));
    await button.tap();
    await button.tap();

    await expect(element(by.id('home'))).toBeVisible();
  });

  it('Should create new transaction "Out"', async () => {
    await element(by.id('add-transaction')).tap();
    await element(by.id('out-button')).tap();

    const name = element(by.id('name-input'));
    await name.tap();
    await name.typeText('Spotify');

    const value = element(by.id('value-input'));
    await value.tap();
    await value.typeText('19.99');

    const description = element(by.id('description-input'));
    await description.tap();
    await description.typeText('Assinatura mensal do Spotify');

    const button = element(by.id('register-button'));
    await button.tap();
    await button.tap();

    await expect(element(by.id('home'))).toBeVisible();
  });
});
