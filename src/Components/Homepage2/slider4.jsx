import React  from "react";

import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {getNeocuticsProductsData} from "../redux/action"
import "./homepage2.css"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { postProductsData } from '../Allproducts/AllProductsAction';


export const Slider4=()=> {
 const sliderref=useRef(null)
  const products = useSelector((state) => (state.productsofneocutis.productsofneocutis))
  console.log(products)
const dispatch=useDispatch()


useEffect(()=>{
dispatch(getNeocuticsProductsData())
},[dispatch])
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 3000,
    cssEase: "ease-in-out"
    };
    return (
      <>
      
  
    <h3 style={{textAlign: "center",margin:"30px 0px"}}>Meet BIOEFFECT</h3>
    <p style={{textAlign: "center",margin:"20px 0px"}}>The epidermal growth factor-based brand aimed at restoring skin’s natural vitality. Plus, spend $100 or more & get their youth-boosting EGF SERUM for free.</p>
  <div className="slider2flex_div">   
      <div>
           <img src="https://static.thcdn.com/images/medium/webp/widgets/208-us/34/BioPelle_NBL-075734.png" alt=""  style={{width:"90%",height:"420px",marginLeft:"5%"}}/>
      </div>
      <ArrowBackIosNewSharpIcon  onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1" />
      <div className="slider2_maindiv">
        <Slider ref={sliderref} {...settings}>
        {
          products.map((item)=>( 
              <div className="div" key={item.id}>
                <div className="img_div">
                  <img src={item.image} alt="" style={{width:"100%",height:"200px"}}/>
                  </div>
                   <div>
                   <h6 style={{fontSize:"14px",fontWeight:"lighter"}}>{item.title}</h6>
                   <p style={{fontSize:"14px",fontWeight:"bold",}}>Reviews:{item.reviews}</p>
                   {/* <p style={{fontSize:"14px",marginTop:"-4%",fontWeight:"bold",textDecoration:"line-through"}}>MSRP:${item.MSRP}</p> */}
                   <p style={{fontSize:"14px",fontWeight:"bold",}}>Price:${item.price}</p>
                   <button  onClick={()=> dispatch( postProductsData(item))} style={{width:"98%",fontSize:"16px",backgroundColor:"black",color:"white"}}>QUICKBUY</button>
                   </div>
              
              </div>
           
          
          ))
        }
        </Slider>
      </div>
      <ArrowForwardIosSharpIcon   onClick={()=>sliderref.current.slickNext()} className="arrowbutt1"/>
  </div>

<div className="slider4_down">
   <div className="slider_downparts">
       <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/16/SQ_Banner_676x556_%281%29-050216.png" alt="" style={{width:"100%",height:"300px"}} />
       <h4>New from Eminence Organic Skin Care</h4>
       <p>Two new additions to the Strawberry Rhubarb line with products that  deliver visibly smoother & hydrated skin.</p>
   </div>
   <div className="slider_downparts">
   <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/04/653be5dd-5f83-44e2-b890-f7ac0c59d4a5-022804.jpg" alt="" style={{width:"100%",height:"300px"}}/>
       <h4>New from Natura Bisse</h4>
       <p>Meet C+C Vitamin Antiox Solution’s improved formula, plus their<br/>latest Oil-Free Gel.</p>
   </div>
   <div className="slider_downparts">
   <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/44/1904_THG0034748_DERMSTOREMAY_SHOT41-010444.png" alt="" style={{width:"100%",height:"300px"}} />
       <h4>Meet Cannaluxe</h4>
       <p>Full-spectrum CBD skin care that’s designed to calm, soothe, revive & fortify your skin.</p>
   </div>
</div>






      </>
    );
 
}








