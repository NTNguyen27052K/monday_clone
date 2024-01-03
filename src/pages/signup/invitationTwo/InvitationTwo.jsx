import React from "react";
import InvitationTwoL from "./InvitationTwoL";
import imgInvitationTwo from "../../../assets/img/what-brings-you-here-today.png";
import SignLayout from "../../../layout/sign/SignLayout";

const InvitationTwo = () => {
  return (
    <SignLayout
      componentLeft={InvitationTwoL}
      componentRight={<img className="w-full h-full" src={imgInvitationTwo} />}
    />
  );
};

export default InvitationTwo;
