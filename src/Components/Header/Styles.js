import { StyleSheet } from 'react-native';

//file config global
import { colors } from '../../ConfigGlobal';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
    },
    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemHeaderLeft: {
        marginLeft: 10
    },
    itemHeaderMid: {
        
    },
    itemHeaderRight: {
        marginRight: 43
    },
    textBrand: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.BACKGROUND_CULTURE
    }
})

export default styles;