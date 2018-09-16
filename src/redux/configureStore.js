import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

export const configureStore = state => createStore(
  reducer,
  state,
  applyMiddleware(thunkMiddleware)
);
