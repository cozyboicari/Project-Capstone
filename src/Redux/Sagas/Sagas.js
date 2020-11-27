import {
    GET_CITIES_FAIL, GET_CITIES_SUCCESS, GET_CITIES,
    GET_TOURS_FAIL, GET_TOURS_SUCCESS, GET_TOURS,
    LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT,
    REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT,
    LOGIN_FACEBOOK_SUCCESS, LOGIN_FACEBOOK_FAIL, LOGIN_GMAIL_SUCCESS,
    LOGIN_GMAIL_FAIL, LOGIN_GMAIL, LOGIN_FACEBOOK,
    GET_TRAVELER_SUCCESS, GET_TRAVELER, GET_TRAVELER_FAIL,
    UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE, UPDATE_PROFILE_FAIL,
    GET_QUESTION_ACTIVE, GET_QUESTION_ACTIVE_SUCCESS, GET_QUESTION_ACTIVE_FAIL,
    PUSH_QUESTIONS_FAIL, PUSH_QUESTIONS_SUCCESS, PUSH_QUESTIONS,
    GET_TOUR_GUIDE_SUCCESS, GET_TOUR_GUIDE_FAIL, GET_TOUR_GUIDE,
    UPDATE_ITEM_TOUR_GUIDE_SUCCESS, UPDATE_ITEM_TOUR_GUIDE_FAIL, 
    UPDATE_ITEM_TOUR_GUIDE, CREATE_TOUR_FAIL, CREATE_TOUR_SUCCESS, CREATE_TOUR,
    UPDATE_TOUR, UPDATE_TOUR_FAIL, UPDATE_TOUR_SUCCESS,
    GET_NOTIFICATION_FAIL, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION
} from '../Actions/ActionType';

import { takeLatest, put, call, take } from 'redux-saga/effects';
import { 
    getCitiesInCountry, getToursInCity, 
    signInUserByEmail, createUserByEmail,
    signInUserByFacebook, signInUserByGmail, 
    getTraveler, updateTravelerByID,
    getQuestionActiveTourGuide,
    addQuestionActiveTourGuide,
    getTourGuideByID,
    updateTourGuideByID,
    createTour,
    updateTour,
    getNotification
 } from '../../Database/Firebase/ConfigGlobalFirebase';
import { Alert } from 'react-native';

 // get cites in country
function* getCitiesInCountryFromFirestore(action) {
    try {
        const cities = yield getCitiesInCountry(action.path);
        yield put({ type: GET_CITIES_SUCCESS, cities });
    } catch(error) {
        yield put({ type: GET_CITIES_FAIL, error });
    }
}

export function* watchGetCitiesInCountryFromFirestore() {
    yield takeLatest(GET_CITIES, getCitiesInCountryFromFirestore);
}

// get tours in city
function* getToursInCityFromFirestore(action) {
    try {
        const tours = yield getToursInCity(action.path, action.idCity);
        yield put({ type: GET_TOURS_SUCCESS, tours });
    } catch(error) {
        yield put({ type: GET_TOURS_FAIL, error });
    }
}

export function* watchGetToursInCityFromFirestore() {
    yield takeLatest(GET_TOURS, getToursInCityFromFirestore);
}

//get traveler
function* getTravelerFromFirestore() {
    try {
        const traveler = yield getTraveler();
        yield put({ type: GET_TRAVELER_SUCCESS, traveler });
    } catch(error) {
        yield put({ type: GET_TRAVELER_FAIL, error });
    }
}

export function* watchGetTravelerFromFirestore() {
    yield takeLatest(GET_TRAVELER, getTravelerFromFirestore);
}

//update traveler
function* updateTravelerProfileFromFirestore(action) {
    try {
        const profileUpdated = yield updateTravelerByID(action.profile);
        yield put({ type: UPDATE_PROFILE_SUCCESS, profileUpdated });
    } catch(error) {
        yield put({ type: UPDATE_PROFILE_FAIL, error });
    }
}

export function* watchUpdateTravelerProfileFromFirestore() {
    yield takeLatest(UPDATE_PROFILE, updateTravelerProfileFromFirestore);
}

// login user
function* signInUserFromAuth(action) {
    try {
        const user = yield signInUserByEmail(action.user)
            .then(() => {})
            .catch(() => Alert.alert('Thông báo', 'Email hoặc mât khẩu không đúng!'));
        yield put({ type: LOGIN_ACCOUNT_SUCCESS, user });
    } catch (error) {
        yield put({ type: LOGIN_ACCOUNT_FAIL, error });
    }
}

export function* watchSignInUserFromAuth() {
    yield takeLatest(LOGIN_ACCOUNT, signInUserFromAuth);
}

