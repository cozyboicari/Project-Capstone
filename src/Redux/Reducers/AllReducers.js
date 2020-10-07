import { combineReducers } from 'redux';
import citiesReducers from './HomeReducers';
import toursReducers from './ToursReducers';
import signInReducers from './SignInReducers';
import signUpReducers from './SignUpReducers';

const allReducers = combineReducers({
    citiesReducers,
    toursReducers,
    signInReducers,
    signUpReducers
})

export default allReducers;