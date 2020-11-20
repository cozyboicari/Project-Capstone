import { StyleSheet, Dimensions } from 'react-native';

// file config
import { colors } from '../../ConfigGlobal';

const { width, height } = Dimensions.get('screen');

const HEIGHT_CONTAINER_NEXT = height * 0.12;

const AVATAR_TOUR_GUIDE = width * 0.2;
const AVATAR_PAYMENT = width * 0.18;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE,
    },
    //number of people
    containerTop: {
        
    },
    titleNumberOfPeople: {
        fontSize: 25,
        margin: 22,
        fontWeight: 'bold',
        color: '#444'
    },
    containerItem: {
        margin: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textItem: {
        fontSize: 20,
        fontWeight: '400'
    },
    containerIconsItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    exampleText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#888',
        marginTop: 7
    },
    containerMid: {
        borderBottomWidth: 1,
        borderColor: '#aaa',
        marginHorizontal: 22,
        paddingBottom: 20
    },
    containerBottom: {
        margin: 22,
    },
    textBottom: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        marginBottom: 8
    },
    textExampleBottom: {
        fontSize: 16,
        fontWeight: '300',
        color: '#555'
    },
    containerNext: {
        borderTopWidth: 1,
        borderColor: '#aaa',
        height: HEIGHT_CONTAINER_NEXT,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    containerButtonNext: {
        paddingVertical: 15,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        alignItems: 'center',
        borderRadius: 22
    },
    textButtonNext: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },

    //order tour
    containerTopOrder: {
        margin: 22,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 20
    },
    containerInfomationTourguide: {
        flexDirection: 'row'
    },
    containerInformation: {
        flex: 3,
    },
    textTopOrderTitle: {
        fontSize: 23,
        fontWeight: '600',
        color: '#444',
        marginBottom: 10
    },
    textTopOrderNameTourGuide: {
        fontSize: 17,
        fontWeight: '400',
        color: '#333',
        marginBottom: 12
    },
    textName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.BACKGROUND_BLUEYONDER
    },
    textTopOrderDay: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    containerImage: {
        flex: 1,
    },
    image: {
        width: AVATAR_TOUR_GUIDE,
        height: AVATAR_TOUR_GUIDE,
        borderRadius: AVATAR_TOUR_GUIDE / 2
    },
    containerMidOrder: {
        marginHorizontal: 22,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 20,
    },
    textKidForFree: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20,
    },
    containerTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    textTotal: {
        fontSize: 17,
        fontWeight: '500',
    },
    containerBottomOrder: {
        margin: 22
    },
    titleSelectPayment: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#444'
    },
    containerTitlePayment: { 
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    textTitlePayment: {
        marginLeft: 7,
        fontSize: 16,
        fontWeight: '300',
        marginRight: 18,
        marginBottom: 20
    },
    containerItemPayment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#aaa'
    },
    textItemPayment: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '300'
    },
    imagePayment: {
        width: AVATAR_PAYMENT,
        height: AVATAR_PAYMENT,
        resizeMode: 'contain'
    },
});

export default styles;