import { connect } from 'react-redux';

import CreateToursComponent from '../../Components/Tours/CreateTours';
import { getTourGuideAction, createTourAction, updateTourAction } from '../Actions/index';

const mapStateToProps = state => {
    return {
        tourGuide: state.tourGuideReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTourGuide: idTourGuide => dispatch(getTourGuideAction(idTourGuide)),
        _onCreateTour: newTour => dispatch(createTourAction(newTour)),
        _onUpdateTour: tourUpdate => dispatch(updateTourAction(tourUpdate))
    }
}

const CreateToursContainer = connect(mapStateToProps, mapDispatchToProps)(CreateToursComponent);
export default CreateToursContainer;
