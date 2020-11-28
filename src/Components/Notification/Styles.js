import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

const { width, height } = Dimensions.get('screen');

const HEIGHT_ITEM_NOTIFICATION = height * 0.15;
const IMAGE_AVATAR = width * 0.22

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTitle: {
        borderBottomWidth: .5,
        borderColor: '#aaa',
    },
    textTitle: {
        margin: 22,
        fontSize: 33,
        fontWeight: 'bold',
        color: '#444'
    },
    containerNotificationItem: {
        borderBottomWidth: .5,
        borderColor: '#aaa',
        height: HEIGHT_ITEM_NOTIFICATION,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: IMAGE_AVATAR,
        height: IMAGE_AVATAR,
        marginLeft: 10,
        borderRadius: IMAGE_AVATAR / 2,
        borderWidth: 1,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    containerText: {
        flex: 1,
        paddingHorizontal: 10,
        paddingRight: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
    },
    date: {
        paddingBottom: 5,
        fontSize: 13,
        fontWeight: '500',
        color: '#888'
    }
});

export default styles;