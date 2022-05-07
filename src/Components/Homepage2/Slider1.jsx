

import React, { useRef} from "react";
import Slider from "react-slick";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import "./homepage2.css";





 //silder1 start here....//

 export  const  SimpleSlider =()=>{
  
  const sliderref=useRef(null)
  console.log(sliderref)
      const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      cssEase: "linear"
       
      };
      
     
      return (
      <>
       <div className="main_slider">  
            <ArrowBackIosNewSharpIcon  onClick={()=>sliderref.current.slickPrev()} className="arrowbutt1" />

       <div style={{width:"96%",margin:"auto"}}>

          <Slider ref={sliderref} {...settings}>
            <div className="sliderdiv1">
              <h3 style={{marginTop:"10%",marginLeft:"50%",fontSize:"50px",fontWeight:"500",textAlign:"left"}}>YOUR PERFECT SPF</h3>
              <p style={{marginLeft:"50%",marginTop:"10%",fontSize:"16px",fontWeight:"400",marginTop:"-2%",textAlign:"left"}}>The best SPF for your Skin-prioritize protecting by stacking up on <br/>sunscreen for every skin type,all year round</p>
         
              <button style={{marginLeft:"30%",fontSize:"16px",fontWeight:"400",marginTop:"-2%",backgroundColor:"black",color:"white",cursor:"pointer"}}>SHOP NOW</button>
             
            </div>
            <div className="sliderdiv2">
              <h3 style={{marginTop:"10%",marginLeft:"60%",fontSize:"50px",fontWeight:"500",textAlign:"left"}}>CELEBRATE AAPI<br/> HERRITAGE MONTH</h3>
              <p style={{marginLeft:"60%",fontSize:"16px",fontWeight:"400",marginTop:"-2%",textAlign:"left"}}>Expolre beauty brands rooted in Asian Heritage</p>
              
              <button style={{marginLeft:"30%",fontSize:"16px",fontWeight:"400",marginTop:"-2%",backgroundColor:"black",color:"white",cursor:"pointer"}}>SHOW NOW</button>
             
            </div>
          </Slider>
          </div>
            <ArrowForwardIosSharpIcon   onClick={()=>sliderref.current.slickNext()} className="arrowbutt1"/>
        </div>
       
    </>

      );
    }
  

    
