import { connect } from 'react-redux';
import { getCitiesAction } from '../Actions/index';

import HomeComponent from '../../Components/Home/Home';

const mapStateToProps = state => {
    return {
        cities: state.citiesReducers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onGetCities: path => {
            dispatch(getCitiesAction(path));
        },
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;