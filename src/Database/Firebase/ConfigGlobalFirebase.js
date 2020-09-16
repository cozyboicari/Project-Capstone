// firebase family
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//login facebook and gmail
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import { Alert } from 'react-native';

//config google signin
GoogleSignin.configure({
  webClientId: '861324526731-04obvgpdbfnq5hm8k8v5k9o6elpbcb2u.apps.googleusercontent.com',
  offlineAccess: true
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDjrZw2Z3QwCeW09U4vtwqGcMhLI5dQ7Nc",
  authDomain: "capstone-version-2.firebaseapp.com",
  databaseURL: "https://capstone-version-2.firebaseio.com",
  projectId: "capstone-version-2",
  storageBucket: "capstone-version-2.appspot.com",
  messagingSenderId: "861324526731",
  appId: "1:861324526731:web:438e30080443376240408e",
  measurementId: "G-51LBHFFVW0"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//POST auth email & password
export const postAuthEmailAndPassword = (email, password) => {
  auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('POST Auth !');
      Alert.alert('Notification', 'Sign Up Success!');
    })
    .catch(error => {
      console.log(`POST Auth error is ${error}`);
      Alert.alert('Notification', 'Sign Up Fail!');
    });
}

// POST firestore
export const postFirestore = (nameCollection, data) => {
  firestore().collection(nameCollection).add(data)
    .then(() => console.log('POST Firestore !'))
    .catch(error => console.log(`POST Firestore error is ${error}`));
}

//GET auth email & password
export const getAuthEmailAndPassword = (email, password) => {
  auth().signInWithEmailAndPassword(email, password)
    .then(() => console.log('GET Auth !'))
    .catch(error => {
      console.log(`GET Auth error is ${error}`);
      Alert.alert('Notification', 'Sign In Fail!');
    });
}

//GET firestore
export const getFirestore = async (nameCollection) => {
  const countries = [];
  await firestore().collection(nameCollection).get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const city = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          description: doc.data().description,
          visits: doc.data().visits
        }
        countries.push(city);
      })
    })
  return countries;
}

// Sign in Facebook
export const loginFacebook = async () => {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
  if(result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();

  if(!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  return auth().signInWithCredential(facebookCredential);
}

//Sign in Gmail
export const loginGmail = async () => {
  const { idToken } = await GoogleSignin.signIn();
  
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

//Log Out Auth
export const logOutAuth = () => {
  auth().signOut()
    .then(() => console.log('logout !'));
}

export { firebase, auth, firestore  };