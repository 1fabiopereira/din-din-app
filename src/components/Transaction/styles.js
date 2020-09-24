/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
    Details: {
        fontSize: 12,
        color: '#999'
    },

    Date: {
        fontSize: 12,
        color: '#999'
    },

    Info: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    Item: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'center',
        width: '100%',
    },

    Money: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    Name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666'
    },

    Value: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    ValueIn: {
        color: 'green'
    },

    ValueOut: {
        color: 'red'
    }
});
