/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
export default (transactions: Object): number => {
  return transactions.reduce((acc, item) => {
    const value = Number(item.value) >= 0 ? Number(item.value) : 0;
    return item.out ? (acc -= value) : (acc += value);
  }, 0);
};
