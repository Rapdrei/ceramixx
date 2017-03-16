import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as formReducer} from 'redux-form';
import TestReducer from './Test';


const allReducers = combineReducers ({
  test: TestReducer,
  routing: routerReducer
});

export default allReducers;
