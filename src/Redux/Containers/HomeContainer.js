import { connect } from 'react-redux';
import { getDataVietnamAction } from '../Actions/index';

import HomeComponent from '../../Components/Home/Home';

const mapStateToProps = state => {
    console.log(state);
    return {
        vietnam: state.vietnamReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetVietnam: () => {
            dispatch(getDataVietnamAction('vietnam'));
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;