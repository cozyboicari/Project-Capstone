import { connect } from 'react-redux';

import { registerAction } from '../Actions/index';
import SignUpComponent from '../../Components/SignUp/SignUp';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onCreateUser: newUser => {
            dispatch(registerAction(newUser));
        }
    }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
export default SignUpContainer;