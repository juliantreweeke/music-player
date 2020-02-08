import { combineReducers } from 'redux';
import data from './data';
import playing from './playing';
import query from './query';
import simpleReducer from './simpleReducer';
export default combineReducers({
 data,
 playing,
 query,
 simpleReducer
});