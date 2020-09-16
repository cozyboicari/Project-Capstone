import { StyleSheet, Dimensions } from 'react-native';

//file config global
import { colors } from '../../ConfigGlobal';

//width height screen
const { width } = Dimensions.get('screen');

//bien' config style
const WIDTH_COUNTRY = width - 60;
const HEIGHT_COUNTRY = 620;

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
    containerItemCountry: {
        marginLeft: 30,
        width: WIDTH_COUNTRY,
        height: HEIGHT_COUNTRY,
        borderRadius: 22,
        shadowColor: '#000',
        shadowRadius: 5.25,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: .25,
        elevation: 10,
    },
    containerLayoutItemCountry: {
        width: WIDTH_COUNTRY,
        height: HEIGHT_COUNTRY,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 22,
        position: 'absolute',
        flex: 1,
        justifyContent: 'flex-end'
    },
    imageItemCountry: {
        width: WIDTH_COUNTRY,
        height: HEIGHT_COUNTRY,
        borderRadius: 22,
    },
    containerItemInfo: {
        margin: 22,
        marginBottom: 50,
    },
    textItemNameCountry: {
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
    }
})

export default styles;