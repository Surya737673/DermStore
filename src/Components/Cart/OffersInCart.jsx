import React from 'react';
import { Button, Container ,ColoredBox} from "../../Styled-components/Style";
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AiFillBell } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const OffersInCart = () => {
    const navigate = useNavigate();
    return (
      <div style={{marginTop: "40px"}}>
            <Container>
                <div>
                <p>Your Cart</p>
                <Button onClick={() => navigate("/checkout")} padding="8px 30px"><span><AiFillLock /></span>CHECKOUT SECURELY NOW</Button>
                </div>
                <ColoredBox textColor="#267BB5" linkColor="#F7A193" iconBackGround="#267BA5">
                    <section><AiFillBell /></section>
                    <h4>Treat yourself to a SkinMedica AHA/BHA Exfoliating Cleanser. Worth $48- NOW $40.80</h4>
                    <Link to="">-Add To Cart</Link>
                </ColoredBox>
                <ColoredBox textColor="#007D1E" linkColor="#007D1E" h4Span="#007D1E" iconBackGround="#007D1E">
                    <section><BsCheckLg /></section>
                    <h4><span>You have qualified for:</span>Choose your gift with any purchase over $100</h4>
                    <Link to="">-Don't forget to make your selection below</Link>
                </ColoredBox>
                <ColoredBox textColor="#007D1E" linkColor="#007D1E" iconBackGround="#007D1E">
                    <section><BsCheckLg /></section>
                    <h4><span>You have qualified for:</span>Choose your gift with any purchase over $175</h4>
                    <Link to="">-Don't forget to make your selection below</Link>
                </ColoredBox>
                <ColoredBox textColor="#007D1E" h4Span="#007D1E" iconBackGround="#007D1E">
                    <section><BsCheckLg /></section>
                    <h4><span>You have qualified for:</span>Receive a Skinmedica Vitamin C+E Complex 0.25 oz ($29 value) when you spend $160 or more on the brand.</h4>
                </ColoredBox>
          </Container>
      </div>
      
  )
}

export default OffersInCart