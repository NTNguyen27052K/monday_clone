import React from "react";
import imgSignUp from "../../assets/img/monday_logup.png";
import { Divider, Input } from "antd";
import googleIcon from "../../assets/img/google-icon.png";
import InputStyle from "../../components/input/InputStyle";
const SignUp = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="signUpLeft basis-7/12 h-full w-3/4">
        <div className="text-center flex flex-col justify-center h-full">
          {/* form Top */}
          <div className="header_lognUp flex justify-center items-center h-5/6">
            <div className="header_lognUp-main">
              <h1 className="text-4xl mb-2 py-1">Welcome to monday.com</h1>
              <p className="mb-12 py-1">
                Get started - it's free. No credit card needed.
              </p>

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
          <div className="footer_lognUp h-1/6">
            <p className=" h-full">
              Already have an account? <a className="text-sky-500">Log in</a>
            </p>
          </div>
        </div>
      </div>
      <div className="signUpRight basis-5/12 sm:block hidden">
        <img className="w-full h-full" src={imgSignUp}></img>
      </div>
    </div>
  );
};

export default SignUp;
