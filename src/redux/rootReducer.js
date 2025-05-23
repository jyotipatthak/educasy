// rootReducer.js

import { combineReducers } from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  api: apiReducer,  // Assuming the API state is stored here
});

export default rootReducer;
