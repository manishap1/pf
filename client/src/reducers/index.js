import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import { Reducers } from 'react-redux-grid';
const rootReducer = combineReducers({
 form ,
 auth : authReducer,
 grid: Reducers.Grid
});

export default rootReducer;
