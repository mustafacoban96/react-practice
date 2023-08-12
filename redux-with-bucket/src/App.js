import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Product from './components/Products';
import Cart from './components/Cart';
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

export default App;
