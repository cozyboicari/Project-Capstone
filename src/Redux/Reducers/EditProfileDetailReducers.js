import { 
    UPDATE_ITEM_TOUR_GUIDE_FAIL, 
    UPDATE_ITEM_TOUR_GUIDE_SUCCESS
} from '../Actions/ActionType';

const editProfileDetailReducers = (profileUpdate = {}, action) => {
    switch(action.type) {
        case UPDATE_ITEM_TOUR_GUIDE_SUCCESS: 
            return action.itemsUpdated;
        case UPDATE_ITEM_TOUR_GUIDE_FAIL:
            return {};
        default: return profileUpdate;
    }
}

export default editProfileDetailReducers;