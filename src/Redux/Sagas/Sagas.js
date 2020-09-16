import { 
    REGISTER_FAIL,  REGISTER_SUCCESS, REGISTER, 
    LOGIN_SUCCESS, LOGIN_FAIL, LOGIN,
    GET_DATA_VIETNAM, GET_DATA_VIETNAM_SUCCESS, GET_DATA_VIETNAM_FAIL
} from '../Actions/ActionTypes';

import { takeLatest, put, call } from 'redux-saga/effects';

import { postAuthEmailAndPassword, getAuthEmailAndPassword, getFirestore } from '../../Database/Firebase/ConfigGlobalFirebase';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

//post user to Auth
function* postNewUserToAuth(action) {
    try {
        const response = yield call(postAuthEmailAndPassword(action.user.email, action.user.password));
        yield put({ type: REGISTER_SUCCESS, response });

    } catch (error) {
        yield put({ type: REGISTER_FAIL, error });
    }
}

export function* watchPostNewUserFromAuth() {
    yield takeLatest(REGISTER, postNewUserToAuth);
}

//get user from auth
function* getUserFromAuth(action) {
    try {
        const response = yield call(getAuthEmailAndPassword(action.user.email, action.user.password));
        yield put({ type: LOGIN_SUCCESS, response});
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error })
    }
}

export function* watchGetUserFromAuth() {
    yield takeLatest(LOGIN, getUserFromAuth);
}

//get data vietnam
function* getDataVietnam(action) {
    try {
        const vietnam = yield getFirestore(action.nameCollection);
        yield put({ type: GET_DATA_VIETNAM_SUCCESS, vietnam });
        
    } catch (error) {
        yield put({ type: GET_DATA_VIETNAM_FAIL, error });
    }
}

export function* watchGetDataVietnam() {
    yield takeLatest(GET_DATA_VIETNAM, getDataVietnam);
}