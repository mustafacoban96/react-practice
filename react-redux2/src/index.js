import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


store.dispatch(fetchUsers())
store.dispatch(fetchPosts())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  
);

