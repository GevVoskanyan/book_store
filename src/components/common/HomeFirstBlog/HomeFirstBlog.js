import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./HomeFirstBlog.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

function HomeFirstBlog(props) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (ev) => {
    setSearchParams({ "book-name": ev.target.value });
  };
  return (
    <div className="home_first_blog">
      <div className="home_first_blog_search_bar">
        <input
          type="text"
          placeholder="Search"
          className="home_first_blog_search_bar_inp"
          onChange={handleChange}
        />
        <AiOutlineSearch className="home_first_blog_search_bar_icon" />
      </div>
      <div className="home_first_blog_add_book_btn">
        <button className="btn" onClick={() => navigate("add-book")}>
          Add Book
        </button>
      </div>
    </div>
  );
}

export default HomeFirstBlog;
