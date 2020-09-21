import { all } from 'redux-saga/effects';

import { 
    watchPostNewUserFromAuth, 
    watchGetUserFromAuth, 
    watchGetDataVietnam,
    watchGetTourGuides } from './Sagas';

export default function* rootSaga() {
    yield all([
        watchPostNewUserFromAuth(),
        watchGetUserFromAuth(),
        watchGetDataVietnam(),
        watchGetTourGuides()
    ])
}