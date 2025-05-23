// apiReducer.js

import { API_REQUEST, API_SUCCESS, API_FAILURE } from './actionTypes';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Reducer to handle API request states
const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case API_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
