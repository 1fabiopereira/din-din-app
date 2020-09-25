/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
  key: 'DinDin',
  storage: AsyncStorage,
  whitelist: ['transactions'],
};

export default (reducers: any): any => persistReducer(config, reducers);
