import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file config global
import { colors, getAvgRatings, getNumRatings, newAvgRatings } from '../../ConfigGlobal';
 
//library ben ngoai
import { Rating } from 'react-native-ratings';
import * as animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Ionicons';

//item tour guide
const ItemTours = ({ navigation, tour }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details Tour Screen', {
                    tour: tour
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
                            source={{ uri: tour.tourguideImageCover }}
                        />
                    </View>
                    <View style={styles.containerFavouriteIcon}>
                        <TouchableOpacity
                            onPress={() => {
                                
                            }}
                        >
                            <Icons 
                                name={'heart-outline'}
                                size={23}
                                color={colors.BACKGROUND_CULTURE}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* anh avatar */}
                    <View style={styles.containerImage}>
                        <Image 
                            style={styles.image}
                            source={{ uri: tour.tourguideImage }}
                        />
                    </View>
                    {/* thong tin gia tien cua tour */}
                    <View style={styles.containerNameTour}>
                        <View style={{ flex: .3 }}>
                            <Text style={styles.textIntro}>
                                {`Tận hưởng ${tour.cityID} với `}<Text style={styles.subTextIntro}>{tour.tourguideName}</Text>
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', paddingRight: 20 }}>
                            <Text numberOfLines={2} style={styles.textNameTour}>
                                {tour.name}
                            </Text>
                        </View>

                        <View style={{ flex: 1.5 }}>
                            <View style={styles.containerPrice}>
                                <Text style={styles.textPrice}>{`${tour.price}$`}</Text>
                                <Text style={styles.textPrice}>{`/ ${tour.time} giờ`}</Text>
                            </View>
                            <View style={styles.containerRating}>
                                <Rating 
                                    type="custom"
                                    ratingCount={5}
                                    readonly={true}
                                    imageSize={18}
                                    startingValue={tour.avgRating}
                                />
                                <Text style={styles.textRating}>{`(${tour.numRatings})`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </animatable.View>
        </TouchableOpacity>
    )
}

export default class TourGuides extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props._onGetTours('tours', this.props.route.params.idCity); 
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
                                        navigate('Create Tours Screen');
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
                        this.props.tours.length === 0 ? <ActivityIndicator size={300}/>
                        :
                        <FlatList 
                            data={this.props.tours}
                            keyExtractor={item => item.id}
                            style={{ marginBottom: 220 }}
                            renderItem={({ item, index}) => {
                                return(
                                    <ItemTours 
                                        navigation={this.props.navigation}
                                        tour={item}
                                    />
                                );
                            }}
                        />
                    }
                </View>
            </View>
        );
    }
}