import { combineReducers } from 'redux'

import PlaceReducer from './PlaceReducer'
import RedirectReducer from './RedirectReducer'

export default combineReducers({
    PlaceReducer,
    RedirectReducer
});