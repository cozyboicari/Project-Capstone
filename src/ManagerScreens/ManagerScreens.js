import React from 'react';

//thu vien ngoai
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//man hinh
import IntroScreen from '../Components/Intro/Intro';
import SignInScreen from '../Components/SignIn/SignIn';
import SignUpScreen from '../Components/SignUp/SignUp';

// stack
const Stack = createStackNavigator();

const ScreenSignInAndSignUp = () => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Intro Screen" component={IntroScreen}/>
            <Stack.Screen name="Sign In Screen" component={SignInScreen}/>
            <Stack.Screen name="Sign Up Screen" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

const ManagerScreens = () => {
    return(
        <NavigationContainer>
            <ScreenSignInAndSignUp />
        </NavigationContainer>
    );
}

export default ManagerScreens;