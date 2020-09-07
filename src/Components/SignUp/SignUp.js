import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, 
    TouchableWithoutFeedback, KeyboardAvoidingView, 
    Keyboard, TouchableOpacity } from 'react-native';

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
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
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
                                    <Input />
                                    <Icon 
                                        name="person-outline" 
                                        style={styles.iconTextInput}
                                    />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Enter your phone number</Label>
                                    <Input />
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
                                    onPress={() => {}}
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
            </SafeAreaView>
        );
    }
}