import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

class FCMService {
    register = (onRegister, onNotification, onOpenNotification) => {
        this.checkPermission(onRegister);
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification);
    }

    registerAppWithFCM = async () => {
        if(Platform.OS === 'ios') {
            await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true);
        }
    }

    checkPermission = onRegister => {
        messaging().hasPermission()
            .then(enabled => {
                if(enabled) {
                    // user co quyen` truy cap
                    this.getToken(onRegister);
                } else {
                    // user khong co quyen truy cap
                    this.requestPermission(onRegister);
                }
            })
            .catch(error => console.log('[FCM Service] error is ', error));
    }

    getToken = onRegister => {
        messaging().getToken()
            .then(fcmToken => {
                if(fcmToken) {
                    onRegister(fcmToken)
                } else {
                    console.log('[FCM Service] user does not have a device token');
                }
            })
            .catch(error => console.log('[FCM Service] getToken rejected! ', error));
    }

    requestPermission = onRegister => {
        messaging().requestPermission()
            .then(() => {
                this.getToken(onRegister);
            })
            .catch(error => console.log('[FCM Service] Request permission rejected! ', error));
    }

    deleteToken = () => {
        console.log('[FCM Service] delete token');
        messaging().deleteToken()
            .catch(error => console.log('[FCM Service] delete token error ', error));
    }

    createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {
        // ung dung chay ben trong ung dung nen
        messaging().onNotificationOpenedApp(remoteMessage => {
            if(remoteMessage) {
                const notification = remoteMessage.notification;
                onOpenNotification(notification);
            }
        })

        // ung dung duoc mo ra khi dang tat
        messaging().getInitialNotification()
            .then(remoteMessage => {
                if(remoteMessage) {
                    const notification = remoteMessage.notification;
                    onOpenNotification(notification);
                }
            })

        // thong bao nen
        this.messageListener = messaging().onMessage(async remoteMessage => {
            if(remoteMessage) {
                let notification = null;
                if(Platform.OS === 'ios') {
                    notification = remoteMessage.data.notification;
                } else {
                    notification = remoteMessage.notification;
                }
                onNotification(notification);
            }
        })

        //kich hoat khi co thong bao
        messaging().onTokenRefresh(fcmToken => {
            onRegister(fcmToken);
        })
    }

    unRegister = () => {
        this.messageListener();
    }
}

export const fcmService = new FCMService();