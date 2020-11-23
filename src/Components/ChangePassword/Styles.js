import { StyleSheet, Dimensions } from 'react-native';

// file config
import { colors } from '../../ConfigGlobal';

// file const
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE,
    },
    containerChangePassword: {
        margin: 22
    },
    titleChangePassword: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#444'
    },
    containerItemPassword: {
        marginTop: 20,
    },
    textItemPassword: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: '500'
    },
    textInput: {
        height: height * 0.045,
        borderWidth: .5,
        borderColor: '#aaa',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '300',
        borderRadius: 12
    },
    textRequired: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 35
    },
    containerButtonChange: {
        height: height * 0.055,
        borderWidth: .5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    textButtonChange: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.BACKGROUND_CULTURE
    }
});

export default styles;