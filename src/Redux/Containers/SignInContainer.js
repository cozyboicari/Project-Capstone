import { connect } from 'react-redux';

import { loginAction, loginFacebookAction, loginGmailAction } from '../Actions/index';
import SignInComponent from '../../Components/SignIn/SignIn';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onLogin: user => {
            dispatch(loginAction(user));
        },
        _onLoginFacebook: () => {
            dispatch(loginFacebookAction());
        },
        _onLoginGmail: () => {
            dispatch(loginGmailAction());
        }
    }
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
export default SignInContainer;