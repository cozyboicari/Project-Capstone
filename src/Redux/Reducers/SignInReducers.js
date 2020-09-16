import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN } from '../Actions/ActionTypes';

const signInReducers = (user = {}, action) => {
    switch(action.type) {
        case LOGIN:
            return action.user;
        case LOGIN_SUCCESS:
            return action.user
        case LOGIN_FAIL:
        return {};
        default:
            return user;
    }
}

export default signInReducers;