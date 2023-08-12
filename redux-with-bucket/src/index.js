import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// we import createStore for connection myApp to redux ->1
import { createStoreHook } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

