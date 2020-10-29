import { connect } from 'react-redux';

import { getQuestionActiveAction, pushQuestionsAction } from '../Actions/index';
import ActiveTourGuideComponent from '../../Components/RegisterTourGuide/ActiveTourguide';

const mapStateToProps = state => {
    return {
        questions: state.questionsReducers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetQuestions: () => dispatch(getQuestionActiveAction()),
        _onPushQuestions: newQuestions => dispatch(pushQuestionsAction(newQuestions))
    }
}

const ActiveTourGuideContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveTourGuideComponent);
export default ActiveTourGuideContainer;