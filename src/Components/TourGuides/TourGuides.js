import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, FlatList, ActivityIndicator  } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file config global
import { colors, resultRate, resultReviews } from '../../ConfigGlobal';
 
//library ben ngoai
import { Rating } from 'react-native-ratings';
import * as animatable from 'react-native-animatable';

//item tour guide
const ItemTourGuide = ({ name, image, pointRate, reviews}) => {
    return (
        <TouchableOpacity
            onPress={() => {}}
        >
            <animatable.View
                animation="fadeIn"
                style={styles.containerListTourGuides}
            >
                <View style={styles.containerInfomationTourGuide}>
                    {/* image tour guide */}
                    <View style={styles.containerImageTourGuide}>
                        <Image 
                            source={{ uri: image}}
                            style={styles.imageTourGuide} 
                        />
                    </View>
                    {/* rating and name tour guide */}
                    <View style={styles.containerNameAndRateTourGuide}>
                        <Text style={styles.textNameTourGuide}>{name}</Text>
                        <View style={styles.containerRating}>
                            <Rating 
                                type="star"
                                ratingCount={5}
                                readonly={true}
                                ratingColor={colors.BACKGROUND_CULTURE}
                                imageSize={18}
                                style={styles.rating}
                                startingValue={parseFloat(pointRate)}
                            />
                            <Text style={styles.textPointRate}>{pointRate}</Text>
                            <Text style={styles.textPointRate}>{`(${reviews})`}</Text>
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
        const { params } = this.props.route;
        this.props.onGetTourGuides(`vietnam/${params.idCity}/tourguides`);
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props}/>
                <StatusBar barStyle="light-content"/>

                {/* view tour guides */}
                <View style={styles.containerTourGuides}>
                    
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>Tour guides in from cities</Text>
                    </View>

                    {/* view all tour guides */}
                    {
                        this.props.tourguides.length === 0 ? <ActivityIndicator size={300} />
                        :
                        <FlatList 
                            data={this.props.tourguides}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) => {
                                return (
                                    <ItemTourGuide name={item.name} image={item.image} pointRate={resultRate(item.rate).toFixed(1)} reviews={resultReviews(item.rate)} />                                          
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            style={{ marginBottom: 200 }}
                        />
                    }
                </View>
            </View>
        );
    }
}