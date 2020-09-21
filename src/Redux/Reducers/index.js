import { combineReducers } from 'redux';
import signUpReducers from './SignUpReducers';
import signInReducers from './SignInReducers';
import vietnamReducers from './HomeReducers';
import tourguidesReducers from './TourGuidesReducers';

const allReducer = combineReducers({
    signUpReducers,
    signInReducers,
    vietnamReducers,
    tourguidesReducers
});

export default allReducer;