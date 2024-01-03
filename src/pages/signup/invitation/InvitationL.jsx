import React from "react";
import imgSUYC from "../../../assets/img/set-up-your-account.png";
import logoBig from "../../../assets/img/logo-full-big.png";
import InputStyle from "../../../components/input/InputStyle";

const InvitationL = () => {
  return (
    <div className="px-[128px] py-[64px] h-full w-full">
      <div className="signUp__L--main h-full">
        <div className="logo-wrapper mb-[64px]">
          <img className="h-6" src={logoBig} />
        </div>
        <h1 className="text-[24px] font-medium mb-[24px]">
          Create your account
        </h1>
        <div className="signUp__Inpu--fullName mb-[24px]">
          <label for="name" className="block mb-2 text-sm font-medium ">
            Full name
          </label>
          <InputStyle name={""} placeholder={"Enter your full name"} />
        </div>
        <div className="signUp__Inpu--password mb-[24px]">
          <label className="block mb-2 text-sm font-medium ">Password</label>
          <InputStyle placeholder={"Enter at least 8 characters"} />
        </div>
        <div className="signUp__Inpu--accountName">
          <label for="email" className="block mb-2 text-sm font-medium ">
            Account name
          </label>
          <InputStyle
            placeholder={"For example, company's or derpartment's name"}
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationL;
