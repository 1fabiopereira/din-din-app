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

  function RenderItem({item}) {
    return (
      <Transaction
        name={item.name}
        description={item.description}
        out={item.out}
        date={item.date}
        value={item.value}
        callback={Details}
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
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Align}>
        <Budget height={120} width={120} />
        <Text style={Styles.Balance}>{Money(total || 0)}</Text>
        <Text style={Styles.Info}>{translate('total-balance')}</Text>
      </View>

      <TouchableOpacity onPress={New} style={Styles.Button}>
        <Text style={Styles.Text}>{translate('add-transaction')}</Text>
      </TouchableOpacity>

      <View style={Styles.Block}>{RenderContent()}</View>
    </SafeAreaView>
  );
};

export default Home;
