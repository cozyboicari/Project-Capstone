import React, { Component, useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList, ActivityIndicator, Alert } from 'react-native';

//css
import styles from './Styles';

//component
import HeaderComponent from '../Header/Header';

// firebase
import { auth, firestore } from '../../Database/Firebase/ConfigGlobalFirebase';


let countNotification = 0;
export default class Notification extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            loading: false,
        }
    }
    
    componentDidMount() {
        this._isMounted = true;

        // get chat group all
        auth().onAuthStateChanged(() => {
            if(auth().currentUser) {
                // get traveler
                firestore().collection('travelers').where('uID', '==', auth().currentUser.uid).get()
                    .then(query => {
                        query.docs[0].ref.collection('notification')
                        .onSnapshot(querySnapshot => {
                            let notifications = [];
                            querySnapshot.docs.forEach(doc => {
                                notifications.push({
                                    ...doc.data()
                                })
                            })
        
                            if(this._isMounted) {
                                countNotification = notifications.length;
                                this.setState({ notifications, loading: false });
                            }
                        })
                    })
            } else {
                countNotification = 0;
                this.setState({ loading: true });
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
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
        const { loading, notifications } = this.state;

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Thông báo</Text>
                </View>
                <View style={styles.containerNotifications}>
                    {  !loading ? 
                        (auth().currentUser && 
                        <FlatList 
                            data={notifications}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this._renderItem}
                        />):  
                        <ActivityIndicator size={300}/>
                    }  
                </View>
            </View>
        )
    }
}

export { countNotification };