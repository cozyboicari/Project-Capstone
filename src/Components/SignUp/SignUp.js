import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, 
    TouchableWithoutFeedback, KeyboardAvoidingView, 
    Keyboard, TouchableOpacity, Alert } from 'react-native';

//file config global
import { ComponentVersion } from '../../ConfigGlobal';

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

     //kiem tra email co hop le khong
     _isEmail = email => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!filter.test(email)) {
            Alert.alert('Notification', 'Your email is not valid, please re-enter!');
            this.setState({ email: ''});
            return false;
        }
        return true;
    }

    //kiem tra username 
    _isPhoneNumber = phoneNumber => {
        let filter = /^0(1\d{9}|9\d{8})$/;
        if(!filter.test(phoneNumber)) {
            Alert.alert('Notification', 'Your phone number is not valid, please re-enter!');
            this.setState({ phoneNumber: ''});
            return false;
        }
        return true;
    }

    //kiem tra password
    _isPassword = password => {
        let filter = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!filter.test(password)) {
            Alert.alert('Notification', 'Your password is not valid, please re-enter!');
            this.setState({ password: ''});
            return false;
        }
        return true;
    }

    //kiem tra fullname
    _isFullname = fullname => {
        let filter = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
        if(!filter.test(fullname)) {
            Alert.alert('Notification', 'Your fullname is not valid, please re-enter!');
            this.setState({ fullname: ''});
            return false;
        }
        return true;
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
                            <Text style={styles.textWelcome}>Register!</Text>
                        </View>
                    </Animatable.View>

                    {/* phan sign in */}
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.containerBottom}
                    >
                        <Form style={styles.containerSignIn}>
                            <Item floatingLabel>
                                <Label>Enter your full name</Label>
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
                                <Label>Enter your phone number</Label>
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
                                <Label>Enter your email</Label>
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
                                <Label>Enter your password</Label>
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
                                onPress={() => {}}
                            >
                                <Text style={styles.textForgotPassword}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity> 

                            {/* phan sign in & sign up */}
                            <Button 
                                block 
                                style={styles.buttonSignUp}
                                onPress={() => {
                                    this.props._onCreateUser({
                                        email: email,
                                        password: password
                                    });
                                }}
                            >
                                <Text style={styles.textSignUp}>Register and Login</Text>
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
                                <Text style={styles.textSignIn}>Back to Sign In</Text>
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