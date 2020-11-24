import { connect } from 'react-redux';

import ProfileDetailComponent from '../../Components/Profile/ProfileDetail';
import { getTourGuideAction, getTravelerAction} from '../Actions/index';

const mapStateToProps = state => {
    return {
        tourGuide: state.tourGuideReducers,
        traveler: state.travelerReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTourGuide: idTourGuide => dispatch(getTourGuideAction(idTourGuide)),
        _onGetTraveler: () => dispatch(getTravelerAction())
    }
}

const ProfileDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileDetailComponent);
export default ProfileDetailContainer;
