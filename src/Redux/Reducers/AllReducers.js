import { combineReducers } from 'redux';
import citiesReducers from './HomeReducers';
import toursReducers from './ToursReducers';
import signInReducers from './SignInReducers';
import signUpReducers from './SignUpReducers';
import travelerReducers from './ProfileReducers';

const allReducers = combineReducers({
    citiesReducers,
    toursReducers,
    signInReducers,
    signUpReducers,
    travelerReducers
})

export default allReducers;