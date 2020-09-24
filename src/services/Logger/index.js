/* eslint-disable no-console */
/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
export default {
  log: (path: string, error: any): void => {
    const exception = new Error(`${path} ${error}`);
    console.log(exception);
  },
};
