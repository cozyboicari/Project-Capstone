// firebase family
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//global func
import { uppercaseFirst } from '../../ConfigGlobal';

//login facebook and gmail
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import { Alert } from 'react-native';

//config google signin
GoogleSignin.configure({
  webClientId: '855060710487-9mtegulpq0sre0q180ev2pkug31m620d.apps.googleusercontent.com',
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

// get cities in country
export const getCitiesInCountry = async (path) => {
  const datas = [];
  await firestore().collection(path).get()
    .then(cities => {
      cities.forEach(city => {
        const item = {
          id: city.id,
          name: city.data().name,
          image: city.data().image,
          description: city.data().description,
          visitors: city.data().visitors,
          id_tourguides: city.data().id_tourguides
        }
        datas.push(item);
      })
    })
    return datas;
}

// get tour guide by id
export const getTourGuideByID = async (path, idTourGuide) => {
  return await firestore().collection(path).doc(idTourGuide).get();
}

// get tours in city
export const getToursInCity = async (path, idCity) => {
  const datas = [];
  await firestore().collection(path).where('cityID', '==', idCity).get()
    .then(tours => {
      tours.forEach(tour => {
        let item = {
          id: tour.id,
          avgRating: tour.data().avgRating,
          cityID: uppercaseFirst(tour.data().cityID),
          description: tour.data().description,
          introduce: tour.data().introduce,
          name: tour.data().name,
          numRatings: tour.data().numRatings,
          numberPeople: tour.data().numberPeople,
          price: tour.data().price,
          time: tour.data().time,
          tourguideID: tour.data().tourguideID,
          tourguideImageCover: tour.data().tourguideImageCover,
          tourguideName: tour.data().tourguideName,
          tourguideImage: tour.data().tourguideImage,
          category: tour.data().category,
          languages: tour.data().languages
        }
        datas.push(item);
      })
    })
    return datas;
}

//sign up auth by email
export const createUserByEmail = async (newUser) => {
  await auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
}

//login auth by email
export const signInUserByEmail = async (user) => {
  await auth().signInWithEmailAndPassword(user.email, user.password);
}

//logout auth
export const logOut = async () => {
  return await auth().signOut();
}

// login facebook
export const signInUserByFacebook = async () => {
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

// login gmail
export const signInUserByGmail = async () => {
  const { idToken } = await GoogleSignin.signIn();
  
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

export { auth };