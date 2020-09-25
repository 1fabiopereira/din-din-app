/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import React, {useState} from 'react';
import {Alert, TextInput, TouchableOpacity, View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Images from '~/lib/Images';
import {translate} from '~/lib/I18n';
import Container from '~/components/Container';

import Styles from './styles';
import type {Props} from './_types';

const {Wallet} = Images;

const New = (props: Props): React$Node => {
  // Config navigation bar
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: translate('add-transaction'),
      },
    },
  });

  const [out, setOut] = useState(null);
  const [name, setName] = useState(null);
  const [value, setValue] = useState(null);
  const [description, setDescription] = useState(null);
  const [date] = useState(new Date());

  async function Register() {
    if (out !== null && name && description && date && value) {
      //TODO: dispatch register
      await Navigation.dismissAllModals();
    } else {
      Alert.alert(
        translate('warning'),
        translate('fields-message'),
        [
          {
            onPress: () => null,
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    }
  }

  return (
    <Container padding={30}>
      <View style={Styles.Center}>
        <Wallet height={150} width={150} />

        <View style={Styles.Row}>
          <TouchableOpacity
            onPress={() => setOut(false)}
            style={[Styles.Option, out === false ? Styles.In : null]}>
            <Text style={Styles.Text}>{translate('in')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOut(true)}
            style={[Styles.Option, out ? Styles.Out : null]}>
            <Text style={Styles.Text}>{translate('out')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={Styles.Input}
        placeholder={translate('name')}
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={Styles.Input}
        placeholder={translate('value')}
        onChangeText={setValue}
        value={value}
      />

      <TextInput
        style={Styles.Input}
        placeholder={translate('description')}
        onChangeText={setDescription}
        value={description}
      />

      <TouchableOpacity onPress={Register} style={Styles.Button}>
        <Text style={Styles.Text}>{translate('register')}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default New;
