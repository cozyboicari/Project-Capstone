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
  apiKey: "AIzaSyBSdrT-Y3xE7YvJJYq1edWrCqif-NAqhMc",
  authDomain: "yourtour-c4d0f.firebaseapp.com",
  databaseURL: "https://yourtour-c4d0f.firebaseio.com",
  projectId: "yourtour-c4d0f",
  storageBucket: "yourtour-c4d0f.appspot.com",
  messagingSenderId: "855060710487",
  appId: "1:855060710487:web:7f907ef264c514d6298f12",
  measurementId: "G-QMSPR75J9F"
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
  const datas = [];
  await firestore().collection(nameCollection).get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const city = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          description: doc.data().description,
          visits: doc.data().visits,
          email: doc.data().email,
          phone: doc.data().phone,
          rate: doc.data().rate
        }
        datas.push(city);
      })
    })
  return datas;
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

export { firebase, auth, firestore };