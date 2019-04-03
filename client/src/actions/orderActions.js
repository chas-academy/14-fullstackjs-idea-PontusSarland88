import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, GET_ORDERS } from './types';

// export const registerProduct = (productData, history) => (dispatch) => {
//   axios.post('/api/products/create', productData)
//     .then(res => history.push('/dashboard'))
//     .catch(err => dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data,
//     }));
// };

export const updateOrder = (updatedOrder, history) => (dispatch) => {
  axios.put(`/api/orders/update/${updatedOrder.id}`, updatedOrder)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const setAllOrders = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders,
  };
};

export const getAllActiveOrders = () => (dispatch) => {
  axios.get('/api/orders/all/active')
    .then((res) => {
      dispatch(setAllOrders(res.data));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// export const deleteProduct = (productToDeleteId, history) => (dispatch) => {
//   axios.delete(`/api/products/delete/${productToDeleteId}`)
//     .then(() => history.push('/dashboard'))
//     .catch(err => dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data,
//     }));
// };

// export const removeAllProducts = () => (dispatch) => {
//   dispatch(setAllProducts({}));
// };
