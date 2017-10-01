import { combineReducers } from 'redux';
import auth from './Auth';
import place from './Place';

export default combineReducers({
    auth,
    place
});