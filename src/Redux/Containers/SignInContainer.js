//thu vien redux
import { connect } from 'react-redux';
import { loginAction } from '../Actions/index';

//file sign in component
import SignInComponent from '../../Components/SignIn/SignIn';

//map sang state
const mapStateToProps = state => {
    return {

    }
}

//map sang dispatch
const mapDispatchToProps = dispatch => {
    return {
        onSignIn: user => {
            dispatch(loginAction(user));
        }
    }
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
export default SignInContainer;