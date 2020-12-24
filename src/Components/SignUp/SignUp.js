import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, 
    TouchableWithoutFeedback, KeyboardAvoidingView, 
    Keyboard, TouchableOpacity, Alert } from 'react-native';

//file config global
import { ComponentVersion, _isEmail, _isFullname, _isPassword, _isPhoneNumber } from '../../ConfigGlobal';

//file css
import styles from './Style';

//thu vien ngoai
import * as Animatable from 'react-native-animatable';
import { Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phoneNumber: '',
            email: '',
            password: '',
        }
    }

    render() {
        const { fullname, phoneNumber, email, password } = this.state;
        return(
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    {/* phan welcome */}
                    <Animatable.View 
                        animation="fadeInLeft"
                        style={styles.containerTop}
                    >
                        <View style={styles.containerWelcome}>
                            <Text style={styles.textWelcome}>Đăng kí tài khoản!</Text>
                        </View>
                    </Animatable.View>

                    {/* phan sign in */}
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.containerBottom}
                    >
                        <Form style={styles.containerSignIn}>
                            <Item floatingLabel>
                                <Label>Nhập họ và tên</Label>
                                <Input
                                    onChangeText={text => {
                                        this.setState({ fullname: text });
                                    }}
                                    value={fullname}
                                />
                                <Icon 
                                    name="person-outline" 
                                    style={styles.iconTextInput}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Nhập số điện thoại</Label>
                                <Input 
                                    onChangeText={text => this.setState({ phoneNumber: text })}
                                    keyboardType="numeric"
                                    value={phoneNumber}
                                />
                                <Icon
                                    type="FontAwesome5"
                                    name="mobile-alt"
                                    style={styles.iconTextInput}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Nhập email</Label>
                                <Input 
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onChangeText={text => this.setState({ email: text })}
                                    value={email}
                                />
                                <Icon 
                                    name="mail-outline" 
                                    style={styles.iconTextInput}
                                />
                            </Item>
                            <Item floatingLabel>  
                                <Label>Nhập mật khẩu</Label>
                                <Input 
                                    secureTextEntry
                                    onChangeText={text => this.setState({ password: text })}
                                    value={password}
                                />
                                <Icon
                                    name="key-outline" 
                                    style={styles.iconTextInput}
                                />
                            </Item>
                            
                            {/* phan forget password */}
                            <TouchableOpacity 
                                style={styles.containerForgotPassword}
                                onPress={() => {
                                    const { navigate } = this.props.navigation;
                                    navigate('Forgot Password Screen');
                                }}
                            >
                                <Text style={styles.textForgotPassword}>
                                    Quên mật khẩu?
                                </Text>
                            </TouchableOpacity> 

                            {/* phan sign in & sign up */}
                            <Button 
                                block 
                                style={styles.buttonSignUp}
                                onPress={() => {
                                    let isCheckSignUp = true;

                                    if(!_isFullname(fullname)) {
                                        isCheckSignUp = false;
                                        this.setState({ fullname: '' });
                                    }
                                    if(!_isPhoneNumber(phoneNumber)) {
                                        isCheckSignUp = false;
                                        this.setState({ phoneNumber: '' });
                                    }
                                    if(!_isEmail(email)) {
                                        isCheckSignUp = false;
                                        this.setState({ email: '' });
                                    }
                                    if(!_isPassword(password)) {
                                        isCheckSignUp = false;
                                        this.setState({ password: '' });
                                    }
                                    
                                    if(isCheckSignUp) {
                                        this.props._onCreateUser({
                                            email: email,
                                            password: password,
                                            fullname: fullname, 
                                            phoneNumber: phoneNumber,
                                        });
                                    }
                                }}
                            >
                                <Text style={styles.textSignUp}>Đăng kí và đăng nhập</Text>
                            </Button>
                            <Button 
                                block
                                bordered 
                                style={styles.buttonSignIn}
                                onPress={() => {
                                    const { goBack } = this.props.navigation;
                                    goBack();
                                }}
                            >
                                <Text style={styles.textSignIn}>Trở lại đăng nhập</Text>
                            </Button>
                        </Form>
                        {/* phan version */}
                        <ComponentVersion />
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}