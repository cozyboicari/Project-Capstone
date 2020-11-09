import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

// const
const { width, height } = Dimensions.get('screen');

const AVATAR = width * 0.17
const HEIGHT_BOTTOM = height * 0.13;
const HEIGHT_TEXT_INPUT = height * 0.037;

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
    },

    //chat with user
    containerBottom: {
        height: HEIGHT_BOTTOM,
        justifyContent: 'center',
        shadowRadius: 6.25,
        shadowOpacity: .62,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: '#000',
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    textInput: {
        height: HEIGHT_TEXT_INPUT,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 12,
        borderRadius: 12,
    },
});

export default styles;