/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {StyleSheet} from 'react-native';
import Colors from '~/lib/Colors';

export default StyleSheet.create({
    Button: {
        alignItems: 'center',
        backgroundColor: Colors.Mantis,
        borderRadius: 100,
        height: 45,
        justifyContent: 'center',
        width: 150,
    },

    Center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    Content: {
        flex: 3
    },

    Footer: {
        flex: 1
    },

    Message: {
        textAlign: 'justify',
        marginTop: 20
    },

    Name: {
        fontSize: 40,
        fontWeight: 'bold'
    },

    Text: {
        fontSize: 16,
        color: Colors.White
    },

    Welcome: {
        fontSize: 25,
    }
});
