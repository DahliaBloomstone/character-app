//importing modules 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

//store must be provided
//wrap my app with provider 
//access to everything in our app
//passing elements we want to render, and where in the real dom we want to render this 
//react dom renders react element 
//use plain javascript to reference store elements
//if you inspect, you can see the div id is root  
//rendering everything in the store 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') 
);

registerServiceWorker();
