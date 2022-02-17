import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
