import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import { connect } from 'react-redux';
import Cart  from './pages/Cart';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";



function App(props) {
  
  return (
    <div className="App">
       <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
        />
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    productList: state.items
  }
}

// when calling connect funci it return new function.
// and the new function take App as parameter.
export default connect(mapStateToProps)(App);

