import { connect } from 'react-redux';

import ProfileDetailComponent from '../../Components/Profile/ProfileDetail';
import { getTourGuideAction } from '../Actions/index';

const mapStateToProps = state => {
    return {
        tourGuide: state.tourGuideReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTourGuide: idTourGuide => dispatch(getTourGuideAction(idTourGuide))
    }
}

const ProfileDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileDetailComponent);
export default ProfileDetailContainer;
