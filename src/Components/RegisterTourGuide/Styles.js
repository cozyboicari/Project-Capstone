import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

// file global
import { colors } from '../../ConfigGlobal';


// const
const { width, height } = Dimensions.get('screen');
const WIDTH_IMAGE_TOP = width;
const HEIGHT_IMAGE_TOP = height * 0.4;
const WIDTH_IMAGE_MID = width;
const HEIGHT_IMAGE_MID = height * 0.2;
const WIDTH_CONTAINER_BOTTOM = width;
const HEIGHT_CONTAINER_BOTTOM = height * 0.13;
const WIDTH_CONTAINER_BOTTOM_QUESTION = width;
const HEIGHT_CONTAINER_BOTTOM_QUESTION = height * 0.1;
const WIDTH_BUTTON = width * 0.35;
const HEIGHT_BUTTON = height * 0.05;
const WIDTH_CONTAINER_TICK = width;
const HEIGHT_CONTAINER_TICK = height * 0.045;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerIntroduceAndStart: {

    },
    containerImageTop: {
        
    },
    imageTop: {
        width: WIDTH_IMAGE_TOP,
        height: HEIGHT_IMAGE_TOP
    },
    layoutImageTop: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        width: WIDTH_IMAGE_TOP,
        height: HEIGHT_IMAGE_TOP,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLayoutImageTop: {
        fontSize: 28,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: 'bold'
    },
    textLayoutImageTopBottom: {
        color: colors.BACKGROUND_CULTURE,
        fontSize: 15
    },
    containerWhatIsYourtour: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 35
    },
    textWhatIsYourtour: {
        fontSize: 30,
        color: '#555',
        fontWeight: 'bold',
        marginBottom: 20
    },
    textWhatIsYourtourBottom: {
        fontSize: 15,
        fontWeight: '300'
    },
    containerImageMid: {
        
    },
    imageMid: {
        width: WIDTH_IMAGE_MID,
        height: HEIGHT_IMAGE_MID
    },
    containerBenefitTourguide: {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    textBenefitTourguide: {
        fontSize: 27,
        fontWeight: '700',
        color: '#555',
        marginBottom: 37
    },
    containerItemBenefit: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 5
    },
    titleBenefit: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 15
    },
    textBenefit: {
        fontSize: 16,
        fontWeight: '300',
        marginTop: 5,
        color: '#444'
    },
    containerSteps: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        paddingVertical: 50
    },
    titleSteps: {
        marginLeft: 20,
        fontSize: 27,
        fontWeight: '700',
        color: colors.BACKGROUND_CULTURE
    },
    containerItemStep: {
        marginHorizontal: 20,
        marginBottom: 2,
        flex: 1,
        justifyContent: 'flex-end'
    },
    step: {
        fontSize: 150,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.3)',
    },
    titleStep: {
        fontSize: 23,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: 'bold',
        marginBottom: 4
    },
    textStep: {
        fontSize: 17,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: '300'
    },
    containerButtonStarted: {
        width: WIDTH_CONTAINER_BOTTOM,
        height: HEIGHT_CONTAINER_BOTTOM,
        backgroundColor: colors.BACKGROUND_CULTURE,
        shadowColor: '#000',
        shadowOpacity: .65,
        shadowRadius: 6.25,
        shadowOffset: { width: 0, height: 5 },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerButton: {
        width: WIDTH_BUTTON,
        height: HEIGHT_BUTTON,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (WIDTH_BUTTON + HEIGHT_BUTTON) / 2
    },
    textButton: {
        fontSize: 17,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: 'bold'
    },
    textStarted: {
        flex: 1,
        marginLeft: 15,
        fontSize: 15.5,
        fontWeight: '600',
        color: '#222'
    },
    containerOfferForU: {
        paddingVertical: 25
    },
    textTitleOffer: {
        fontSize: 25,
        color: '#444',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    },
    containerItemOffer: {
        paddingHorizontal: 20,
        marginBottom: 15
    },
    textOfferItem: {
        marginLeft: 7,
        fontSize: 17,
        fontWeight: '500'
    },
    textOffterItemBotom: {
        fontSize: 16,
        fontWeight: '300',
        color: '#555'
    },

    // active
    containerQuestion: {
        flex: 1,
        justifyContent: 'center',
    },
    textQuestion: {
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 30,
    },
    textInputQuestion: {
        borderBottomWidth: 1,
        borderColor: colors.BACKGROUND_BLUEYONDER,
        fontSize: 18,
        padding: 5,
        color: colors.BACKGROUND_BLUEYONDER,
    },
    containerBottomQuestion: {
        width: WIDTH_CONTAINER_BOTTOM_QUESTION,
        height: HEIGHT_CONTAINER_BOTTOM_QUESTION,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        shadowColor: '#000',
        shadowOpacity: .65,
        shadowRadius: 6.25,
        shadowOffset: { width: 0, height: 5 },
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    containerTick: {
        height: HEIGHT_CONTAINER_TICK,
        backgroundColor: 'rgba(87, 108, 168, .3)',
        borderWidth: 1,
        borderColor: colors.BACKGROUND_BLUEYONDER,
        alignItems: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        marginBottom: 5
    },
    containerNameTick: {
        width: 25,
        height: 25,
        marginLeft: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    textNameTick: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default styles;