import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getarrivalProductsData } from "../redux/action";
import { useEffect } from "react";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useRef } from "react";

export const Slider6=()=>{

    const sliderref=useRef(null)
    const products=useSelector((state)=>(state.productsofarrival.productsofarrival))
const dispatch=useDispatch()
console.log(products)


useEffect(()=>{
    dispatch(getarrivalProductsData())
},[dispatch])

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows:false,
      autoplay: true,
        autoplaySpeed: 3000,
      cssEase: "ease-in-out"
    };
    return (
        <>
        <div className="slider6_up">
            <h5 className="slider6_head">New Arrivals</h5>
            <h5 className="slider6_head">AAPI-Founded Brands</h5>
            <h5 className="slider6_head">SPF</h5>
        </div>
        <hr style={{margin:"auto",width:"26%",marginTop:"-1%"}}></hr>
        
        <div className="slider2flex_div">
       <ArrowBackIosNewSharpIcon onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1"/>
      <div className="slider3_mainDiv">
        <Slider  ref={sliderref} {...settings}>
            {
        products.map((item)=>(
            <div className="div" key={item.id}>
                <div className="slider3_imgdiv">
                   <img src={item.image} alt="" style={{width:"86%"}} />
                </div>
                <div >
                   <h6 style={{fontSize:"16px",fontWeight:"lighter",color:"black"}}>{item.title}</h6>
                   </div>
                  <button style={{width:"30%",marginTop:"2%",fontWeight:"lighter"}}>New Arrival</button>
                   <p style={{fontSize:"14px",fontWeight:"bold",}}>Price:${item.price}</p>
                
                <div className="slider_button">
                <button style={{width:"98%",fontSize:"16px",backgroundColor:"black",color:"white",height:"50px"}}>QUICKBUY</button>
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