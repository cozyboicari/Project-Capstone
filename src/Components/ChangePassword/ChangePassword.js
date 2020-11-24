import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

//firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

const ItemPassword = ({ title, _setPassword }) => {
    return (
        <View style={styles.containerItemPassword}>
            <Text style={styles.textItemPassword}>{title}</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={title}
                onChangeText={text => _setPassword(title, text)}
                secureTextEntry={true}
            />
        </View>
    );
}

export default class ChangePassword extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newPassword: ''
        }
    }

    _setPassword = (text, value) => {
        switch(text) {
            case 'Mật khẩu hiên tại của bạn *': 
                return this.setState({ password: value });
            case 'Mật khẩu mới của bạn *':
                return this.setState({ newPassword: value });
            default: return;
        }
    }

    componentDidMount() {
        
    }

    _updatePassword = () => {
        auth().signInWithEmailAndPassword(auth().currentUser.email, this.state.password)
            .then(() => {
                auth().currentUser.updatePassword(this.state.newPassword)
                .then(() => Alert.alert('Thông báo', 'Thay đổi mật khẩu thành công!'))
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>


                <View style={styles.containerChangePassword}>
                    <Text style={styles.titleChangePassword}>Thay đổi mật khẩu</Text>
                    <ItemPassword 
                        title='Mật khẩu hiên tại của bạn *'
                        _setPassword={this._setPassword}
                    />
                    <ItemPassword 
                        title='Mật khẩu mới của bạn *'
                        _setPassword={this._setPassword}
                    />
                    <Text style={styles.textRequired}>
                        Mật khẩu mạnh có độ dài ít nhất 8 ký tự và không chứa kí tự đặt biệt.
                    </Text>
                
                    <TouchableOpacity
                        style={styles.containerButtonChange}
                        onPress={() => {
                            this._updatePassword();
                            setTimeout(() => {
                                const { goBack } = this.props.navigation;
                                goBack();
                            }, 3000);
                        }}
                    >
                        <Text style={styles.textButtonChange}>Thay đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}