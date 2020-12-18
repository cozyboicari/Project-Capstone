import React from 'react';
import { connect } from 'react-redux';
import { getNotificationAction } from '../Actions/index';

//library
import Icons from 'react-native-vector-icons/Ionicons';

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

export class NotificationIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { notifications } = this.props;
        console.log(notifications);
        return(
            <View style={{ 
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icons name='notifications-outline' size={20} color='red'/>
                <Animatable.View
                    animation='bounceIn'
                    style={{ 
                        position: 'absolute', 
                        paddingLeft: 14, 
                        paddingBottom: 10 
                    }}
                >
                    <Badge
                        size={22}
                        style={{
                            fontSize: 14.5,
                            fontWeight: '500',
                            backgroundColor: '#f44',
                        }}
                    >
                        {notifications.length}
                    </Badge>
                </Animatable.View>
            </View>
        );
    }
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationIcon);
export default NotificationContainer;