import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    reservation: reservationReducer,
    error: errorReducer, 
    auth: authReducer
});
