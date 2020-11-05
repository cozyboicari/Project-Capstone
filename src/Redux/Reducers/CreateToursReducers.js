import { CREATE_TOUR_FAIL, CREATE_TOUR_SUCCESS } from '../Actions/ActionType';

const createToursReducers = (newTour = {}, action) => {
    switch(action.type) {
        case CREATE_TOUR_SUCCESS: return action.tour;
        case CREATE_TOUR_FAIL: return {};
        default: return newTour;
    }
}

export default createToursReducers;