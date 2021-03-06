/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import Intro from '~/views/Intro';
import Home from '~/views/Home';
import New from '~/views/New';
import Details from '~/views/Details';

import {Store} from '~/store/Store';
import type {Node} from 'react';
import Navigator from './Navigator';

class Register {
  static Resolver(view: any): function {
    return (): Node => view.component;
  }

  static Register(view: any): any {
    return Navigation.registerComponentWithRedux(
      view.name,
      Register.Resolver(view),
      Provider,
      Store,
    );
  }

  static init() {
    // $FlowFixMe
    return [
      {
        component: Intro,
        name: Navigator.views.INTRO,
      },
      {
        component: Home,
        name: Navigator.views.HOME,
      },
      {
        component: New,
        name: Navigator.views.NEW,
      },
      {
        component: Details,
        name: Navigator.views.DETAILS,
      },
    ].map(Register.Register);
  }
}

export default Register;
