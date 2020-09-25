/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import Money from '~/services/Money';

describe('Money Service', () => {
  it('Should be format positive number to Money', () => {
    expect(Money(100)).toBe('R$100,00');
    expect(Money(99.99, '$')).toBe('$99,99');
  });

  it('Should be format negative number to Money', () => {
    expect(Money(-100)).toBe('-R$100,00');
    expect(Money(-99.99, '$')).toBe('-$99,99');
  });

  it('Should be ignore a non number values', () => {
    expect(Money(NaN)).toBe('R$0,00');
    expect(Money('-99.98', '$')).toBe('$0,00');
    expect(Money(null)).toBe('R$0,00');
    expect(Money(undefined)).toBe('R$0,00');
  });
});
