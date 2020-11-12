import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TextInput, TouchableOpacity, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

//file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file library
import Icons from 'react-native-vector-icons/Ionicons';
import { GiftedChat, Send } from 'react-native-gifted-chat'

//file config
import { colors } from '../../ConfigGlobal';
import { firestore, auth } from '../../Database/Firebase/ConfigGlobalFirebase';

export default class ChatUser extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            
        }
    }

    _renderIconSend = props => {
        return(
            <Send {...props}>
                <View style={{ marginRight: 22 }}>
                    <Icons name='send' color={colors.BACKGROUND_BLUEYONDER} size={25}/>
                </View>
            </Send>
        )
    }

    _handleSend = async (messages) => {
        const text = messages[0].text;
        const { thread } = this.props.route.params;

        firestore()
        .collection('threads')
        .doc(thread._id)
        .collection('messages')
        .add({
            text,
            createdAt: new Date().getTime(),
            user: {
                _id: auth().currentUser.uid,
                displayName: auth().currentUser.displayName
            }
        })

        await firestore()
        .collection('threads')
        .doc(thread._id)
        .set(
            {
                latestMessage: {
                    text,
                    createdAt: new Date().getTime()
                }
            },
            { merge: true }
        )
    }

    componentDidMount() {
        this._getMessages();
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    _getMessages = () => {
        this._isMounted = true;
        const { thread } = this.props.route.params;

        firestore()
        .collection('threads')
        .doc(thread._id)
        .collection('messages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
            const messages = querySnapshot.docs.map(doc => {
                const firebaseData = doc.data();

                const data = {
                    _id: doc.id,
                    text: '',
                    createdAt: new Date().getTime(),
                    ...firebaseData
                }

                if(!firebaseData.system) {
                    data.user = {
                        ...firebaseData.user,
                        name: firebaseData.user.displayName
                    }
                }
                return data;
            })
            if(this._isMounted) {
                this.setState({ messages });
            }
        })
    }

    render() {
        const { messages } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                
                <GiftedChat 
                    messages={messages}
                    onSend={this._handleSend}
                    user={{ _id: auth().currentUser.uid }}
                    renderSend={this._renderIconSend}
                    alwaysShowSend
                />
            </View>
        );
    }
}