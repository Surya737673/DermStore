import axios from "axios";

// Action Types
export const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";

// Action Creators
export const getCartProducts = () => (dispatch) => {
    axios.get(`http://localhost:8080/cartProducts`)
        .then(function (response) {
            console.log(response.data);
            dispatch({type : GET_CART_PRODUCTS,payload : response.data})
        })
        .catch(function (error) {
        console.log(error);
    })
}

export const deleteProduct = (id,data) => (dispatch) => {
    axios.delete(`http://localhost:8080/cartProducts/${id}`)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
        console.log(error)
        })
    
    let newData = data.filter(elem => {
        return elem.id !== id;
    })

    dispatch({ type: GET_CART_PRODUCTS, payload: newData })
}

export const updateQty = (id,qty,value) => (dispatch) => {
    axios.patch(`http://localhost:8080/cartProducts/${id}`, {
        qty : qty+value
    })
        .then(function (response) {
            console.log(response)
            axios.get("http://localhost:8080/cartProducts")
            .then(function (response) {
                console.log(response.data);
                dispatch({ type: GET_CART_PRODUCTS, payload: response.data })
                
            })
            .catch(function (error) {
            console.log(error);
        })
        })
        .catch(function (error) {
        console.log(error)
    })
}