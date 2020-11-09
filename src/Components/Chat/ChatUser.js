import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TextInput, TouchableOpacity, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

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
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                    <KeyboardAvoidingView behavior='padding' style={styles.container}>
                        {/* phan chat */}
                        <ScrollView
                            style={{ justifyContent: 'flex-end'}}
                            ref={ref => {this.scrollView = ref}}
                            onContentSizeChange={() => this.scrollView.scrollToEnd({animated: false})}
                        >
                            <View style={{ flex: 1, backgroundColor: 'red'}}>
                                <Text>a</Text>
                            </View>
                        </ScrollView>
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
                                        />
                                    </View>
                                    <View style={{ flex: .7, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => {}}
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