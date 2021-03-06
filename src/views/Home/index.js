/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Images from '~/lib/Images';
import {translate} from '~/lib/I18n';
import Calculate from '~/services/Calculate';
import Money from '~/services/Money';

import Navigator from '~/navigation/Navigator';
import Transaction from '~/components/Transaction';

import Styles from './styles';
import type {Props} from './_types';
import {useSelector} from 'react-redux';

const {Budget, NotFound} = Images;

const Home = (props: Props): React$Node => {
  const {transactions} = useSelector((state) => state.transactions);
  const [total, setTotal] = useState(0);

  // Details about transaction
  function Details(transaction: Object): void {
    Navigator.modal(props.componentId, Navigator.views.DETAILS, {
      ...transaction,
    });
  }

  // Open New transaction
  function New(): void {
    Navigator.modal(props.componentId, Navigator.views.NEW);
  }

  function RenderItem({item, index}) {
    return (
      <Transaction
        callback={Details}
        date={item.date}
        description={item.description}
        index={index}
        name={item.name}
        out={item.out}
        value={item.value}
      />
    );
  }

  function RenderContent() {
    if (transactions && transactions.length) {
      return (
        <FlatList
          style={Styles.Width}
          data={transactions}
          renderItem={RenderItem}
          keyExtractor={(item) => item.date}
        />
      );
    }

    return (
      <View style={Styles.Center}>
        <NotFound height={120} width={120} />
        <Text style={Styles.Info}>{translate('empty-transaction')}</Text>
      </View>
    );
  }

  useEffect(() => {
    setTotal(Calculate(transactions));
  }, [transactions]);

  return (
    <SafeAreaView style={Styles.Container} testID="home">
      <View style={Styles.Align}>
        <Budget testID="app-icon" height={120} width={120} />
        <Text testID="balance" style={Styles.Balance}>
          {Money(total || 0)}
        </Text>
        <Text testID="balance-message" style={Styles.Info}>
          {translate('total-balance')}
        </Text>
      </View>

      <TouchableOpacity
        onPress={New}
        style={Styles.Button}
        testID="add-transaction">
        <Text style={Styles.Text}>{translate('add-transaction')}</Text>
      </TouchableOpacity>

      <View style={Styles.Block}>{RenderContent()}</View>
    </SafeAreaView>
  );
};

export default Home;
