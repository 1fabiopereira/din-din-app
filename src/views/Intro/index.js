/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Images from '~/lib/Images';
import {translate} from '~/lib/I18n';
import Navigator from '~/navigation/Navigator';
import Container from '~/components/Container';
import Styles from './styles';
import type {Props} from './_types';

const {Wallet} = Images;

const Intro = (props: Props): React$Node => {
  // Go to Home
  function Home(): void {
    Navigator.navigateToAndSetStackRoot(
      props.componentId,
      Navigator.views.HOME,
    );
  }

  return (
    <Container padding={30}>
      <View style={[Styles.Center, Styles.Content]} testID="intro">
        <Text testID="app-name" style={Styles.Name}>
          DinDin
        </Text>
        <Wallet height={220} width={220} testID="app-icon" />
        <Text testID="welcome" style={Styles.Welcome}>
          {translate('welcome')}
        </Text>
        <Text testID="message" style={Styles.Message}>
          {translate('welcome-message')}
        </Text>
      </View>
      <View style={[Styles.Center, Styles.Footer]}>
        <TouchableOpacity
          testID="start-button"
          onPress={Home}
          style={Styles.Button}>
          <Text style={Styles.Text}>{translate('start')}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Intro;
