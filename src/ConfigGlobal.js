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