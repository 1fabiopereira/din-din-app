/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, TouchableOpacity} from 'react-native';

import Images from '~/lib/Images';
import Money from '~/services/Money';
import {translate} from '~/lib/I18n';
import Container from '~/components/Container';
import {ActionCreators as TransactionsActions} from '~/store/Ducks/transactions';

import Styles from './styles';
import type {Props} from './_types';
import {useDispatch} from 'react-redux';

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

  const dispatch = useDispatch();

  async function Delete() {
    dispatch(TransactionsActions.delete(props.date));
    await Navigation.dismissAllModals();
  }

  return (
    <Container padding={30}>
      <View style={Styles.Center} testID="details">
        <Chart height={150} width={150} testID="chart-icon" />

        <Text style={Styles.Text}>{translate('name')}</Text>
        <Text testID="field-name" style={Styles.Value}>
          {props.name || '--'}
        </Text>

        <Text style={Styles.Text}>{translate('value')}</Text>
        <Text testID="field-value" style={Styles.Value}>
          {Money(props.value || 0)}
        </Text>

        <Text style={Styles.Text}>{translate('description')}</Text>
        <Text testID="field-description" style={Styles.Value}>
          {props.description || '--'}
        </Text>

        <Text style={Styles.Text}>{translate('date')}</Text>
        <Text testID="field-date" style={Styles.Value}>
          {props.date || '--'}
        </Text>

        <TouchableOpacity
          onPress={Delete}
          style={Styles.Button}
          testID="delete-button">
          <Text style={Styles.TextButton}>{translate('delete')}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Details;
