import React from "react";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";

const TeamsDetails = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full px-[1rem] md:px-[4rem]">
        <div className="flex flex-col items-center justify-center min-h-screen py-[4rem]">
          {/* Top: Team Logo and Name */}
          <div className=" w-full flex flex-col items-center mt-20 mb-8">
            <img
              src="/teamlogo.svg"
              alt="Delhi Eternals Logo"
              className="w-[50%] h-full"
            />
          </div>

          {/* Bottom: Player Card Container */}
          <div className=" relative flex flex-col md:flex-row gap-20 mt-[5rem]">
            {/* Player Card 1 */}
            <div className=" h-[18rem] shadow-lg  w-72 relative flex flex-col items-center">
              <div className="relative h-[80%] w-full bg-gradient-to-b from-[#000000] to-[#470000] "> 
                {/* Image Section */}
                <img
                  src="driver/driverimg.png" // replace with your driver image
                  alt="Karan Singh"
                  className="absolute -top-[6rem] z-10 lg:h-[18rem]"
                />

                {/* Team Logo */}
                <img
                  src="/teamlogo.svg" // replace with your team logo
                  alt="team logo"
                  className="absolute top-2"
                />
                <h2 className="mt-2 absolute bottom-0 text-white font-bold text-xl self-start z-[10] sm:-left-12 font-ethnocentric lg:text-[25px]">
                  KARAN <span className="text-white">SINGH</span>
                </h2>
              </div>

              {/* Buttons */}
              <div className="absolute h-[20%] bottom-0 flex justify-between items-center   w-full  mt-4  px-2">
                <h2 className="lg:text-[30px] font-ethnocentric">#44</h2>
                <img src="/teamflag.svg" alt="" />
              </div>
            </div>
            {/* card 2 */}
            <div className=" r h-[18rem] shadow-lg  w-72 relative flex flex-col items-center">
              <div className="relative h-[80%] w-full bg-gradient-to-b from-[#000000] to-[#470000] "> 
                {/* Image Section */}
                <img
                  src="driver/driverimg.png" // replace with your driver image
                  alt="Karan Singh"
                  className="absolute -top-[6rem] z-10 lg:h-[18rem]"
                />

                {/* Team Logo */}
                <img
                  src="/teamlogo.svg" // replace with your team logo
                  alt="team logo"
                  className="absolute top-2"
                />
                <h2 className="mt-2 absolute bottom-0 text-white font-bold text-xl self-start z-[10] sm:-left-12 font-ethnocentric lg:text-[25px]">
                  KARAN <span className="text-white">SINGH</span>
                </h2>
              </div>

              {/* Buttons */}
              <div className="absolute h-[20%] bottom-0 flex justify-between items-center   w-full  mt-4  px-2">
                <h2 className="lg:text-[30px] font-ethnocentric">#44</h2>
                <img src="/teamflag.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center ">
          <h2 className="uppercase text-[36px] mx-auto lg:mx-0 lg:text-[50px] font-ethnocentric ">
            Statistics
          </h2>
          <span className="h-0.5 sm:h-1 w-full md:w-[60%] bg-[#C40100] hidden  md:inline-block mt-2 sm:mt-0"></span>
        </div>
        <div className="min-h-screen my-8 lg:my-24 text-white font-sans md:px-[0rem] lg:px-[6rem] flex flex-col gap-8">
          {/* Top: Season Summary */}
          <div className="w-full  gap-9 sm:flex  ">
            <div className=" md:w-[56%] lg:w-[60%] flex flex-col gap-9">
              {/* 2025 SEASON */}
              <div className="bg-transparent h-auto p-4 sm:p-6  flex-1 flex flex-col gap-4 border text-left rounded-[50px]">
                <h2 className="text-lg lg:text-[30px]  font-ethnocentric mb-3">
                  2025 SEASON
                </h2>
                <div className="grid grid-cols-2 gap-[3rem] mt-4 ">
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
                <div className="h-1 bg-[#383838] lg:mb-[2rem]]"></div>
                <div className="grid grid-cols-2 gap-[3rem] mt-4  ">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                      Grand Prix Wins
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      14
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                      Grand Prix Podiums
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                      Grand Prix Poles
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                      Grand Prix Top 10s
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">
                      DK: Fastest Laps
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.6vw,24px)]">DNS</p>
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
                <h2 className="text-lg font-bold tracking-widest mb-3 font-ethnocentric lg:text-[clamp(24px,2.2vw,36px)]">
                  TEAM SUMMARY
                </h2>
                <div className=" w-full flex flex-col gap-8 mt-[2rem]">
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)] ">
                      Grand Prix Entered
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      900
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>

                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      Team Points
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      9999
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      Highest Race Finish
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      1 (X200)
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      Podiums
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      500
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      Highest Grid Position
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      1 (X172)
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      Pole Positions
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      200
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                  <div className="w-full flex justify-between">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.5vw,28px)]">
                      World Championships
                    </p>
                    <p className="font-bold text-lg lg:text-[clamp(20px,2vw,30px)] font-ethnocentric">
                      9
                    </p>
                  </div>
                  {/* Line */}
                  <div className="h-1 bg-[#383838] "></div>
                </div>

                <button className="mt-4 py-2 px-5 h-10 bg-white text-black w-[10rem]  rounded-[25px] font-semibold text-sm">
                  Results archive
                </button>
              </div>
            </div>

            <div className=" md:w-[45%] lg:w-[40%] flex flex-col gap-9 h-[70%]">
              {/* SPRINT RACES */}
              <div className="bg-transparent p-6 flex-1 flex flex-col justify-center border h-[300px] rounded-[45px]">
                <div className="grid grid-cols-2 gap-[1rem]  ">
                  <div className="space-y-4 ">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Races
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      14
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Points
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Wins
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Podiums
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Poles
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      13
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 lg:text-[clamp(10px,1.3vw,24px)]">
                      Sprint Top 10s
                    </p>
                    <p className="font-bold  lg:text-[30px] font-ethnocentric">
                      56
                    </p>
                  </div>
                </div>
              </div>

              {/* TEAM PROFILE */}
              <div className=" bg-[#0D0D0D] flex flex-col justify-center  p-4 lg:px-12 py-6 rounded-[50px] ">
                <h2 className="text-baseline font-bold tracking-widest w-[82%] mb-3 lg:text-[clamp(10px,1.5vw,39px)] font-ethnocentric">
                  TEAM PROFILE
                </h2>

                <div className="flex flex-col gap-5 mt-8">
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Full Team Name
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
                      DELHI ETERNALS
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Technical Chief
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
                      KARAN SINGH
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Base
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
                      DELHI, INDIA
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Chassis
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
                      MCL22
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Team Chief
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
                      KARAN SINGH
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-left gap-2">
                    <span className="text-base text-gray-400 lg:text-[18px]">
                      Power Unit
                    </span>
                    <span className="font-semibold lg:text-[clamp(14px,1.6vw,30px)] font-ethnocentric">
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
