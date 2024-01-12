import React, { useEffect } from "react";
import imgSUYC from "../../assets/img/set-up-your-account.png";
import logoBig from "../../assets/img/logo-full-big.png";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import useDeviceType from "../../customHooks/useDeviceType";
import { useNavigate } from "react-router-dom";

const SignUpMain = () => {
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  const validationDesktop = Yup.object({
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
  });
  const validationPhone = Yup.object({
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
  });
  const initialDesktop = {
    fullName: "",
    password: "",
    accountName: "",
  };
  const initialPhone = {
    fullName: "",
    password: "",
  };

  useEffect(() => {
    if (deviceType === "desktop") {
      setValues(initialDesktop);
    } else {
      setValues(initialPhone);
    }
  }, [deviceType]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      navigate("/invitation");
    },
    validationSchema:
      deviceType === "desktop" ? validationDesktop : validationPhone,
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="signUp xl:flex container mx-auto xl:h-screen">
        <div className="signUp__L basis-0 xl:basis-7/12 w-full h-full px-8 xl:flex xl:flex-col xl:px-[128px] xl:py-[64px]">
          <div className="signUp__L--header flex-none hidden xl:block ">
            <div>
              <div className="logo mb-16">
                <img className="h-6" src={logoBig} alt="logo" />
              </div>
            </div>
          </div>
          <div className="signUp__L--content grow">
            <div className="titles-wrapper ">
              <h1 className="text-[#323338] font-medium text-[24px] hidden xl:block ">
                Create your account
              </h1>
              <h1 className="text-[#323338] font-medium text-2xl block tracking-[-0.1px] xl:hidden   mt-8">
                Sign up for free
              </h1>
            </div>
            <div>
              {/* fullName */}
              <div className="signUp__Inpu--fullName mb-[24px]">
                <label className="block mb-2 text-sm font-medium ">
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
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2 text-base font-normal"
                />
                {touched.fullName && errors.fullName ? (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                ) : null}
              </div>
              {/* password */}
              <div className="signUp__Inpu--password xl:mb-[24px]">
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
                  className="bg-[#c3c6d4] bg-transparent px-4 py-2 text-base font-normal"
                />
                {touched.password && errors.password ? (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                ) : null}
              </div>
              {/* accountName */}
              {deviceType && deviceType === "desktop" ? (
                <div className="signUp__Inpu--accountName">
                  <label className="block mb-2 text-sm font-medium ">
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
                    className="bg-[#c3c6d4] bg-transparent px-4 py-2 text-base font-normal"
                  />
                  {touched.accountName && errors.accountName ? (
                    <span className="text-red-500 text-xs">
                      {errors.accountName}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="signUp__L--submit  xl:flex xl:justify-end flex-none">
            <div>
              <button
                type="submit"
                className="btn1 bg-[#ecedf5] text-[#323338]  xl:opacity-100 opacity-[.38] xl:bg-[#0073ea] w-full mt-12 xl:text-white text-base h-12 px-6 py-3 xl:px-4 xl:py-2"
              >
                Continue
                <i className="fa-solid fa-chevron-right fa-xs ml-2 hidden xl:block "></i>
              </button>
            </div>
          </div>
        </div>
        <div className="logo-mobile block xl:hidden px-6 py-2 fixed bottom-0">
          <img className="h-6" src={logoBig} alt="logo" />
        </div>
        <div className="signUp__R basis-0 xl:basis-5/12 hidden xl:block ">
          <img className="h-full w-full" src={imgSUYC} />
        </div>
      </div>
    </form>
  );
};

export default SignUpMain;
