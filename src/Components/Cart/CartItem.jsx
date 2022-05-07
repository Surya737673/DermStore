import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { TD } from "../../Styled-components/Style";
import { BsX } from "react-icons/bs";
import { deleteProduct ,updateQty} from "./Cart_Action";
const CartItem = ({ image, title, qty, price, id }) => {
    const myState = useSelector((state) => state.cartReducer.cartProducts)
    const dispatch = useDispatch();
  return (
    <>
          <tr>
              <td><img width="100px" height="100px"src={image} alt="pic" /></td>
              <td>
                  <p>{title}</p>
                  <p>In Stock - Usualy dispatched within 24 hours</p>
              </td>
              <td>{`$${price}`}</td>
              <TD style={{marginTop:"15px"}}>
                  <button onClick={()=> dispatch(updateQty(id,qty,-1))}>-</button>
                  <p>{qty}</p>
                  <button onClick={()=> dispatch(updateQty(id,qty,1))}>+</button>
              </TD>
              <td>{`$${price * qty}`}</td>
              <td><span onClick={()=> dispatch(deleteProduct(id,myState))}><BsX /></span></td>
      </tr>
    </>
  );
};

export default CartItem;
