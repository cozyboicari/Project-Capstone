import React, { Component } from 'react';
import { View, Text, StatusBar, Image, 
    TouchableOpacity, TextInput, ScrollView, 
    Keyboard, ActivityIndicator, Alert } from 'react-native';

// file css
import styles, { pickerSelectStylesGender } from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// library
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genders: [
                {
                    label: 'Nam',
                    value: true
                },
                {
                    label: 'Nữ',
                    value: false
                }
            ],
            // information profile
            date: '',
            gender: undefined,
            name: '',
            phone: '',
            picture: '',
        }
    }

    componentDidMount() {
        this.props._onGetTraveler();
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
                this.setState({ picture: 'data:image/jpeg;base64,' + response.data });
            }
        })
    }

    _saveState = () => {
        const { date, name, gender, phone, picture } = this.state;

        const travelerUpdated = {
            date: date === '' ? this.props.traveler.birthday : date,
            name: name === '' ? this.props.traveler.name : name,
            gender: gender === undefined ? this.props.traveler.gender : gender,
            phone: phone === '' ? this.props.traveler.phone : phone,
            picture: picture === '' ? this.props.traveler.picture : picture,
        };

        Alert.alert('Thông báo', 'Bạn có muốn cập nhật thông tin?', [
            {
                text: 'Xác nhận',
                onPress: () => {
                    this.props._onUpdateProfile(travelerUpdated);
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
    }

    render() {
        const { birthday, picture, name, email, gender, phone } = this.props.traveler;
        const { genders } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <HeaderComponent {...this.props}/>

                { birthday ?
                <ScrollView>
                    <Text style={styles.textTitle}>Thông tin hồ sơ</Text>
                    {/* phan avatar */}
                    <Animatable.View
                        style={{flex: 1}}
                        animation='fadeIn'
                    >
                        <View style={styles.containerImage}>
                            <Image 
                                style={styles.image}
                                source={{ uri: this.state.picture === '' ? picture : this.state.picture }}
                            />
                            <TouchableOpacity
                                onPress={this.chooseFileImage}
                            >
                                <View style={styles.containerButtonChangeImage}>
                                    <Text style={styles.textChangeImage}>Thay đổi ảnh hồ sơ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* phan information */}
                        <View style={styles.containerInformation}>
                            {/* full name */}
                            <View style={styles.containerItem}>
                                <Text style={styles.textItem}>Họ và tên</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    returnKeyType='done'
                                    placeholder={name}
                                    onChangeText={ name => {
                                        this.setState({
                                            name
                                        })
                                    }}
                                />
                            </View>
                            {/* email */}
                            <View style={styles.containerItem}>
                                <Text style={styles.textItem}>Email</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    returnKeyType='done'
                                    editable={false}
                                    value={email}
                                />
                            </View>
                            {/* phone number */}
                            <View style={styles.containerItem}>
                                <Text style={styles.textItem}>Số điện thoại</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    keyboardType='numeric'
                                    returnKeyType='done'
                                    placeholder={phone}
                                    onChangeText={ phone => {
                                        this.setState({
                                            phone
                                        })
                                    }}
                                />
                            </View>
                            {/* gender */}
                            <View style={styles.containerItem}>
                                <Text style={styles.textItem}>Giới tính</Text>
                                <View style={styles.containerTextGender}>
                                    <RNPickerSelect 
                                        placeholder={{
                                            label: 'Chọn giới tính...',
                                            value: null
                                        }}
                                        value={this.state.gender === undefined ? gender : this.state.gender}
                                        items={genders}
                                        onValueChange={ gender => {
                                            this.setState({
                                                gender
                                            });
                                        }}
                                        style={{...pickerSelectStylesGender}}
                                        useNativeAndroidPickerStyle={false} //android only
                                        hideIcon={true}
                                    />
                                </View>
                            </View>
                            {/* date */}
                            <View style={[styles.containerItem, { 
                                paddingBottom: 40,
                                borderBottomWidth: 1,
                                borderColor: '#ddd'
                            }]}>
                                <Text style={styles.textItem}>Sinh nhật</Text>
                                <DatePicker 
                                    style={{ width: 220 }}
                                    date={this.state.date === '' ? birthday : this.state.date}
                                    mode='date'
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="1950-01-01"
                                    maxDate={new Date()}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: styles.dateIcon,
                                        dateInput: styles.dateInput
                                    }}
                                    onDateChange={date => this.setState({ date })}
                                />
                            </View>
                        </View>
                        {/* save */}
                        <TouchableOpacity
                            onPress={this._saveState}
                            style={{ alignItems: 'flex-end'}}
                        >
                            <View style={styles.containerButtonSave}>
                                <Text style={styles.textButton}>Lưu thông tin</Text>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                </ScrollView>
                : <ActivityIndicator size={300} />     
            }
            </View>
        )
    }
}