import { GET_QUESTION_ACTIVE_FAIL, GET_QUESTION_ACTIVE_SUCCESS } from '../Actions/ActionType';

const questionsReducers = (arrQuestion = [], action) => {
    switch(action.type) {
        case GET_QUESTION_ACTIVE_SUCCESS:
            return action.questions;
        case GET_QUESTION_ACTIVE_FAIL:
            return [];
        default:
            return arrQuestion;
    }
}

export default questionsReducers;