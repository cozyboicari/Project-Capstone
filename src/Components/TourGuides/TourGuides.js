import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

export default class TourGuides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props}/>
                <StatusBar barStyle="light-content"/>

                {/* view tour guides */}
                <View style={styles.containerTourGuides}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>Tour guides in from cities</Text>
                    </View>
                </View>
            </View>
        );
    }
}