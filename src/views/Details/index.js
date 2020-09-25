/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, TouchableOpacity} from 'react-native';

import Images from '~/lib/Images';
import {translate} from '~/lib/I18n';
import Container from '~/components/Container';

import Styles from './styles';
import type {Props} from './_types';

const {Chart} = Images;

const Details = (props: Props): React$Node => {
  // Config navigation bar
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: translate('details-transaction'),
      },
    },
  });

  async function Delete() {
    //TODO: dispatch delete
    await Navigation.dismissAllModals();
  }

  return (
    <Container padding={30}>
      <View style={Styles.Center}>
        <Chart height={150} width={150} />

        <Text style={Styles.Text}>{translate('name')}</Text>
        <Text style={Styles.Value}>{props.name || '--'}</Text>

        <Text style={Styles.Text}>{translate('value')}</Text>
        <Text style={Styles.Value}>R${props.value || '0,00'}</Text>

        <Text style={Styles.Text}>{translate('description')}</Text>
        <Text style={Styles.Value}>{props.description || '--'}</Text>

        <Text style={Styles.Text}>{translate('date')}</Text>
        <Text style={Styles.Value}>{props.date || '--'}</Text>

        <TouchableOpacity onPress={Delete} style={Styles.Button}>
          <Text style={Styles.TextButton}>{translate('delete')}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Details;
