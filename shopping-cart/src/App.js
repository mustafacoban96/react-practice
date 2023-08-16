import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import { connect } from 'react-redux';
import Cart  from './pages/Cart';



function App(props) {
  
  return (
    <div className="App">
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

