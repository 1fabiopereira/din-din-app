/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';

import {translate} from '~/lib/I18n';
import Container from '~/components/Container';
import type {Props} from './_types';

const New = (props: Props): React$Node => {
  // Config navigation bar
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: translate('add-transaction'),
      },
    },
  });

  return <Container padding={30} />;
};

export default New;
