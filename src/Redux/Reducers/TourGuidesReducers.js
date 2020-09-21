import { 
    GET_DATA_TOUR_GUIDES, GET_DATA_TOUR_GUIDES_FAIL,
     GET_DATA_TOUR_GUIDES_SUCCESS
} from '../Actions/ActionTypes';

const tourguidesReducers = (stateTourguides = [], action) => {
    switch(action.type) {
        case GET_DATA_TOUR_GUIDES_SUCCESS:
            return action.tourguides;
        case GET_DATA_TOUR_GUIDES_FAIL:
            return [];
        default:
            return stateTourguides;
    }
}

export default tourguidesReducers;