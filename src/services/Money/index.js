/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
export default (value: number, currency = 'R$'): string => {
  if (`${value}`.indexOf('.') !== -1) {
    return `${currency}${value}`.replace('.', ',');
  }

  return `${currency}${value},00`;
};
