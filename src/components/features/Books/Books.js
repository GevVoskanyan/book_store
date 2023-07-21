import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "components/common/BookCard/BookCard";
import { useSearchParams } from "react-router-dom";
import "./Books.scss";
import { getBooksAction } from "store/actions/books";

function Books(props) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let { books } = useSelector((store) => store.getBooks);
  let filteredBooks = books;

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  if (searchParams.get("book-name")) {
    filteredBooks = books.filter(
      (books) =>
        books.name.includes(searchParams.get("book-name")) ||
        books.price.includes(searchParams.get("book-name"))
    );
  }
  return (
    <section className="books_list">
      {filteredBooks &&
        filteredBooks?.map((book) => (
          <div key={book.id} className="books_list_cart">
            <BookCard
              onClick={props.onClick}
              name={book.name}
              description={book.description}
              price={book.price}
              discount={book.discount}
              book={book}
              image={book.image}
            />
          </div>
        ))}
    </section>
  );
}

export default Books;
