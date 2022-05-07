import React from "react";
import { CheckoutContainer,LOGO } from "../../Styled-components/Style";
import CheckoutProducts from "./CheckoutProducts";
import ShipingAddress from "./ShipingAddress";

const Checkout = () => {
  return (
      <div style={{backgroundColor:"#F2F2F2"}}>
          <LOGO>
              <div>
              <img width="40px" height="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzPCqdrvQZ5csf458OOYjPzjVx6mD0sI2dA&usqp=CAU" alt="" />
              <h3>DERMSTORE</h3>
              </div>
      </LOGO>
      <CheckoutContainer>
        <ShipingAddress />
        <CheckoutProducts />
      </CheckoutContainer>
      
    </div>
  );
};

export default Checkout;
