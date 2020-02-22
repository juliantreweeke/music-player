import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../ducks/index.js';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);