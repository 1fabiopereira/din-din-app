/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Images from '~/lib/Images'
import {translate} from "~/lib/I18n";
import Navigator from '~/navigation/Navigator'
import Container from '~/components/Container'
import Transaction from '~/components/Transaction'
import Styles from './styles';
import type {Props} from './_types';

const {Budget} = Images

const Home = (props: Props): React$Node => {
    function Details(details: Object): void {
        console.log('Details -> ', details)
        // Navigator.modal(props.componentId, Navigator.views.DEATILS, {details})
    }

    return (
        <React.Fragment>
            <View style={{alignItems: 'center'}}>
                <Budget height={120} width={120} />
                <Text style={{fontSize: 26}}>R$ 3.000,00</Text>
                <Text>{translate('total-balance')}</Text>
            </View>

            <Container padding={15}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <React.Fragment>
                        <Transaction
                            callback={Details}
                            name="Walmart"
                            date="10/10/2020, 08:32"
                            value="100,00"
                            out={true}
                        />
                        <Transaction
                            callback={Details}
                            name="Venda"
                            date="10/10/2020, 08:01"
                            value="199,99"
                            out={false}
                        />
                        <Transaction
                            callback={Details}
                            name="Americanas"
                            date="10/10/2020, 17:45"
                            value="100,00"
                            out={true}
                        />
                        <Transaction
                            callback={Details}
                            name="Reembolso"
                            date="10/10/2020, 17:45"
                            value="22,50"
                            out={false}
                        />
                    </React.Fragment>
                </View>
            </Container>
        </React.Fragment>
    );
};

export default Home;
