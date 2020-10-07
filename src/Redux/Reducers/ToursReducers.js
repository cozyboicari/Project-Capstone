import { 
    GET_TOURS, GET_TOURS_FAIL, GET_TOURS_SUCCESS 
} from '../Actions/ActionType';

const toursReducers = (tours = [], action) => {
    switch(action.type) {
        case GET_TOURS_SUCCESS: 
            return action.tours;
        case GET_TOURS_FAIL: 
            return [];
        default:
            return tours;
    }
}

export default toursReducers;