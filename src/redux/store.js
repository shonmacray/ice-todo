import { createStore, combineReducers } from "redux";
import { appReducer } from "./reducer";

const Store = createStore(
  combineReducers({
    appReducer
  })
);

export default Store;
