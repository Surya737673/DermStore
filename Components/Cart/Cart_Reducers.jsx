// Import Action types
import { GET_CART_PRODUCTS } from "./Cart_Action";

const initialState = {
    cartProducts: []
}
const cartReducer = (state=initialState , { type, payload }) => {
    switch (type) {
        case GET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: payload
            }
        default :return state;
    }
}

export default cartReducer;