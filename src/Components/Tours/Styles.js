import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

//file config global
import { colors } from '../../ConfigGlobal';

//bien config
const { width, height } = Dimensions.get('window');

const WIDTH_POST_TOUR = width - 55;
const HEIGHT_POST_TOUR = 420;

const WIDTH_IMAGE_COVER = width - 55;
const HEIGHT_IMAGE_COVER = (370 / 2);

const IMAGE_TOUR_GUIDE = 90;
const BORDER_RADIUS = 22;

const HEIGHT_TEXTINPUT = height * 0.045;

const WIDTH_BUTTON_ADD = width * 0.32;
const HEIGHT_BUTTON_ADD = height * 0.05


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTourGuides: {
        
    },
    containerTitle: {
        margin: 22,
        marginBottom: 0
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
    },
    containerCreateTour: {
        marginVertical: 20,
        alignItems: 'flex-start'
    },
    textCreateTour: {
        fontSize: 17,
        marginBottom: 5,
        fontWeight: '500',
        color: '#444',
    },

    // create tour
    textTitleCreateTour: {
        margin: 22,
        fontSize: 22,
        fontWeight: '500',
        color: '#444'
    },
    containerItemCreateTour: {
        marginHorizontal: 22,
        marginBottom: 10
    },
    textItemCreateTour: {
        fontSize: 18,
        fontWeight: '500',
        color: '#222'
    },
    textInputItemCreateTour: {
        borderWidth: 1,
        borderColor: '#222',
        marginTop: 9,
        paddingHorizontal: 12,
        fontSize: 16,
        borderRadius: 12,
        fontWeight: '300'
    },
    containerButtonChangeImage: {
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        height: HEIGHT_TEXTINPUT,
        marginTop: 9,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
        borderRadius: 12
    },
    textButtonChangeImage: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.BACKGROUND_CULTURE
    },
    containerItemScheduleDetail: {
        marginLeft: 27,
        marginBottom: 15,
        marginTop: 10 
    },
    textItemScheduleDetail: {
        fontSize: 15,
        fontWeight: '300',
        color: '#444'
    },
    containerButtonAddSchedule: {
        width: WIDTH_BUTTON_ADD,
        height: HEIGHT_BUTTON_ADD,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        marginHorizontal: 22,
        marginBottom: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textButtonAddSchedule: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE,
    },
    containerTitleCreateTour: {
        height: height * 0.14,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .65,
        shadowRadius: 6.72,
        backgroundColor: '#fff',
    },
    containerSubmit: {
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: 33,
        paddingHorizontal: 22
    },
    containerDeleteSchedule: {
        marginLeft: 10
    },
    textDeleteSchedule: {
        color: colors.BACKGROUND_BLUEYONDER,
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerFavouriteIcon: {
       position: 'absolute',
       padding: 10
    }
});

export default styles;