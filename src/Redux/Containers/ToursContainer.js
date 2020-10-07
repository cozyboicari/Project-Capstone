import { connect } from 'react-redux';
import { getToursAction } from '../Actions/index';

import TourComponent from '../../Components/Tours/Tours';

const mapStateToProps = state => {
    return {
        tours: state.toursReducers
    }
}

const mapDispathToProps = dispatch => {
    return {
        _onGetTours: (path, idCity) => {
            dispatch(getToursAction(path, idCity));
        }
    }
}

const ToursContainer = connect(mapStateToProps, mapDispathToProps)(TourComponent);
export default ToursContainer;