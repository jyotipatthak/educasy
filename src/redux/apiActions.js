// apiActions.js

import { API_REQUEST, API_SUCCESS, API_FAILURE } from './actionTypes';
import NetworkApi from './NetworkApi';  // Import your NetworkApi

// Action creator for API request
const apiRequest = () => ({
  type: API_REQUEST,
});

// Action creator for successful API response
const apiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

// Action creator for failed API response
const apiFailure = (error) => ({
  type: API_FAILURE,
  payload: error,
});

// Thunk function to make the API request
export const makeApiRequest = (method, endpoint, data = {}) => async (dispatch) => {
  dispatch(apiRequest());

  try {
    let response;

    // Call appropriate NetworkApi function based on the method
    switch (method.toLowerCase()) {
      case 'get':
        response = await NetworkApi.get(endpoint);
        break;
      case 'post':
        response = await NetworkApi.post(endpoint, data);
        break;
      case 'put':
        response = await NetworkApi.put(endpoint, data);
        break;
      case 'delete':
        response = await NetworkApi.delete(endpoint);
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    dispatch(apiSuccess(response));
    return response;
  } catch (error) {
    dispatch(apiFailure(error.message || error));
    throw error;
  }
};
