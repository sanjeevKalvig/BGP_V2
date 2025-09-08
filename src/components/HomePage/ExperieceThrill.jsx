import React from "react";
import {
  Calendar,
  Gauge,
  RotateCcw,
  Timer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ExperieceThrill = () => {
  return (
    <div className="">
      <section
        id="speed"
        className="relative lg:mt-[13rem] text-white h-[min(50vh,900px)] sm:h-[min(100vh,900px)] flex  items-center justify-center  "
      >
        {/* Overlay for dark + red effect */}
        <img
          src="/thrillcar.png"
          alt="thrillcar"
          className=" absolute w-full object-cover z-0  "
        />
        <h1
          className="  absolute top-20 sm:top-32 md:top-28 lg:-top-[8rem] font-ethnocentric italic text-[1.5rem] sm:text-[2.8rem] md:text-[3rem]
         lg:text-[clamp(3rem,6.5vw,160px)] "
        >
          EXPERIENCE THE <br /> THRILL OF SPEED
        </h1>

        <div className="relative -bottom-24 sm:-bottom-[12rem] md:-bottom-[13rem] lg:-bottom-[18rem] z-10 text-center px-6 ">
          {/* Info Section */}
          <div className=" flex items-center justify-center ">
            {/* Teams */}
            <div className="flex gap-2 items-center  pr-6 ">
              <div>
                <img
                  src="teamsIcon.svg"
                  alt="Teams Icon"
                  className="h-[110px] sm:h-[85px] w-auto max-w-full "
                />
              </div>
              <div className="flex flex-col text-[10px] sm:text-[1rem] md:text-[1.2rem] lg:text-[25px] text-left">
                <h3 className=" font-bold">45+</h3>
                <p className="text-gray-300 border-b-2 border-red-600">Teams</p>
              </div>
            </div>

            <div className="h-10 sm:h-20 w-[0.1rem] bg-white"></div>

            {/* Race Days */}
            <div className="flex gap-4  items-center justify-center  px-6">
              <div>
                <img
                  src="flgIcon.svg"
                  alt="Teams Icon"
                  className="h-[110px] sm:h-[85px] w-auto max-w-full  "
                />
              </div>
              <div className="flex flex-col text-[10px] sm:text-[1rem] md:text-[1.2rem] lg:text-[25px] text-left">
                <h3 className=" font-bold">3 Race</h3>
                <p className="text-gray-300 border-b-2 border-red-600 w-[max-content] pr-3">
                  Days
                </p>
              </div>
            </div>

            <div className="h-10 sm:h-20 w-[0.1rem] bg-white"></div>

            {/* Spectator Entry */}
            <div className="flex gap-4  items-center justify-center pl-6">
              <div>
                <img
                  src="personIcon.svg"
                  alt="Teams Icon"
                  className="h-[110px] sm:h-[85px] w-auto max-w-full "
                />
              </div>
              <div className="flex flex-col text-[10px] sm:text-[1rem] md:text-[1.2rem] lg:text-[25px] text-left">
                <h3 className=" font-bold">3 Spectator</h3>
                <p className="text-gray-300 border-b-2 border-red-600 w-[max-content] pr-3">
                  Entry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* track section */}
      <section className="relative z-10 px-[4rem] sm:mt-[6rem] mb-[6rem]  ">
        {/* Header section with background text */}
        <div className="relative  items-center justify-between font-[Ethnocentric] hidden lg:flex">
          {/* Big background text */}
          <span
            className="absolute  left-0 top-1/2 -translate-y-1/2 text-[70px] sm:text-[55px] md:text-[70px] 
         xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide "
          >
            RACE TRACK
          </span>

          {/* Foreground small header */}
          <div className="z-10 flex flex-col items-center mt-10 translate-x-11 ">
            <span className=" text-3xl md:text-4xl font-bold text-white px-3 py-1 mr-3 relative">
              RACE TRACK
            </span>
            <span className="h-[2px] w-[20.5rem] bg-[#C40100] inline-block"></span>
          </div>
        </div>
        {/* Mobile + tab header */}
        <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0">
          <span className="font-[Ethnocentric]"> RACE TRACK</span>
          <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
        </h2>
        {/* Track image and info */}
        <div className="w-full  text-white pl-14 mt-14  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-0 ">
            {/* LEFT SIDE - Info */}
            <div className="flex flex-col gap-6 ">
              <h2 className=" md:text-xl lg:text-[clamp(24px,2.5vw,36px)] font-extrabold">
                Buddh International Circuit
              </h2>

              <div className="flex items-center gap-4">
                <img
                  src="/date.svg"
                  alt="dateicon"
                  className="w-[30px] h-[30px]"
                />
                <div>
                  <p className="lg:text-[22px] font-bold">UPCOMING EVENT</p>
                  <p className="text-gray-300 opacity-[50%]">TBD</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="speed.svg"
                  alt="speedicon"
                  className="w-[30px] h-[30px]"
                />
                <div>
                  <p className="lg:text-[22px] font-bold">TOP SPEED</p>
                  <p className="text-gray-300 opacity-[50%]">~325 KM/S</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="turn.svg"
                  alt="turnicon"
                  className="w-[30px] h-[30px]"
                />
                <div>
                  <p className="lg:text-[22px] font-bold">TURNS</p>
                  <p className="text-gray-300 opacity-[50%]">18 TURNS</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="avglap.svg"
                  alt="timericon"
                  className="w-[30px] h-[30px]"
                />
                <div>
                  <p className="lg:text-[22px] font-bold">AVERAGE LAP</p>
                  <p className="text-gray-300 opacity-[50%]">
                    ~1 MINUTE 30 SECONDS
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Track Image */}
            <div className=" relative flex  justify-center   ">
              {/* Icons Top Right */}
              <div className="absolute top-0 right-0 sm:right-20 flex gap-3">
                <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition">
                  <ChevronLeft className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
                </button>
                <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition">
                  <ChevronRight className="w-5 h-5 text-white lg:w-8 lg:h-8" />
                </button>
              </div>

              {/* Track Image */}
              <img
                src="/track.png"
                alt="Buddh International Circuit"
                className=" h-[200px] lg:h-[450px] w-full"
                style={{ transformOrigin: "bottom", scale: "1 1.2" }}
              />
            </div>
          </div>
        </div>
        <p className="w-full bg-black text-white px-14 sm:text-[15px] text-[10px]  lg:text-[18px] xl:text-[23px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolore, delectus repellat tempore sam doloremque itaque sequi fuga
          sint repellendus ea quae, exercitationem repudiandae veritatis,
          officia odit .
        </p>
      </section>
    </div>
  );
};

export default ExperieceThrill;
