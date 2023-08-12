import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Product from './components/Products';
import Cart from './components/Cart';
import { connect } from 'react-redux';




function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>

    </div>
  );
}


// when calling connect funci it return new function.
// and the new function take App as parameter.
export default connect()(App);
