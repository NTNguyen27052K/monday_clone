import React, { useEffect, useState } from "react";
import imgInvitationTwo from "../../assets/img/set-up-your-account.png";
import logoFullBig from "../../assets/img/logo-full-big.png";
import { Radio, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./invitationTwo.scss";
import useDeviceType from "../../customHooks/useDeviceType";

const InvitationTwo = () => {
  useEffect(() => {
    console.log("a");
  }, []);

  const formik = useFormik({
    initialValues: {
      whatBring: "",
      whatDescribes: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    handleChange: (values) => {
      console.log(values);
    },
    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email format").required("Empty"),
    // }),
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  const [value, setValue] = useState("");

  const onChange = ({ target: { value } }) => {
    setValue(value);
    handleChange({ target: { name: "work", value } });
  };

  const options = [
    {
      label: "Work",
      value: "work",
    },
    {
      label: "School",
      value: "school",
    },
    {
      label: "Personal",
      value: "personal",
    },
    {
      label: "Nonprofit",
      value: "nonprofit",
    },
  ];
  const optionsWork = [
    {
      label: "Business owner",
      value: "businessOwner",
    },
    {
      label: "Team Leader",
      value: "teamLeader",
    },
    {
      label: "Freelancer",
      value: "freelancer",
    },
    {
      label: "Director",
      value: "director",
    },
    {
      label: "C-Level",
      value: "cLevel",
    },
    {
      label: "VP",
      value: "vp",
    },
  ];

  const optionsSchool = [
    {
      label: "Undergraduate student",
      value: "undergraduateStudent",
    },
    {
      label: "Graduate student",
      value: "graduateStudent",
    },
    {
      label: "Faculty member",
      value: "facultyMember",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const optionsNonprofit = [
    {
      label: "Board member",
      value: "boardMember",
    },
    {
      label: "Executive",
      value: "executive",
    },
    {
      label: "Employee",
      value: "employee",
    },
    {
      label: "Volunteer",
      value: "volunteer",
    },
  ];
  const deviceType = useDeviceType();
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row h-screen">
        <div className="basis-7/12">
          <div className="account-setUp_question flex flex-col px-[128px] py-[64px] h-full w-full">
            {/* acq_header */}
            <div className="acq_header flex-none">
              <div className="acq_header-container mb-16">
                <div className="acq_header-logo">
                  <img src={logoFullBig} className="h-6" />
                </div>
              </div>
            </div>
            {/* acq_content */}
            <div className="acq_content grow">
              <div className="acq_content-container">
                {/* first question */}
                <div className="acq_content-title">
                  <h2 className="font-medium text-2xl mb-2">
                    Hey there, what brings you here today?
                  </h2>
                  <div>
                    <div className="radio-buttons-container ">
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatBring"
                        options={options}
                        onChange={handleChange}
                        value={values.whatBring}
                      />
                    </div>
                  </div>
                </div>
                {/* second question */}
                <div className="acq_content-title mt-16">
                  <h2 className="font-medium text-2xl mb-2">
                    What best describes your current role?
                  </h2>
                  <div className="radio-buttons-container ">
                    {/* work question */}
                    {values.whatBring === "work" ? (
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatDescribes"
                        onChange={handleChange}
                        options={optionsWork}
                        value={values.whatDescribes}
                      />
                    ) : values.whatBring === "school" ? (
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatDescribes"
                        onChange={handleChange}
                        options={optionsSchool}
                        value={values.whatDescribes}
                      />
                    ) : values.whatBring === "nonprofit" ? (
                      <Radio.Group
                        className="flex flex-wrap"
                        name="whatDescribes"
                        onChange={handleChange}
                        options={optionsNonprofit}
                        value={values.whatDescribes}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* "acq_action */}
            <div className="acq_action flex-none flex justify-end mt-10">
              <div className="acq_action-left"></div>
              <div className="acq_action-right">
                <div>
                  <button>Continue</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="basis-5/12">
          <img className="w-full h-full" src={imgInvitationTwo} />
        </div>
      </div>
    </form>
  );
};

export default InvitationTwo;
