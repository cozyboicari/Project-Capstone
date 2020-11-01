import { StyleSheet, Dimensions } from 'react-native';

// file config
import { colors } from '../../ConfigGlobal';

const { width, height } = Dimensions.get('screen');

//file const
const AVATAR_PROFILE = 140;
const AVATAR_PROFILE_DETAIL = (width + height) * 0.09;
const WIDTH_BUTTON_CHANGE_AVATAR = 200;
const HEIGHT_BUTTON_CHANGE_AVATAR = 45;
const WIDTH_BUTTON_SAVE= 150;
const HEIGHT_BUTTON_CONTACT = height * 0.06;
const HEIGHT_BUTTON_SAVE = 50;
const HEIGHT_CONTAINER_BOTTOM = height * 0.13;
const WIDTH_BUTTON_SAVE_EDIT = width * 0.3;
const HEIGHT_BUTTON_SAVE_EDIT = height * 0.05


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
    },

    //profile detail
    containerAvatarAndInformation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerAvatar: {
        margin: 22,
        marginBottom: 30
    },
    avatar: {
        width: AVATAR_PROFILE_DETAIL,
        height: AVATAR_PROFILE_DETAIL,
        borderRadius: AVATAR_PROFILE / 2,
        backgroundColor: colors.BACKGROUND_CULTURE,
        borderWidth: 2,
        borderColor: colors.BACKGROUND_BLUEYONDER
    },
    containerName: {
        flex: 1,
        paddingHorizontal: 10
    },
    name: {
        color: '#444',
        marginBottom: 5
    },
    containerInfoDetail: {
        margin: 22,
    },
    containerItemDetail: {
        marginBottom: 20
    },
    text: {
        fontSize: 18,
        marginRight: 6,
        marginLeft: 6,
        fontWeight: '300',
        color: colors.TEXT_DARK_JUNGLE_GREEN
    },
    data: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 5
    },
    containerIntroduce: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 20
    },
    textIntroduce: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333'
    },
    avatarIntroduce: {
        height: height * 0.25,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        marginVertical: 20,
        borderRadius: 7,
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: .3
    },
    containerDescription: {
        marginTop: 10,
        marginBottom: 30
    },
    description: {
        fontSize: 17,
        fontWeight: '300'
    },
    containerViewTours: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 20
    },
    containerBottom: {
        height: HEIGHT_CONTAINER_BOTTOM,
        backgroundColor: colors.BACKGROUND_CULTURE,
        shadowColor: '#000',
        shadowOpacity: .9,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6.25,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    containerButtonContact: {
        height: HEIGHT_BUTTON_CONTACT,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: (HEIGHT_BUTTON_CONTACT + width) / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonContact: {
        fontSize: 20,
        color: colors.BACKGROUND_CULTURE,
        fontWeight: 'bold'
    },

    //edit profile
    titleEditProfile: {
        margin: 22,
        fontSize: 20,
        color: '#444',
        fontWeight: '600'
    },
    containerItemEditProfile: {
        marginHorizontal: 22,
        marginBottom: 20
    },
    textItemEditProfile: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
        marginBottom: 7
    },
    textInputItemEditProfile: {
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: '300',
        borderRadius: 12
    },
    containerButtonItemEditProfile: { 
        flex: 1, 
        justifyContent: 'center',
        marginLeft: 10,
        padding: 12,
        paddingVertical: 2,
        borderRadius: 12,
        backgroundColor: colors.BACKGROUND_BLUEYONDER
    },
    textButtonItemEditProfile: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.BACKGROUND_CULTURE
    },
    containerButtonSaveEditProfile: {
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        width: WIDTH_BUTTON_SAVE_EDIT,
        height: HEIGHT_BUTTON_SAVE_EDIT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (WIDTH_BUTTON_SAVE_EDIT + HEIGHT_BUTTON_SAVE_EDIT) / 2
    },
    textButtonSaveEditProfile: {
        fontSize: 19,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE
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