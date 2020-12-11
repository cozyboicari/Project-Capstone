import { connect } from 'react-redux';
import { resetPasswordAction } from '../Actions/index';

import ForgotPasswordComponent from '../../Components/ForgotPassword/ForgotPassword';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onResetPassword: email => dispatch(resetPasswordAction(email))
    }
}

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordComponent);
export default ForgotPasswordContainer;