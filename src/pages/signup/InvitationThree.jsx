import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import imgTeam from "../../assets/img/how-many-people-work-at-your-company.png";
import logoFullBig from "../../assets/img/logo-full-big.png";
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";

const InvitationThree = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      teamSize: "",
      companySize: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/invitationFour");
    },

    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email format").required("Empty"),
    // }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  const optionsTeamSize = [
    {
      label: "Only me",
      value: "1",
    },
    {
      label: "2 - 5",
      value: "2_5",
    },
    {
      label: "6 - 10",
      value: "6_10",
    },
    {
      label: "11 - 15",
      value: "11_15",
    },
    {
      label: "16 - 25",
      value: "16_25",
    },
    {
      label: "25 - 50",
      value: "25_50",
    },
    {
      label: "51 - 100",
      value: "51_100",
    },
    {
      label: "101 - 500",
      value: "101_500",
    },
  ];
  const optionsCompanySize = [
    {
      label: "1 - 19",
      value: "1_19",
    },
    {
      label: "20 - 49",
      value: "20_49",
    },
    {
      label: "50 - 99",
      value: "50_99",
    },
    {
      label: "100 - 250",
      value: "100_250",
    },
    {
      label: "251 - 500",
      value: "251_500",
    },
    {
      label: "501 - 1500",
      value: "501_1500",
    },
    {
      label: "1500+",
      value: "1501",
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
                    How many people work at your company?
                  </h2>
                  <div>
                    <div className="radio-buttons-container ">
                      <Radio.Group
                        className="flex flex-wrap"
                        name="teamSize"
                        options={optionsTeamSize}
                        onChange={handleChange}
                        value={values.teamSize}
                      />
                    </div>
                  </div>
                </div>
                {/* second question */}
                <div className="acq_content-title2 mt-16">
                  <h2 className="font-medium text-2xl mb-2">
                    How many people work at your company?
                  </h2>
                  <div className="radio-buttons-container ">
                    <Radio.Group
                      className="flex flex-wrap"
                      name="companySize"
                      onChange={handleChange}
                      options={optionsCompanySize}
                      value={values.companySize}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* "acq_action */}
            <div className="acq_action flex-none flex justify-between mt-10">
              <div className="acq_action-left">
                <button
                  type="submit"
                  className="btnBack border-[1px] border-[#c3c6d4] text-[#323338] bg-transparent px-4 py-2 h-10 rounded-[4px]"
                  onClick={() => navigate("/invitation")}
                >
                  <span className="w-5 h-5 ml-2">
                    <i className="fa-solid fa-chevron-left fa-xs mr-2"></i>
                  </span>
                  Back
                </button>
              </div>
              <div className="acq_action-right">
                <div>
                  <button
                    type="submit"
                    className={
                      values.teamSize && values.companySize
                        ? "btn1"
                        : "btn1Disabled"
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
        </div>
        <div className="basis-5/12 hidden xl:block">
          <img className="w-full h-full" src={imgTeam} />
        </div>
      </div>
    </form>
  );
};

export default InvitationThree;
