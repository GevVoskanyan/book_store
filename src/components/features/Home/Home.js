import React from "react";
import HomeFirstBlog from "components/common/HomeFirstBlog/HomeFirstBlog";
import Books from "../Books/Books";
import "./Home.scss";
import SinglePage from "../SinglePage/SinglePage";

function Home(props) {
  return (
    <section className="home">
      <HomeFirstBlog />
      <Books />
    </section>
  );
}

export default Home;
