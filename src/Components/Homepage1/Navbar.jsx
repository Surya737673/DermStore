import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import CheckIcon from '@mui/icons-material/Check';
import    "./navbar.css"
import { useSelector } from "react-redux";



const Input=styled.input`
height: 40px;
width: 250%;
margin-top:30%;
::placeholder{
    font-size: 14px;   
}
`;
const DIV =styled.div`
height: ${(props)=>props.height};
width:${(props)=>props.width} ;
position: absolute;
top: ${(props)=>props.top};
background-color:white;
left: 0; 
margin-top:${(props)=>props.marginTop};
opacity: 0;
visibility: hidden;
transition: all 0.3s ease;
z-index:1

`;


export const Navbar = () => {
    const myState = useSelector((state) => state.reducer.cart);
  return (
      <>
<div className='row'></div>
    <div className='header'>
        <div className='row1'>
        <div>
            <Link to=''>
            <img src="data:image/png;base64,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" alt="Dermstorelogo" className='logo'/>
            </Link>
        </div>
           
        <div className='search'>
            <div>
            <Input type="search" placeholder='Search for a Product or Brand...'></Input>
            </div >
            <div style={{marginLeft:"44%",marginTop:"11%"}}>
            <SearchIcon style={{height:"36px",width:"50px"}} />
            </div>
        </div>
         <div className='accdropdown'>
          <div className='account'>
             <PermIdentitySharpIcon style={{height:"30px",width:'50px',marginTop:"55%"}} />
                <h4 className='head1'>Account</h4>
        </div>
        <DIV height="400px" width="250%" top="40" marginTop="30%" >
            <Link to="/LOGIN">
                <button className='butt1'style={{marginTop:100,cursor:"pointer"}}>Login</button>
                </Link>
                <Link to="signup">
                <button className='butt2' style={{cursor:"pointer"}}>Register</button>
                </Link>
                <p>My Favourites</p>
                <p> Your Orders</p>
                <p>Your Subscriptions</p>
                <p>Your Referrals</p>
         </DIV>
        </div>
        <div className='cartdropdown'>
        <Link to="/cart" className="cart">
            <LocalMallOutlinedIcon style={{height:"30px",width:'50px',marginTop:"15%"}}/>
                          <h4 className='head2' >Cart</h4>   
                          <p>{myState.length}</p>
        </Link>
        </div>
    </div>
    <div className='header2'>
    <div className='row2'>  
   
      <div className='box1'>
           <Link to='' className='Linkcss'>Brands</Link>
      </div>
      <Link to="" className='Linkcss'>Browse By</Link>
      <Link to="" className='Linkcss'>BestSellers</Link>
      <Link to="" className='Linkcss'> SkinCare</Link>
      <Link to="" className='Linkcss'> Makeup</Link>
      <Link to="/haircare" className='Linkcss'>Hair Care</Link>
      <Link to="" className='Linkcss'> Bath & Body</Link>
      <Link to="" className='Linkcss'> Tools & Devices</Link>
      <Link to="" className='Linkcss'> Gifts & Sets</Link>
      <Link to="" className='Linkcss'> BeautyFix</Link>
      <Link to="" className='Linkcss'> Sale</Link>
      <Link to="" className='Linkcss'> New</Link>
      <Link to="" className='Linkcss'> Skin101</Link> 
    </div>
    <hr></hr>
    </div>
   
    </div>
    <div className='row3'>
        <div>    
        <div>
        <LocalShippingOutlinedIcon style={{height:"30px",width:"50px",marginTop:"10%"}}/>
        </div>
        <div>
        <Link to="" className='Linkcss'>
        <p>FREE US shipping over $50</p>
        </Link>
        </div>
        </div>
        <div>
        <div>
        <ControlPointDuplicateIcon style={{height:"30px",width:"50px",marginTop:"10%"}}/>
        </div>
        <div>
        <Link to="" className='Linkcss'>
            <p>New customers save 15% with code WELCOME15</p>
        </Link>
        </div>
        
        </div>
        <div>
        <div>
        <Battery0BarIcon style={{height:"30px",width:"50px",marginTop:"10%"}}/>
        </div>
        <div>
        <Link to="" className='Linkcss'>
            <p>Redeem Dermstore Rewards</p>
        </Link>
        </div>
        </div>
        <div>
            <div>
            <CheckIcon style={{height:"30px",width:"50px",marginTop:"10%"}}/>
            </div>
            <div>
            <Link to="" className='Linkcss'>
             <p>Pay in 4 with Sezzle</p>
             </Link>
            </div>
        </div>
    </div>
    <div className='para'>
        <Link to="" className='Linkcss1'>
        <p>15% off SkinMedica + extra 20% off auto-replenishment. Receive a free gift when you spend $160+ on the brand. SHOP NOW</p>
        </Link>
    </div>
    </>
  )
}
