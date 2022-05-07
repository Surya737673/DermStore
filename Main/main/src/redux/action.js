export const FetchSkinMedicaData="FetchSkinMedicaData"
export const FetchBestSellersData="FetchBestSellersData"
export const FetchNeocutisData=" FetchNeocutisData"
export const FetchTrendingData="FetchTrendingData"
export const FetchNewarraivals="FetchNewarraivals"
export const FetchBlogData="FetchBlogData"









export const  getskinmedicadata=(payload)=>({
   type:FetchSkinMedicaData,
   payload
});
export const getbestsellersdata=(payload)=>({
   type:FetchBestSellersData,
   payload
})
export const getNeocuticsdata=(payload)=>({
   type:FetchNeocutisData,
   payload
})
export const gettrendingdata=(payload)=>({
   type:FetchTrendingData,
   payload
})
export const getnewarrivaldata=(payload)=>({
   type:FetchNewarraivals,
   payload
})
export const getblogdata=(payload)=>({
   type:FetchBlogData,
   payload
})





 export const getProductsData=()=>(dispatch)=>{
    fetch("http://localhost:8080/SkinMedica")
    .then((res)=>res.json())
    .then((res)=>dispatch(getskinmedicadata(res)))
    
}
export const getBestProductsData=()=>(dispatch)=>{
   fetch("http://localhost:8080/BestSellers")
   .then((res)=>res.json())
   .then((res)=>dispatch(getbestsellersdata(res)))
   
}

export const getNeocuticsProductsData=()=>(dispatch)=>{
   fetch("  http://localhost:8080/Neocutis")
   .then((res)=>res.json())
   .then((res)=>dispatch(getNeocuticsdata(res)))
   
}

export const gettrendingProductsData=()=>(dispatch)=>{
   fetch("http://localhost:8080/Trending")
   .then((res)=>res.json())
   .then((res)=>dispatch(gettrendingdata(res)))
   
}
export const getarrivalProductsData=()=>(dispatch)=>{
   fetch(" http://localhost:8080/NewArrivals")
   .then((res)=>res.json())
   .then((res)=>dispatch(getnewarrivaldata(res)))  
}
export const getblogProductsData=()=>(dispatch)=>{
   fetch(" http://localhost:8080/Blog")
   .then((res)=>res.json())
   .then((res)=>dispatch(getblogdata(res)))  
}