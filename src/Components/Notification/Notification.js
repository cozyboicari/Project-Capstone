import React, { Component } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';

//css
import styles from './Styles';

//component
import HeaderComponent from '../Header/Header';

export default class Notification extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props._onGetNotification();
    }

    _renderItem = ({ item }) => {
        return(
            <View style={styles.containerNotificationItem}>
                <Image
                    source={{ uri: item.avtImg }}
                    style={styles.image}
                />
                <View style={styles.containerText}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Text 
                            style={styles.text}
                            numberOfLines={3}
                        >
                            {item.message}
                        </Text>
                    </View> 
                    <Text style={styles.date}>{`${new Date(item.date).toLocaleString()}`}</Text>
                </View>
            </View>
        );
    }

    render() {
        const { notifications } = this.props;

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Thông báo</Text>
                </View>
                <View style={styles.containerNotifications}>
                    <FlatList 
                        data={notifications}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />  
                </View>
            </View>
        )
    }
}