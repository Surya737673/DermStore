import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Allproduct from './Components/Allproducts/AllProduct';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import { Home } from "./Components/Home/Home.jsx";
import Login from './Components/LoginSignup/Login';
import Registration from './Components/LoginSignup/Registration';
import Skincare from './Components/skincare/Skincare';

function App() {
  return (
    <>
        
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/haircare" element={<Allproduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
      {/* <Cart /> */}
      {/* <Checkout /> */}

    </>
  );
}

export default App;
