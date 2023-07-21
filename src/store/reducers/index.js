import { combineReducers } from "@reduxjs/toolkit";
import getBooksReducer from "./getBooksReducer";
import addBookReducer from "./addBookReducer";

const reducers = combineReducers({
  getBooks: getBooksReducer,
  addBooks: addBookReducer,
});

export default reducers;
