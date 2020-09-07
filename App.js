/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ManagerScreens from './src/ManagerScreens/ManagerScreens';

// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// import { AccessToken, LoginManager } from 'react-native-fbsdk';
// import { GoogleSignin } from '@react-native-community/google-signin';

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDjrZw2Z3QwCeW09U4vtwqGcMhLI5dQ7Nc",
//   authDomain: "capstone-version-2.firebaseapp.com",
//   databaseURL: "https://capstone-version-2.firebaseio.com",
//   projectId: "capstone-version-2",
//   storageBucket: "capstone-version-2.appspot.com",
//   messagingSenderId: "861324526731",
//   appId: "1:861324526731:web:438e30080443376240408e",
//   measurementId: "G-51LBHFFVW0"
// };

// GoogleSignin.configure({
//   webClientId: '861324526731-04obvgpdbfnq5hm8k8v5k9o6elpbcb2u.apps.googleusercontent.com',
//   offlineAccess: true
// });

// // Initialize Firebase
// if(!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }


const App: () => React$Node = () => {
  return (
    <ManagerScreens />
  );
};

export default App;
