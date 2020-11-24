import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, 
    TouchableOpacity, TouchableWithoutFeedback, 
    Dimensions, Keyboard, Alert, } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file const
const { height } = Dimensions.get('screen');

//file library
import ImagePicker from 'react-native-image-picker';

const ItemEditProfile = ({ text, data, isMultiple, isButton, _setText, _chooseFileImage, isImage }) => {

    return(
        <View style={[styles.containerItemEditProfile, {
            
        }]}>
            <Text style={styles.textItemEditProfile}>{text}</Text>
            <View style={{ flexDirection: isButton ? 'row' : 'column' }}>
                <TextInput 
                    style={[styles.textInputItemEditProfile, {
                        height: isMultiple ? height * 0.2 : height * 0.045,
                        flex: isButton ? 1 : 0
                    }]}
                    value={data}
                    multiline={isMultiple}
                    returnKeyType='done'
                    autoCorrect={false}
                    editable={isImage ? false : true}
                    onChangeText={newText => {
                        _setText(text, newText);
                    }}
                />
                { isButton && 
                <TouchableOpacity
                    onPress={_chooseFileImage}
                >
                    <View style={styles.containerButtonItemEditProfile}>
                        <Text style={styles.textButtonItemEditProfile}>Thay đổi</Text>
                    </View>
                </TouchableOpacity>
                }
            </View>
        </View>
    );
}

export default class EditProfileDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            languages: '',
            passions: '',
            description: '',
            imageProfile: ''
        }
    }
    
    componentDidMount() {
        const { title, languages, passions, description, imageProfile } = this.props.route.params;
        this.setState({
            title,
            languages,
            passions,
            description,
            imageProfile
        })
    }

    _setText = (key, value) => {
        switch(key) {
            case 'Tiêu đề': return this.setState({ title: value });
            case 'Ngôn ngữ': return this.setState({ languages: value });
            case 'Sở thích': return this.setState({ passions: value });
            case 'Nội dung': return this.setState({ description: value });
            default: return;
        }
    }

    chooseFileImage = () => {
        let options = {
            title: 'Select image avatar',
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({ imageProfile: 'data:image/jpeg;base64,' + response.data });
            }
        })
    }

    render() {
        const { title, languages, passions, description, imageProfile } = this.state
        return(
            <TouchableWithoutFeedback  style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar barStyle='light-content'/>
                    <HeaderComponent {...this.props} isHome={false}/>

                    <Text style={styles.titleEditProfile}>Chỉnh sửa hồ sơ hướng dẫn viên</Text>
                    {/* phan view item edit */}
                    <ItemEditProfile text='Tiêu đề' data={title} isMultiple={false} isButton={false} _setText={this._setText} _chooseFileImage={this.chooseFileImage} isImage={false}/>
                    <ItemEditProfile text='Ngôn ngữ' data={languages} isMultiple={false} isButton={false} _setText={this._setText} _chooseFileImage={this.chooseFileImage} isImage={false}/>
                    <ItemEditProfile text='Đam mê' data={passions} isMultiple={false} isButton={false} _setText={this._setText} _chooseFileImage={this.chooseFileImage} isImage={false}/>
                    <ItemEditProfile text='Nội dung' data={description} isMultiple={true} isButton={false} _setText={this._setText} _chooseFileImage={this.chooseFileImage} isImage={false}/>
                    <ItemEditProfile text='Chọn ảnh cho hồ sơ' data={imageProfile} isMultiple={false} isButton={true} _setText={this._setText} _chooseFileImage={this.chooseFileImage} isImage={true}/>

                    {/* phan button */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                const itemsUpdate = {
                                    title: title,
                                    languages: languages,
                                    passions: passions,
                                    description: description,
                                    imageProfile: imageProfile
                                }
                                Alert.alert('Thông báo', 'Bạn có muốn cập nhật hồ sơ?', [
                                    {
                                        text: 'Xác nhận',
                                        onPress: () => {
                                            this.props._onUpdateEditProfileDetail(itemsUpdate);
                                            const { goBack } = this.props.navigation;
                                            goBack();
                                        }
                                    },
                                    {
                                        text: 'Huỷ bỏ',
                                        onPress: () => {},
                                        style: 'cancel'
                                    },
                                    { cancelable: false }
                                ])     
                            }}
                        >
                            <View style={styles.containerButtonSaveEditProfile}>
                                <Text style={styles.textButtonSaveEditProfile}>
                                    Lưu
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}