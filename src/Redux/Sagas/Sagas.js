import {
    GET_CITIES_FAIL, GET_CITIES_SUCCESS, GET_CITIES,
    GET_TOURS_FAIL, GET_TOURS_SUCCESS, GET_TOURS,
    LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT,
    REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT,
    LOGIN_FACEBOOK_SUCCESS, LOGIN_FACEBOOK_FAIL, LOGIN_GMAIL_SUCCESS,
    LOGIN_GMAIL_FAIL, LOGIN_GMAIL, LOGIN_FACEBOOK
} from '../Actions/ActionType';

import { takeLatest, put, call, take } from 'redux-saga/effects';
import { 
    getCitiesInCountry, getToursInCity, 
    signInUserByEmail, createUserByEmail,
    signInUserByFacebook, signInUserByGmail
 } from '../../Database/Firebase/ConfigGlobalFirebase';

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

// login user
function* signInUserFromAuth(action) {
    try {
        const user = yield signInUserByEmail(action.user);
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