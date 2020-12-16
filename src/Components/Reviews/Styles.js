import { StyleSheet, Dimensions } from 'react-native';

//file global
import { colors } from '../../ConfigGlobal';

// bien toan cuc
const { width } = Dimensions.get('screen');
const AVATAR_REVIEW = 60;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CULTURE
    },
    textTitle: {
        margin: 12,
        fontSize: 23,
        fontWeight: '600',
        color: '#aaa',
    },
    containerReviews: {
        flex: 7,
        marginTop: 15
    },
    containerReviewItem: {
        paddingVertical: 10,
        paddingBottom: 20,
    },
    containerTop: {
        flexDirection: 'row',
    },
    itemLeft: {
        marginRight: 20,
        marginLeft: 25
    },
    containerImageUser: {
        width: AVATAR_REVIEW,
        height: AVATAR_REVIEW,
        backgroundColor: colors.BACKGROUND_BLUEYONDER,
        borderRadius: AVATAR_REVIEW / 2
    },
    itemRight: {
        alignItems: 'flex-start'
    },
    nameUser: {
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
        marginBottom: 5
    }, 
    date: {
        fontSize: 12,
        marginTop: 5,
        color: '#444',
        fontWeight: '600'
    },
    containerBottom: {
        width: width,
        paddingHorizontal: 25,
        marginTop: 20,
        marginBottom: 20
    },
    textReview: {
        fontSize: 15,
        fontWeight: '300',
        color: '#444'
    },
    containerBar: {
        height: 1,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    bottomRatings: {
        alignItems: 'center'
    },
    titleRate: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444'
    }
});

export default styles;