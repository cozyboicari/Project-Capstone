import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TextInput, TouchableOpacity, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList, ActivityIndicator, Image 
} from 'react-native';

//file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file library
import Icons from 'react-native-vector-icons/Ionicons';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { Rating } from 'react-native-ratings';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

//file config
import { colors, dialogflowConfig, convertIdCity, uppercaseFirst } from '../../ConfigGlobal';


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
                    text: `Hi! Tôi là yourtour-bot 🤖 đến từ Yourtour.\n\nTôi có thể giúp gì được cho bạn?`,
                    createdAt: new Date().getTime(),
                    user: BOT_USER,
                    cards: null
                },
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

    _handleGoogleRespone = result => {
        const arr = [...result.queryResult.fulfillmentMessages];

        const cards = arr.splice(1, arr.length - 1);
        const text = arr[0].text.text[0];

        if(cards[0] && cards[0].payload && cards[0].payload.tours.length !== 0) {
            this._sendBotResponse('', cards[0].payload.tours);
        } 
        else if(cards[0] && cards[0].quickReplies && cards[0].quickReplies.quickReplies.length !== 0) {
            this._sendBotResponse('', cards[0].quickReplies.quickReplies);
        } 

        this._sendBotResponse(text, 0);
    }

    _sendBotResponse = (text, cards) => {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date().getTime(),
            user: BOT_USER,
            cards: cards.length === 0 ? null : cards
        }

        this.setState({ messages: GiftedChat.append(this.state.messages, [msg])});
    }

    _renderItemCard = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('Details Tour Screen', {
                        tour: item
                    })
                }}
            >
                <View style={styles.containerPostTour}>
                    <View style={styles.containerInfomationTour}>
                        {/* anh bia */}
                        <View style={styles.containerImageCover}>
                            <Image 
                                style={styles.imageCover}
                                source={{ uri: item.tourguideImageCover }}
                            />
                        </View>
                        {/* anh avatar */}
                        <View style={styles.containerImage}>
                            <Image 
                                style={styles.image}
                                source={{ uri: item.tourguideImage }}
                            />
                        </View>
                        {/* thong tin gia tien cua tour */}
                        <View style={styles.containerNameTour}>
                            <View style={{ flex: .3 }}>
                                <Text style={styles.textIntro}>
                                    {`Tận hưởng ${convertIdCity(uppercaseFirst(item.cityID))} với `}<Text style={styles.subTextIntro}>{item.tourguideName}</Text>
                                </Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', paddingRight: 20 }}>
                                <Text numberOfLines={2} style={styles.textNameTour}>
                                    {item.name}
                                </Text>
                            </View>

                            <View style={{ flex: 1.5 }}>
                                <View style={styles.containerPrice}>
                                    <Text style={styles.textPrice}>{`${item.price}$`}</Text>
                                    <Text style={styles.textPrice}>{`/ ${item.time} giờ`}</Text>
                                </View>
                                <View style={styles.containerRating}>
                                    <Rating 
                                        type="custom"
                                        ratingCount={5}
                                        readonly={true}
                                        imageSize={18}
                                        startingValue={item.avgRating}
                                    />
                                    <Text style={styles.textRating}>{`(${parseFloat(item.avgRating).toFixed(1)})`}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _renderItemSuggestion = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    const message = item;
                    const messages = [{
                        createdAt: new Date().getTime(),
                        text: message,
                        user: {
                            _id: 1
                        },
                        _id: Math.random().toString(36).substr(2, 5)
                    }]

                    this.setState({ messages: GiftedChat.append(this.state.messages, messages) });
                    Dialogflow_V2.requestQuery(
                        message,
                        result => { return this._handleGoogleRespone(result) },
                        error => console.log(error)
                    )
                }}
            >
                <View style={styles.containerItemSuggestion}>
                    <Text style={styles.textItemSuggestion}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    _renderItem = props => {
        const { currentMessage } = props;

        if(currentMessage.cards) {
            const { cards } = currentMessage;     
            return <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={cards[0] === 'Đà Nẵng' ? false : true}
                data={cards}
                keyExtractor={(item, index) => index.toString()}
                renderItem={cards[0] === 'Đà Nẵng' ? this._renderItemSuggestion : this._renderItemCard}
                numColumns={cards[0] === 'Đà Nẵng' ? 3 : 0}
            />
        }
        return <Bubble {...props} />
    }

    render() {
        const { messages } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                
                { messages.length === 0 ? <ActivityIndicator size={300} /> : 
                    <GiftedChat
                        renderBubble={this._renderItem}
                        messages={messages}
                        onSend={newMessage => this._handleSend(newMessage)}
                        user={{ _id: 1 }}
                        renderSend={this._renderIconSend}
                        alwaysShowSend
                    />
                }
            </View>
        );
    }
}
