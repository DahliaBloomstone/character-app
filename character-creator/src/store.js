import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import characters from './reducers/characters';
import characterFormData from './reducers/characterFormData';

const reducers = combineReducers({
  characters,
  characterFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
