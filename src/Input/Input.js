import React from "react";
import "./Input.css";

function Input(props) {
  const { size = "md", ...rest } = props;

  return <input className={`${size} input `} {...rest} />;
}

export default Input;
