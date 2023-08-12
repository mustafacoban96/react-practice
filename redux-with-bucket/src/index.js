import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// we import createStore for connection myApp to redux ->1
import { createStore } from 'redux';
// ->3 
import {reducer} from './reducers/index'
//->4
import { Provider } from 'react-redux';

//  state is managed by one global store.->2
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //we wrap app witn provider to all of components access the state. ->4
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

