import { createStore, combineReducers } from "redux";
import { appReducer, todoReducer } from "./reducer";

const Store = createStore(
  combineReducers({
    appReducer,
    todoReducer
  })
);

export default Store;
