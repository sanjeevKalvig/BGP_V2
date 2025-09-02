import React from "react";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";

const TeamsDetails = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full px-[4rem]">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Top: Team Logo and Name */}
          <div className=" w-full flex flex-col items-center mb-8">
            <img
              src="/teamlogo.svg"
              alt="Delhi Eternals Logo"
              className="w-[55%] h-full"
            />
          </div>

          {/* Bottom: Player Card Container */}
          <div className=" relative flex flex-row gap-6 ">
            {/* Player Card 1 */}
            <div className=" relative bg-gradient-to-b from-[#000000] to-[#470000] w-[200px]">
             <img src="/driver.png" alt="" className="z-10 h-[15rem] w-[20rem] -top-[3rem] absolute"/>
             <h2>KARAN SINGH</h2>
             <div className="absolute h-[20%] bg-[#202020] z-[60]">
             </div>
            </div>
            {/* Player Card 2 */}
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg w-52 flex flex-col items-center">
              <div className="w-full h-44 bg-[#262626] flex items-center justify-center">
                <img
                  src="/driver.jpg"
                  alt="Karan Singh"
                  className="w-36 h-44 object-cover"
                />
              </div>
              <div className="w-full py-2 px-3 flex flex-col items-center border-t border-[#222]">
                <span className="text-white text-lg font-bold">
                  KARAN SINGH
                </span>
                <span className="text-[#c40100] text-base font-semibold mt-1">
                  #44
                </span>
                <div className="w-3 h-3 rounded-full bg-gray-300 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center ">
          <h2 className="uppercase lg:text-[50px] font-ethnocentric ">
            Statistics
          </h2>
          <span className="h-0.5 sm:h-1 w-full sm:w-[60%] bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
        </div>
        <div className="min-h-screen text-white font-sans px-[6rem] flex flex-col gap-8">
          {/* Top: Season Summary */}
          <div className="w-full  gap-9 flex p-[1rem] ">
            <div className="w-[60%] flex flex-col gap-9">
              {/* 2025 SEASON */}
              <div className="bg-transparent h-auto p-6  flex-1 flex flex-col gap-4 border text-left rounded-[50px]">
                <h2 className="text-lg lg:text-[30px]  font-ethnocentric mb-3">
                  2025 SEASON
                </h2>
                <div className="grid grid-cols-2 gap-[3rem] mt-2 ">
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Season Position
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      1ST
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Season Points
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      559
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-[#383838 lg:mb-[2rem]]"></div>
                <div className="grid grid-cols-2 gap-[3rem] mt-2  ">
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Grand Prix Wins
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      14
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Grand Prix Podiums
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Grand Prix Poles
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Grand Prix Top 10s
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      DK: Fastest Laps
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">DNS</p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                <button className="h-12 w-[10rem] bg-white text-black rounded-[25px] font-semibold text-sm">
                  Full season results
                </button>
              </div>
              {/* TEAM SUMMARY */}
              <div className="bg-[#0D0D0D] p-6 flex-1 flex flex-col gap-2 px-[2rem] rounded-[50px]">
                <h2 className="text-lg font-bold tracking-widest mb-3 font-ethnocentric lg:text-[36px]">
                  TEAM SUMMARY
                </h2>
                <div className=" w-full flex flex-col gap-6 mt-[2rem]">
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Grand Prix Entered
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      900
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>

                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Team Points
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      9999
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Highest Race Finish
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      1 (X200)
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Podiums
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      500
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Highest Grid Position
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      1 (X172)
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Pole Positions
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      200
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      World Championships
                    </p>
                    <p className="font-bold text-lg lg:text-[30px] font-ethnocentric">
                      9
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] lg:mt-[2rem]"></div>
                </div>

                <button className="mt-4 py-2 px-5 h-10 bg-white text-black w-[10rem]  rounded-[25px] font-semibold text-sm">
                  Results archive
                </button>
              </div>
            </div>

            <div className=" w-[35%] flex flex-col gap-9 h-[70%]">
              {/* SPRINT RACES */}
              <div className="bg-transparent p-6 flex-1 flex flex-col justify-center border h-[300px] rounded-[45px]">
                <div className="grid grid-cols-2 gap-[3rem]  ">
                  <div className="space-y-4 ">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Races
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      14
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Points
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Wins
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Podiums
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Poles
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 lg:text-[24px]">
                      Sprint Top 10ps
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                </div>
              </div>

              {/* TEAM PROFILE */}
              <div className=" bg-[#0D0D0D] flex flex-col justify-center items-center p-6 rounded-[50px] ">
                <h2 className="text-lg font-bold tracking-widest w-[82%] mb-3 lg:text-[24px] font-ethnocentric">
                  TEAM PROFILE
                </h2>

                <div className="flex flex-col gap-5  w-[82%] mt-8">
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Full Team Name
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      DELHI ETERNALS
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Technical Chief
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      KARAN SINGH
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Base
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      DELHI, INDIA
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Chassis
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      MCL22
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Team Chief
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      KARAN SINGH
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <span className="text-xs text-gray-400 lg:text-[18px]">
                      Power Unit
                    </span>
                    <span className="font-semibold lg:text-[24px] font-ethnocentric">
                      MERCEDES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamsDetails;
