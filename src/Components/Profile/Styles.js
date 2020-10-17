import { StyleSheet, Dimensions } from 'react-native';

// file config
import { colors } from '../../ConfigGlobal';

const { width, height } = Dimensions.get('screen');

//file const
const AVATAR_PROFILE = 140;
const WIDTH_BUTTON_CHANGE_AVATAR = 200;
const HEIGHT_BUTTON_CHANGE_AVATAR = 45;
const WIDTH_BUTTON_SAVE= 150;
const HEIGHT_BUTTON_SAVE = 50;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE,
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#aaa',
        margin: 12
    },
    containerImage: {
        margin: 22,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 30
    },
    image: {
        width: AVATAR_PROFILE,
        height: AVATAR_PROFILE,
        backgroundColor: colors.BACKGROUND_CULTURE,
        borderRadius: AVATAR_PROFILE / 2,
        borderWidth: 2,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    containerButtonChangeImage: {
        width: WIDTH_BUTTON_CHANGE_AVATAR,
        height: HEIGHT_BUTTON_CHANGE_AVATAR,
        borderRadius: (WIDTH_BUTTON_CHANGE_AVATAR + HEIGHT_BUTTON_CHANGE_AVATAR) / 2,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textChangeImage: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE
    },
    containerInformation: {
        margin: 18,
    },
    containerItem: {
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    textItem: {
        fontSize: 19,
        marginBottom: 7,
        color: '#777',
        fontWeight: '500'
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        padding: 10,
        fontSize: 16,
        fontWeight: '300'
    },
    textSetBirthday: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.BACKGROUND_BLUEYONDER,
        marginTop: 5
    },
    dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4
    },
    dateInput: {
        borderRadius: 12
    },
    containerTextGender: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 7,
        marginRight: width / 2,
    },
    textGender: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        marginTop: 5,
        marginLeft: 5
    },
    containerButtonSave: {
        flex: 1,
        width: WIDTH_BUTTON_SAVE,
        height: HEIGHT_BUTTON_SAVE,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (WIDTH_BUTTON_SAVE + HEIGHT_BUTTON_SAVE) / 2,
        marginRight: 35
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE
    },
    textAddress: { 
        marginTop: 7, 
        fontWeight: '300', 
        marginBottom: 4,
        color: colors.TEXT_DARK_JUNGLE_GREEN
    }
});

export const pickerSelectStylesGender = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingHorizontal: 10,
      color: colors.TEXT_DARK_JUNGLE_GREEN,
      marginTop: 5,
      borderRadius: 4,
      fontWeight: '300',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      color: colors.TEXT_DARK_JUNGLE_GREEN,
      borderRadius: 8,
      marginTop: 5,
      fontWeight: '300',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
});


export default styles;