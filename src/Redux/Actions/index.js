import { 
    REGISTER, REGISTER_FAIL, REGISTER_SUCCESS,
    LOGIN, LOGIN_FAIL, LOGIN_SUCCESS,
    GET_DATA_VIETNAM, GET_DATA_VIETNAM_FAIL, GET_DATA_VIETNAM_SUCCESS,
    GET_DATA_TOUR_GUIDES, GET_DATA_TOUR_GUIDES_SUCCESS, GET_DATA_TOUR_GUIDES_FAIL
} from './ActionTypes';


//action sign up
export const registerAction = newUser => {
    return {
        type: REGISTER,
        user: newUser
    }
}

export const registerSuccessAction = user => {
    return {
        type: REGISTER_SUCCESS,
        user
    }
}

export const registerFailAction = error => {
    return {
        type: REGISTER_FAIL,
        error
    }
}

// action sign in
export const loginAction = user => {
    return {
        type: LOGIN,
        user
    }
}

export const loginSuccessAction = response => {
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

export const loginFailAction = error => {
    return {
        type: LOGIN_FAIL,
        error
    }
}

// action get data vietnam
export const getDataVietnamAction = nameCollection => {
    return {
        type: GET_DATA_VIETNAM,
        nameCollection
    }
}

export const getDataVietnamSuccessAction = vietnam => {
    return {
        type: GET_DATA_VIETNAM_SUCCESS,
        vietnam
    }
}

export const getDataVietnamFailAction = error => {
    return {
        type: GET_DATA_VIETNAM_FAIL,
        error
    }
}

// action get data tourguides
export const getDataTourGuides = nameCollection => {
    return {
        type: GET_DATA_TOUR_GUIDES,
        nameCollection
    }
}

export const getDataTourGuidesSuccess = tourguides => {
    return {
        type: GET_DATA_TOUR_GUIDES_SUCCESS,
        tourguides
    }
}

export const getDataTourGuidesFail = error => {
    return {
        type: GET_DATA_TOUR_GUIDES_FAIL,
        error
    }
}