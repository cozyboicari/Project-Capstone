import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

//bien config
const { width, height } = Dimensions.get('window');

const WIDTH_HEIGHT_AVATAR = 130;
const WIDTH_IMAGE_COVER = width;
const HEIGHT_IMAGE_COVER = height - (height - 250);

const WIDTH_BOOKING = width;
const HEIGHT_BOOKING = height - (height - 110);

const WIDTH_BUTTON_BOOKING = 130;
const HEIGHT_BUTTON_BOOKING = 47;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerImageCoverTourGuide: {
        flex: 1
    },
    imageCoverTourGuide: {
        width: WIDTH_IMAGE_COVER,
        height: HEIGHT_IMAGE_COVER
    },
    containerAvatarTourGuide: {
        position: 'absolute',
        width: WIDTH_IMAGE_COVER,
        height: HEIGHT_IMAGE_COVER,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 70
    },
    avatarTourGuide: {
        width: WIDTH_HEIGHT_AVATAR,
        height: WIDTH_HEIGHT_AVATAR,
        borderRadius: WIDTH_HEIGHT_AVATAR / 2,
        borderColor: '#fff',
        borderWidth: 4,
    },
    containerTitleAndRating: {
        marginTop: (WIDTH_HEIGHT_AVATAR / 2) + 15,
    },
    containerTextTitle: {
        width: width,
        fontWeight: '600',
        paddingHorizontal: 70,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 23,
        color: '#555',
        fontWeight: '600',
        textAlign: 'center'
    },
    containerTextTitleNameTourGuide: {
        marginTop: 10,
        alignItems: 'center',
    },
    textTitleNameTourGuide: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerRating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    textRating: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#555'
    },
    textReviews: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '600',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerIntroTourGuide: {
        paddingVertical: 20,
        borderColor: '#aaa',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: width,
        paddingHorizontal: 20,
    },
    textIntroTourGuide: {
        fontSize: 19,
        fontWeight: '300',
        color: '#666'
    },
    containerInformationTour: {
        paddingVertical: 15,
        borderColor: '#aaa',
        borderBottomWidth: 1,
        width: width,
        paddingHorizontal: 20,
    },
    containerTourItemInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    textInformation: {
        marginLeft: 10,
        fontWeight: '400',
        color: '#333',
        fontSize: 16
    },
    containerSchedule: {
        padding: 20,
        borderColor: '#aaa',
    },
    textSchedule: {
        fontSize: 19,
        fontWeight: '300',
        color: '#666'
    },
    titleSchedule: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    containerGoodToKnow: {
        borderColor: '#aaa',
        borderTopWidth: 1,
        padding: 20,
        marginTop: 20
    },
    textGoodToKnow: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    containerMeetingPoint: {
        
    },
    textTitleMeetingPoint: {
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 8,
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    textMeetingPoint: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '400',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    containerBookingAndPrice: {
        width: WIDTH_BOOKING,
        height: HEIGHT_BOOKING,
        backgroundColor: colors.BACKGROUND_CULTURE,
        shadowColor: '#000',
        shadowOpacity: .53,
        shadowRadius: 6.2,
        shadowOffset: { width: 0, height: 5},
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerPrice: {
        marginLeft: 27
    },
    textPrice: {
        fontSize: 19,
        fontWeight: '500',
        color: colors.TEXT_DARK_JUNGLE_GREEN,
    },
    textInvite: {
        color: '#444',
        fontWeight: '300',
        fontSize: 17
        
    },
    containerButtonBooking: {
        flex: 1,
        height: HEIGHT_BUTTON_BOOKING,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: 22,
        margin: 22,

    },
    textButtonBooking: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.BACKGROUND_CULTURE,
        marginTop: 14,
        textAlign: 'center'
    },
    containerPlan: {
        borderColor: '#aaa',
        borderTopWidth: 1,
        padding: 20
    },
    titlePlan: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.TEXT_DARK_JUNGLE_GREEN 
    },
    textPlan: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.TEXT_DARK_JUNGLE_GREEN ,
        marginBottom: 7,
    },
    containerItemPlan: {
        marginLeft: 22,
    },
    containerItemPlanTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerItemPlanBottom: {
        flexDirection: 'row',
    },
    textTitleItemPlan: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222'
    },
    barItemPlan: {
        borderLeftWidth: 3,
        borderColor: colors.BACKGROUND_BLUEYONDER,
        flex: 1,
        marginLeft: 11.7,
        paddingLeft: 25,
        justifyContent: 'center',
        paddingVertical: 19
    }
});

export default styles;