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
    <>
      <section></section>
      {/* track section */}
      <section className="px-[4rem] mt-[6rem] mb-[6rem]">
        {/* Header section with background text */}
        <div className="relative flex items-center justify-between mb-[3rem]  font-[Ethnocentric]">
          {/* Big background text */}
          <span
            className="absolute  left-0 top-1/2 -translate-y-1/2 text-[70px]
         md:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide "
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
          {/* Red line */}
          <span className="h-1  w-[15%] bg-[#C40100] inline-block"></span>
        </div>
        {/* Track image and info */}
        <div className="w-full bg-black text-white px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE - Info */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold">
                Buddh International Circuit
              </h2>

              <div className="flex items-center gap-4">
                <img
                  src="/date.svg"
                  alt="dateicon"
                  className="w-[50px] h-[50px]"
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
                  className="w-[50px] h-[50px]"
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
                  className="w-[50px] h-[50px]"
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
                  className="w-[50px] h-[50px]"
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
            <div className="relative flex items-center justify-center">
              {/* Icons Top Right */}
              <div className="absolute top-0 right-4 flex gap-3">
                <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition">
                  <ChevronLeft className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
                </button>
                <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition">
                  <ChevronRight className="w-5 h-5 text-white lg:w-8 lg:h-8" />
                </button>
              </div>

              {/* Track Image */}
              <img
                src="/trackimage.png"
                alt="Buddh International Circuit"
                className=" object-contain lg:w-[50rem] "
              />
            </div>
          </div>
        </div>
        <p className="w-full bg-black text-white px-16 lg:text-[23px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolore, delectus repellat tempore sam doloremque itaque sequi fuga sint
          repellendus ea quae, exercitationem repudiandae veritatis, officia
          odit .
        </p>
      </section>
    </>
  );
};

export default ExperieceThrill;
