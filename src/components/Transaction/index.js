/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Money from '~/services/Money';
import Styles from './styles';
import type Props from './_types';

export default (props: Props): React$Node => {
  const Value = props.out ? Styles.ValueOut : Styles.ValueIn;

  // Called when fired click
  function Callback() {
    const swap = {...props};
    delete swap.callback;
    props.callback(swap);
  }

  return (
    <TouchableOpacity
      style={Styles.Item}
      onPress={Callback}
      testID={`transaction-${props.index}`}>
      <View style={Styles.Info}>
        <Text style={Styles.Name}>{props.name || '--'}</Text>
        <Text style={Styles.Details}>{props.date || '--'}</Text>
      </View>
      <View style={Styles.Money}>
        <Text style={[Styles.Value, Value]}>{Money(props.value || 0)}</Text>
        <Text style={Styles.Details}>Mais Detalhes</Text>
      </View>
    </TouchableOpacity>
  );
};
