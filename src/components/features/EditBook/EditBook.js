import React from "react";
import "./EditBook.scss";
import EditBookForm from "components/common/EditBookForm/EditBookForm";

function EditBook(props) {
  const { onClick, id } = props;
  return (
    <section className="add_book">
      <article className="add_book_title_container">
        <h1 className="add_book_title">Edit Book</h1>
      </article>
      <EditBookForm onClick={onClick} id={id} />
    </section>
  );
}

export default EditBook;
