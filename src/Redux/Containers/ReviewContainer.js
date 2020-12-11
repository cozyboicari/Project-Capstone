import { connect } from 'react-redux';

import { getRatingsAction } from '../Actions/index';
import ReviewComponent from '../../Components/Reviews/Reviews';

const mapStateToProps = state => {
    return {
        ratings: state.ratingsReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetRatings: idTour => dispatch(getRatingsAction(idTour))
    }
}

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewComponent);
export default ReviewContainer;