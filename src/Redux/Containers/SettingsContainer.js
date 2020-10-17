import { connect } from 'react-redux';

import { getTravelerAction } from '../Actions/index';
import SettingsComponent from '../../Components/Settings/Settings';

const mapStateToProps = state => {
    return {
        traveler: state.travelerReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetTraveler: () => {
            dispatch(getTravelerAction());
        }
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);
export default SettingsContainer;