import { connect } from 'react-redux';
import { getDataTourGuides } from '../Actions/index';

import TourGuidesComponent from '../../Components/TourGuides/TourGuides';

const mapStateToProps = state => {
    return {
        tourguides: state.tourguidesReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTourGuides: (path) => {
            dispatch(getDataTourGuides(path));
        }
    }
}

const TourGuidesContainer = connect(mapStateToProps, mapDispatchToProps)(TourGuidesComponent);
export default TourGuidesContainer;