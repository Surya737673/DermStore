import React from 'react';

import styled from "./Footer.module.css";
import { BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { FaPinterestP,FaFacebookF } from "react-icons/fa";
const Icon = () => {
    return < div style={{display:"flex",gap:"8px"}}>
<div className={styled.iconErrect} >
<FaFacebookF className={styled.iconHeight} />
</div>
{/* hoverEffect */}
<div className={styled.iconErrect}><BsTwitter className={styled.iconHeight}/></div>
<div className={styled.iconErrectIns}><BsInstagram className={styled.iconHeight}/></div>
<div className={styled.iconErrect}><BsYoutube className={styled.iconHeight}/></div>
<div className={styled.iconErrect}><FaPinterestP className={styled.iconHeight}/></div>

    </div>
}



export default Icon;