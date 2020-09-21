import React from 'react';
import { View } from 'react-native';

//thu vien ngoai
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/Ionicons';

//file global config
import { colors } from '../ConfigGlobal';

//man hinh
import IntroScreen from '../Components/Intro/Intro';
import SignInScreen from '../Redux/Containers/SignInContainer';
import SignUpScreen from '../Redux/Containers/SignUpContainer';
import HomeScreen from '../Redux/Containers/HomeContainer';
import TourGuidesScreen from '../Redux/Containers/TourGuidesContainer';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import allReducers from '../Redux/Reducers/index';
import rootSaga from '../Redux/Sagas/RootSagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// stack
const Stack = createStackNavigator();

//drawer
const Drawer = createDrawerNavigator();

//item drawer
import DrawerContent  from './DrawerContent';

const ScreenSignInAndSignUpAndHome = () => {
    return(
        <Provider store={store}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Intro Screen" component={IntroScreen}/>
                <Stack.Screen name="Sign In Screen" component={SignInScreen}/>
                <Stack.Screen name="Sign Up Screen" component={SignUpScreen}/>
                <Stack.Screen name="Home Screen" component={HomeScreen} options={{
                    gestureEnabled: false
                }}/>
                <Stack.Screen name="Tour Guides Screen" component={TourGuidesScreen} />
            </Stack.Navigator>
        </Provider>
    );
}

const ManagerScreens = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContentOptions={{
                    activeBackgroundColor: colors.BACKGROUND_BLUEYONDER,
                    activeTintColor: colors.BACKGROUND_CULTURE,
                }}
                drawerStyle={{
                    width: 240,
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={ScreenSignInAndSignUpAndHome}
                    options={{
                        drawerIcon: ({size, color}) => <Icons name="home-outline" size={size} color={color}/> 
                    }}
                />
                <Drawer.Screen 
                    name="Notification" 
                    component={View}
                    options={{
                        drawerIcon: ({size, color}) => <Icons name="notifications-outline" size={size} color={color}/> 
                    }}
                />
                <Drawer.Screen 
                    name="Wish list" 
                    component={View}
                    options={{
                        drawerIcon: ({size, color}) => <Icons name="bookmarks-outline" size={size} color={color}/> 
                    }}
                />
                <Drawer.Screen 
                    name="Conversation" 
                    component={View}
                    options={{
                        drawerIcon: ({size, color}) => <Icons name="chatbubbles-outline" size={size} color={color}/> 
                    }}
                />
                <Drawer.Screen 
                    name="Settings" 
                    component={View}
                    options={{
                        drawerIcon: ({size, color}) => <Icons name="settings-outline" size={size} color={color}/> 
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

sagaMiddleware.run(rootSaga);
export default ManagerScreens;