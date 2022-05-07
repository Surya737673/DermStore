import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gettrendingProductsData } from "../redux/action";
import { useEffect } from "react";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useRef } from "react";

export const Slider5=()=>{

    const sliderref=useRef(null)
    const products=useSelector((state)=>(state.productsoftrending.productsoftrending))
const dispatch=useDispatch()
console.log(products)


useEffect(()=>{
    dispatch(gettrendingProductsData())
},[dispatch])

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      
    };
    return (
        <>
        <h1 style={{fontSize:"20px",marginTop:"10%",fontWeight:"500"}}>Now Trending</h1>
        <div className="slider2flex_div">
       <ArrowBackIosNewSharpIcon onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1"/>
      <div className="slider3_mainDiv">
        <Slider  ref={sliderref} {...settings}>
            {
        products.map((item)=>(
            <div className="div" key={item.id}>
                <div >
                   <img src={item.image} alt="" style={{width:"86%"}} />
                </div>
                <div >
                   <h6 style={{fontSize:"16px",fontWeight:"600",color:"black",textDecoration:"underline"}}>{item.title}</h6>
                   </div>
              
               
            </div>
        ))
        }
        </Slider>
            
      </div>
      <ArrowForwardIosSharpIcon onClick={()=>sliderref.current.slickNext()} className="arrowbutt1"/>
      </div>
      </>
    );
  
}