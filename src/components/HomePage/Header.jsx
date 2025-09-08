import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/teams", label: "Teams" },
    { path: "/driver", label: "Drivers" },
    { path: "/driverdetail", label: "Driver Detail" },
    { path: "/teamdetail", label: "Team Detail" },
    { path: "/news", label: "News" },
    { path: "/events", label: "Events" },
    { path: "/tickets", label: "Tickets" },
    { path: "/tracks", label: "Tracks" },
    { path: "/trackdetail", label: "Track Detail" },
    { path: "/sponsors", label: "Sponsors" },
  ];

  return (
    <div className="relative px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[8rem] mt-3 sm:mt-14 lg:mt-10 flex justify-between items-center ">
      {/* logo */}
      <Link to="/">
        <img
          src="./logo.png"
          className="w-[6rem] sm:w-[8rem] md:w-[10rem]  lg:w-[10rem] xl:w-52"
          alt=""
        />
      </Link>

      {/* countdown */}
      <div
        className="px-3 rounded-3xl absolute -top-[80%] lg:pt-5 xl:pt-10 2xl:pt-12 pb-2.5 left-[50%] -translate-x-1/2 bg-[#840000]
       shadow-[0_0_40px_red] z-40 hidden lg:block "
      >
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
      
      <div className="flex justify-center items-center gap-5 sm:gap-10 pr-5 relative">
        {/* contactus button */}
        <Link to="/contact">
          <button
            className="border-4 border-[rgba(196,1,0,0.3)] bg-[#6F0000] 
           px-4 py-2 -skew-x-6 rounded-[10px] text-[6px] sm:text-[12px] md:text-[15px] lg:text-[10px] xl:text-[12px]"
          >
            CONTACT US
          </button>
        </Link>

        {/* hamburger menu */}
        <div className="flex flex-col relative z-[10]">
          <span className="lg:text-[10px] xl:text-[12px]">MENU</span>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 cursor-pointer"
          >
            <span className=" lg:w-8 xl:w-10 h-1 bg-white "></span>
            <span className=" w-9 lg:w-6 xl:w-8 h-1 bg-white "></span>
            <span className="w-7 lg:w-4 xl:w-4 h-1 bg-white "></span>
          </div>

          {/* dropdown menu */}
          {isOpen && (
            <div className="absolute top-12 -right-29 w-48 bg-transparent text-white rounded-lg shadow-lg flex flex-col gap-2 p-4 z-[100]">
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-red-600 px-3 py-2 rounded-md text-sm transition"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
