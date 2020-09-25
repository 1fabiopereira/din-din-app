/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
  Button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.Red,
    borderRadius: 100,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    width: 200,
  },

  Center: {
    alignItems: 'center',
  },

  Text: {
    color: Colors.DoveGray,
  },

  TextButton: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },

  Value: {
    color: Colors.DoveGray,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
