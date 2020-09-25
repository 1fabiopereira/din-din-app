/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
export default (value: number, currency = 'R$'): string => {
  if (isNaN(value) || !value) {
    return `${currency}0,00`;
  }

  if (`${value}`.indexOf('.') !== -1) {
    return value >= 0
      ? `${currency}${value}`.replace('.', ',')
      : `-${currency}${Math.abs(value)}`.replace('.', ',');
  }

  return value >= 0
    ? `${currency}${value},00`
    : `-${currency}${Math.abs(value)},00`;
};
