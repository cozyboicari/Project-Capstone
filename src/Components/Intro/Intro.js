import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

//thu vien ben ngoai
import * as Animatable from 'react-native-animatable';
import Button from 'react-native-button';

// file css
import styles from './Styles';

//file config global
import { ComponentVersion } from '../../ConfigGlobal';

//file config firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';


export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user && 'Home Screen');
        })
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.container}>
                    {/* phan logo */}
                    <Animatable.View 
                        animation="fadeInLeft"
                        style={styles.containerTop}
                    >
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Your Tour</Text>
                            <Text style={styles.caption}>{`Experience & Enjoy Your Trip`}</Text>
                        </View>
                    </Animatable.View>

                    {/* phan noi dung */}
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.containerBottom}
                    >
                        <View style={styles.containerIntroduce}>
                            <Text style={styles.textIntroduce}>
                                Introduce Your Tour
                            </Text>
                            <Text style={styles.captionIntroduce}>
                                Your tour will help you find companions to have a meaningful trip with you.
                            </Text>
                        </View>

                        <View style={styles.containerFlexButton}>
                            <Button
                                containerStyle={styles.containerButton}
                                style={styles.button}
                                onPress={() => {
                                    const { navigate } = this.props.navigation;
                                    navigate('Sign In Screen');
                                }}
                            >
                                Get Stared!
                            </Button>
                        </View>
                        
                        {/* phan version */}
                        <ComponentVersion />
                    </Animatable.View>
                </View>
            </SafeAreaView>
        );
    }
}