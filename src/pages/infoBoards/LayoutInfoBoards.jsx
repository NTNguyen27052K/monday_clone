import React from "react";

const LayoutInfoBoards = () => {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <div className="basis-1/2">â</div>
        <div className="basis-1/2 p-[2px] h-full w-full">
          {/* infoBoards__container */}
          <div className="infoBoards__container flex flex-col items-end bg-[#f6f7fb] rounded-[10px] p-[4px] relative h-full w-full">
            {/* button x */}
            <button className="h-10 w-10 flex justify-center items-center">
              <i className="fa-solid fa-x fa-lg"></i>
            </button>
            {/* board */}
            <div className="bg-[#fff] h-[551px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)] drop-shadow-[-10px_10px_30px_rgba(29,140,242,.3)] pt-8 absolute right-0 top-[50%] w-[90%] overflow-y-auto box-content translate-y-[-50%]">
              <div className="flex flex-col">
                {/* name board */}
                <div className="nameBoard ml-8">
                  {/* nameBoard__top */}
                  <div className="nameBoard__top h-9 w-full flex justify-start items-center">
                    {/* NameBoard */}
                    <div class="showNameBoard my-3 bg-[#c3c6d4] border-0 h-2 w-[30%] rounded-lg"></div>
                  </div>
                  {/* nameBoard__Bottom */}
                  <div className="nameBoard__bottom flex flex-row justify-between mt-2 mr-8 mb-4">
                    <div className="flex flex-row h-[42px]">
                      <div></div>
                    </div>
                  </div>
                </div>
                {/* board */}
                <div className="board ml-8">
                  <div className="flex"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutInfoBoards;
