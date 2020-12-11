import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { 
    GET_NOTIFICATION, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAIL
} from '../Actions/ActionType';

const notificationsReducers = (notifications = [], action) => {
    switch(action.type) {
        case GET_NOTIFICATION_SUCCESS: return action.notifications;
        case GET_NOTIFICATION_FAIL: return [];
        default: return notifications;
    }
}

export default notificationsReducers;