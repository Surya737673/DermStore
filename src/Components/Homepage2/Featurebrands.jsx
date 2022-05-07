import React from 'react'
import "./homepage2.css"

export const Featurebrands = () => {
  return (
      <>
    <div className='featurebrandes_div1'>
        <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/40/original-0429-STDCRE-35241-CM-DS-Disrupter-Banner-SCF-1640x244--022640.jpg" alt="" />
    </div>
    <div>
     <div>
         <h1 style={{textAlign: "center"}}>Featured Brands</h1>
     </div>
     <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",cursor:'pointer'}}>
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/14/original-obagi_logo-105214.png" alt="" style={{width:"10%",marginLeft:"1%",height:"130px"}}/>
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/59/Skinc-014559.jpg" alt="" style={{width:"150px",marginLeft:"1%",height:"50px",marginTop:"2%"}}/>
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png" alt="" style={{width:"10%",marginLeft:"1%",height:"130px"}} />
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/33/Untitled_design_%2814%29-033933.png" alt="" style={{width:"200px",marginLeft:"1%"}}/>
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg" alt="" style={{width:"200px",marginLeft:"1%"}}/>
         <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/34/SundayRiley-Logo_2000x2000-01-075734.jpg" alt="" style={{width:"200px",marginLeft:"1%"}}/>
     </div>
    </div>
    <div style={{marginTop:"6%"}}>
        {/* <iframe src='https://s1.thcdn.com/productvideo/12902717/dermstore_60sec_16x9_new.mp4' style={{height:"700px",width:"96%",border:"none"}}></iframe> */}
    </div>
    <div style={{padding: "20px 100px"}}>
        <h2 style={{fontSize:"25px",fontFamily:"sans-serif",fontWeight:"lighter",textAlign:"center",margin: "20px 0px"}}>#MyDermstoreGlow</h2>
        <p style={{fontSize:"14px",fontFamily:"sans-serif",textAlign:"center"}}>We care about what goes on your skin, because of what’s within. Our assortment is top-rated, curated & authenticated—bringing you the highest quality products and straight-from-the-experts info to help you navigate all things beauty and skin care. Join the conversation on Instagram with #MyDermstoreGlow—show us your favorite #Dermstore finds that help you care for the skin you’re in! We’re excited to feature our community’s must-haves all season long.</p>
    </div>
    <div style={{marginTop:"2%"}}>
        <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/57/original-Sezzle-Assets_HPBanner-__1640X244__copy-074257.jpg" alt="" />
    </div>
    </>
  )
}
