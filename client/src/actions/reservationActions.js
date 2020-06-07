import axios from 'axios';
import { GET_RESERVATION, ADD_RESERVATION, DELETE_RESERVATION, RESERVATION_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getReservation = () => dispatch => {
    dispatch(setReservationLoading);
    axios
        .get('/api/customer')
        .then(res => 
            dispatch({
                type: GET_RESERVATION,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteReservation = id => (dispatch, getState) => {
    axios
        .delete(`/api/customer/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_RESERVATION,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addReservation = reservation => (dispatch, getState) => {
    axios
        .post('/api/customer', reservation, tokenConfig(getState))
        .then(res => dispatch(
            {
                type: ADD_RESERVATION,
                payload: res.data
            }
        ))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setReservationLoading = () => {
    return {
        type: RESERVATION_LOADING
    }
}
