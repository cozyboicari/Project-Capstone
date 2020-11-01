import { 
    GET_TOUR_GUIDE_FAIL, GET_TOUR_GUIDE_SUCCESS
} from '../Actions/ActionType';

const tourGuideReducers = (tourguide = {}, action) => {
    switch(action.type) {
        case GET_TOUR_GUIDE_SUCCESS:
            return action.tourGuide;
        case GET_TOUR_GUIDE_FAIL:
            return {};
        default: return tourguide;
    }
}

export default tourGuideReducers;