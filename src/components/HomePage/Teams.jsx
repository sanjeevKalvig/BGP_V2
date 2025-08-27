import React from "react";

const Teams = () => {
  // Sample team data - you can replace with your actual data
  const teams = [
    { id: 1, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
    { id: 2, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
    { id: 3, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
    { id: 4, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
    { id: 5, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
    { id: 6, name: "DELHI ETERNALS", logo: "/teamlogo.svg" },
  ];

  return (
    <div className="w-full text-white px-4 sm:px-6 md:px-8 lg:px-[4rem] flex flex-col relative mt-6 sm:mt-8 md:mt-[6rem]">
      {/* Header section with background text */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-[3rem] font-[Ethnocentric]">
        {/* Big background text */}
        <span
          className="absolute w-full sm:w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl 
          sm:text-6xl md:text-[70px] lg:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none 
          pointer-events-none tracking-wide"
        >
          TEAMS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
            TEAMS
          </span>
          <span className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#C40100] inline-block"></span>
        </div>
        {/* Red line */}
        <span className="h-0.5 sm:h-1 w-full sm:w-1/3 bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
      </div>

      {/* Teams grid */}
      <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0 lg:pl-[3.5rem] lg:pr-[5rem]">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-[#161616] flex flex-col items-center justify-around rounded overflow-hidden 
            shadow-lg transition-transform hover:scale-105 py-2 sm:py-3 lg:py-2 w-full h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-[13rem] 
            lg:w-auto xl:w-[24rem] xl:h-[13rem]"
          >
            {/* Team logo and name */}
            <div className="text-red-600 font-extrabold text-lg sm:text-xl md:text-2xl mr-1 flex justify-center items-center">
              <img src={team.logo} className="w-[70%] sm:w-[75%] md:w-[80%]" />
            </div>

            {/* Team name with red background */}
            <div
              className="w-full h-[2.5rem] sm:h-[2.8rem] md:h-[3rem] text-center bg-red-600 text-white justify-center 
              py-1 sm:py-2 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px]"
            >
              DELHI ETERNALS
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;