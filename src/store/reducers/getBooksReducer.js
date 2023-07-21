import { createReducer } from "@reduxjs/toolkit";
import {
  deleteBookAction,
  getBookForEdit,
  getBooksAction,
  updateBookAction,
} from "../actions/books";

const initialState = {
  books: [],
  book: {},
};
const getBooksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBooksAction.fulfilled, (state, action) => {
      state.books = action.payload;
    })
    .addCase(updateBookAction.fulfilled, (state, action) => {})
    .addCase(deleteBookAction.fulfilled, (state, action) => {
      const deletedBookId = action.payload;
      state.books = state.books.filter((book) => book.id !== deletedBookId);
    })
    .addCase(getBookForEdit, (state, action) => {
      state.book = action.payload;
    });
});

export default getBooksReducer;
