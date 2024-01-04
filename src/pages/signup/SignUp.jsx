import React from "react";
import imgSignUp from "../../assets/img/monday_logup.png";
import { Divider, Input } from "antd";
import googleIcon from "../../assets/img/google-icon.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("aa");
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Empty"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  return (
    <form onSubmit={handleSubmit} className="flex flex-row h-screen">
      <div className="signUpLeft basis-7/12">
        <div className="text-center flex flex-col items-center h-full">
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
                className="border-solid border-1 rounded-md w-full border-gray-500 px-4 py-2 flex items-center justify-center my-4 bg-[#ecedf5] text-[#323338]"
              >
                Continue
              </button>
              <div>
                <p>By proceeding, you agree to the</p>
                <p>
                  <a className="text-sky-500">Terms of Service</a> and
                  <a className="text-sky-500"> Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
          {/* form Bottom */}
          <div className="sign_up_new_bottom h-1/6">
            <p className=" h-full">
              Already have an account? <a className="text-sky-500">Log in</a>
            </p>
          </div>
        </div>
      </div>
      <div className="signUpRight basis-5/12 sm:block hidden">
        <img className="w-full h-full" src={imgSignUp}></img>
      </div>
    </form>
  );
};

export default SignUp;
