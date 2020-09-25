/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
  Align: {
    alignItems: 'center',
  },

  Balance: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  Block: {
    alignItems: 'center',
    flex: 1,
  },

  Button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.Mantis,
    borderRadius: 100,
    height: 45,
    justifyContent: 'center',
    marginTop: 30,
    width: 200,
  },

  Container: {
    flex: 1,
  },

  Info: {
    color: Colors.DoveGray,
  },

  Text: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
