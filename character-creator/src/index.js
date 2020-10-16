import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';

//import charactersReducer from './reducers/charactersReducer.js';

//const store = createStore(charactersReducer, applyMiddleware(thunk))

import './index.css';
import App from './App';
//import renderRoutes from './routes'

//import * as serviceWorker from './serviceWorker';
//import { Provider } from 'react-redux'
//import store from './store.js'
//import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



//ReactDOM.render(
  //<Provider store={store}>
 //   <App />
 // </Provider>,
 // document.getElementById('root')
//);