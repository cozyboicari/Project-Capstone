import { connect } from 'react-redux';

import { getQuestionActiveAction, pushAnswerAction } from '../Actions/index';
import ActiveTourGuideComponent from '../../Components/RegisterTourGuide/ActiveTourguide';

const mapStateToProps = state => {
    return {
        questions: state.questionsReducers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetQuestions: () => dispatch(getQuestionActiveAction()),
    }
}

const ActiveTourGuideContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveTourGuideComponent);
export default ActiveTourGuideContainer;