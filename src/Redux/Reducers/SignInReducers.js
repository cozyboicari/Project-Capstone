import {
    LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS,
    LOGIN_GMAIL_FAIL, LOGIN_GMAIL_SUCCESS,
    LOGIN_FACEBOOK_FAIL, LOGIN_FACEBOOK_SUCCESS
 } from '../Actions/ActionType';

 const signInReducers = (user = {}, action) => {
    switch(action.type) {
        case LOGIN_ACCOUNT_SUCCESS: 
            return action.user;
        case LOGIN_ACCOUNT_FAIL: 
            return {};
        case LOGIN_GMAIL_SUCCESS: 
            return action.accountGmail;
        case LOGIN_GMAIL_FAIL: 
            return {};
            case LOGIN_FACEBOOK_SUCCESS: 
            return action.accountFacebook;
        case LOGIN_FACEBOOK_FAIL: 
            return {};
        default:
            return user;
    }
 }

 export default signInReducers;