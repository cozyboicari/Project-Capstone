import { connect } from 'react-redux';
import { getNotificationAction } from '../Actions/index';

import NotificationComponent from '../../Components/Notification/Notification';

const mapStateToProps = state => {
    return {
        notifications: state.notificationsReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetNotification: () => dispatch(getNotificationAction())
    }
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);
export default NotificationContainer;