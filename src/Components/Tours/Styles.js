import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

//file config global
import { colors } from '../../ConfigGlobal';

//bien config
const { width } = Dimensions.get('window');

const WIDTH_POST_TOUR = width - 55;
const HEIGHT_POST_TOUR = 420;

const WIDTH_IMAGE_COVER = width - 55;
const HEIGHT_IMAGE_COVER = (370 / 2);

const IMAGE_TOUR_GUIDE = 90;
const BORDER_RADIUS = 22;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTourGuides: {
        
    },
    containerTitle: {
        margin: 22
    },
    textTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: '#aaa'
    },
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
    }
});

export default styles;