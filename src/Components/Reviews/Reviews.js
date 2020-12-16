import React, { Component } from 'react';
import { View, Text, StatusBar, Image, 
    Dimensions, FlatList, ActivityIndicator, KeyboardAvoidingView } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file global
import { colors, newAvgRatings } from '../../ConfigGlobal';

// library
import { Rating, AirbnbRating } from 'react-native-ratings';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import Icons from 'react-native-vector-icons/Ionicons';

// firebase
import { firestore, auth } from '../../Database/Firebase/ConfigGlobalFirebase';

export default class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            rating: 0
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

        const { idTour, oldAvgRatings } = this.props.route.params;
        const { rating } = this.state;
        const { uID, name, picture } = this.props.traveler;

        const review = {
            rating,
            text,
            time: new Date().getTime(),
            user: {
                _id: uID,
                image: picture,
                name
            }
        }

        await firestore().collection('tours').doc(idTour).collection('ratings')
            .add(review)
            .then(() => console.log('comment success!'));

        // cap nhat lai avg
        await firestore().collection('tours').doc(idTour)
            .set({ 
                avgRating: newAvgRatings(this.props.ratings.length, oldAvgRatings, rating)
            }, { merge: true });

        this.setState({ rating: 0 });
    }

    componentDidMount() {
        const { idTour } = this.props.route.params;
        this.props._onGetRatings(idTour);
        this.props._onGetTraveler();
    }

    componentDidUpdate() {
        const { idTour } = this.props.route.params;
        this.props._onGetRatings(idTour);
        this.props._onGetTraveler();
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
                        <Text style={styles.date}>{`${new Date(item.time).toLocaleDateString()}`}</Text>
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
        const { messages, rating } = this.state;

        return(
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    <HeaderComponent {...this.props}/>
                    <Text style={styles.textTitle}>Đánh giá từ khách hàng</Text>
                    {/* review cua khach */}
                    <View style={styles.containerReviews}>
                        { this.props.ratings.length !== 0 ?
                            <FlatList 
                                data={this.props.ratings}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._renderItem}
                            /> : <ActivityIndicator size={300}/>
                        }
                    </View>
                    <View style={styles.bottomRatings}>
                        <Text style={styles.titleRate}>Bạn đánh giá bao nhiêu sao cho chuyến đi này?</Text>
                        <AirbnbRating 
                            type="custom"
                            reviews={[""]}
                            ratingCount={5}
                            imageSize={35}
                            defaultRating={rating}      
                            onFinishRating={rating => this.setState({ rating })}               
                        />
                    </View> 
                    <GiftedChat 
                        messages={messages}
                        user={{ _id: 1 }}
                        renderSend={this._renderIconSend}
                        alwaysShowSend
                        onSend={this._handleSend}
                        textInputProps={{
                            autoCorrect: false
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}