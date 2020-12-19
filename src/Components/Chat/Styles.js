import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

// const
const { width, height } = Dimensions.get('screen');

const AVATAR = width * 0.19
const HEIGHT_BOTTOM = height * 0.13;
const HEIGHT_TEXT_INPUT = height * 0.04;

const WIDTH_POST_TOUR = width * 0.7;
const HEIGHT_POST_TOUR = 420;
const BORDER_RADIUS = 22;
const WIDTH_IMAGE_COVER = width * 0.7;
const HEIGHT_IMAGE_COVER = (370 / 2);
const IMAGE_TOUR_GUIDE = 90;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTitle: { 
        borderBottomWidth: 1, 
        borderColor: '#ddd', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#444',
        margin: 22
    },
    containerChatbot: {
        margin: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textChatbot: {
        fontSize: 17,
        marginRight: 4,
        fontWeight: 'bold',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerChatAll: {
        flex: 1
    },
    containerItemChatAll: {
        width: width,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 20,
    },
    image1: {
        width: AVATAR,
        height: AVATAR,
        borderRadius: AVATAR / 2,
        borderWidth: .5,
        borderColor: colors.BACKGROUND_BLUEYONDER
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
        paddingHorizontal: 20,
        paddingTop: 8,
        borderRadius: 12,
    },
    containerItemMessage: {
        marginTop: 8,
    },
    itemMessage: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
    },
    textItemMessage: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.BACKGROUND_CULTURE
    },
     
    //tour
    containerPostTour: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 17
    },
    containerInfomationTour: {
        backgroundColor: '#fff',
        width: WIDTH_POST_TOUR,
        height: HEIGHT_POST_TOUR,
        shadowColor: '#000',
        shadowOpacity: .32,
        shadowRadius: 5.28,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: BORDER_RADIUS,
        elevation: 5,
    },
    containerImageCover: {
        flex: 1,
    },
    imageCover: {
        width: WIDTH_IMAGE_COVER,
        height: HEIGHT_IMAGE_COVER,
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS
    },
    containerImage: {
        flex: .5,
        marginLeft: 20,
    },
    image: {
        width: IMAGE_TOUR_GUIDE,
        height: IMAGE_TOUR_GUIDE,
        borderRadius: IMAGE_TOUR_GUIDE / 2,
        borderWidth: 3,
        borderColor: '#fff'
    }, 
    containerNameTour: {
        flex: 1,
        marginTop: 22,
        marginLeft: 17,
    },
    textIntro: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontWeight: '500'
    },
    subTextIntro: {
        color: colors.BACKGROUND_BLUEYONDER,
        fontWeight: 'bold'
    },
    textNameTour: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600'
    },
    containerPrice: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrice: {
        marginRight: 3.5,
        color: '#777',
        fontSize: 13,
        fontWeight: '500'
    },
    containerRating: { 
        alignItems: 'flex-start',
        marginTop: 8,
        flexDirection: 'row',
    },
    textRating: {
        fontSize: 13,
        fontWeight: '500',
        color: '#999',
        marginLeft: 5
    },

    //city
    containerItemSuggestion: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 22,
        borderColor: colors.BACKGROUND_BLUEYONDER,
        marginLeft: 7,
        marginBottom: 5
    },
    textItemSuggestion: {
        fontSize: 15,
        fontWeight: '400'
    }
});

export default styles;