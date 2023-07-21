import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBookAction, getBookForEdit } from "store/actions/books";
import { Link } from "react-router-dom";

function BookCard(props) {
  const { name, price, discount, book, image } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const discProc = parseInt((discount / price) * 100);

  const editClickHandler = () => {
    dispatch(getBookForEdit(book));
    navigate("/edit-book");
  };

  const deleteBookHandler = (id) => {
    dispatch(deleteBookAction(id));
  };

  return (
    <div>
      <div className="book_cart_first_items">
        {discount && <div className="discProc">{discProc}%</div>}
        <div className={"cart_edit_del"}>
          <button
            type="button"
            className="cart_edit_del_btn"
            onClick={editClickHandler}
          >
            <MdModeEditOutline />
          </button>
          <button
            className="cart_edit_del_btn"
            onClick={() => deleteBookHandler(book.id)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
      <Link to={`books/${book.id}`}>
        <figure className="book_card_img_container">
          <img src={image} alt={name} />
        </figure>
      </Link>
      <div className="name_price">
        <h6>{name}</h6>
        <div className="price-disc">
          <strong className={discount ? "line-tr" : ""}>{price}$</strong>
          {discount && <strong className="disc">{discount}$</strong>}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
