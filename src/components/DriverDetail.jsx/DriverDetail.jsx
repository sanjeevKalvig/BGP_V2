import React from "react";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";

const DriverDetail = () => {
  return (
    <div>
      <Header />
      <div className=" relative flex w-full   justify-center py-[3rem]  sm:py-[6rem]">
        <div className=" w-full flex flex-col lg:flex-row gap-[2rem] px-[2rem] sm:px-[6rem]">
          <div className="relative  flex justify-center items-center">
            <img
              src="driver/driverimg.png"
              alt="Karan Singh"
              className=" relative lg:h-[400px] w-[300px] lg:w-[550px] z-10 -scale-x-100"
            />
            <span
              className="absolute lg:left-0  text-gray-900 text-[clamp(160px,16vw,200px)] 
            font-bold font-ethnocentric z-0"
            >
              44
            </span>
          </div>
          <div className="w-full h-1 lg:h-full lg:w-1 bg-[#FFFFFF]"></div>
          <div className="  flex flex-col justify-center items-center ">
            <div className="mb-4 ">
              <img
                src="teamlogo.svg"
                alt="Delhi Eternals"
                className="sm:w-[500px]"
              />
            </div>
            <div
              className="text-white flex flex-col
             gap-4"
            >
              {/* Top Row */}
              <div className="flex justify-center items-center gap-3">
                <p className="text-[clamp(12px,6vw,28px)] sm:text-[48px] font-ethnocentric">#44</p>
                <div className="h-[80%] w-[0.1rem]  bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <img
                    src="driver/teamflag.svg"
                    alt="team flag"
                    className="h-8"
                  />
                  <p className="text-[clamp(12px,5vw,24px)] sm:text-[32px]">India</p>
                </div>
                <div className="h-[80%] w-[0.1rem]  bg-slate-300"></div>
                <p className="text-[clamp(12px,5vw,24px)] sm:text-[32px]">Mercedes</p>
              </div>

              {/* Name Row */}
              <div className="">
                <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] text-center leading-none font-ethnocentric">
                  KARAN SINGH
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between  items-center px-[4rem]  mb-[2rem]">
        <h2 className="uppercase text-[24px] lg:text-[50px] font-ethnocentric mt-12 md:mt-0 ">
          Statistics
        </h2>
        <span
          className="h-0.5 sm:h-1 w-full sm:w-[60%] bg-[#C40100] hidden md:inline-block
         mt-2 sm:mt-0 "
        ></span>
      </div>

      <div className=" text-white font-sans md:px-[0rem] lg:px-[6rem] flex flex-col gap-8 lg:mb-[2rem]">
        {/* Top: Season Summary */}
        <div className="w-full  gap-9 flex flex-col sm:flex-row p-[1rem] ">
          <div className="w-full sm:w-[60%] flex flex-col gap-9">
            {/* 2025 SEASON */}
            <div className="bg-transparent h-auto p-6  flex-1 flex flex-col gap-4 border text-left rounded-[50px]">
              <h2 className="text-lg lg:text-[30px]  font-ethnocentric mb-3">
                2025 SEASON
              </h2>
              <div className="grid grid-cols-2 gap-[3rem] mt-2 ">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Season Position
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    1ST
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Season Points
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    559
                  </p>
                </div>
              </div>
              <div className="h-1 bg-[#383838 lg:lg:my-3"></div>
              <div className="grid grid-cols-2 gap-[3rem] mt-2  ">
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Wins
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    14
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Podiums
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Poles
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Top 10s
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    56
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    DK: Fastest Laps
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">DNS</p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    56
                  </p>
                </div>
              </div>
              {/* line */}
              <div className="h-1 bg-[#383838] lg:my-3"></div>
              <div className="grid grid-cols-2 gap-[3rem] mt-2  ">
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Wins
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    14
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Podiums
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Poles
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    Grand Prix Top 10s
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    56
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                    DK: Fastest Laps
                  </p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    13
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">DNS</p>
                  <p className="font-bold  lg:text-[30px] font-ethnocentric">
                    56
                  </p>
                </div>
              </div>
              {/* line */}
              <div className="h-1 bg-[#383838] lg:my-3"></div>
              <button className="h-12 w-[10rem] bg-white text-black rounded-[25px] font-semibold text-sm">
                Full season results
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[35%] flex flex-col gap-9 h-[70%]">
            {/* TEAM SUMMARY */}
            <div className="bg-[#0D0D0D] p-6 flex-1 flex flex-col gap-2 px-[2rem] rounded-[50px]">
              <h2 className="text-sm font-bold tracking-widest mb-3 font-ethnocentric lg:text-[25px]">
                TEAM SUMMARY
              </h2>
              <div className=" w-full flex flex-col gap-1 lg:my-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Grand Prix Entered
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    900
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>

                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Team Points
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    9999
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Highest Race Finish
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    1 (X200)
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Podiums
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    500
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Highest Grid Position
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    1 (X172)
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    Pole Positions
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    200
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-400 lg:text-[17px]">
                    World Championships
                  </p>
                  <p className="font-bold text-sm lg:text-[21px] font-ethnocentric">
                    9
                  </p>
                </div>
                {/* Line */}
                <div className="h-1 bg-[#383838] lg:my-3"></div>
              </div>

              <button className="mt-4 py-2 px-5 h-10 bg-white text-black w-[10rem] rounded-[25px] font-semibold text-[15px]">
                Results archive
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[1rem] md:px-[6rem] mb-[6rem]">
        <div className="flex  flex-col p-5 md:p-10 bg-[#0D0D0D] rounded-[50px]  justify-between">
          <h2 className="uppercase font-ethnocentric lg:text-[40px] text-[#B2B2B2]">
            behind the wheel
          </h2>
          <div className=" w-full flex flex-col md:flex-row mt-[2rem] md:mt-[4rem]  items-center justify-between ">
            <p className="text-[clamp(13px,2vw,30px)] w-full md:w-[50%] lg:w-[40%] text-[#FFFFFF] opacity-80 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <img src="/driver/driverimg.png" alt="" className="-scale-x-100 w-[250px] md:w-[35%] lg:w-[50%] h-[250px] lg:h-[420px] " />
          </div>
        </div>
      </div>

      <img src="/driver/cardetail.jpg" alt=""  className="lg:h-[500px] w-full object-cover mb-[4rem]"/>

      <Footer />
    </div>
  );
};

export default DriverDetail;
