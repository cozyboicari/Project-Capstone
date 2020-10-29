import { combineReducers } from 'redux';
import citiesReducers from './HomeReducers';
import toursReducers from './ToursReducers';
import signInReducers from './SignInReducers';
import signUpReducers from './SignUpReducers';
import travelerReducers from './ProfileReducers';
import questionsReducers from './QuestionsReducers';

const allReducers = combineReducers({
    citiesReducers,
    toursReducers,
    signInReducers,
    signUpReducers,
    travelerReducers,
    questionsReducers,
})

export default allReducers;