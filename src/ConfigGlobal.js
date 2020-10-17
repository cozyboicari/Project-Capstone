import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const version = '0.0.5';

const { height } = Dimensions.get('window');

//color global
export const colors = {
    BACKGROUND_BLUEYONDER: '#576CA8',
    BACKGROUND_CULTURE: '#FFF',
    TEXT_DARK_JUNGLE_GREEN: '#171D1C',
    COLOR_HEART: '#A62C2b'
}

// rate
export const newAvgRatings = (numRatings, oldAvgRatings, rating) => {
    return (numRatings * oldAvgRatings + rating) / (numRatings + 1);
}

export const getAvgRatings = (avgRatings) => {
    return avgRatings === 0 ? 0.0 : 0;
}

export const getNumRatings = (numRatings) => {
    return numRatings;
}

//convert number month to string
export const convertMonth = month => {
    let monthString = '';
    switch(month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return monthString;
    }
}

//uppercase first charactor
export const uppercaseFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//component version
export const ComponentVersion = () => {
    return(
        <View style={styles.containerVersion}>
            <Text style={styles.textVersion}>
                {`version @${version}`}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    containerVersion: {
        marginBottom: height - (height - 30),
        alignItems: 'center'
    },
    textVersion: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontSize: 15
    }
})