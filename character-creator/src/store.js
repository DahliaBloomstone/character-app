import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import characters from './reducers/characters';
import characterFormData from './reducers/characterFormData';

const reducers = combineReducers({
  characters,
  characterFormData
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//thunk middleware asych web requests for data 
//fetch data returns a promise, some value 
//updates store w returned data 
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
