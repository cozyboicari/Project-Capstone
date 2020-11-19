import { StyleSheet, Dimensions } from 'react-native';

// file config
import { colors } from '../../ConfigGlobal';

const { height } = Dimensions.get('screen');

const HEIGHT_CONTAINER_NEXT = height * 0.12;

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
    }
});

export default styles;