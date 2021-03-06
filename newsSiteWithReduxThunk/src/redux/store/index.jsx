import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk'

let store;
if(process.env.NODE_ENV === 'development'){
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store