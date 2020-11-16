import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TextInput, TouchableOpacity, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList, ActivityIndicator } from 'react-native';

//file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file library
import Icons from 'react-native-vector-icons/Ionicons';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import { Dialogflow_V2 } from 'react-native-dialogflow';

//file config
import { colors, dialogflowConfig } from '../../ConfigGlobal';
import { firestore, auth } from '../../Database/Firebase/ConfigGlobalFirebase';
import { firebase } from '@react-native-firebase/auth';

const BOT_USER = {
    _id: 2,
    name: 'Yourtour Bot',
    avatar: 'https://us.123rf.com/450wm/goodzone95/goodzone951803/goodzone95180300026/96725720-stock-vector-chatbot-icon-.jpg?ver=6'
};

export default class ChatUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    _id: 1,
                    text: `Hi! I am the FAQ bot 🤖 from Yourtour.\n\nHow may I help you with today?`,
                    createdAt: new Date().getTime(),
                    user: BOT_USER
                }
            ],
        }
    }

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        )
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

    _handleGoogleRespone = result => {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this._sendBotResponse(text);
    }

    // send message vao gift
    _handleSend = (messages = []) => {
        this.setState({ messages: GiftedChat.append(this.state.messages, messages) });

        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => { return this._handleGoogleRespone(result) },
            error => console.log(error)
        )
    }

    _sendBotResponse = text => {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT_USER
        }

        this.setState({ messages: GiftedChat.append(this.state.messages, [msg])});
    }

    render() {
        const { messages } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                
                { messages.length === 0 ? <ActivityIndicator size={300} /> : 
                <GiftedChat 
                    messages={messages}
                    onSend={newMessage => this._handleSend(newMessage)}
                    user={{ _id: 1 }}
                    renderSend={this._renderIconSend}
                    alwaysShowSend
                />}
            </View>
        );
    }
}