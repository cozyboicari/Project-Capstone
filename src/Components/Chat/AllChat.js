import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

import { firestore } from '../../Database/Firebase/ConfigGlobalFirebase';

const ItemChatAll = ({ item, navigation }) => {
    return(
        <TouchableOpacity 
            onPress={() => {
                const { navigate } = navigation;
                navigate('Chat User Screen', {
                    thread: item
                });
            }}
        >
            <View style={styles.containerItemChatAll}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={styles.image}/>
                    <View style={styles.containerInformationChat}>
                        <View style={styles.containerNameAndTime}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.time}>9:12pm</Text>
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
        firestore()
        .collection('threads')
        .orderBy('latestMessage.createdAt', 'desc')
        .onSnapshot(querySnapshot => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
                return {
                    _id: documentSnapshot.id,
                    name: '',
                    latestMessage: { text: '' },
                    ...documentSnapshot.data(),
                    
                }
            });
            this.setState({ threads });
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
                    <FlatList 
                        data={this.state.threads}
                        keyExtractor={(item) => item._id}
                        renderItem={ ({ item }) => <ItemChatAll item={item} navigation={this.props.navigation}/>}
                    />
                </View>
            </View>
        );
    }
}