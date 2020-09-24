/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {Navigation} from 'react-native-navigation';

import Colors from '~/lib/Colors';
import Images from '~/lib/Images';

import Navigator from './Navigator';
import Register from './Register';

class Router {
  static initialize() {
    // Register routes
    Register.init();

    // Create listener
    const event = Navigation.events().registerAppLaunchedListener(async () => {
      // Default config navigator
      await Navigation.setDefaultOptions({
        navigationBar: {
          backgroundColor: Colors.Mantis,
        },
        statusBar: {
          backgroundColor: Colors.Mantis,
          style: 'light',
          visible: true,
        },
        topBar: {
          animate: true,
          backButton: {
            color: Colors.Mantis,
            icon: Images.Arrow,
            showTitle: false,
          },
          title: {
            alignment: 'center',
            color: Colors.Black,
          },
          visible: true,
        },
      });

      await Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: Navigator.views.INTRO,
                },
              },
            ],
            options: {
              layout: {
                orientation: ['portrait'],
              },
              topBar: {
                title: {
                  alignment: 'center',
                  color: Colors.Black,
                },
                visible: false,
              },
            },
          },
        },
      });
    });

    // Prevent memory leak
    const unsubscriber = Navigation.events().bindComponent(
      event,
      Navigator.views.APP,
    );

    // Remove listener
    return () => unsubscriber.remove();
  }
}

export default Router;
