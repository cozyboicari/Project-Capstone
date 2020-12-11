import { 
    RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS, RESET_PASSWORD
} from '../Actions/ActionType';

const forgotPasswordReducers = (email = {}, action) => {
    switch(action.type) {
        case RESET_PASSWORD: return action.email;
        case RESET_PASSWORD_SUCCESS: return action.mail;
        case RESET_PASSWORD_FAIL: return {};
        default: return email;
    }
}

export default forgotPasswordReducers;