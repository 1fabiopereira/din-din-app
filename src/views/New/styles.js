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
    backgroundColor: Colors.Mantis,
    borderRadius: 100,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    width: 200,
  },

  Center: {
    alignItems: 'center',
  },

  In: {
    backgroundColor: Colors.Mantis,
  },

  Input: {
    backgroundColor: '#EEE',
    borderColor: 'gray',
    borderRadius: 100,
    borderWidth: 0.5,
    height: 45,
    marginTop: 20,
    paddingLeft: 20,
  },

  Option: {
    alignItems: 'center',
    backgroundColor: Colors.Silver,
    borderRadius: 100,
    height: 40,
    justifyContent: 'center',
    margin: 10,
    width: 120,
  },

  Out: {
    backgroundColor: Colors.Red,
  },

  Row: {
    flexDirection: 'row',
  },

  Text: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
