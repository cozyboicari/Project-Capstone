import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file config global
import { colors, convertIdCity } from '../../ConfigGlobal';
 
//library ben ngoai
import { Rating } from 'react-native-ratings';
import * as animatable from 'react-native-animatable';

export default class TourGuides extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
            this.props._onGetTours('tours', this.props.route.params.idCity);
            this.props._onGetTraveler();
        }, 1000);
    }
    
    //item tour guide
    _renderItem = ({ item }) => {
       
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Details Tour Screen', {
                        tour: item
                    });
                }}
            >
                <animatable.View
                    animation="fadeIn"
                    style={styles.containerPostTour}
                >
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
                                    {`Tận hưởng ${convertIdCity(item.cityID)} với `}<Text style={styles.subTextIntro}>{item.tourguideName}</Text>
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
                </animatable.View>
            </TouchableOpacity>
        )
    }

    render() {

        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props}/>
                <StatusBar barStyle="light-content"/>

                {/* view tour guides */}
                <View style={styles.containerTourGuides}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>
                            Tất cả các điểm du lịch
                        </Text>
                        <View style={styles.containerCreateTour}>
                            <Text style={styles.textCreateTour}>Bạn là hướng dẫn viên du lịch?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        const { navigate } = this.props.navigation;
                                        if(this.props.traveler.isActive) {
                                            navigate('Create Tours Screen');
                                        } else {
                                            navigate('Register Tour Guide Screen');
                                        }
                                    }}
                                >
                                    <Text style={[styles.textCreateTour, {
                                        fontWeight: 'bold',
                                        color: colors.BACKGROUND_BLUEYONDER
                                    }]}>Bấm vào đây</Text>
                                </TouchableOpacity>
                                <Text style={styles.textCreateTour}> để tạo chuyến du lịch của bạn</Text>
                            </View>
                            
                        </View>
                    </View>

                    {
                        (this.props.tours.length === 0 || this.state.loading) ? <ActivityIndicator size={300}/>
                        :
                        <FlatList 
                            data={this.props.tours}
                            keyExtractor={item => item.id}
                            style={{ marginBottom: 247 }}
                            renderItem={this._renderItem}
                        />
                    }
                </View>
            </View>
        );
    }
}