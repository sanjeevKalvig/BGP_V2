import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const DriverPage = () => {
  const cards = [
    {
      id: 1,
      driverImage: "/driver.png",
      rank: 1,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
    {
      id: 2,
      driverImage: "/driver.png",
      rank: 2,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
    {
      id: 3,
      driverImage: "/driver.png",
      rank: 2,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
    {
      id: 4,
      driverImage: "/driver.png",
      rank: 2,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
    {
      id: 5,
      driverImage: "/driver.png",
      rank: 2,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
    {
      id: 6,
      driverImage: "/driver.png",
      rank: 2,
      teamLogo: "/teamlogo.svg",
      countryLogo: "/teamflag.svg",
      carLogo: "/teamsLogoIcon.svg",
      driverName: "Karan Singh",
    },
  ];

  return (
    <div className="relative w-full">
      <Header />

      {/* Header section with background text */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between my-[4rem] lg:mt-[12rem] lg:mb-[4rem] px-[6rem] font-ethnocentric">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] 
          lg:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          DRIVERS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            DRIVERS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden sm:inline-block h-1 w-1/4 bg-[#C40100]"></span>
      </div>
      <div className="w-full flex justify-center items-center  lg:py-[6rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-auto gap-10 sm:gap-5 ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#000000] to-[#470000] w-[20rem] sm:w-[24rem] h-[16rem] rounded-xl shadow-xl p-4 flex flex-col items-center relative
               mt-[5rem] "
            >
              {/* Top Logos Row */}
              <div className="absolute flex-col mb-2 left-2 z-10">
                <img src={card.teamLogo} alt="Team" className="w-[30%]" />
                <div className="flex w-[30%] gap-1 ">
                  <img
                    src={card.countryLogo}
                    alt="Country"
                    className="w-[40px]"
                  />
                  <img src={card.carLogo} alt="Car" className="w-[50px]" />
                </div>
              </div>
              <div className="absolute h-full flex items-center justify-center  -top-14 righ-2 ">
                <img
                  src={card.teamLogo}
                  alt="Car"
                  className="object-fill w-full opacity-10 "
                  loading="lazy"
                />
              </div>

              {/* Driver Image */}
              <img
                src={card.driverImage}
                alt={card.driverName}
                className="absolute bottom-0 -right-5 h-[22rem]"
              />

              {/* Rank and Name */}
              <div className="absolute left-3 bottom-2 text-left font-ethnocentric">
                <p className="text-xl font-bold text-white mb-1">
                  #{card.rank}
                </p>
                <p className="text-white tracking-wider font-semibold text-lg w-[30%]">
                  {card.driverName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DriverPage;
