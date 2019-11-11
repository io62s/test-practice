import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import inputReducer from "./inputReducer";

export default combineReducers({
  countReducer,
  todoReducer,
  inputReducer
});
