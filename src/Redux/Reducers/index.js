import { combineReducers } from 'redux';
import signUpReducers from './SignUpReducers';
import signInReducers from './SignInReducers';
import vietnamReducers from './HomeReducers';

const allReducer = combineReducers({
    signUpReducers,
    signInReducers,
    vietnamReducers
});

export default allReducer;