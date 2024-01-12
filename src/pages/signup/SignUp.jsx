import React from "react";
import imgSignUp from "../../assets/img/monday_logup.png";
import { Divider, Input } from "antd";
import googleIcon from "../../assets/img/google-icon.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      navigate("/signup");
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Empty"),
    }),
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-screen xl:h-screen xl:w-screen xl:flex"
    >
      {/* basis-7/12 */}
      <div className="signUpLeft xl:basis-7/12 flex justify-center items-center px-3 w-full h-full">
        <div className="text-center flex flex-col  xl:flex xl:flex-col xl:items-center w-full h-full">
          {/* form Top */}
          <div className="sign_up_new_top flex justify-center items-center grow xl:grow">
            <div>
              <div className="sign_up_new_top--title w-full">
                <h1 className="text-[32px] leading-10 font-medium tracking-[-0.5px] xl:text-4xl mb-2 xl:line-clamp-1 text-[#323338] ">
                  Welcome to monday.com
                </h1>
                <p className="mb-12 xl:py-1 font-normal text-[16px] text-[#323338]">
                  Get started - it's free. No credit card needed.
                </p>
              </div>
              <div className="sign_up_new_top--action w-full">
                <button className="border-solid border-[0.8px] rounded-[4px] w-full border-[#c3c6d4] px-4 py-2 flex items-center justify-center hover:bg-[#DCDFEC]">
                  <img className="w-4 mr-3" src={googleIcon} />
                  <span>Sign up with Google</span>
                </button>
                <Divider className="my-4">Or</Divider>
                <Input
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  placeholder={"name@company.com"}
                  status={touched.email && errors.email ? "error" : null}
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2"
                />

                <button
                  type="submit"
                  className="border-solid border-1 rounded-md w-full border-gray-500 px-4 py-2 flex items-center justify-center my-4 bg-[#0073ea] text-[#323338]"
                >
                  Continue
                </button>
                <div className="terms text-center font-normal">
                  <div>
                    <span>By proceeding, you agree to the</span>
                  </div>
                  <div>
                    <div>
                      <a className="text-[#1f76c2]">
                        <span>Terms of Service</span>
                      </a>
                      <span> and </span>
                      <a className="text-[#1f76c2]">
                        <span>Privacy Policy</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form Bottom */}
          <div className="sign_up_new_bottom font-normal flex-none xl:flex-none mb-16 xl:mb-16">
            <p className=" h-full">
              Already have an account? <a className="text-sky-500">Log in</a>
            </p>
          </div>
        </div>
      </div>
      {/* basis-5/12 */}
      <div className="signUpRight basis-0 xl:basis-5/12 hidden xl:block">
        <img className="w-full h-full" src={imgSignUp}></img>
      </div>
    </form>
  );
};

export default SignUp;
