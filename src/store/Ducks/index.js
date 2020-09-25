/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {combineReducers} from 'redux';

import transactions from './transactions';

export default combineReducers({transactions});
