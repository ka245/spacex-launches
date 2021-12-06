import {createStore, applyMiddleware} from "redux";
import RootReducer from "./rootReducer";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof RootReducer>

export default Store