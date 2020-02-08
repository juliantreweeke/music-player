import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState={
    playing: false, query: '', data: null
}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}