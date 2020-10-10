import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

// get width height screen
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    containerBottom: {
        width: width,
        height: height * 0.25,
        backgroundColor: colors.BACKGROUND_CULTURE,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: .52,
        shadowRadius: 6.25,
    },
    textSelectTime: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#444',
        margin: 12
    },
    containerItemTime: {
        width: 60,
        height: 25,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 15,
    },
    textItemTime: {
        textAlign: 'center',
        marginTop: 3,
        color: '#444'
    }, 
    containerButton: {
        height: 50,
        alignItems: 'flex-start',
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSelect: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.BACKGROUND_CULTURE,
        justifyContent: 'center'
    }
});

export default styles;