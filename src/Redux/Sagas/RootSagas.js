import { all } from 'redux-saga/effects';

import {
    watchGetCitiesInCountryFromFirestore,
    watchGetToursInCityFromFirestore,
    watchSignInUserFromAuth,
    watchSignUpUserFromAuth,
    watchSignInUserFromFacebook,
    watchSignInUserFromGmail,
    watchGetTravelerFromFirestore,
    watchUpdateTravelerProfileFromFirestore,
    watchGetQuestionActive,
    watchPushQuestionTourGuide,
    watchGetTourGuideFromAuth,
    watchUpdateItemTourGuideFromAuth,
    watchCreateTourFromTourGuide,
    watchUpdateTourFromFirestore,
    watchGetNotificationFromFirestore,
    watchResetPasswordFromAuth
 } from './Sagas';

 export default function* rootSagas() {
     yield all([
         watchGetCitiesInCountryFromFirestore(),
         watchGetToursInCityFromFirestore(),
         watchSignInUserFromAuth(),
         watchSignUpUserFromAuth(),
         watchSignInUserFromGmail(),
         watchSignInUserFromFacebook(),
         watchGetTravelerFromFirestore(),
         watchUpdateTravelerProfileFromFirestore(),
         watchGetQuestionActive(),
         watchPushQuestionTourGuide(),
         watchGetTourGuideFromAuth(),
         watchUpdateItemTourGuideFromAuth(),
         watchCreateTourFromTourGuide(),
         watchUpdateTourFromFirestore(),
         watchGetNotificationFromFirestore(),
         watchResetPasswordFromAuth()
     ])
 }