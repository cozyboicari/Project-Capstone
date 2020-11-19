import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

// file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

export default class OrderTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayBooking: {},
            total: 0,
            tour: {}
        }
    }

    componentDidMount() {
        const { dayBooking, total, tour } = this.props.route.params;
        this.setState({
            dayBooking, total, tour
        });
    }

    render() {
        const { dayBooking, total, tour } = this.state;

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                {/* phan gioi thieu tour */}

                {/* tong gia tien */}

                {/* thanh toan online */}
            </View>
        );
    }
}