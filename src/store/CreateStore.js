/* eslint-disable no-console */
/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {createStore, compose, applyMiddleware} from 'redux';

export default (reducers: any, middleware: any): any => {
  // $FlowFixMe
  const enhancer: boolean = __DEV__
    ? // $FlowFixMe
      compose(console.tron.createEnhancer(), applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

  return createStore(reducers, enhancer);
};
