import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../ducks/index.js';
export default function configureStore() {
 return createStore(
   rootReducer,
   applyMiddleware(thunk)
 );
}
