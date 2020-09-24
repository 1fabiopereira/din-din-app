/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {enableAllPlugins} from 'immer';

import './config/reactotron';
import Router from './navigation/Router';

// Immer compatibility
enableAllPlugins();

// Init app routes
Router.initialize();
