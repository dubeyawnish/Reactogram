import { combineReducer } from "./combineReducer";
import { userReducer } from "./userReducer";
import { createStore } from "redux";

export const store= createStore(combineReducer);

