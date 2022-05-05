import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { CartProduct } from '../../Styled-components/Style';
import { getCartProducts } from "../Cart/Cart_Action";
const CheckoutProducts = () => {
    const myState = useSelector((state) => state.cartReducer.cartProducts);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getCartProducts());
    }, []);

    if (myState.length >0) {
        const total = myState.reduce((a, b) => {
            console.log(a.price)
            return a.price + b.price;
        })
        // console.log(total)
    }
   
  return (
      <CartProduct >
          <div className="one">
              <p>Order Summary</p>
              <p>{myState.length} items</p>
          </div>
          <p>Order Number : 401934252</p>
          <div className='two'>
              {myState.map(elem => {
                  return (
                      <div key={elem.id}>
                          <div>
                              <img src={elem.image} alt="" />
                          </div>
                          <div>
                              <p>{elem.title}</p>
                              <p>{elem.price* elem.qty}</p>
                          </div>
                          
                      </div>
               )
           })}
          </div>
          <div className="three">
              <p>Delivery</p>
              <p>Calculated at next step</p>
          </div>
          <div className="four">
              <select name="" id="">
                  <option value="">Savings</option>
              </select>
          </div>
          <div>
              <h3>Total Pay</h3>
              <p>Total</p>
          </div>
        </CartProduct>
  )
}

export default CheckoutProducts;