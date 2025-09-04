import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const TicketsPage = () => {
  return (
    <div className=" space-y-[4rem]">
      <Header />
      {/* Header section with background text */}
      <div className="relative flex flex-col sm:flex-row px-[4rem] items-center justify-between mb-6 sm:mb-8 md:mb-[3rem] font-[Ethnocentric]">
        {/* Big background text */}
        <span
          className="absolute w-full sm:w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl 
          sm:text-6xl md:text-[70px] lg:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none 
          pointer-events-none tracking-wide px-[4rem]"
        >
          TICKETS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11 ">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
            TICKETS
          </span>
          <span className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#C40100] inline-block"></span>
        </div>
        {/* Red line */}
        <span className="h-0.5 sm:h-1 w-full sm:w-1/3 bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
      </div>
      <div className="px-[6rem] space-y-20">
        <div className=" flex items-center gap-7 ">
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                       h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                       rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                       text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/GeneralticketsIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
              GENERAL ADMISSION
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹5000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
                          flex justify-center items-center hover:bg-red-800 text-white 
                          text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
                          px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
          <div className="flex flex-col  w-[60%] ">
            <h2 className="uppercase  lg:text-[40px] font-ethnocentric">
              THE essential experience{" "}
            </h2>
            <p className="text-[16px] font-montserrat">
              The Essential ExperienceGet full-day access to the racing action
              from general <br /> stands. Feel the roar of the engines and
              witness <br />
              thrilling overtakes up close.
            </p>
          </div>
        </div>
        <div className="flex items-center  justify-end  gap-10 text-right">
          {/* Text Section */}
          <div className="flex flex-col  w-[70%]">
            <h2 className="uppercase lg:text-[40px] font-ethnocentric">
              Behind the Scenes Access
            </h2>
            <p className="text-[16px] font-montserrat">
              The Essential Experience Get full-day access to the racing action
              from general <br /> stands. Feel the roar of the engines and
              witness <br />
              thrilling overtakes up close.
            </p>
          </div>
          {/* Card Section */}
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/PaddocktickeIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
             paddock <br />pass
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹10000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
              flex justify-center items-center hover:bg-red-800 text-white 
              text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
              px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
        </div>
        <div className=" flex items-center gap-7 ">
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                       h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                       rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                       text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/vipTicIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
              vip <br /> grandstand
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹15000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
                          flex justify-center items-center hover:bg-red-800 text-white 
                          text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
                          px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
          <div className="flex flex-col w-[60%] ">
            <h2 className="uppercase  lg:text-[40px] font-ethnocentric">
              THE essential experience{" "}
            </h2>
            <p className="text-[16px] font-montserrat">
              The Essential ExperienceGet full-day access to the racing action
              from general <br /> stands. Feel the roar of the engines and
              witness <br />
              thrilling overtakes up close.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TicketsPage;
