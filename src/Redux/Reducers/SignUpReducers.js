import { REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from '../Actions/ActionTypes';


const signUpReducers = (user = {}, action) => {
    switch(action.type) {
        case REGISTER:
            return action.user;
        case REGISTER_SUCCESS: 
            return action.respone;
        case REGISTER_FAIL:
            return {};
        default: 
            return user;
    }
}

export default signUpReducers;