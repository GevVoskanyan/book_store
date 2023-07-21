import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import "./styles/style.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "store/reducers";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
