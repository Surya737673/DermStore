import React from 'react';
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
const GiftSelection = () => {
  return (
      <div className="first">
          <div>
              <h3>Gift Selection</h3>
             <p><MdOutlineKeyboardArrowDown /></p>
          </div>
          <div>
              <p>Quality <span><BsCheckCircleFill /></span></p>
              <p>0/1 free gifts selected</p>
          </div>
    </div>
  )
}

export default GiftSelection