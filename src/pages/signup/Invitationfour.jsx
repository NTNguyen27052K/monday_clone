import React from "react";
import { Radio } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import logoFullBig from "../../assets/img/logo-full-big.png";
import imgFour from "../../assets/img/select-what-youd-like-to-manage.png";
import { useNavigate } from "react-router-dom";

const Invitationfour = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      whatManageFirst: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/invitationFive");
    },

    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email format").required("Empty"),
    // }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  const optionManage = [
    {
      label: "Product management",
      value: "productMgt",
    },
    {
      label: "Construction",
      value: "construction",
    },
    {
      label: "IT",
      value: "it",
    },
    {
      label: "Finance",
      value: "finance",
    },
    {
      label: "Design and Creative",
      value: "d&c",
    },
    {
      label: "Sales and CRM",
      value: "s&c",
    },
    {
      label: "Education",
      value: "education",
    },
    {
      label: "HR and Recruiting",
      value: "hr&rec",
    },
    {
      label: "Software development",
      value: "sofDev",
    },
    {
      label: "Legal",
      value: "legal",
    },
    {
      label: "POM",
      value: "pom",
    },
    {
      label: "Nonprofits",
      value: "nonprofits",
    },
    {
      label: "Operations",
      value: "operations",
    },
    {
      label: "Marketing",
      value: "marketing",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row h-screen">
        <div className="basis-7/12 hidden xl:block">
          <div className="account-setUp_question flex flex-col  px-[128px] py-[64px] h-full w-full">
            {/* acq_header */}
            <div className="acq_header flex-none hidden xl:block">
              <div className="acq_header-container mb-16">
                <div className="acq_header-logo">
                  <img src={logoFullBig} className="h-6" />
                </div>
              </div>
            </div>
            {/* acq_content 1 */}
            <div className="acq_content grow">
              <div className="acq_content-container">
                {/* first question */}
                <div className="acq_content-title">
                  <h2 className="font-medium text-2xl mb-2">
                    Select what you'd like to manage first
                  </h2>
                  <h5 className="mb-4 font-normal">
                    You can always add more in the future
                  </h5>
                  <div>
                    <div className="radio-buttons-container ">
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatManageFirst"
                        options={optionManage}
                        onChange={handleChange}
                        value={values.whatManageFirst}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* "acq_action */}
            <div className="acq_action flex-none flex items-center justify-between  mt-10">
              <div className="acq_action-left">
                <button
                  type="submit"
                  className="btnBack border-[1px] border-[#c3c6d4] text-[#323338] bg-transparent px-4 py-2 h-10 rounded-[4px]"
                  onClick={() => navigate("/invitationthree")}
                >
                  <span className="w-5 h-5 ml-2">
                    <i className="fa-solid fa-chevron-left fa-xs mr-2"></i>
                  </span>
                  Back
                </button>
              </div>
              <div className="acq_action-right flex items-center">
                <button
                  type="submit"
                  className={
                    values.whatManageFirst
                      ? "btnContinue btn1"
                      : "btnContinue btn1Disabled"
                  }
                >
                  Continue
                  <span className="w-5 h-5 ml-2">
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-5/12 hidden xl:block">
          <img className="w-full h-full" src={imgFour} />
        </div>
      </div>
    </form>
  );
};

export default Invitationfour;
