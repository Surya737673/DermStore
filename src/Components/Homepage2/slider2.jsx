import React  from "react";

import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
// import {getProductsData} from "../redux/action"
import "./homepage2.css"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Link } from "react-router-dom";



export const Slider2=()=> {
 const sliderref=useRef(null)
// const products=useSelector((state)=>(state.productsofskinMedica.productsofskinMedica))
const dispatch=useDispatch()


useEffect(()=>{
// dispatch(getProductsData())
},[dispatch])
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,autoplay: true,
      autoplaySpeed: 3000,
    cssEase: "ease-in-out"
    };
    return (
      <>
      
  
    <h3>15% off + Extra 20% Off Auto-Replenishment on SkinMedica</h3>
    <p>Save on top skin care formulas rooted in science and created by dermatologists. Plus, receive a Skinmedica Vitamin C+E Complex 0.25 oz ($29 value) when you spend $160 or more on the brand.</p>
  <div className="slider2flex_div">   
      <div>
           <img src="https://static.thcdn.com/images/medium/webp/widgets/208-us/10/0428-STDCRE-35244-DS-MB-Dermstore-May-Photography-THG0034748-PRIORITY-SHOTS-16-HP_LPSQ_BANNER_676x556-041110.jpg" alt=""  style={{width:"90%",height:"420px",marginLeft:"5%"}}/>
      </div>
      <ArrowBackIosNewSharpIcon  onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1" />
      <div className="slider2_maindiv">
        <Slider ref={sliderref} {...settings}>
        {/* {
          products.map((item)=>( 
              <div className="div" key={item.id}>
                <div className="img_div">
                  <img src={item.image} alt="" style={{width:"100%",height:"250px"}}/>
                  </div>
                   <div>
                   <h6 style={{fontSize:"14px",fontWeight:"lighter"}}>{item.title}</h6>
                   <p style={{fontSize:"14px",marginTop:"-4%",fontWeight:"bold",}}>Reviews:{item.reviews}</p>
                   <p style={{fontSize:"14px",marginTop:"-4%",fontWeight:"bold",textDecoration:"line-through"}}>MSRP:${item.MSRP}</p>
                   <p style={{fontSize:"14px",marginTop:"-4%",fontWeight:"bold",}}>Price:${item.price}</p>
                   <button style={{width:"98%",fontSize:"16px",backgroundColor:"black",color:"white"}}>QUICKBUY</button>
                   </div>
              
              </div>
           
          
          ))
        } */}
        </Slider>
      </div>
      <ArrowForwardIosSharpIcon   onClick={()=>sliderref.current.slickNext()} className="arrowbutt1"/>
  </div>
      </>
    );
 
}