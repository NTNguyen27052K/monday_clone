import React, { useState } from "react";
import imgInvite from "../../assets/img/imgInvite.png";
import logoFullBig from "../../assets/img/logo-full-big.png";
import { Input } from "antd";
import { InputInvite } from "./InputInvite";
import ButtonStyle from "../../components/buttonStyle/ButtonStyle";
import { useFormik } from "formik";

const InviteMembers = () => {
  const [inputInvite, setInputInvite] = useState([1]);

  const formik = useFormik({
    initialValues: {
      // emailInvite: "",
      arrInvite: [
        {
          email: "",
          role: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  const addonAfter = (
    <div className="flex justify-center items-center">
      <i className="fa-regular fa-copy mr-2"></i>
      <p>Copy</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row h-screen">
        <div className="basis-[60.03%]">
          <div className="inviteMembers__container flex flex-col px-12 py-8 h-full">
            {/* header */}
            <div className="inviteMembers__header mb-6 flex-none">
              <img src={logoFullBig} alt="logoFullBig" className="h-6 mb-8" />
              <h2 className="mb-2 font-medium text-[24px] leading-[30px] tracking-[-0.1px]">
                Who else is on your team?
              </h2>
            </div>
            {/* content */}
            <div className="inviteMembers__content w-[75%] grow">
              {/* link_invite */}
              <div className="link_invite">
                <h6 className="mb-2 font-normal text-[14px] leading-[20px]">
                  Invite with link (anyone with a @ email)
                </h6>
                <div className="">
                  <Input
                    className="h-10"
                    addonAfter={addonAfter}
                    defaultValue={
                      "https://adsfad-squad.monday.com/users/sign_up?invitationId=35456794885847830000"
                    }
                  />
                </div>
              </div>
              {/* invite_input */}
              <div className="invite_input overflow-y-auto">
                {inputInvite.map((item, index) => {
                  return (
                    <InputInvite
                      key={index}
                      name={`emailInvite${index}`}
                      name2={`roleInvite${index}`}
                      handleChange={handleChange}
                      placeholder={"Add email here"}
                    />
                  );
                })}
              </div>
              {/* add_btn */}
              <div className="add_btn">
                <button
                  type="button"
                  className="font-normal text-[14px] leading-[22px] text-[#323338] flex items-center h-10 px-4 py-2 rounded hover:bg-[#dcdfec]"
                  onClick={() =>
                    setInputInvite([...inputInvite, inputInvite.length + 1])
                  }
                >
                  <span className="w-5 h-5">
                    <i className="fa-solid fa-plus fa-sm"></i>
                  </span>
                  <span className="">Add another</span>
                </button>
              </div>
            </div>
            {/* footer */}
            <div className="inviteMembers__footer mt-2 flex-none">
              <div className="footer flex justify-between">
                <button className="text-[#323338] bg-transparent">
                  Remind me later
                </button>
                {/* <button>Invite your team</button> */}
                <ButtonStyle type={"submit"} text={"Invite your team"} />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[39.97%] flex justify-center bg-[#00ca72]  w-full">
          <div className="w-[77.3%] h-full  ">
            <img className="w-full h-full" src={imgInvite} />
          </div>
          {/*  */}
        </div>
      </div>
    </form>
  );
};

export default InviteMembers;
