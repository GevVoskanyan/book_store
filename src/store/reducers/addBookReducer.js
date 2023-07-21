import { createReducer } from "@reduxjs/toolkit";
import { addBookAction } from "store/actions/books";

const initialState = {
  isLoadingStatus: "",
};
const addBookReducer = createReducer(initialState, (builder) => {
  builder.addCase(addBookAction.pending, (state, action) => {
    state.isLoadingStatus = "pending";
  });
  builder.addCase(addBookAction.fulfilled, (state, action) => {
    state.isLoadingStatus = "fulfilled";
  });
  builder.addCase(addBookAction.rejected, (state, action) => {
    state.isLoadingStatus = "rejected";
  });
});

export default addBookReducer;
