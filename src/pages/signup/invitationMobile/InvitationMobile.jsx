import React, { useState } from "react";
import { Progress } from "antd";
import logoBig from "../../../assets/img/logo-full-big.png";
import "./invitationMobile.scss";

const InvitationMobile = () => {
  const question_1 = [
    {
      label: "Work",
      value: "work",
      imgSrc: "https://cdn.monday.com/images/mobile-signup/work-use.svg",
    },
    {
      label: "Personal",
      value: "personal",
      imgSrc: "https://cdn.monday.com/images/mobile-signup/personal-use.svg",
    },
    {
      label: "School",
      value: "school",
      imgSrc: "https://cdn.monday.com/images/mobile-signup/school-use.svg",
    },
  ];
  const question_2 = [
    {
      label: "I'm a business owner",
      value: "businessOwner",
    },
    {
      label: "I'm a team leader",
      value: "teamLeader",
    },
    {
      label: "I'm a team member",
      value: "member",
    },
    {
      label: "I'm a freelancer",
      value: "freelancer",
    },
    {
      label: "I'm a director / C-level / VP",
      value: "director_cLevel_vp",
    },
  ];

  const question_3 = [
    {
      label: "Product management",
      value: "productMgt",
    },
    {
      label: "Design and Creative",
      value: "d&c",
    },
    {
      label: "POM",
      value: "pom",
    },
    {
      label: "Construction",
      value: "construction",
    },
    {
      label: "Sales and CRM",
      value: "s&c",
    },
    {
      label: "Software development",
      value: "sofDev",
    },
    {
      label: "Education",
      value: "education",
    },
    {
      label: "Finance",
      value: "finance",
    },
    {
      label: "IT",
      value: "it",
    },
    {
      label: "Nonprofits",
      value: "nonprofits",
    },
    {
      label: "HR and Recruiting",
      value: "hr&Rec",
    },
    {
      label: "Marketing",
      value: "marketing",
    },
    {
      label: "Operations",
      value: "operations",
    },
    {
      label: "Legal",
      value: "legal",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  const question_4 = [
    {
      label: "Academic research",
      value: "ar",
    },
    {
      label: "Administrative work",
      value: "aw",
    },
    {
      label: "Business operations",
      value: "bo",
    },
    {
      label: "CRM",
      value: "crm",
    },
    {
      label: "Curriculum and Syllabus management",
      value: "c&sm",
    },
    {
      label: "Goals and strategy",
      value: "g&s",
    },
    {
      label: "Group assignments",
      value: "ga",
    },
    {
      label: "Individual work",
      value: "iw",
    },
    {
      label: "Portfolio management",
      value: "portfolio_management",
    },
    {
      label: "Project management",
      value: "project_management",
    },
    {
      label: "Requests and approvals",
      value: "requests_approvals",
    },
    {
      label: "Resource management",
      value: "resource_management",
    },
    {
      label: "Student organizations",
      value: "student_organizations",
    },
    {
      label: "Task management",
      value: "task_management",
    },
  ];
  const question_5 = [
    {
      label: "Only me",
      value: "only_me",
    },
    {
      label: "2-5",
      value: "2_5",
    },
    {
      label: "6-10",
      value: "6_10",
    },
    {
      label: "11-15",
      value: "11_15",
    },
    {
      label: "16-25",
      value: "16_25",
    },
    {
      label: "26-50",
      value: "26_50",
    },
    {
      label: "51-100",
      value: "51_100",
    },
    {
      label: "101-500",
      value: "101_500",
    },
  ];
  const question_6 = [
    {
      label: "1-19",
      value: "1_19",
    },
    {
      label: "20-49",
      value: "20_49",
    },
    {
      label: "50-99",
      value: "50_99",
    },
    {
      label: "100-250",
      value: "100_250",
    },
    {
      label: "251-500",
      value: "251_500",
    },
    {
      label: "501-1500",
      value: "501_1500",
    },
    {
      label: "1501-4000",
      value: "1501_4000",
    },
    {
      label: "4000+",
      value: "4000_plus",
    },
  ];

  const percentStep = 100 / 6;
  const tolerance = 0.0001;

  const [survey, setSurvey] = useState({
    percent: percentStep,
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
  });

  const next = () => {
    setSurvey((prevSurvey) => {
      const limitedPercent = Math.min(prevSurvey.percent + percentStep, 100);

      return {
        ...prevSurvey,
        percent: limitedPercent,
      };
    });
  };
  const back = () => {
    setSurvey((prevSurvey) => {
      const limitedPercent = Math.max(
        prevSurvey.percent - percentStep,
        percentStep
      );
      console.log(prevSurvey);
      return Math.abs(limitedPercent - mathPercent(2)) < tolerance
        ? {
            ...prevSurvey,
            percent: limitedPercent,
            question_2: "",
          }
        : {
            ...prevSurvey,
            percent: limitedPercent,
          };
    });
  };
  const renderQuestion = (title, options, property) => {
    return (
      <div className="mobile-question">
        <div className="mobile-question-title px-[30px] text-left">
          <h1 className="text-2xl tracking-[-0.1px] font-medium my-4">
            {title}
          </h1>
        </div>
        <div className="mobile-question-option px-6 pt-4 ">
          {options.map((option, index) => {
            return (
              <div
                className="mobile-question-item"
                key={index}
                onClick={() =>
                  setSurvey({
                    ...survey,
                    [property]: option.value,
                    percent:
                      option.value === "personal" || option.value === "school"
                        ? survey.percent + percentStep * 2
                        : survey.percent + percentStep,
                  })
                }
              >
                {option.imgSrc && (
                  <img
                    className="question-icon h-5 w-5 translate-y-[-1px] mr-2"
                    src={option.imgSrc}
                  />
                )}
                <span className="text-[18px] leading-[31px] text-[#323338]">
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const mathPercent = (a) => {
    return percentStep * a;
  };

  return (
    <div className="mobile-container h-screen w-screen">
      {/* mobile-stepper */}
      <div className="mobile-stepper">
        <div className="mobile-stepper-component flex items-center mb-10 px-6 pt-6">
          {/* back-button */}
          <div
            className={
              survey.percent === percentStep
                ? "back-button disableStep"
                : "back-button unableStep"
            }
            onClick={back}
          >
            Back
          </div>
          {/* Progress */}
          <Progress
            percent={survey.percent}
            showInfo={false}
            strokeColor="#1677ff"
            className="mx-4 my-0"
          />
          {/* skip-button */}
          <div
            className="skip-button text-[#323338] text-[16px] leading-8"
            onClick={next}
          >
            Skip
          </div>
        </div>
      </div>
      {/* mobile-question 1 */}
      {Math.abs(survey.percent - mathPercent(1)) < tolerance ? (
        renderQuestion(
          "What will you be using monday.com for?",
          question_1,
          "question_1"
        )
      ) : Math.abs(survey.percent - mathPercent(2)) < tolerance ? (
        renderQuestion("What best describes you?", question_2, "question_2")
      ) : Math.abs(survey.percent - mathPercent(3)) < tolerance ? (
        renderQuestion(
          " What is the main thing you want to manage?",
          question_3,
          "question_3"
        )
      ) : Math.abs(survey.percent - mathPercent(4)) < tolerance ? (
        renderQuestion("What are you working on?", question_4, "question_4")
      ) : Math.abs(survey.percent - mathPercent(5)) < tolerance ? (
        renderQuestion("What's your team size?", question_5, "question_5")
      ) : Math.abs(survey.percent - mathPercent(6)) < tolerance ? (
        renderQuestion("What's your team size?", question_6, "question_6")
      ) : (
        <></>
      )}
      {/* mobile-logo */}
      <div className="mobile-logo fixed bottom-0 px-6 py-2">
        <img className="h-6" src={logoBig} alt="logo" />
      </div>
    </div>
  );
};

export default InvitationMobile;
