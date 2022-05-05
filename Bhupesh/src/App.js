import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <>
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Cart />
      <Checkout />
    </>
  );
}

export default App;
