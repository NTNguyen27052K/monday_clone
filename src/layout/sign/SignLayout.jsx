import React from "react";

const SignLayout = ({ componentLeft, componentRight }) => {
  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="basis-7/12 flex flex-col items-center">
          {componentLeft}
        </div>
        <div className="basis-5/12">{componentRight}</div>
      </div>
    </div>
  );
};

export default SignLayout;
