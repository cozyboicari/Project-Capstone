import { combineReducers } from 'redux';
import citiesReducers from './HomeReducers';
import toursReducers from './ToursReducers';
import signInReducers from './SignInReducers';
import signUpReducers from './SignUpReducers';
import travelerReducers from './ProfileReducers';
import questionsReducers from './QuestionsReducers';
import pushQuestionsReducers from './PushQuestionsReducers';
import tourGuideReducers from './ProfileDetailReducers';
import editProfileDetailReducers from './EditProfileDetailReducers';
import createToursReducers from './CreateToursReducers';

const allReducers = combineReducers({
    citiesReducers,
    toursReducers,
    signInReducers,
    signUpReducers,
    travelerReducers,
    questionsReducers,
    pushQuestionsReducers,
    tourGuideReducers,
    editProfileDetailReducers,
    createToursReducers
})

export default allReducers;