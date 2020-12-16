import { connect } from 'react-redux';

import { getRatingsAction, getTravelerAction } from '../Actions/index';
import ReviewComponent from '../../Components/Reviews/Reviews';

const mapStateToProps = state => {
    return {
        ratings: state.ratingsReducers,
        traveler: state.travelerReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetRatings: idTour => dispatch(getRatingsAction(idTour)),
        _onGetTraveler: () => dispatch(getTravelerAction())
    }
}

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewComponent);
export default ReviewContainer;