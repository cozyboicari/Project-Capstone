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
        flex: 1.5,
        marginLeft: 12
    },
    itemHeaderMid: {
        flex: 1,
        alignItems: 'flex-end',
    },
    itemHeaderRight: {
        flex: 1,
    },
})

export default styles;