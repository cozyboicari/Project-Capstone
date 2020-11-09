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

//file config
import { colors } from '../../ConfigGlobal';

export default class ChatUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    type: 'host',
                    text: 'abc'
                },
                {
                    type: 'guest',
                    text: '1'
                }
            ],
            text: ''
        }
    }

    _pushMessage = text => {
       this.setState({ 
           messages: [...this.state.messages, {text: text}],
           text: ''
       })
    }

    _renderItem = ({ item }) => {
        return(
            <View style={[styles.containerItemMessage, {
                backgroundColor: item.type === 'guest' ? 'pink' : colors.BACKGROUND_BLUEYONDER,
            }]}>
                <Text style={styles.textItemMessage}>{item.text}</Text>
            </View>
        );
    }

    render() {
        const { messages, text } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                    <KeyboardAvoidingView behavior='padding' style={styles.container}>
                        {/* phan chat */}
                        <FlatList
                            data={messages}
                            keyExtractor={(item, index) => index.toString()}
                            ref={ref => {this.flatlist = ref}}
                            renderItem={this._renderItem}
                            onContentSizeChange={() => this.flatlist.scrollToEnd({animated: false})}
                            contentContainerStyle={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: item.type === 'guest' ? 'flex-start' : 'flex-end',
                                margin: 30
                            }}
                        />
                        {/* phan ghi chat */}
                        <TouchableWithoutFeedback
                            style={styles.container}
                            onPress={Keyboard.dismiss}
                        >
                            <View style={styles.containerBottom}>
                                <View 
                                    style={{ 
                                        flexDirection: 'row', 
                                        paddingHorizontal: 15, 
                                        alignItems: 'center' 
                                    }}>
                                    <View style={{ flex: 4 }}>
                                        <TextInput 
                                            style={styles.textInput}
                                            multiline={true}
                                            placeholder='Type a massage...'
                                            autoCorrect={false}
                                            value={text}
                                            onChangeText={text => {
                                                this.setState({ text });
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: .7, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this._pushMessage(text)}
                                        >
                                            <Icons name='send' color={colors.BACKGROUND_BLUEYONDER} size={25}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </KeyboardAvoidingView>
            </View>
        );
    }
}