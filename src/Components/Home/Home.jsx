import React from 'react'
import { Navbar } from '../../Components/Homepage1/Navbar';
import { SimpleSlider } from '../Homepage2/Slider1';
import { Slider2 } from '../../Components/Homepage2/slider2';
import { ShopByCategory } from '../Homepage2/ShopByCategory';
import { Slider3 } from '../Homepage2/slider3';
import{Slider4}  from "../Homepage2/slider4"
import { Slider5 } from '../Homepage2/Slider5';
import { Slider6 } from '../Homepage2/slider6';
import { Featurebrands } from '../Homepage2/Featurebrands';
import { Slider7 } from '../Homepage2/slider7';
import { useDispatch } from "react-redux";
import { getCartData } from "../Allproducts/AllProductsAction";
import Footer from '../Footer/Footer';
export const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCartData())
  },[])
  return (
      <>
    <Navbar/>
    <SimpleSlider/>
    <Slider2/>
    <ShopByCategory/>
    <Slider3/>
    <Slider4/>
    <Slider5/>
    <Slider6/>
    <Featurebrands/>
      <Slider7 />
      <Footer />
    </>
  )
}

