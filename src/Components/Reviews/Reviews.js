import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Dimensions, FlatList } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file global
import { colors } from '../../ConfigGlobal';

// library
import { Rating } from 'react-native-ratings';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import Icons from 'react-native-vector-icons/Ionicons';

export default class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            ratings: []
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

    _handleSend = messages => {

    }

    componentDidMount() {
        const { ratings } = this.props.route.params;
        this.setState({ ratings });
    }

    _renderItem = ({ item }) => {
        return(
            <View style={styles.containerReviewItem}>
                <View style={styles.containerTop}>
                    <View style={styles.itemLeft}>
                        <Image 
                            style={styles.containerImageUser}
                            source={{ uri: item.user.image }}
                        />
                    </View>
                    <View style={styles.itemRight}>
                        <Text style={styles.nameUser}>{item.user.name}</Text>
                        <Rating 
                            type="custom"
                            ratingCount={5}
                            readonly={true}
                            imageSize={15}
                            startingValue={item.rating}
                        />
                        <Text style={styles.date}>{`${new Date(item.time._seconds * 1000).toLocaleDateString()}`}</Text>
                    </View>
    
                </View>
                <View style={styles.containerBottom}>
                    <Text style={styles.textReview}>{item.text}</Text>
                </View>
                <View style={{flex: 1, paddingHorizontal: 20}}>
                    <View style={styles.containerBar}/>
                </View>
            </View>
        );
    }

    render() {
        const { messages, ratings } = this.state;

        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <HeaderComponent {...this.props}/>
                <Text style={styles.textTitle}>Đánh giá từ khách hàng</Text>
                {/* review cua khach */}
                <View style={styles.containerReviews}>
                    <FlatList 
                        data={ratings}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                </View>
                {/* <GiftedChat 
                    messages={messages}
    
                    user={{ _id: 1 }}
                    renderSend={this._renderIconSend}
                    alwaysShowSend
                /> */}
            </View>
        )
    }
}