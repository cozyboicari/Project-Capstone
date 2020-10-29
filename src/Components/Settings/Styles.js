import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

//file global
import { colors } from '../../ConfigGlobal';

//file const
const LOGO_IMAGE = 84;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTop: {
        margin: 33,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerImage: {
        marginRight: 20,
    },
    image: {
        width: LOGO_IMAGE,
        height: LOGO_IMAGE,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: LOGO_IMAGE / 2,
        borderWidth: 2,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    containerNameAndEmail: {

    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BACKGROUND_BLUEYONDER,
        marginBottom: 3
    },
    textEmail: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 20
    },
    textItem: {
        fontSize: 17,
        fontWeight: '300',
    }
})

export default styles;