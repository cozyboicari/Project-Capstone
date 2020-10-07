import { all } from 'redux-saga/effects';

import {
    watchGetCitiesInCountryFromFirestore,
    watchGetToursInCityFromFirestore,
    watchSignInUserFromAuth,
    watchSignUpUserFromAuth,
    watchSignInUserFromFacebook,
    watchSignInUserFromGmail
 } from './Sagas';

 export default function* rootSagas() {
     yield all([
         watchGetCitiesInCountryFromFirestore(),
         watchGetToursInCityFromFirestore(),
         watchSignInUserFromAuth(),
         watchSignUpUserFromAuth(),
         watchSignInUserFromGmail(),
         watchSignInUserFromFacebook()
     ])
 }