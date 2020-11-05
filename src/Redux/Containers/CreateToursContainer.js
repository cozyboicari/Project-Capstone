import { connect } from 'react-redux';

import CreateToursComponent from '../../Components/Tours/CreateTours';
import { getTourGuideAction, createTourAction } from '../Actions/index';

const mapStateToProps = state => {
    return {
        tourGuide: state.tourGuideReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTourGuide: idTourGuide => dispatch(getTourGuideAction(idTourGuide)),
        _onCreateTour: newTour => dispatch(createTourAction(newTour))
    }
}

const CreateToursContainer = connect(mapStateToProps, mapDispatchToProps)(CreateToursComponent);
export default CreateToursContainer;
