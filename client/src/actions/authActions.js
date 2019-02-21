import axios from 'axios';
import { setAuthToken } from '../utils/setAuthToken';
import { GET_ERRORS } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login user and get token
export const userLogin = (userLoginData, history) => dispatch => {
    axios.post('/api/users/login', userLoginData)
        .then(res => {
            // Save to localstorage
            const { token } = res.data;
            // Set token to local storage
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            res.history.push('/');
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}