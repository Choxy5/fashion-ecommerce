import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home/Index';
import Login from './container/Login/Index';
import Register from './container/Register/Index';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
