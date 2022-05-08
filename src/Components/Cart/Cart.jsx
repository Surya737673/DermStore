import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import OffersInCart from './OffersInCart';
import { getCartProducts } from "./Cart_Action";
import CartItem from './CartItem';
import { TABLE ,TD,MainContainer} from "../../Styled-components/Style";
import GiftSelection from './GiftSelection';
import { Navbar } from '../Homepage1/Navbar';
import Footer from '../Footer/Footer';
const Cart = () => {
  const myState = useSelector((state) => state.cartReducer.cartProducts)
  console.log(myState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts())
  },[])

  return (
    <>
      <Navbar />
      <OffersInCart />
      <MainContainer>
      <TABLE>
        <thead>
          <tr>
            <td>Items</td>  
            <td></td>
              <td>Price</td>        
              <TD>Quantity</TD>      
              <td>Subtotal</td>         
          </tr>
        </thead>
        <tbody>
          {myState.map(elem => {
            return <CartItem key={elem.id} {...elem}/>
          })}
        </tbody>
        </TABLE>
        <div className="div">
        <GiftSelection />
        <GiftSelection />
        </div>
  
      </MainContainer>
<Footer />
    </>
  )
}

export default Cart