import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS } from './types';

export const registerProduct = (productData, history) => (dispatch) => {
  axios.post('/api/products/create', productData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const updateProduct = (updatedProduct, history) => (dispatch) => {
  axios.post('/api/products/update/{updatedProduct.id}', updateProduct)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
