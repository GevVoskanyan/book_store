import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookAction } from "../../../store/actions/books";
import { useNavigate } from "react-router-dom";
import "./AddBookForm.scss";

function AddBookForm(props) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    image: null,
  });

  const handleChange = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  };
  const handleFileChange = (ev) => {
    const [file] = ev.target.files;
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setFormData({ ...formData, image: e.target.result });
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

    if (!image) {
      newErrors.image = "Image is required.";
      isValid = false;
    }

    if (isValid) {
      dispatch(addBookAction(formData));
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
    <form onSubmit={handleSubmit} className="form__control">
      {}
      <div className="form__control__two_sides">
        <div className="form__control_left_side">
          <div className="form__control_inp_container">
            <label htmlFor="bookName" className="form__control_label">
              Name*
            </label>
            <input
              type="text"
              value={formData.name}
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
              id="bookDesc"
              className="form__control_inp txt"
              value={formData.description}
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
                type="text"
                value={formData.discount}
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
          <label htmlFor="file">
            <input
              accept="image/*"
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="form__control_right_side_file_uploader">
              <div className="form__control_right_side_file_uploader_inner">
                <span className="form__control_right_side_file_uploader_inner_text">
                  <span className="underline">CLICK HERE </span> OR
                </span>
                <span className="form__control_right_side_file_uploader_inner_text">
                  DRAG AND DROP TO
                </span>
                <span className="form__control_right_side_file_uploader_inner_text">
                  UPLOAD THE IMAGE
                </span>
              </div>
            </div>
          </label>
          <span className="errors">{errors.image && errors.image}</span>
        </div>
      </div>
      <div className="form__control_buttons">
        <button
          className="form__control_buttons_cancel"
          onClick={() => navigate("/", { replace: true })}
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

export default AddBookForm;
