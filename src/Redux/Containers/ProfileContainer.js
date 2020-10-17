import { connect } from 'react-redux';

import { getTravelerAction, updateProfileAction } from '../Actions/index';
import ProfileComponent from '../../Components/Profile/Profile';

const mapStateToProps = state => {
    return {
        traveler: state.travelerReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTraveler: () => {
            dispatch(getTravelerAction());
        },
        _onUpdateProfile: profile => {
            dispatch(updateProfileAction(profile));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
export default ProfileContainer;