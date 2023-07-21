import React, { useState } from "react";
import "./EditBookForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateBookAction } from "store/actions/books";
import { useNavigate } from "react-router-dom";

function EditBookForm(props) {
  const { book } = useSelector((store) => store.getBooks);
  const [errors, setErrors] = useState({});
  const [disable, setIsDisable] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: `${book.name}`,
    description: `${book.description}`,
    price: `${book.price}`,
    discount: `${book.discount}`,
    image: null,
  });

  const handleChange = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
    const { name, description, price, discount, image } = formData;
    console.log();
    // Perform validation
    let isValid = true;
    const newErrors = {
      name: "",
      description: "",
      price: "",
      discount: "",
      image: "",
    };

    if (!name || name.trim().length === 0 || name.length > 200) {
      newErrors.name = "Name is required and should be up to 200 characters.";
      isValid = false;
    }

    if (
      !description ||
      description.trim().length === 0 ||
      description.length > 400
    ) {
      newErrors.description =
        "Description is required and should be up to 400 characters.";
      isValid = false;
    }

    if (isNaN(price) || price.trim().length === 0) {
      newErrors.price = "Price must be a number.";
      isValid = false;
    }

    if (discount.trim() !== "" && isNaN(discount)) {
      newErrors.discount = "Discount must be a number if provided.";
      isValid = false;
    }

    // if (!image) {
    //   newErrors.image = "Image is required.";
    //   isValid = false;
    // }

    if (isValid) {
      setIsDisable(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleFileChange = (ev) => {
    const file = ev.target.files[0]; // Get the selected file from the input

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const imageDataURL = e.target.result;
        setFormData({ ...formData, image: imageDataURL });
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, discount, image } = formData;
    let isValid = true;
    const newErrors = {
      name: "",
      description: "",
      price: "",
      discount: "",
      image: "",
    };

    if (!name || name.trim().length === 0 || name.length > 200) {
      newErrors.name = "Name is required and should be up to 200 characters.";
      isValid = false;
    }

    if (
      !description ||
      description.trim().length === 0 ||
      description.length > 400
    ) {
      newErrors.description =
        "Description is required and should be up to 400 characters.";
      isValid = false;
    }

    if (isNaN(price) || price.trim().length === 0) {
      newErrors.price = "Price must be a number.";
      isValid = false;
    }

    if (discount.trim() !== "" && isNaN(discount)) {
      newErrors.discount = "Discount must be a number if provided.";
      isValid = false;
    }

    // if (!image) {
    //   newErrors.image = "Image is required.";
    //   isValid = false;
    // }

    if (isValid) {
      dispatch(updateBookAction({ bookId: book.id, data: formData }));
      setFormData({
        name: "",
        description: "",
        price: "",
        discount: "",
        image: null,
      });
      navigate("/");
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <form className="form__control" onSubmit={handleSubmit}>
      <div className="form__control__two_sides">
        <div className="form__control_left_side">
          <div className="form__control_inp_container">
            <label htmlFor="bookName" className="form__control_label">
              Name*
            </label>
            <input
              value={formData.name}
              type="text"
              id="bookName"
              className="form__control_inp"
              onChange={(ev) => handleChange("name", ev.target.value)}
            />
            <span className="errors">{errors.name && errors.name}</span>
          </div>
          <div className="form__control_inp_container">
            <label htmlFor="bookDesc" className="form__control_label">
              Description*
            </label>
            <textarea
              value={formData.description}
              id="bookDesc"
              className="form__control_inp txt"
              onChange={(ev) => handleChange("description", ev.target.value)}
            />
            <span className="errors">
              {errors.description && errors.description}
            </span>
          </div>
          <div className="form__control_price_discount">
            <div className="form__control_price_container">
              <label htmlFor="bookPrice" className="form__control_label">
                Price*
              </label>
              <input
                value={formData.price}
                type="text"
                id="bookPrice"
                className="form__control_inp price pr_des"
                onChange={(ev) => handleChange("price", ev.target.value)}
              />
              <span className="errors">{errors.price && errors.price}</span>
            </div>
            <div className="form__control_discount_container">
              <label htmlFor="bookDiscount" className="form__control_label">
                Discount*
              </label>
              <input
                value={formData.discount}
                type="text"
                id="bookDiscount"
                className="form__control_inp price pr_des"
                onChange={(ev) => handleChange("discount", ev.target.value)}
              />
              <span className="errors">
                {errors.discount && errors.discount}
              </span>
            </div>
          </div>
        </div>
        <div className="form__control_right_side">
          <figure className="form__control_right_side_figure">
            {!formData.image && <img src={book.image} alt={book.name} />}
            {formData.image && <img src={formData.image} alt={book.name} />}
          </figure>
          <span className="errors">{errors.image && errors.image}</span>
          <div className="form__control_right_side_rem_rep_btns">
            <button className="rem__btn bt" type="button">
              Remove
            </button>
            <label htmlFor="replace" className="rep__btn bt">
              <input
                id="replace"
                onClick={handleFileChange}
                type="file"
                style={{ display: "none" }}
              />
              <div>Replace</div>
            </label>
          </div>
        </div>
      </div>
      <div className="form__control_buttons">
        <button
          className="form__control_buttons_cancel"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button type="submit" className="form__control_buttons_save">
          SAVE
        </button>
      </div>
    </form>
  );
}

export default EditBookForm;
