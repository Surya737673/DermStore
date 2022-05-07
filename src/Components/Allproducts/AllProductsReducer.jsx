// Import Action types
import { GET_ALL_DATA } from "./AllProductsAction";
import { SORT_DATA } from "./AllProductsAction";

const initState = {
    allProductsData: [],
    cart : [],
}


const reducer = (state=initState, { type, payload }) => {
    switch (type) {
        // Use Action types here
        case GET_ALL_DATA:
            return {
                ...state ,allProductsData:payload
            }
        case SORT_DATA:
              return {
                ...state ,allProductsData:payload
              }
        case "CART_PRODUCTS":
            return {
                ...state,
                cart : [...state.cart,payload]
            }
        default:
            return state
    }
}

export default reducer;