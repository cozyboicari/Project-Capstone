import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

//file config global
import { colors } from '../../ConfigGlobal';

//bien config
const { width } = Dimensions.get('window');

const WIDTH_TOUR_GUIDE = width - 55;
const HEIGHT_TOUR_GUIDE = 120;
const IMAGE_TOUR_GUIDE = 79;

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
    containerListTourGuides: {
        padding: 10,
        alignItems: 'center',
    },
    containerInfomationTourGuide: {
        backgroundColor: '#fff',
        width: WIDTH_TOUR_GUIDE,
        height: HEIGHT_TOUR_GUIDE,
        shadowColor: '#000',
        shadowOpacity: .32,
        shadowRadius: 5.28,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 22,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerImageTourGuide: {
        marginHorizontal: 20
    },
    imageTourGuide: {
        width: IMAGE_TOUR_GUIDE,
        height: IMAGE_TOUR_GUIDE,
        borderRadius: IMAGE_TOUR_GUIDE / 2,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    containerNameAndRateTourGuide: {

    },
    textNameTourGuide: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    containerRating: {
        flexDirection: 'row',
        marginTop: 11
    },
    rating: {
        marginRight: 10
    },
    textPointRate: {
        fontSize: 14, 
        fontWeight: '500',
        marginLeft: 5,
        color: '#aaa'
    }
});

export default styles;