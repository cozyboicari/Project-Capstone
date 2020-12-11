import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class LocalNotificationService {

    configure = onOpenNotification => {
        PushNotification.configure({
            onRegister: token => {
                console.log('[NotificationManager]  onRegister token:', token);
            },

            onNotification: notification => {
                console.log(' [NotificationManager] onNotification', notification);

                if(!notification?.data) {
                    return;
                }

                notification.userInteraction = true;
                onOpenNotification(
                    Platform.OS === 'ios' ? notification.data.item : notification.data
                );

                if(Platform.OS === 'ios') {
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                }
            },
            
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            popInitialNotification: true,
            requestPermissions: true
        })
    }
    
    // android
    _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id,
            autoCancel: true,
            largeIcon: options.largeIcon || 'ic_launcher',
            smallIcon: options.smallIcon || 'ic_notification',
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || 'high',
            importance: options.importance || 'high',
            data
        }
    }

    //ios
    _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || 'view',
            category: options.category || '',
            userInfo: {
                id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            // properties cua android
            ...this._buildAndroidNotification(id, title, message, data, options),
            // properties cua ios
            ...this._buildIOSNotification(id, title, message, data, options),
            // ca hai
            title: title || '',
            message: message || '',
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    removeAllDeliveredNotificationsByID = notificationId => {
        PushNotification.cancelLocalNotifications({ id: notificationId });
    }

    cancelAllLocalNotification = () => {
        if(Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications();
        } else {
            PushNotification.cancelAllLocalNotifications()
        }
    }

    unregister = () => {
        PushNotification.unregister();
    }
}

export const localNotificationService = new LocalNotificationService();