import { GET_RESERVATION, ADD_RESERVATION, DELETE_RESERVATION, RESERVATION_LOADING } from '../actions/types';

const initialState = {
    reservation: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RESERVATION: 
        return {
            ...state,
            reservation: action.payload,
            loading: false
        }
        case DELETE_RESERVATION: 
        return {
            ...state,
            reservation: state.reservation.filter(reservation => reservation._id !== action.payload)
        }
        case ADD_RESERVATION:
        return {
            ...state,
            reservation: [action.payload, ...state.reservation]
        }
        case RESERVATION_LOADING: 
        return {
            ...state,
            loading: true
        }
        default:
        return state;
    }
}
