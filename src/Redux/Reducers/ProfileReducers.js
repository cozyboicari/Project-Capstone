import { 
    GET_TRAVELER_FAIL, GET_TRAVELER_SUCCESS,
    UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS,
} from '../Actions/ActionType';

const travelerReducers = (traveler = {}, action) => {
    switch(action.type) {
        case GET_TRAVELER_SUCCESS: 
            return action.traveler;
        case GET_TRAVELER_FAIL:
            return {};
        case UPDATE_PROFILE_SUCCESS:
            return action.profileUpdated;
        case UPDATE_PROFILE_FAIL:
            return {};
        default:
            return traveler;
    }
}

export default travelerReducers;
