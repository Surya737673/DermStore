import{applyMiddleware, legacy_createStore as createstore, combineReducers,compose } from 'redux'
import thunk from "redux-thunk"
import {Reducer} from '../redux/Reducer'
const rootReducer=combineReducers({
  productsofskinMedica:Reducer,
  productsofbestsellers:Reducer,
  productsofneocutis:Reducer,
  productsoftrending:Reducer,
  productsofarrival:Reducer,
  productsofblog:Reducer

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

export const store = createstore(rootReducer,enhancer);

