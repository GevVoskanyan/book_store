import React from "react";
import "./Button.scss";

function Button(props) {
  const { title, ...p } = props;
  return (
    <button {...p} className="btn">
      {title}
    </button>
  );
}

export default Button;
