import React from "react";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";

const TrackDetail = () => {
  return (
    <div>
      <Header />
      {/* Header section with background text */}
      <div className="relative flex flex-col sm:flex-row px-[4rem] items-center justify-between mb-6 sm:mb-8 md:mb-[3rem] font-[Ethnocentric] lg:mt-[8rem]">
        {/* Big background text */}
        <span
          className="absolute w-full sm:w- left-0 top-1/2 -translate-y-1/2 text-5xl 
          sm:text-6xl md:text-[40px] lg:text-[70px] font-extrabold text-[#B2B2B2]/10 select-none 
          pointer-events-none tracking-wide px-[4rem]"
        >
          BUDDH INTERNATIONAL CIRCUIT
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11 ">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
            BUDDH INTERNATIONAL CIRCUIT
          </span>
        </div>
        {/* Red line */}
        <span className="h-0.5 sm:h-1 w-full sm:w-[45%] bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src="/track.png" alt="trackimg" />
        <div className=" text-white p-6 w-[70%] rounded-lg flex flex-col md:flex-row md:justify-between md:items-center  mb-[10rem] ">
          {/* Circuit Length */}
          <div className="flex-1 flex flex-col justify-center items-center ">
            <span className="uppercase text-lg font-bold lg:text-[30px] ">Circuit Length</span>
            <span className="text-2xl font-light mt-1">5,798KM</span>
          </div>

          <div className="hidden md:block border-l border-gray-700 h-28 mx-9" />

          <div className="flex flex-col gap-4">
            {/* Turns */}
            <div className="flex items-center space-x-5">
              <img
                src="tracks/turn2.svg"
                alt="Turns Icon"
                className="w-11 h-11"
              />
              <div>
                <span className="uppercase text-base font-bold lg:text-[24px]">Turns</span>
                <div className="text-sm font-light">18 Turns</div>
              </div>
            </div>
            {/* Average Lap */}
            <div className="flex items-center space-x-5">
              <img
                src="tracks/avglap2.svg"
                alt="Average Lap Icon"
                className="w-11 h-11"
              />
              <div>
                <span className="uppercase text-base font-bold lg:text-[24px]">
                  Average Lap
                </span>
                <div className="text-sm font-light">~1 Minute 30 Seconds</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-700 h-28 mx-9" />

          <div className="flex flex-col gap-4">
            {/* Number of Laps */}
            <div className="flex items-center space-x-5">
              <img
                src="tracks/nooflap.svg"
                alt="Laps Icon"
                className="w-11 h-11"
              />
              <div>
                <span className="uppercase text-base font-bold lg:text-[24px]">
                  Number of Laps
                </span>
                <div className="text-sm font-light">53 Laps</div>
              </div>
            </div>
            {/* Race Distance */}
            <div className="flex items-center space-x-5">
              <img
                src="tracks/racedist.svg"
                alt="Race Distance Icon"
                className="w-11 h-11"
              />
              <div>
                <span className="uppercase text-base font-bold lg:text-[24px]">
                  Race Distance
                </span>
                <div className="text-sm font-light">306.72KM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackDetail;
