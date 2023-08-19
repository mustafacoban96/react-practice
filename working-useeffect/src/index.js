import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import { Post } from './Post';
import User from './User';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/posts' element={<Post/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/users/1' element={<User/>}/>
        <Route path='/users/2' element={<User/>}/>
        <Route path='/users/3' element={<User/>}/>
      </Routes>
    </Router>
    
    // <App />
  // </React.StrictMode>
);

