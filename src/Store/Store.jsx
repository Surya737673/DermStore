import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../Components/Cart/Cart_Reducers";


const rootReducer = combineReducers({
  cartReducer,

})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);
export default store;