/* eslint-disable no-console */
/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import createStore from './CreateStore';
import rootReducer from './Ducks';
import rootSaga from './Sagas';
import persistReducers from './Persistor';

// $FlowFixMe
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [sagaMiddleware];
const Store = createStore(persistReducers(rootReducer), middleware);
sagaMiddleware.run(rootSaga);
const Persistor = persistStore(Store);

export {Store, Persistor};
