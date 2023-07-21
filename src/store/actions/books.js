import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBook, getBooks, postBook, updateBook } from "helpers/apiClient";

export const addBookAction = createAsyncThunk(
  "addBookAction/addBook",
  async (data, thunkAPI) => {
    try {
      const res = await postBook(data);
      return res;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const getBooksAction = createAsyncThunk(
  "addBookAction/getBook",
  async (_, thunkAPI) => {
    try {
      const { data } = await getBooks();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteBookAction = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkAPI) => {
    try {
      const res = await deleteBook(id);
      return res;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBookAction = createAsyncThunk(
  "books/updateBook",
  async (payload, thunkAPI) => {
    const { bookId, data } = payload;
    try {
      const res = await updateBook(bookId, data);
      console.log("🚀 ~ file: books.js:34 ~ res:", res);
      return res;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBookForEdit = createAction("/books/getBookForEdit");