//login facebook
function* signInUserFromFacebook() {
    try {
        const accountFacebook = yield signInUserByFacebook()
            .then(() => console.log('login facebook!'));
        yield put({ type: LOGIN_FACEBOOK_SUCCESS, accountFacebook });
    } catch (error) {
        yield put({ type: LOGIN_FACEBOOK_FAIL, error });
    }
}

export function* watchSignInUserFromFacebook() {
    yield takeLatest(LOGIN_FACEBOOK, signInUserFromFacebook);
}

//login gmail
function* signInUserFromGmail() {
    try {
        const accountGmail = yield signInUserByGmail()
        .then(() => console.log('login gmail!'));
        yield put({ type: LOGIN_GMAIL_SUCCESS, accountGmail });
    } catch (error) {
        yield put({ type: LOGIN_GMAIL_FAIL, error });
    }
}

export function* watchSignInUserFromGmail() {
    yield takeLatest(LOGIN_GMAIL, signInUserFromGmail);
}

// register user
function* signUpUserFromAuth(action) {
    try {
        const newUser = yield createUserByEmail(action.newUser);
        yield put({ type: REGISTER_ACCOUNT_SUCCESS, newUser });
    } catch (error) {
        yield put({ type: REGISTER_ACCOUNT_FAIL, error });
    }
}

export function* watchSignUpUserFromAuth() {
    yield takeLatest(REGISTER_ACCOUNT, signUpUserFromAuth);
}

// get question active tour guide
function* getQuestionActive() {
    try {
        const questions = yield getQuestionActiveTourGuide();
        yield put({ type: GET_QUESTION_ACTIVE_SUCCESS, questions });
    } catch(error) {
        yield put({ type: GET_QUESTION_ACTIVE_FAIL, error });
    }
} 

export function* watchGetQuestionActive() {
    yield takeLatest(GET_QUESTION_ACTIVE, getQuestionActive);
}

// push question tour guide
function* pushQuestionTourGuide(action) {
    try {
        const newQuestions = yield addQuestionActiveTourGuide(action.newQuestions);
        yield put({ type: PUSH_QUESTIONS_SUCCESS, newQuestions });

    } catch(error) {
        yield put({ type: PUSH_QUESTIONS_FAIL, error });
    }
}

export function* watchPushQuestionTourGuide() {
    yield takeLatest(PUSH_QUESTIONS, pushQuestionTourGuide);
}

// get tour guide
function* getTourGuideFromAuth(action) {
    try {
        const tourGuide = yield getTourGuideByID(action.idTourGuide);
        yield put({ type: GET_TOUR_GUIDE_SUCCESS, tourGuide });
    } catch(error) {
        yield put({ type: GET_TOUR_GUIDE_FAIL, error });
    }
}

export function* watchGetTourGuideFromAuth() {
    yield takeLatest(GET_TOUR_GUIDE, getTourGuideFromAuth);
}

// update tour guide
function* updateItemTourGuideFromAuth(action) {
    try {
        const itemsUpdated = yield updateTourGuideByID(action.itemsUpdate);
        yield put({ type: UPDATE_ITEM_TOUR_GUIDE_SUCCESS, itemsUpdated });
    } catch(error) {
        yield put({ type: UPDATE_ITEM_TOUR_GUIDE_FAIL, error });
    }
}

export function* watchUpdateItemTourGuideFromAuth() {
    yield takeLatest(UPDATE_ITEM_TOUR_GUIDE, updateItemTourGuideFromAuth);
}

// create tour for tour guide
function* createTourFromTourGuide(action) {
    try {
        const tour = yield createTour(action.newTour);
        yield put({ type: CREATE_TOUR_SUCCESS, tour });
    } catch(error) {
        yield put({ type: CREATE_TOUR_FAIL, error });
    }
}

export function* watchCreateTourFromTourGuide() {
    yield takeLatest(CREATE_TOUR, createTourFromTourGuide);
}

// update tour
function* updateTourFromFirestore(action) {
    try {
        const tourUpdated = yield updateTour(action.tourUpdate);
        yield put({ type: UPDATE_TOUR_SUCCESS, tourUpdated })
    } catch(error) {
        yield put({ type: UPDATE_TOUR_FAIL, error })
    }
}

export function* watchUpdateTourFromFirestore() {
    yield takeLatest(UPDATE_TOUR, updateTourFromFirestore);
}


// get notification
function* getNotificationFromFirestore() {
    try {
        const notifications = yield getNotification();
        yield put({ type: GET_NOTIFICATION_SUCCESS, notifications });
    } catch(error) {
        yield put({ type: GET_NOTIFICATION_FAIL, error });
    }
}

export function* watchGetNotificationFromFirestore() {
    yield takeLatest(GET_NOTIFICATION, getNotificationFromFirestore);
}