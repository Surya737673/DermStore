import React from 'react'
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const myState = useSelector((state) => state)
  console.log(myState);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Cart