import {
    GET_CITIES_FAIL, GET_CITIES_SUCCESS, GET_CITIES
 } from '../Actions/ActionType';

const citiesReducers = (cities = [], action) => {
    switch(action.type) {
        case GET_CITIES_SUCCESS: 
            return action.cities;
        case GET_CITIES_FAIL: 
            return [];
        default:
            return cities;
    }
}

export default citiesReducers;