// Import Action types

const initialState = {
    data: []
}
const cartReducer = (state=initialState , { type, payload }) => {
    switch (type) {
        // Use Action types here
        default :return state;
    }
}

export default cartReducer;