import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./AppReducer/appReducer";
import { authReducer } from "./AuthReducer/authReducer";
// import { cartReducer } from "./CartReducer/CartReducer";

const rootReducer=combineReducers({
    auth:authReducer,
    app:appReducer,
  
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));