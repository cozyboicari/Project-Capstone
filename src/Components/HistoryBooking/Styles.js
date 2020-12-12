import { StyleSheet } from 'react-native';

// file global
import { colors } from '../../ConfigGlobal';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    title: {
        fontSize: 22,
        margin: 22,
        fontWeight: '700',
        color: '#444'
    }
});

export default styles;