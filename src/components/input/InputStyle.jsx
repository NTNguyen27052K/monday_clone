import React from "react";
import "./inputStyle.scss";

const InputStyle = ({ name, placeholder, onBlur, onChange, values }) => {
  return (
    <input
      type="text"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={values}
      placeholder={placeholder}
      className="inputStyle"
    />
  );
};

export default InputStyle;
