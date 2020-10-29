import { 
    PUSH_QUESTIONS_SUCCESS, PUSH_QUESTIONS_FAIL
} from '../Actions/ActionType';

const pushQuestionsReducers = (questions = {}, action) => {
    switch(action.type) {
        case PUSH_QUESTIONS_SUCCESS:
            return action.questions;
        case PUSH_QUESTIONS_FAIL:
            return {};
        default:
            return questions;
    }
}

export default pushQuestionsReducers;