import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../Allproducts/ProductCard'
import { postProductsData } from '../Allproducts/AllProductsAction'
import styled from 'styled-components'

import axios from 'axios'
import { Navbar } from '../Homepage1/Navbar'

const Grid = styled.div`
display :grid;
width:70%;
grid-template-columns: repeat(3,1fr);

text-align:center;
gap:20px;
// border:1px solid black;
margin-top:40px;
margin-left:25px;


div{
  // border:1px solid black;
  width:300px;
  overflow:hidden;
  height:550px;
  
}
button{
  border:none ;
  width:300px;
  height:45px;
  // margin-top:44px;
  background-color:#222222;
  color:white;
}
img{
  width:350px;
 
}


`



const Skincare = () => {

  const dispatch = useDispatch()
  const selectedProduct = (data) => {
    dispatch(postProductsData((data)))
  }
  const [state, setState] = useState([])
  const myState = useSelector((state) => state.reducer.allProductsData)
  const getAllData = () => {
    axios.get("http://localhost:8080/skincare")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setState(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  useEffect(() => {
    // dispatch(getAllData())
    getAllData("skincare")
  }, [])

  const handleSort = (e) => {
    let john;
    if (e.target.value == "asc") {
      john = state.sort((a, b) => {
        return b.price - a.price
      })
    } 
    else if (e.target.value == "Default") {
      john = state.sort((a, b) => {
        return a.id - b.id
      })
    }
    else {
      john = state.sort((a, b) => {
        return a.price - b.price
      })
    }
    console.log(john);
    setState([...john])
    // dispatch(sortProducts(john));
  };


  return (
    <>
      <Navbar />
 <div style={{display:"flex",justifyContent: "spaceBetween", marginTop:"40px"  }}>
        <div  style={{ marginLeft:"20px",width:"800px"}}>
            <div>
              <h3>Brand</h3><hr></hr>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>100% Pure(4)</p> </div>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Alterna(12)</p> </div>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>AMELIORATE(12)</p> </div>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Aquis(1)</p> </div>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Baxter of california(1)</p> </div>
                  <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>100% Pure(4)</p> </div>
            </div>
            <div>
            <h3>Hair Styling</h3><hr></hr>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Curl Enhancers(4)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Hair Cream(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Hair Gel(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Hair Spray(1)</p> </div>
            </div>
            <div>
            <h3>Hare Care Benefit</h3><hr></hr>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Anti Dandruff(4)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Anti-Frizz(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Balancing(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Color Protection(1)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Damage Repair(1)</p> </div>
            </div>
            <div>
            <h3>Hair Dye Color</h3><hr></hr>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Black(4)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Blonde(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Blue(12)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Brunette(1)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Green(1)</p> </div>
                <div style={{ display: "flex", gap: "10px" ,height:"20px"}}><input type="checkbox"/> <p  style={{marginTop:"-1px"}}>Grey(4)</p> </div>
            </div>
        </div>
      <div >
        <div><h3 style={{marginLeft:"20px"}}>Hair Care Products</h3></div>
        <div style={{marginLeft:"20px"}}>Since your hair is uniquely you, it only makes sense that the shampoo you use fit the same model.
             From dry scalps and thinning strands to coarse locks and a color-treated mane, the number of hair
              types out there is a seemingly endless list. Fortunately for you, Dermstore's vast selection of 
              shampoos offer just the right fit for every want and need.</div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <p style={{marginLeft:"20px"}}>sort by</p>
          <select onChange={handleSort} style={{ width: "240px", height: "35px", padding: "0px 6px",marginLeft:"8px" }}>
            <option >Default</option>
            <option value="asc">Price:High-To-Low</option>
            <option value="desc">Price:Low-To-High</option>
            <option>A-Z</option>
          </select>
        </div>
        <Grid>

          {state.map(ele => {
            return <ProductCard key={ele.id} {...ele} selectedProduct={selectedProduct} />
          })}
        </Grid>
      </div>
    </div>
    </>
   
  )
}

export default Skincare