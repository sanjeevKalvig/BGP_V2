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
    <div className=" w-full text-white px-[4rem] flex flex-col relative mt-[6rem]  ">
      {/* Header section with background text */}
      <div className="relative flex items-center justify-between mb-[3rem]  font-[Ethnocentric]">
        {/* Big background text */}
        <span className="absolute w-1/2 left-0 top-1/2 -translate-y-1/2 text-[70px]
         md:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide ">
          TEAMS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-10 translate-x-11 " >
          <span className=" text-3xl md:text-4xl font-bold text-white px-3 py-1 mr-3 relative">
            TEAMS
          </span>
          <span className="h-[2px] w-[10rem] bg-[#C40100] inline-block"></span>
        </div>
        {/* Red line */}
        <span className="h-1  w-1/3 bg-[#C40100] inline-block"></span>
      </div>

      {/* Teams grid */}
      <div className="container  w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:pl-[3.5rem] xl:pr-[5rem]">
        {teams.map((team) => (
          <div
            key={team.id}
            className=" bg-[#161616] flex flex-col items-center justify-around rounded overflow-hidden 
            shadow-lg transition-transform hover:scale-105 xl:py-2 xl:w-[24rem] xl:h-[13rem]"
          >
            {/* Team logo and name */}
            <div className="text-red-600 font-extrabold text-2xl mr-1  flex justify-center items-center ">
              <img src={team.logo} className="w-[80%]" />
            </div>

            {/* Team name with red background */}
            <div className="w-full h-[3rem] text-center bg-red-600 text-white justify-center py-2 font-bold xl:text-[23px] ">
              DELHI ETERNALS
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
