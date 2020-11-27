import { UPDATE_TOUR_SUCCESS, 
    UPDATE_TOUR, UPDATE_TOUR_FAIL } from '../Actions/ActionType';

const updateTourReducers = (tour = {}, action) => {
    switch(action.type) {
        case UPDATE_TOUR: return action.tourUpdate;
        case UPDATE_TOUR_SUCCESS: return action.tourUpdated;
        case UPDATE_TOUR_FAIL: return {};
        default: return tour;
    }
}

export default updateTourReducers;