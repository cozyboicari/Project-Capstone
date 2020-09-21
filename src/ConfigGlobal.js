import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const version = '0.0.1';

//color global
export const colors = {
    BACKGROUND_BLUEYONDER: '#576CA8',
    BACKGROUND_CULTURE: '#F5F3F5',
    TEXT_DARK_JUNGLE_GREEN: '#171D1C',
    COLOR_HEART: '#A62C2b'
}

// rate
export const resultRate = arr => {
    let resultReviews = 0;
    for(let i = 0; i < arr.length; i++) {
        resultReviews += arr[i];
    }

    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += (arr[i] * (i + 1));
    }

    return result / resultReviews;
}

export const resultReviews = arr => {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
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
        marginBottom: 20,
        alignItems: 'center'
    },
    textVersion: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontSize: 15
    }
})