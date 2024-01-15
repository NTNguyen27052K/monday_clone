import React from "react";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import { useFormik } from "formik";
import logoFullBig from "../../assets/img/logo-full-big.png";
import focusFirst from "../../assets/img/select-what-youd-like-to-focus-on.png";

const InvitationFive = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      whatFocusFirst: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email format").required("Empty"),
    // }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  const optionFocus = [
    {
      label: "Business operations",
      value: "businessOperations",
    },
    {
      label: "Goals and strategy",
      value: "goalsAndStrategy",
    },
    {
      label: "Resource management",
      value: "resourceManagement",
    },
    {
      label: "Requests and approvals",
      value: "requestsAndApprovals",
    },
    {
      label: "Student organizations",
      value: "studentOrganizations",
    },
    {
      label: "Portfolio management",
      value: "portfolioManagement",
    },
    {
      label: "Curriculum and Syllabus management",
      value: "curriculumAndSyllabusManagement",
    },
    {
      label: "Academic research",
      value: "academicResearch",
    },
    {
      label: "CRM",
      value: "crm",
    },
    {
      label: "Project management",
      value: "projectManagement",
    },
    {
      label: "Administrative work",
      value: "administrativeWork",
    },
    {
      label: "Group assignments",
      value: "groupAssignments",
    },
    {
      label: "Individual work",
      value: "individualWork",
    },
    {
      label: "Task management",
      value: "taskManagement",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row h-screen">
        <div className="basis-[61%] hidden xl:block">
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
            <div
              className="acq_content grow"
              //   style={{ flex: 10, overflowY: "auto" }}
            >
              <div className="acq_content-container">
                {/* first question */}
                <div className="acq_content-title">
                  <h2 className="font-medium text-2xl mb-2">
                    Select what you'd like to focus on first
                  </h2>
                  <h5 className="mb-4 font-normal">
                    Help us tailor the best experience for you
                  </h5>
                  <div className="overflow-y-auto">
                    <div className="radio-buttons-container">
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatManageFirst"
                        options={optionFocus}
                        onChange={handleChange}
                        value={values.whatFocusFirst}
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
        <div className="basis-[39%] hidden xl:block">
          <img className="w-full h-full" src={focusFirst} />
        </div>
      </div>
    </form>
  );
};

export default InvitationFive;
