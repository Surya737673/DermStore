import React from 'react'

const ProductCard = ({image,price,title,qty,selectedProduct}) => {
  

  return (
    <>
      <div>
          <img src={image} alt='primg'/>
          <p>{title}</p>
          <p>${price}</p>  
          <button onClick={()=>selectedProduct({image,price,title,qty})}>Quick Buy</button>
      </div>
      
    </>
  )
}

export default ProductCard