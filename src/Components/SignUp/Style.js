import { StyleSheet } from 'react-native';

//file config global
import { colors } from '../../ConfigGlobal';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    containerTop: {
        flex: 1,
    },
    containerBottom: {
        flex: 3,
        backgroundColor: colors.BACKGROUND_CULTURE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    containerWelcome: {
        flex: 1,
        justifyContent: 'center',
        margin: 30
    },
    textWelcome: {
        fontSize: 33,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: '600'
    },
    containerSignIn: {
        flex: 1,
        margin: 12
    },
    iconTextInput: {
        marginRight: 10
    },
    buttonSignUp: {
        marginTop: 30,
        marginHorizontal: 50,
        borderRadius: 12,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    textSignUp: {
        fontSize: 19,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE
    },
    buttonSignIn: {
        marginTop: 15,
        marginHorizontal: 50,
        borderRadius: 12,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    textSignIn: {
        fontSize: 19,
        fontWeight: '600',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerForgotPassword: {
        marginTop: 25,
        alignItems: 'flex-end',
    },
    textForgotPassword: {
        color: colors.BACKGROUND_BLUEYONDER,
        fontWeight: '600',
    }
})

export default styles;