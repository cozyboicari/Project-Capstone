import { connect } from 'react-redux';
import { getToursAction, getTravelerAction } from '../Actions/index';

import TourComponent from '../../Components/Tours/Tours';

const mapStateToProps = state => {
    return {
        tours: state.toursReducers,
        traveler: state.travelerReducers
    }
}

const mapDispathToProps = dispatch => {
    return {
        _onGetTours: (path, idCity) => {
            dispatch(getToursAction(path, idCity));
        },
        _onGetTraveler: () => dispatch(getTravelerAction())
    }
}

const ToursContainer = connect(mapStateToProps, mapDispathToProps)(TourComponent);
export default ToursContainer;