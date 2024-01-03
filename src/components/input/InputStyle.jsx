import React from "react";
import "./inputStyle.scss";

const InputStyle = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="inputStyle"
    />
  );
};

export default InputStyle;
