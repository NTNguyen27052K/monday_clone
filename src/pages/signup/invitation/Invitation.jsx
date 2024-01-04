import React from "react";
import SignLayout from "../../../layout/sign/SignLayout";
import imgSUYC from "../../../assets/img/set-up-your-account.png";
import InvitationL from "./InvitationL";
const Invitation = () => {
  return (
    <SignLayout
      componentLeft={<InvitationL />}
      componentRight={<img className="w-full h-full" src={imgSUYC} />}
    />
  );
};

export default Invitation;
