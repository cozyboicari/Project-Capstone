import { StyleSheet, Dimensions, Platform } from 'react-native';

//file config global
import { colors } from '../../ConfigGlobal';

//width height screen
const { width, height } = Dimensions.get('window');

//bien' config style
const WIDTH_CITY =  width - 60;
const HEIGHT_CITY = height * 0.685;

const WIDTH_CITY_VIEW_ALL = width - 45;
const HEIGHT_CITY_VIEW_ALL = 120;

const WIDTH_IMAGE = 84;
const HEIGHT_IMAGE = 84;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerTopDestinations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        margin: 22,
        fontWeight: '600',
        fontSize: 20,
        color: '#aaa'
    },
    textSeeAll: {
        marginRight: 20,
        fontSize: 15,
        fontWeight: '600',
        color: colors.BACKGROUND_BLUEYONDER
    },
    containerItemCity: {
        marginLeft: 30,
        width: WIDTH_CITY,
        height: HEIGHT_CITY,
        borderRadius: 22,
        shadowColor: '#000',
        shadowRadius: 5.25,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: .25,
        elevation: 10,
    },
    containerLayoutItemCity: {
        width: WIDTH_CITY,
        height: HEIGHT_CITY,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 22,
        position: 'absolute',
        flex: 1,
        justifyContent: 'flex-end'
    },
    imageItemCity: {
        width: WIDTH_CITY,
        height: HEIGHT_CITY,
        borderRadius: 22,
    },
    containerItemInfo: {
        margin: 22,
        marginBottom: 50,
    },
    textItemNameCity: {
        fontSize: 35,
        fontWeight: '700',
        color: colors.BACKGROUND_CULTURE,
    },
    containerDescription: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    textDescription: {
        color: colors.BACKGROUND_CULTURE,
        fontSize: 17,
        fontWeight: '500',
    },
    containerViewAll: {
        backgroundColor: colors.BACKGROUND_CULTURE,
        width: WIDTH_CITY_VIEW_ALL,
        height: HEIGHT_CITY_VIEW_ALL,
        marginHorizontal: 22,
        marginVertical: 15,
        borderRadius: 22,
        shadowColor: '#000',
        shadowOpacity: .36,
        shadowRadius: 7.2,
        shadowOffset: { width: 1, height: 2 },
        elevation: 5,
        flexDirection: 'row',
    },
    containerImageViewAll: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 22
    },
    imageCitiesAll: {
        width: WIDTH_IMAGE,
        height: HEIGHT_IMAGE,
        borderRadius: WIDTH_IMAGE / 5
    },
    containerInfoViewAll: {
        justifyContent: 'center',
        flex: 1
    },
    textViewAll: {
        fontSize: 19,
        fontWeight: '500',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    textVisitsViewAll: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        marginTop: 5
    },
    textVisitors: {
        fontSize: 15,
        fontWeight: '500',
        color: '#555',
        marginTop: 5
    },
})

export default styles;