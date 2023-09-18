import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./Reducers";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;