import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import { Home } from "./Components/Home/Home.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      {/* <Cart /> */}
      {/* <Checkout /> */}
      
    </>
  );
}

export default App;
