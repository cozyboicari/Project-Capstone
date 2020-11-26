import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

//css
import styles from './Styles';

//library
import Icons from 'react-native-vector-icons/Ionicons';

//component
import HeaderComponent from '../Header/Header';


export default class Notification extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({ item }) => {
        return(
            <View style={styles.containerNotificationItem}>
                <View style={styles.image}/>
                <View style={styles.containerText}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Text 
                            style={styles.text}
                            numberOfLines={3}
                        >
                            item.text
                        </Text>
                    </View> 
                    <Text style={styles.date}>{`${new Date(item.time).toLocaleString()}`}</Text>
                </View>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Thông báo</Text>
                </View>
                <View style={styles.containerNotifications}>
                    
                </View>
            </View>
        )
    }
}