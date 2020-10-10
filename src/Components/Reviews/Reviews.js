import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Dimensions } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// library
import { Rating } from 'react-native-ratings';

const ReviewItem = ({ urlImage, name, date, numRatings, mess }) => {
    return(
        <View style={styles.containerReviewItem}>
            <View style={styles.containerTop}>
                <View style={styles.itemLeft}>
                    <Image 
                        style={styles.containerImageUser}
                        source={{ uri: urlImage }}
                    />
                </View>
                <View style={styles.itemRight}>
                    <Text style={styles.nameUser}>{name}</Text>
                    <Rating 
                        type="custom"
                        ratingCount={5}
                        readonly={true}
                        imageSize={15}
                        startingValue={numRatings}
                    />
                    <Text style={styles.date}>{date}</Text>
                </View>

            </View>
            <View style={styles.containerBottom}>
                <Text style={styles.textReview}>{mess}</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 20}}>
                <View style={styles.containerBar}/>
            </View>
        </View>
    );
}

export default class Reviews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <HeaderComponent {...this.props}/>
                <Text style={styles.textTitle}>Reviews from guests</Text>
                {/* review cua khach */}
                <View style={styles.containerReviews}>
                    
                </View>
            </View>
        )
    }
}