import React from "react";
import imgSUYC from "../../assets/img/set-up-your-account.png";
import logoBig from "../../assets/img/logo-full-big.png";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpMain = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      accountName: "",
    },
    onSubmit: (values) => {
      console.log("aa");
      console.log(values);
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Enter your full name"),
      password: Yup.string()
        .min(8, "Must Contain 8 Characters")
        .matches(
          /^(?=.*[A-Z])/,
          "Password must contain at least one uppercase letter"
        )
        .matches(/^(?=.*\d)/, "Password must contain at least one digit")
        .matches(
          /^(?=.*[!@#$%^&+=])/,
          "Password must contain at least one special character"
        )
        .required("Create a password"),
      accountName: Yup.string()
        .min(3, "Account name needs at least 3 characters")
        .required("Name your account"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  return (
    <form>
      <div className="signUp flex h-screen">
        <div className="signUp__L basis-7/12">
          <div className="px-[128px] py-[64px]">
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
                <Input
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                  placeholder="Enter your full name"
                  status={touched.fullName && errors.fullName ? "error" : null}
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2"
                />
                {touched.fullName && errors.fullName ? (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                ) : null}
              </div>
              <div className="signUp__Inpu--password mb-[24px]">
                <label className="block mb-2 text-sm font-medium ">
                  Password
                </label>
                <Input
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  placeholder="Enter at least 8 characters"
                  status={touched.password && errors.password ? "error" : null}
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2"
                />
                {touched.password && errors.password ? (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                ) : null}
              </div>
              <div className="signUp__Inpu--accountName">
                <label for="email" className="block mb-2 text-sm font-medium ">
                  Account name
                </label>
                <Input
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.accountName}
                  name="accountName"
                  placeholder="For example, company's or department's name"
                  status={
                    touched.accountName && errors.accountName ? "error" : null
                  }
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2"
                />
                {touched.accountName && errors.accountName ? (
                  <span className="text-red-500 text-xs">
                    {errors.accountName}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="signUp__R basis-5/12">
          <img className="h-full w-full" src={imgSUYC} />
        </div>
      </div>
    </form>
  );
};

export default SignUpMain;
