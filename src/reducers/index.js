// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import presentation from './presentation';
import authentication from './authentication';
import voteReducer from './vote';
import admin from './admin';
import {reducer as formReducer} from 'redux-form';




const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer
});


export default rootReducer;
