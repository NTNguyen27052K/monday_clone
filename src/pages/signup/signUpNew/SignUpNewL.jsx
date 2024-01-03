import React from "react";
import { Divider, Input } from "antd";
import googleIcon from "../../../assets/img/google-icon.png";
import InputStyle from "../../../components/input/InputStyle";

const SignUpNewL = () => {
  return (
    <>
      {/* form Top */}
      <div className="sign_up_new_top flex justify-center items-center flex-col h-5/6">
        <div className="sign_up_new_top--title w-full">
          <h1 className="text-4xl mb-2 py-1">Welcome to monday.com</h1>
          <p className="mb-12 py-1">
            Get started - it's free. No credit card needed.
          </p>
        </div>
        <div className="sign_up_new_top--action w-full">
          <button className="border-solid border-[0.8px] rounded-[4px] w-full border-gray-500 px-4 py-2 flex items-center justify-center hover:bg-[#DCDFEC]">
            <img className="w-4 mr-3" src={googleIcon} />
            <span>Sign up with Google</span>
          </button>
          <Divider className="my-4">Or</Divider>
          <InputStyle
            name={"input-signup-new"}
            placeholder={"name@company.com"}
          />
          <button className="border-solid border-2 rounded-md w-full border-gray-500 px-4 py-2 flex items-center justify-center my-4">
            Continue
          </button>
          <div>
            <p>By proceeding, you agree to the</p>
            <p>
              <a className="text-sky-500">Terms of Service</a> and{" "}
              <a className="text-sky-500">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      {/* form Bottom */}
      <div className="sign_up_new_bottom 1/6">
        <p className=" h-full">
          Already have an account? <a className="text-sky-500">Log in</a>
        </p>
      </div>
    </>
  );
};

export default SignUpNewL;
