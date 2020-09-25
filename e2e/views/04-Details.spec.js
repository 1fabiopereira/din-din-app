describe('Details Transaction Screen', () => {
  before(async () => {
    await device.reloadReactNative();
    await element(by.id('start-button')).tap();
    await element(by.id('add-transaction')).tap();

    await element(by.id('out-button')).tap();

    const name = element(by.id('name-input'));
    await name.tap();
    await name.typeText('Netflix');

    const value = element(by.id('value-input'));
    await value.tap();
    await value.typeText('24.99');

    const description = element(by.id('description-input'));
    await description.tap();
    await description.typeText('Assinatura mensal da Netflix');

    const button = element(by.id('register-button'));
    await button.tap();
    await button.tap();

    const transaction = element(by.id('transaction-0'));
    await transaction.tap();
  });

  it('Should open transaction details', async () => {
    await expect(element(by.id('details'))).toBeVisible();
  });

  it('Should have Icon', async () => {
    await expect(element(by.id('chart-icon'))).toBeVisible();
  });

  it('Should have Name', async () => {
    await expect(element(by.id('field-name'))).toBeVisible();
  });

  it('Should have Value', async () => {
    await expect(element(by.id('field-value'))).toBeVisible();
  });

  it('Should have Description', async () => {
    await expect(element(by.id('field-description'))).toBeVisible();
  });

  it('Should have Date', async () => {
    await expect(element(by.id('field-date'))).toBeVisible();
  });

  it('Should have Delete Button', async () => {
    await expect(element(by.id('delete-button'))).toBeVisible();
  });

  it('Should delete transaction', async () => {
    const button = element(by.id('delete-button'));
    await button.tap();

    await expect(element(by.id('home'))).toBeVisible();
  });
});
