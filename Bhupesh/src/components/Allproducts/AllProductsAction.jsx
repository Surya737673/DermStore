import axios from 'axios'

// Action Types
export const GET_ALL_DATA="GET_ALL_DATA"
export const POST_CART_PRODUCTS="POST_CART_PRODUCTS"
export const SORT_DATA = "SORT_DATA";


// Action Creators
export const getAllData=()=>(dispatch)=>{
   axios.get("http://localhost:8080/men")
        .then(function (response) {
            // handle success
            console.log(response.data);
            dispatch({
                type:GET_ALL_DATA, payload:response.data})
               })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
}

export const postProductsData=(payload)=>(dispatch)=>{
    axios.post("http://localhost:8080/cartProducts",payload)
         .then(function (response) {
             // handle success
             console.log(response.data);
             dispatch({
                 type:POST_CART_PRODUCTS, payload:payload})
                })
                 .catch(function (error) {
                     // handle error
                     console.log(error);
                 })
 }

 export const sortProducts = (payload) => ({
    type: SORT_DATA,
    payload:payload
});