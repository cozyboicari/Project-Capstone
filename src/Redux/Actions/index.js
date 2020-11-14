import { 
    GET_CITIES, GET_CITIES_FAIL, GET_CITIES_SUCCESS,
    GET_TOURS, GET_TOURS_FAIL, GET_TOURS_SUCCESS,
    LOGIN_ACCOUNT, LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS,
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS,
    LOGIN_FACEBOOK, LOGIN_FACEBOOK_FAIL, LOGIN_FACEBOOK_SUCCESS,
    LOGIN_GMAIL, LOGIN_GMAIL_FAIL, LOGIN_GMAIL_SUCCESS,
    GET_TRAVELER, GET_TRAVELER_FAIL, GET_TRAVELER_SUCCESS,
    UPDATE_PROFILE, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS,
    GET_QUESTION_ACTIVE, GET_QUESTION_ACTIVE_FAIL, GET_QUESTION_ACTIVE_SUCCESS,
    PUSH_QUESTIONS, PUSH_QUESTIONS_FAIL, PUSH_QUESTIONS_SUCCESS,
    GET_TOUR_GUIDE, GET_TOUR_GUIDE_FAIL, GET_TOUR_GUIDE_SUCCESS,
    UPDATE_ITEM_TOUR_GUIDE, UPDATE_ITEM_TOUR_GUIDE_FAIL, UPDATE_ITEM_TOUR_GUIDE_SUCCESS,
    CREATE_TOUR, CREATE_TOUR_FAIL, CREATE_TOUR_SUCCESS,
} from './ActionType';

//get cities in country
export const getCitiesAction = path => {
    return { 
        type: GET_CITIES,
        path
    }
}

export const getCitiesSuccessAction = cities => {
    return {
        type: GET_CITIES_SUCCESS,
        cities
    }
}

export const getCitiesFailAction = error => {
    return {
        type: GET_CITIES_FAIL,
        error
    }
}

// get tours in city
export const getToursAction = (path, idCity) => {
    return {
        type: GET_TOURS,
        path,
        idCity
    }
}

export const getToursSuccessAction = tours => {
    return {
        type: GET_TOURS_SUCCESS,
        tours
    }
}

export const getToursFailAction = error => {
    return {
        type: GET_TOURS_FAIL,
        error
    }
}

// get traveler
export const getTravelerAction = () => {
    return {
        type: GET_TRAVELER
    }
}

export const getTravelerSuccessAction = traveler => {
    return {
        type: GET_TRAVELER_SUCCESS,
        traveler
    }
}

export const getTravelerFailAction = error => {
    return {
        type: GET_TRAVELER_FAIL,
        error
    }
}

//update profile
export const updateProfileAction = profile => {
    return {
        type: UPDATE_PROFILE,
        profile
    }
}

export const updateProfileSuccessAction = profileUpdated => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        profileUpdated
    }
}

export const updateProfileFailAction = error => {
    return {
        type: UPDATE_PROFILE_FAIL,
        error
    }
}

// login
export const loginAction = user => {
    return {
        type: LOGIN_ACCOUNT,
        user
    }
}

export const loginSuccessAction = user => {
    return {
        type: LOGIN_ACCOUNT_SUCCESS,
        user
    }
}

export const loginFailAction = error => {
    return {
        type: LOGIN_ACCOUNT_FAIL,
        error
    }
}

// login facebook
export const loginFacebookAction = () => {
    return {
        type: LOGIN_FACEBOOK,
    }
}

export const loginFacebookSuccessAction = accountFacebook => {
    return {
        type: LOGIN_FACEBOOK_SUCCESS,
        accountFacebook
    }
}

export const loginFacebookFailAction = error => {
    return {
        type: LOGIN_FACEBOOK_FAIL,
        error
    }
}

// login gmail
export const loginGmailAction = () => {
    return {
        type: LOGIN_GMAIL,
    }
}

export const loginGmailSuccessAction = accountGmail => {
    return {
        type: LOGIN_GMAIL_SUCCESS,
        accountGmail
    }
}

export const loginGmailFailAction = error => {
    return {
        type: LOGIN_GMAIL_FAIL,
        error
    }
}

// register
export const registerAction = newUser => {
    return {
        type: REGISTER_ACCOUNT,
        newUser
    }
}

export const registerSuccessAction = user => {
    return {
        type: REGISTER_ACCOUNT_SUCCESS,
        user
    }
}

export const registerFailAction = error => {
    return {
        type: REGISTER_ACCOUNT_FAIL,
        error
    }
}

// get question active tour guide
export const getQuestionActiveAction = () => {
    return {
        type: GET_QUESTION_ACTIVE
    }
}

export const getQuestionActiveSuccessAction = questions => {
    return {
        type: GET_QUESTION_ACTIVE_SUCCESS,
        questions
    }
}

export const getQuestionActiveFailAction = error => {
    return {
        type: GET_QUESTION_ACTIVE_FAIL,
        error
    }
}

// push question tour guide
export const pushQuestionsAction = newQuestions => {
    return {
        type: PUSH_QUESTIONS,
        newQuestions
    }
}

export const pushQuestionsSuccessAction =  questions => {
    return {
        type: PUSH_QUESTIONS_SUCCESS,
        questions
    }
}

export const pushQuestionsFailAction = error => {
    return {
        type: PUSH_QUESTIONS_FAIL,
        error
    }
}

//get tour guide
export const getTourGuideAction = idTourGuide => {
    return {
        type: GET_TOUR_GUIDE,
        idTourGuide
    }
}

export const getTourGuideSuccessAction = tourGuide => {
    return {
        type: GET_TOUR_GUIDE_SUCCESS,
        tourGuide
    }
}

export const getTourGuideFailAction = error => {
    return {
        type: GET_TOUR_GUIDE_FAIL,
        error
    }
}

// update item tour guide
export const updateItemTourGuideAction = itemsUpdate => {
    return {
        type: UPDATE_ITEM_TOUR_GUIDE,
        itemsUpdate
    }
}

export const updateItemTourGuideSuccessAction = itemsUpdated => {
    return {
        type: UPDATE_ITEM_TOUR_GUIDE_SUCCESS,
        itemsUpdated
    }
}

export const updateItemTourGuideFailAction = error => {
    return {
        type: UPDATE_ITEM_TOUR_GUIDE_FAIL,
        error
    }
}

// create tour for tour guide
export const createTourAction = newTour => {
    return {
        type: CREATE_TOUR,
        newTour
    }
}

export const createTourSuccessAction = tour => {
    return {
        type: CREATE_TOUR_SUCCESS,
        tour
    }
}

export const createTourFailAction = error => {
    return {
        type: CREATE_TOUR_FAIL,
        error
    }
}