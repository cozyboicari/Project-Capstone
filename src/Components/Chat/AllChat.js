import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

import { firestore, auth } from '../../Database/Firebase/ConfigGlobalFirebase';

const ItemChatAll = ({ item, navigation }) => {
    const user = auth().currentUser.uid === item.user_1._id ? item.user_2 : item.user_1;
    const amToPm = new Date(item.latestMessage.createdAt).toLocaleTimeString().slice(8);
    const time = new Date(item.latestMessage.createdAt).toLocaleTimeString().slice(0, 5) + amToPm;
    
    return(
        <TouchableOpacity 
            onPress={() => {
                const { navigate } = navigation;
                navigate('Chat User Screen', {
                    thread: item,
                    imageUser: auth().currentUser.uid !== item.user_1._id ? item.user_2.image : item.user_1.image
                });
            }}
        >
            <View style={styles.containerItemChatAll}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Image style={styles.image} source={{ uri: user.image }}/>
                    <View style={styles.containerInformationChat}>
                        <View style={styles.containerNameAndTime}>
                            <Text style={styles.name}>{user.nameUser}</Text>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                        <View style={styles.containerContent}>
                            <Text 
                                style={styles.content}
                                numberOfLines={2}
                            >
                                {item.latestMessage.text.slice(0, 90)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default class AllChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            threads: []
        }
    }
    
    componentDidMount() {
        this._getThreads();
    }

    _getThreads = () => {
        firestore()
        .collection('threads')
        .orderBy('latestMessage.createdAt', 'desc')
        .onSnapshot(querySnapshot => {
            let arrTemp = [];
            querySnapshot.docs.forEach(documentSnapshot => {
                if(auth().currentUser.uid === documentSnapshot.data().user_1._id 
                    || auth().currentUser.uid === documentSnapshot.data().user_2._id
                ) {
                    const thread = {
                        _id: documentSnapshot.id,
                        name: '',
                        latestMessage: { text: '' },
                        ...documentSnapshot.data(),
                    }
                    arrTemp.push(thread);
                }
            });
            this.setState({ threads: arrTemp });
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={{ borderBottomWidth: 1, borderColor: '#ddd',}}>
                    <Text style={styles.textTitle}>All Chat Message</Text>
                </View>
                <View style={styles.containerChatAll}>
                    {auth().currentUser && <FlatList 
                        data={this.state.threads}
                        keyExtractor={(item) => item._id}
                        renderItem={ ({ item }) => <ItemChatAll item={item} navigation={this.props.navigation}/>}
                    />}
                </View>
            </View>
        );
    }
}