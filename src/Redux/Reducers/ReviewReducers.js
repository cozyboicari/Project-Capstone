import { GET_RATINGS_FAIL, GET_RATINGS_SUCCESS } from '../Actions/ActionType';

const ratingsReducers = (reviews = [], action) => {
    switch(action.type) {
        case GET_RATINGS_SUCCESS: return action.ratings;
        case GET_RATINGS_FAIL: return [];
        default: return reviews;
    }
}

export default ratingsReducers;