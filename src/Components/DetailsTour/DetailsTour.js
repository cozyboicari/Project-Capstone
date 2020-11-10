import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

//file css
import styles from './Styles';

//file global
import { colors } from '../../ConfigGlobal';

//file component
import HeaderComponent from '../Header/Header';

//library
import { Rating } from 'react-native-ratings';
import Icons from 'react-native-vector-icons/Ionicons';

//lib firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

//trip item information
const TourItemInformation = ({ nameIcon, text }) => {
    return(
        <View style={styles.containerTourItemInformation}>
            <Icons name={nameIcon} size={25} color={colors.TEXT_DARK_JUNGLE_GREEN}/>
            <Text style={styles.textInformation}>{text}</Text>
        </View>
    );
}

const _renderItem = ({ item, index }) => {
    return(
        <View style={styles.containerItemPlan}>
            <View style={[styles.containerItemPlanTop, {
                marginBottom: index === 0 ? 8 : 0,
            }]}>
                { index === 0 ?
                    <Icons name='location' size={25} color={colors.BACKGROUND_BLUEYONDER}/> :
                    <Icons name='ellipse' size={12} color={colors.BACKGROUND_BLUEYONDER} style={{ marginLeft: 7 }}/>
                }
                <View style={{ flex: 1, marginLeft: index === 0 ? 15 : 20 }}>
                    <Text style={styles.textTitleItemPlan}>{item.name}</Text>
                </View>
            </View>
            <View style={styles.containerItemPlanBottom}>
                <View style={styles.barItemPlan}>
                    <Text style={{ fontWeight: '300' }}>{item.detail}</Text>
                </View>
            </View>
        </View>
    );
}

export default class ProfileTourGuides extends Component {
    constructor(props) {
        super(props);
    }


    

    render() {
        // props cho tour
        const { name, tourguideName, avgRating, introduce, 
            time, numberPeople, category, languages, 
            description, price, tourguideImage, 
            tourguideImageCover, schedule, tourguideID } = this.props.route.params.tour;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                {/* header component */}
                <HeaderComponent {...this.props}/>


                {/* thong tin ve tour va tour guide*/}
                <FlatList
                    data={schedule}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ index, item}) => {
                        return(
                            <_renderItem index={index} item={item}/>
                        );
                    }}
                    ListFooterComponent={
                        <View style={styles.containerGoodToKnow}>
                            <Text style={styles.textGoodToKnow}>Good to know</Text>
                            <View style={`${styles.containerMeetingPoint}`}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icons 
                                        name='videocam-outline'
                                        size={25}
                                    />
                                    <Text style={styles.textTitleMeetingPoint}>Meeting point</Text>
                                </View>
                                <Text style={styles.textMeetingPoint}>
                                    We will meet online in a video call. You will receive a custom link after your booking is confirmed.
                                </Text>
                                <Text style={[styles.textTitleMeetingPoint, { marginTop: 15, marginLeft: 0}]}>
                                    Cancellations
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icons 
                                        name='checkmark-outline'
                                        size={25}
                                        color={colors.COLOR_HEART}
                                    />
                                    <Text style={[styles.textMeetingPoint, { marginLeft: 5 }]}>
                                        Free cancellation up to 24H in advance
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icons 
                                        name='checkmark-outline'
                                        size={25}
                                        color={colors.COLOR_HEART}
                                    />
                                    <Text style={[styles.textMeetingPoint, { marginLeft: 5 }]}>
                                        Reschedule at any time without any additional costs
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                    ListHeaderComponent={
                        <View>
                            {/* phan top anh bia, avatar */}
                            <View style={{ flex: 1 }}>
                                <Image 
                                    style={styles.imageCoverTourGuide}
                                    source={{uri: tourguideImageCover }}
                                />
                                <View style={styles.containerAvatarTourGuide}>
                                    <Image 
                                        style={styles.avatarTourGuide}
                                        source={{ uri: tourguideImage }}
                                    />
                                    </View>
                            </View>
                            {/* phan mid thong tin */}
                            <View style={styles.containerTitleAndRating}>
                                {/* title topic va name tour guide */}
                                <View style={styles.containerTextTitle}>
                                    <Text style={styles.textTitle}>
                                        {name}
                                    </Text>
                                </View>
                                <View style={styles.containerTextTitleNameTourGuide}>
                                    <TouchableOpacity 
                                        onPress={() => {
                                            const { navigate } = this.props.navigation;
                                            navigate('Profile Detail Screen', {
                                                idTourGuide: tourguideID
                                            });
                                        }}
                                    >
                                        <Text style={styles.textTitleNameTourGuide}>{`With ${tourguideName}`}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerRating}>
                                    <Rating 
                                        type="custom"
                                        ratingCount={5}
                                        readonly={true}
                                        imageSize={18}
                                        startingValue={avgRating}
                                    />
                                    <Text style={styles.textRating}>{`(${avgRating})`}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const { navigate } = this.props.navigation;
                                            navigate('Reviews Tour Screen');
                                        }}
                                    >
                                        <Text style={styles.textReviews}>See all reviews</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* gioi thieu ve tourguide */}
                                <View style={styles.containerIntroTourGuide}>
                                    <Text style={styles.textIntroTourGuide}>{introduce}</Text>
                                </View>
                                {/* thong tin ve chuyen di */}
                                <View style={styles.containerInformationTour}>
                                    <TourItemInformation nameIcon='time-outline' text={`${time} hours`}/>
                                    <TourItemInformation nameIcon='people-outline' text={`Private group up to ${numberPeople} people`}/>
                                    <TourItemInformation nameIcon='map-outline' text={category}/>
                                    <TourItemInformation nameIcon='globe-outline' text={languages}/>
                                </View>
                                <View style={styles.containerSchedule}>
                                    <Text style={styles.titleSchedule}>
                                        What we are going to do
                                    </Text>
                                    <Text style={styles.textSchedule}>
                                        {description}
                                    </Text>
                                </View>
                                <View style={styles.containerPlan}>
                                    <Text style={styles.titlePlan}>This is the plan</Text>
                                    <Text style={styles.textPlan}>
                                        Check out plan below to see what you'll get up to with your local host.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                />
                
                {/* phan bottom gia tien */}
                <View style={styles.containerBookingAndPrice}>
                    <View style={styles.containerPrice}>
                        <Text style={styles.textPrice}>{`${price}$`}</Text>
                        <Text style={styles.textInvite}>{`Invite ${numberPeople - 1} friends for free`}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            const isUser = auth().currentUser;
                            const { navigate } = this.props.navigation;
                            if(!isUser) {
                                navigate('Sign In Screen');
                            } else {
                                navigate('Booking Screen');
                            }
                        }}
                        style={styles.containerButtonBooking}
                    >
                        <Text style={styles.textButtonBooking}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}