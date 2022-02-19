import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home/Index';
import Login from './container/Login/Index';
import Register from './container/Register/Index';
import Product from './container/Product/Index';
import Cart from './container/Cart/Index';
import Products from './container/Products/Index';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/*" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
