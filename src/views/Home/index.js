/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import Images from '~/lib/Images';
import {translate} from '~/lib/I18n';

import Navigator from '~/navigation/Navigator';
import Container from '~/components/Container';
import Transaction from '~/components/Transaction';

import Styles from './styles';
import type {Props} from './_types';

const {Budget} = Images;

const Home = (props: Props): React$Node => {
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

  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.Align}>
        <Budget height={120} width={120} />
        <Text style={Styles.Balance}>R$ 3.000,00</Text>
        <Text style={Styles.Info}>{translate('total-balance')}</Text>
      </View>

      <TouchableOpacity onPress={New} style={Styles.Button}>
        <Text style={Styles.Text}>{translate('add-transaction')}</Text>
      </TouchableOpacity>

      <Container padding={15}>
        <View style={Styles.Block}>
          <React.Fragment>
            <Transaction
              callback={Details}
              name="Walmart"
              date="10/10/2020, 08:32"
              value="100,00"
              description="Torradeira para a namorada"
              out={true}
            />
            <Transaction
              callback={Details}
              name="Venda"
              date="10/10/2020, 08:01"
              value="199,99"
              out={false}
              description="Tenis da adidas"
            />
            <Transaction
              callback={Details}
              name="Americanas"
              date="10/10/2020, 17:45"
              value="100,00"
              out={true}
              description="Chocolates em barra"
            />
            <Transaction
              callback={Details}
              name="Reembolso"
              date="10/10/2020, 17:45"
              value="22,50"
              out={false}
              description="Plano de telefonia"
            />
          </React.Fragment>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
