import React, { Component } from 'react';
import { View, Text, StatusBar, Image, FlatList, ActivityIndicator, Alert } from 'react-native';

//css
import styles from './Styles';

//component
import HeaderComponent from '../Header/Header';

// firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

// const TabBarItem = ({ nameIcon, size, color, countBadge }) => {
//     return (
//         <View style={{ 
//             flex: 1,
//             flexDirection: 'row',
//             alignItems: 'center'
//         }}>
//             <Icons name={nameIcon} size={size} color={color}/>
//             <Animatable.View
//                 animation='bounceIn'
//                 style={{ 
//                     position: 'absolute', 
//                     paddingLeft: 14, 
//                     paddingBottom: 10 
//                 }}
//             >
//                 <Badge
//                     size={22}
//                     style={{
//                         fontSize: 14.5,
//                         fontWeight: '500',
//                         backgroundColor: '#f44',
//                     }}
//                 >
//                     {countBadge}
//                 </Badge>
//             </Animatable.View>
//         </View>
//     );
// }

export default class Notification extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        auth().onAuthStateChanged(() => {
            if(auth().currentUser) {
                this.props._onGetNotification();
            }
        })
    }

    componentDidUpdate() {
        auth().onAuthStateChanged(() => {
            if(auth().currentUser) {
                this.props._onGetNotification();
            }
        })
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
        const { notifications, loading } = this.props;

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Thông báo</Text>
                </View>
                <View style={styles.containerNotifications}>
                    { notifications.length === 0 ? <ActivityIndicator size={300}/> :
                        <FlatList 
                            data={notifications}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this._renderItem}
                        />
                    }  
                </View>
            </View>
        )
    }
}