import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../components/Allproducts/AllProductsReducer";

const rootReducer = combineReducers({
    reducer
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