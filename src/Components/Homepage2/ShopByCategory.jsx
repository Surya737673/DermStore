import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BUTTON=styled.button`
width: 60%;
margin:auto;
margin-left:1%;
height:50px;
cursor: pointer;
text-decoration:none;
color:black;
background-color:white;
    :hover{
        background-color:lightgrey;
        text-decoration:underline;
    }
    
`;

export const ShopByCategory = () => {
  return (
    <div>
        <h1 style={{fontSize:"20px",marginTop:"3%",fontWeight:"500",textAlign:"center"}}>Shop By Category</h1>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"2%"}}>
       <BUTTON>SKIN CARE</BUTTON>
       <BUTTON>SUNSCREEN</BUTTON>
       <BUTTON>MOISTURIZERS</BUTTON>
        <BUTTON>HAIR CARE</BUTTON>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"2%"}}>
        <BUTTON>EYE CREAM</BUTTON>
        <BUTTON>CLEANSERS</BUTTON>
        <BUTTON>MAKEUP</BUTTON>
        <BUTTON>FACE SERUMS</BUTTON>
        </div>
    </div>
  )
}



