import React, { Component } from 'react';
import { View, SafeAreaView, 
    StatusBar, KeyboardAvoidingView, 
    TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';

//file config global
import { ComponentVersion } from '../../ConfigGlobal';
// file css
import styles from './Style';
// thu vien ngoai
import * as Animatable from 'react-native-animatable';
import { Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TouchableWithoutFeedback
                    style={styles.container}
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.container}>
                        {/* phan welcome */}
                        <Animatable.View 
                            animation="fadeInLeft"
                            style={styles.containerTop}
                        >
                            <View style={styles.containerWelcome}>
                                <Text style={styles.textWelcome}>Welcome!</Text>
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
                                    />
                                    <Icon
                                        name="mail-outline"
                                        style={styles.iconTextInput}
                                    />
                                </Item>
                                <Item floatingLabel>  
                                    <Label>Password</Label>
                                    <Input 
                                        secureTextEntry 
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
                                    style={styles.buttonSignIn}
                                    onPress={() => {}}
                                >
                                    <Text style={styles.textSignIn}>Sign In</Text>
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
                                    <Text style={styles.textSignUp}>Sign Up</Text>
                                </Button>

                                {/* phan sign in social */}
                                <Text style={styles.textSocial}>
                                    Sign in with social accounts
                                </Text>

                                {/* button facebook */}
                                <Button
                                    block
                                    style={[styles.buttonSignInSocial, {
                                        backgroundColor: '#4267B2'
                                    }]}
                                    onPress={() => {}}
                                >
                                    <Icon type="FontAwesome5" name="facebook-square"/>
                                    <Text style={styles.textSignInSocial}>
                                        Sign In with Facebook 
                                    </Text>
                                </Button>

                                {/* button gmail */}
                                <Button
                                    block
                                    style={[styles.buttonSignInSocial, {
                                        backgroundColor: '#D44638'
                                    }]}
                                    onPress={() => {}}
                                >
                                    <Icon type="FontAwesome5" name="google"/>
                                    <Text style={styles.textSignInSocial}>
                                        Sign In with Gmail 
                                    </Text>
                                </Button>
                            </Form>
                            {/* phan version */}
                            <ComponentVersion />
                        </Animatable.View>
                        </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}