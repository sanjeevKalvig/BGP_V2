import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative lg:px-[4rem] xl:px-[6rem] 2xl:px-[8rem] mt-10 flex justify-between items-center ">
      {/* logo */}
      <Link to="/">
        <img src="./logo.png" className="lg:w-[10rem] xl:w-52" alt="" />
      </Link>
      {/* countdown */}
      <div className="px-3 rounded-3xl absolute -top-[80%] lg:pt-5 xl:pt-10 2xl:pt-12 pb-2.5 left-[50%] -translate-x-1/2 bg-[#840000] shadow-[0_0_40px_red] z-40">
        <div className="flex lg:gap-5 xl:gap-6 2xl:gap-8 items-center justify-between rounded-3xl border-2 border-[#c40100] px-5 xl:px-6 2xl:px-7 py-1.5 xl:py-2 2xl:py-2.5 bg-black">
          {/* Heading */}
          <p className="text-lg lg:text-[13px] xl:text-[22px] 2xl:text-[26px] font-bold uppercase xl:[word-spacing:3px] 2xl:[word-spacing:4px]">
            Race Countdown
          </p>

          {/* Timer */}
          <div className="flex items-center justify-end mt-1 text-white font-bold text-xs sm:text-sm">
            {/* Days */}
            <div className="flex flex-col items-center">
              <p className="lg:text-lg xl:text-xl 2xl:text-2xl border-r-2 border-red-700 px-3 xl:px-3.5 2xl:px-4 -mb-1">
                23
              </p>
              <p className="lg:text-[5px] xl:text-[7px] 2xl:text-[9px]">DAYS</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <p className="lg:text-lg xl:text-xl 2xl:text-2xl border-r-2 border-red-700 px-3 xl:px-3.5 2xl:px-4 -mb-1">
                14
              </p>
              <p className="lg:text-[5px] xl:text-[7px] 2xl:text-[9px]">
                HOURS
              </p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <p className="lg:text-lg xl:text-xl 2xl:text-2xl border-r-2 border-red-700 px-3 xl:px-3.5 2xl:px-4 -mb-1">
                36
              </p>
              <p className="lg:text-[5px] xl:text-[7px] 2xl:text-[9px]">
                MINUTES
              </p>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <p className="lg:text-lg xl:text-xl 2xl:text-2xl px-3 xl:px-3.5 2xl:px-4 -mb-1">
                05
              </p>
              <p className="lg:text-[5px] xl:text-[7px] 2xl:text-[9px]">
                SECONDS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 pr-5">
        {/* contactus button */}
        <Link to="/contact">
          <button
            className="border-4 border-[rgba(196,1,0,0.3)] bg-[#6F0000] 
           px-4 py-2 -skew-x-6 rounded-[10px] lg:text-[10px] xl:text-[12px]"
          >
            CONTACT US
          </button>
        </Link>

        {/* hamburger menu */}
        <div className="flex flex-col">
          <span className=" lg:text-[10px] xl:text-[12px]">MENU</span>
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="lg:w-8 xl:w-10 h-1 bg-white "></span>
            <span className=" lg:w-6  xl:w-8 h-1 bg-white "></span>
            <span className="lg:w-4  xl:w-4 h-1 bg-white "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
