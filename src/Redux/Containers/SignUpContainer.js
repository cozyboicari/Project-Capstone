//thu vien redux
import { connect } from 'react-redux';
import { registerAction } from '../Actions/index';

//file sign up component
import SignUpComponent from '../../Components/SignUp/SignUp';

// map sang state
const mapStateToProps = state => {
    return {
        
    }
}

//map sang dispatch
const mapDispatchToProps = dispatch => {
    return {
        onRegister: newUser => {
            dispatch(registerAction(newUser));
        }
    }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
export default SignUpContainer;