/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
  Details: {
    color: Colors.DustyGray,
    fontSize: 12,
  },

  Info: {
    alignItems: 'flex-start',
    flex: 3,
    justifyContent: 'center',
  },

  Item: {
    borderBottomColor: Colors.Silver,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    width: '100%',
  },

  Money: {
    alignItems: 'flex-end',
    flex: 2,
    justifyContent: 'center',
  },

  Name: {
    color: Colors.DoveGray,
    fontSize: 20,
    fontWeight: 'bold',
  },

  Value: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  ValueIn: {
    color: Colors.Mantis,
  },

  ValueOut: {
    color: Colors.Red,
  },
});
