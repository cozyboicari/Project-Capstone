import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const version = '0.0.1';

//color global
const colors = {
    BACKGROUND_BLUEYONDER: '#576CA8',
    BACKGROUND_CULTURE: '#F5F3F5',
    TEXT_DARK_JUNGLE_GREEN: '#171D1C',
    COLOR_HEART: '#A62C2b'
}

//component version
const ComponentVersion = () => {
    return(
        <View style={styles.containerVersion}>
            <Text style={styles.textVersion}>
                {`version @${version}`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerVersion: {
        marginBottom: 20,
        alignItems: 'center'
    },
    textVersion: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontSize: 15
    }
})


export { colors, version, ComponentVersion };