import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// firebase
import { resetPassword } from '../../Database/Firebase/ConfigGlobalFirebase';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Đặt lại mật khẩu</Text>
                </View>
                <View style={styles.containerResetPassword}> 
                    <Text style={styles.text}>Nhập email đăng nhập của bạn để đặt lại mật khẩu!</Text>
                    <TextInput 
                        placeholder='your-email@yourtour.com'
                        style={styles.textInput}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.containerButton}
                    onPress={() => {
                        resetPassword(this.state.email);
                        const { goBack } = this.props.navigation;

                        Alert.alert('Thông báo', 'Đặt lại mật khẩu đã thành công! hãy kiểm tra email của bạn, Cảm ơn!');
                        goBack();
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Đặt lại mật khẩu</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}