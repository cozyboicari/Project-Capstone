import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

// const
const { width, height } = Dimensions.get('screen');
const AVATAR = width * 0.17

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#444',
        margin: 22
    },
    containerChatAll: {
        
    },
    containerItemChatAll: {
        width: width,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 20,
    },
    image: {
        width: AVATAR,
        height: AVATAR,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: AVATAR / 2
    },
    containerInformationChat: {
        flex: 1,
        marginLeft: 20
    },
    containerNameAndTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    name: {
        fontSize: 17,
        fontWeight: '500',
        color: '#111'
    },
    time: {
        fontWeight: '500',
        color: '#888'
    },
    containerContent: {

    },
    content: {
        fontSize: 15,
        fontWeight: '400',
        color: '#666',
    }
});

export default styles;