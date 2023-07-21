import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooksAction } from "store/actions/books";
import "./SinglePage.scss";
import NotFound from "../NotFound/NotFound";

function SinglePage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.getBooks);
  const book = books?.find((b) => b.id.toString() === id.toString());

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  if (!book.id) {
    return <NotFound />;
  }
  console.log(book);
  return (
    <div className="single__page">
      <div className="single__page_container">
        <figure className="single__page_image_container">
          <img src={book.image} alt={book.name} />
        </figure>
        <article className="single__page_right_side">
          <h1 className="single__page_title">{book.name}</h1>
          <div className="single__page_book_price">
            <strong
              className={
                book.discount
                  ? "single__page_line-tr single__page_pr"
                  : "single__page_pr"
              }
            >
              {book.price}$
            </strong>
            {book.discount && (
              <strong className="single__page_disc">{book.discount}$</strong>
            )}
          </div>
          <article className="single__page_desc_container">
            <h4 className="single__page_desc_title">Description</h4>
            <p className="single__page_desc">{book.description}</p>
          </article>
        </article>
      </div>
    </div>
  );
}

export default SinglePage;
