import React, { Component } from 'react';
import { View, SafeAreaView, 
    StatusBar, Alert, 
    TouchableWithoutFeedback, TouchableOpacity, Keyboard, Modal } from 'react-native';

//file config global
import { ComponentVersion } from '../../ConfigGlobal';
// file css
import styles from './Styles';
// thu vien ngoai
import * as Animatable from 'react-native-animatable';
import { Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

//file config firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        auth().onAuthStateChanged(user => {
            if(user) {
                this.props.navigation.navigate('Tabs');
            }
        })
    }

    render() {
        const { email, password } = this.state;
        return(
            <TouchableWithoutFeedback
                style={styles.container}
                onPress={Keyboard.dismiss}
            >
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    {/* phan welcome */}
                    <Animatable.View 
                        animation="fadeInLeft"
                        style={styles.containerTop}
                    >
                        <View style={styles.containerWelcome}>
                            <Text style={styles.textWelcome}>Chào mừng!</Text>
                        </View>
                    </Animatable.View>

                    {/* phan sign in */}
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.containerBottom}
                    >
                        <Form style={styles.containerSignIn}>
                            <Item floatingLabel>
                                <Label>Email</Label>
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
                                <Label>Mật khẩu</Label>
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
                                style={styles.buttonSignIn}
                                onPress={() => {
                                    this.props._onLogin({ 
                                        email: email, 
                                        password: password
                                    });
                                }}
                            >
                                <Text style={styles.textSignIn}>Đăng nhập</Text>
                            </Button>

                            <Button 
                                block
                                bordered 
                                style={styles.buttonSignUp}
                                onPress={() => {
                                    const { navigate } = this.props.navigation;
                                    navigate('Sign Up Screen')
                                }}
                            >
                                <Text style={styles.textSignUp}>Đăng kí</Text>
                            </Button>

                            {/* phan sign in social */}
                            <Text style={styles.textSocial}>
                                Đăng nhập với tài khoản xã hội
                            </Text>

                            {/* button facebook */}
                            <Button
                                block
                                style={[styles.buttonSignInSocial, {
                                    backgroundColor: '#4267B2'
                                }]}
                                onPress={() => this.props._onLoginFacebook()}
                            >
                                <Icon type="FontAwesome5" name="facebook-square"/>
                                <Text style={styles.textSignInSocial}>
                                    Đăng nhập bằng Facebook
                                </Text>
                            </Button>

                            {/* button gmail */}
                            <Button
                                block
                                style={[styles.buttonSignInSocial, {
                                    backgroundColor: '#D44638'
                                }]}
                                onPress={() => this.props._onLoginGmail()}
                            >
                                <Icon type="FontAwesome5" name="google"/>
                                <Text style={styles.textSignInSocial}>
                                    Đăng nhập bằng Gmail
                                </Text>
                            </Button>
                        </Form>
                        {/* phan version */}
                        <ComponentVersion />
                    </Animatable.View>
                    </View>
            </TouchableWithoutFeedback>
        )
    }
}