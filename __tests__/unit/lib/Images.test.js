/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import Images from '~/lib/Images';

describe('Images Lib', () => {
  it('Should be return a Image Path', () => {
    expect(Images.Wallet.testUri).toBe('../../../src/assets/Svgs/wallet.svg');
    expect(Images.Chart.testUri).toBe('../../../src/assets/Svgs/chart.svg');
  });

  it('Should be return undefined', () => {
    expect(Images.Fake).toBe(undefined);
  });
});
