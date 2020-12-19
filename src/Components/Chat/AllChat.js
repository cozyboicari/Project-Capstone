import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, TouchableOpacity, 
    Image, ActivityIndicator, RefreshControl } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

//file db
import { auth, firestore } from '../../Database/Firebase/ConfigGlobalFirebase';

//file library
import Icons from 'react-native-vector-icons/Ionicons';

//file global
import { colors } from '../../ConfigGlobal';

let countChat = 0;

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
                    <Image style={styles.image1} source={{ uri: user.image }}/>
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
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            threads: [],
            loading: false,
        }
    }
    
    componentDidMount() {
        this._isMounted = true;

        // get chat group all
        auth().onAuthStateChanged(() => {
            if(auth().currentUser) {  
                firestore()
                    .collection('threads')
                    .orderBy('latestMessage.createdAt', 'desc')
                    .onSnapshot(querySnapshot => {
                        let threads = [];
                        querySnapshot.docs.forEach(documentSnapshot => {
                            if(documentSnapshot.data().user_1._id === auth().currentUser.uid
                            || documentSnapshot.data().user_2._id === auth().currentUser.uid
                            ) {
                                threads.push({
                                    id: documentSnapshot.id,
                                    name: '',
                                    latestMessage: { text: '' },
                                    ...documentSnapshot.data(),
                                });
                            }
                        });
                        if(this._isMounted) {
                            countChat = threads.length;
                            this.setState({ threads, loading: false });
                        }
                    });
            } else {
                countChat = 0;
                this.setState({ loading: true })
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { threads, loading } = this.state;
        
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={true}/>
                
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Tất cả cuộc trò chuyện</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Chatbot Screen');
                        }}
                        style={styles.containerChatbot}
                    >
                        <Text style={styles.textChatbot}>Chatbot</Text>
                        <Icons name='rocket-outline' size={20} color={colors.BACKGROUND_BLUEYONDER}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerChatAll}>
                    {!loading ? 
                    (auth().currentUser && <FlatList 
                        data={threads}
                        keyExtractor={(item) => item.id}
                        renderItem={ ({ item }) => <ItemChatAll item={item} navigation={this.props.navigation}/>
                        }
                    />):
                    <ActivityIndicator size={300}/>}
                </View>
            </View>
        );
    }
}

export { countChat };