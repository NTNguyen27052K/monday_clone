import React from "react";

const RadioButtonStyle = ({ nameRadio }) => {
  return (
    <label className="flex justify-between items-center gap-2 border rounded-full px-4 py-2">
      <span className="">
        <input type="radio" />
      </span>
      <span>{nameRadio}</span>
    </label>
  );
};

export default RadioButtonStyle;
