import React from "react";
import { Outlet } from "react-router-dom";
const SignUpPage = () => {
  return (
    <div className="flex justify-between">
      <Outlet />
      <div className="right">right</div>
    </div>
  );
};

export default SignUpPage;
