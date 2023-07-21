import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "components/features/Home/Home";
import NotFound from "components/features/NotFound/NotFound";
import AddBook from "components/features/AddBook/AddBook";
import EditBook from "components/features/EditBook/EditBook";
import SinglePage from "components/features/SinglePage/SinglePage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="books/:id" element={<SinglePage />} />
      <Route path="add-book" element={<AddBook />} />
      <Route path="edit-book" element={<EditBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
