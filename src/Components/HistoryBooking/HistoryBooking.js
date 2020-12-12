import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

export default class HistoryBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false} />

                <Text style={styles.title}>Thông tin đặt chuyến đi</Text>
            </View>
        );
    }
}