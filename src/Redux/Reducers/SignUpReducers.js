import { 
    REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT
} from '../Actions/ActionType';

const signUpReducers = (newUser = {}, action) => {
    switch(action.type) {
        case REGISTER_ACCOUNT: 
            return action.newUser;
        case REGISTER_ACCOUNT_SUCCESS: 
            return action.user;
        case REGISTER_ACCOUNT_FAIL:
            return {};
        default:
            return newUser;
    }
}

export default signUpReducers;