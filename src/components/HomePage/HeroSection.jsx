import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full px-[4rem] text-white overflow-hidden"
    >
      <img
        src="/herobgimg.png"
        alt="herobgimg"
        className="z-0 absolute -top-11"
      />

       {/* Left vertical label + dots */}
        <span
          className="rotate-180 fixed top-[30%]  [writing-mode:vertical-rl] tracking-[0.3em] text-xs text-white/60"
          aria-hidden="true"
        >
          BHARATVA GRAND PRIX
        </span>
        <div className="flex flex-col gap-2 fixed top-[40%] right-[4rem]">
          <button className="h-3 w-3 rounded-full bg-white/20 border border-white/30" aria-label="Section 1" />
          <button className="h-3 w-3 rounded-full bg-white/20 border border-white/30" aria-label="Section 2" />
          <button className="h-3 w-3 rounded-full bg-white/20 border border-white/30" aria-label="Section 3" />
        </div>
      
      {/* Main content */}
      <div className="relative mx-auto  lg:px-[4rem]  lg:py-20  ">
        {/* Left: Headline + copy */}
        <div className=" z-30 xl:left-[6rem] top-[15%] absolute space-y-6">
          {/* Kicker */}
          <div className="flex flex-col ">
            <p className="text-xs md:text-sm tracking-[0.25em] xl:text-[26px]  uppercase">
              India’s Premier Motorsports League
            </p>
            <div className="h-0.5  bg-red-600/70 mt-2" />
          </div>
          <h1 className="font-extrabold leading-[1.05] font-[Ethnocentric] xl:text-[60px] italic">
            <span className="block">BUILDING THE</span>
            <span className="block">ADRENALIN</span>
            <span className="block">ECONOMY</span>
          </h1>

          <p className="max-w-md text-sm md:text-base lg:text-[13px] text-white/70">
            We’re shaping a new era of Indian motorsports—where elite <br />{" "}
            teams, roaring machines, and passionate fans come <br /> together
            for pure velocity and spectacle.
          </p>
        </div>

        {/* Center: Car image */}
        <div className="relative flex justify-center z-10 top-[10rem]">
          <img
            src="/heroimg.png"
            alt="Performance car silhouette"
            className="w-[600px] h-[500px] object-contain opacity-90"
            draggable="false"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Right: Info cards */}
        <div className="absolute z-30 right-10 top-[45%] flex flex-col justify-items-start gap-4 ">
          <div className="flex justify-center items-center  gap-3">
            <img src="/herolocicon.svg" alt="" className="h-[70px] w-[60px]" />
            <div>
              <p className="text-sm md:text-base xl:text-[13px] font-semibold">
                Buddh International <br /> Circuit, Greater Noida
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <img src="/heroclenicon.svg" alt="" className="h-[60px] w-[60px]" />
            <div>
              <p className="text-sm md:text-base xl:text-[13px] font-semibold">
                TBD
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <img src="/heroteamicon.svg" alt="" className="h-[60px] w-[60px]" />
            <div>
              <p className="text-sm md:text-base xl:text-[13px] font-semibold">
                10 TEAMS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className=" z-50 relative bottom-0 lg:-top-[2rem]  flex flex-col justify-center items-center gap-3 ">
        <img src="/scrollIcon.svg" alt="" className="h-18 w-10 " />
        <p className="text-xs md:text-sm text-white/60">
          Scroll Down To Know More…
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
