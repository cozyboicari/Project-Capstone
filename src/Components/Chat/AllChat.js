import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

const ItemChatAll = ({ navigation }) => {
    return(
        <TouchableOpacity 
            onPress={() => {
                const { navigate } = navigation;
                navigate('Chat User Screen');
            }}
        >
            <View style={styles.containerItemChatAll}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={styles.image}/>
                    <View style={styles.containerInformationChat}>
                        <View style={styles.containerNameAndTime}>
                            <Text style={styles.name}>Phong Le</Text>
                            <Text style={styles.time}>9:12pm</Text>
                        </View>
                        <View style={styles.containerContent}>
                            <Text 
                                style={styles.content}
                                numberOfLines={2}
                            >asdasdasdasdasdasdasd</Text>
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
                    <ItemChatAll navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}