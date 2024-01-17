import React, { useState } from "react";

import "./inputInvite.scss";
import { Cascader, Input, Select, Space } from "antd";

export const InputInvite = ({
  addonAfter,
  defaultValue,
  placeholder,
  handleChange,
  name,
  name2,
  type,
}) => {
  const [transformIcon, setTransformIcon] = useState(false);
  const options = [
    {
      value: "admin",
      label: "Admin",
      desc: "Can invite & manage new users",
    },
    {
      value: "member",
      label: "Member",
      desc: "Can add and edit content",
    },
  ];
  const optionRender = (options) => {
    return (
      <div className="flex flex-col w-full ">
        <span className="font-normal leading-[18px]">
          {options?.data.label}
        </span>
        <span className="text-[#676879] leading-[18px] text-wrap tracking-[-1px]">
          {options?.data.desc}
        </span>
      </div>
    );
  };
  const selectAfter = (
    <Select
      defaultValue="Admin"
      style={{ width: "117px", height: "38px" }}
      options={options}
      optionRender={optionRender}
      open={true}
      className={`role_select`}
      onClick={() => {
        setTransformIcon(!transformIcon);
      }}
      onChange={handleChange}
      name={name2}
    />
  );
  return (
    <Input
      className={
        transformIcon ? "ntnguen transformIconUp" : "transformIconDown ntnguen"
      }
      name={name}
      type={type}
      onChange={handleChange}
      addonAfter={selectAfter}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};
