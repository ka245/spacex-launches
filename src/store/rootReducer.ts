import {combineReducers} from "redux";
import launchesReducer from "./launchesReducer";

const RootReducer = combineReducers({
  launches: launchesReducer
});

export default RootReducer