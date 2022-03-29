import { createStore, compose, applyMiddleware } from "redux"
import reducerUser from "../reducers/userReducer";
import thunk from "redux-thunk"

// const midl = [m1, m2, m3]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducerUser, composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(reducerUser, composeEnhancers(applyMiddleware(...midl)))

export default store