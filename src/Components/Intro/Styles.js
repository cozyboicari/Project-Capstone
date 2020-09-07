import { StyleSheet } from 'react-native';

// file config global
import { colors } from '../../ConfigGlobal';

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    containerTop: {
        flex: 1,
    },
    containerBottom: {
        flex: 2,
        backgroundColor: colors.BACKGROUND_CULTURE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 40
    },
    title: {
        marginBottom: 7,
        fontSize: 50,
        fontWeight: '700',
        color: colors.BACKGROUND_CULTURE
    },
    caption: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        color: colors.BACKGROUND_CULTURE
    },
    containerIntroduce: {
        margin: 30
    },
    textIntroduce: {
        fontSize: 30,
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontWeight: '600'
    },
    captionIntroduce: {
        marginTop: 20,
        fontSize: 18
    },
    containerFlexButton: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 30,
        marginRight: 30
    },
    containerButton: {
        padding: 14,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        width: 180,
        borderRadius: 12
    },
    button: {
        color: colors.BACKGROUND_CULTURE,
        fontWeight: '600'
    },
});

export default styles;