import React from "react";
import AddBookForm from "components/common/AddBookForm/AddBookForm";
import "./AddBook.scss";

function AddBook(props) {
  return (
    <section className="add_book">
      <article className="add_book_title_container">
        <h1 className="add_book_title">Add Book</h1>
      </article>
      <AddBookForm />
    </section>
  );
}

export default AddBook;
