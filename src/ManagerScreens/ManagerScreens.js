import React from 'react';
import { View } from 'react-native';

//thu vien ngoai
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

//file global config
import { colors } from '../ConfigGlobal';

//man hinh
import IntroScreen from '../Components/Intro/Intro';
import SignInScreen from '../Redux/Containers/SignInContainer';
import SignUpScreen from '../Redux/Containers/SignUpContainer';
import HomeScreen from '../Redux/Containers/HomeContainer';
import ToursScreen from '../Redux/Containers/ToursContainer';
import DetailsTourScreen from '../Components/DetailsTour/DetailsTour';
import ReviewsScreen from '../Components/Reviews/Reviews';
import BookingScreen from '../Components/Booking/Booking';
import SettingsScreen from '../Redux/Containers/SettingsContainer';
import ProfileScreen from '../Redux/Containers/ProfileContainer';
import RegisterTourGuideScreen from '../Components/RegisterTourGuide/RegisterTourGuide';
import ActiveTourGuideScreen from '../Redux/Containers/ActiveTourGuideContainer';
import ProfileDetailScreen from '../Components/Profile/ProfileDetail';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import allReducers from '../Redux/Reducers/AllReducers';
import rootSagas from '../Redux/Sagas/RootSagas';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// stack
const Stack = createStackNavigator();

//drawer
const Tab = createBottomTabNavigator();

const ScreenHome = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home Screen" component={HomeScreen} />
            <Stack.Screen name="Tours Screen" component={ToursScreen} 
                options={{
                    gestureEnabled: false
                }}
            />
        </Stack.Navigator>
    );
}

const ScreenSettings = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Settings Screen" component={SettingsScreen} />
            <Stack.Screen name="Profile Screen" component={ProfileScreen} 
                options={{
                    gestureEnabled: false
                }}
            />
        </Stack.Navigator>
    );
}

const TabsScreen = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.BACKGROUND_BLUEYONDER,
                inactiveTintColor: '#aaa',
            }}
            

        >
            <Tab.Screen 
                name="Home" 
                component={ScreenHome}
                options={() => ({
                    tabBarIcon: ({size, color}) => <Icons name="home-outline" size={size} color={color}/>,
                })}
            />
            <Tab.Screen 
                name="Notification" 
                component={View}
                options={{
                    tabBarIcon: ({size, color}) => <Icons name="notifications-outline" size={size} color={color}/> 
                }}
            />
            <Tab.Screen 
                name="Conversation" 
                component={View}
                options={{
                    tabBarIcon: ({size, color}) => <Icons name="chatbubbles-outline" size={size} color={color}/> 
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={ScreenSettings}
                options={{
                    tabBarIcon: ({size, color}) => <Icons name="settings-outline" size={size} color={color}/> 
                }}
            />
        </Tab.Navigator>
    );
}

const ManagerScreens = () => {
    return(
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator headerMode="none" initialRouteName="Tabs">
                    <Stack.Screen name="Intro Screen" component={IntroScreen} />
                    <Stack.Screen name="Sign In Screen" component={SignInScreen}/>
                    <Stack.Screen name="Sign Up Screen" component={SignUpScreen}/>
                    <Stack.Screen name="Tabs" component={TabsScreen}/>
                    <Stack.Screen name="Details Tour Screen" component={DetailsTourScreen} 
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen name="Reviews Tour Screen" component={ReviewsScreen} 
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen name="Booking Screen" component={BookingScreen} 
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen name="Register Tour Guide Screen" component={RegisterTourGuideScreen}
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen name="Profile Detail Screen" component={ProfileDetailScreen} 
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Stack.Screen name="Active Tour Guide Screen" component={ActiveTourGuideScreen} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}

sagaMiddleware.run(rootSagas);
export default ManagerScreens;