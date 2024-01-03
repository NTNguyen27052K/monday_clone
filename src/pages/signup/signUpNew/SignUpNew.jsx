import React from "react";
import SignLayout from "../../../layout/sign/SignLayout";
import SignUpNewL from "./SignUpNewL";
import imgSignUp from "../../../assets/img/monday_logup.png";

const SignUpNew = () => {
  return (
    <SignLayout
      componentLeft={<SignUpNewL />}
      componentRight={<img className="w-full h-full" src={imgSignUp} />}
    />
  );
};

export default SignUpNew;
