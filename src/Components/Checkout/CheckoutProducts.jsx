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

    let total;
    if (myState.length >0) {
        total = myState.reduce((a, b) => {
            return a + b.price*b.qty;
        },0)
        console.log(total)
    } else {
        total = 0;
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
                      <div style={{marginTop:"10px"}} key={elem.id}>
                          <div>
                              <img style={{marginRight:"10px"}} width="80px" height="80px" src={elem.image} alt="" />
                          </div>
                          <div>
                              <p>{elem.title}</p>
                              <p>${elem.price* elem.qty}</p>
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
              <p>${total}</p>
          </div>
        </CartProduct>
  )
}

export default CheckoutProducts;