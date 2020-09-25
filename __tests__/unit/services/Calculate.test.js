/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import Calculate from '~/services/Calculate';

describe('Calculate Service', () => {
  it('Should be calculated correctly total of transactions', () => {
    const transactions = [
      {
        out: true,
        value: 10,
      },
      {
        out: false,
        value: 110.23,
      },
    ];

    expect(Calculate(transactions)).toBe(100.23);
  });

  it('Should ignore null values', () => {
    const transactions = [
      {
        out: true,
        value: null,
      },
      {
        out: false,
        value: 110.23,
      },
    ];

    expect(Calculate(transactions)).toBe(110.23);
  });

  it('Should ignore undefined values', () => {
    const transactions = [
      {
        out: true,
        value: undefined,
      },
      {
        out: false,
        value: 110.23,
      },
    ];

    expect(Calculate(transactions)).toBe(110.23);
  });

  it('Should ignore negative values', () => {
    const transactions = [
      {
        out: true,
        value: -10,
      },
      {
        out: false,
        value: 110.23,
      },
    ];

    expect(Calculate(transactions)).toBe(110.23);
  });

  it('Should ignore string values', () => {
    const transactions = [
      {
        out: true,
        value: 'text',
      },
      {
        out: false,
        value: 110.23,
      },
    ];

    expect(Calculate(transactions)).toBe(110.23);
  });
});
