import { StyleSheet, Dimensions } from 'react-native';

// file global
import { colors } from '../../ConfigGlobal';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTitle: {
        margin: 22
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#444'
    },
    containerResetPassword: {
        marginHorizontal: 22
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10
    },
    textInput: {
        borderWidth: .5,
        padding: 10,
        fontSize: 17
    },
    containerButton: {
        paddingHorizontal: 22,
        marginTop: 20
    },
    button: {
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 22
    },
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.BACKGROUND_CULTURE
    }
});

export default styles;