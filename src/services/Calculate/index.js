/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
export default (transactions: Object): number => {
  return transactions.reduce((acc, item) => {
    return item.out ? (acc -= Number(item.value)) : (acc += Number(item.value));
  }, 0);
};
