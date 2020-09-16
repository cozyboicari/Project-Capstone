import { GET_DATA_VIETNAM_FAIL, GET_DATA_VIETNAM_SUCCESS,
     GET_DATA_VIETNAM } from '../Actions/ActionTypes';

const vietnamReducers = (stateVietnam = [], action) => {
    switch(action.type) {
        case GET_DATA_VIETNAM_SUCCESS:
            return action.vietnam;
        case GET_DATA_VIETNAM_FAIL:
            return [];
        default:
            return stateVietnam;
    }
}

export default vietnamReducers;