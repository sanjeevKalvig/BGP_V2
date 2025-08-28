import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full lg:px-[3rem] xl:px-[4rem] text-white overflow-hidden"
    >
      <img
        src="/herobgimg.png"
        alt="herobgimg"
        className="z-0 absolute 2xl:-top-11"
      />

      {/* Left vertical label + dots */}
      <span
        className="rotate-180 z-10  fixed 
        lg:left-[2rem] xl:left-[3rem] 2xl:left-[4rem] lg:top-[30%] 2xl:top-[35%] hidden lg:flex  flex-col-1 gap-4 justify-center items-center  
        [writing-mode:vertical-rl] tracking-[0.3em] text-xs text-white/60 font-ethnocentric"
        aria-hidden="true"
      >
        <div className="flex flex-col-1  rotate-180">
          <img src="/X.svg" alt="icon" className="w-4 h-6" />
          <img src="/facebook.svg" alt="icon" className="w-4 h-6" />
          <img src="/Instagram.svg" alt=" icon" className="w-4 h-6" />
        </div>
        <p className="opacity-50 lg:text-[12px]"> BHARATVA GRAND PRIX</p>
      </span>
       {/* right vertical dots */}
      <div className=" hidden lg:right-[2rem] xl:right-[3rem] 2xl:right-[4rem] lg:flex flex-col z-10 gap-4 justify-center 
      items-center fixed lg:top-[35%] xl:top-[40%] 2xl:top-[48%] right-[4rem] ">
        <button
          className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
          aria-label="Section 1"
        />
        <button
          className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
          aria-label="Section 2"
        />
        <button
          className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
          aria-label="Section 3"
        />
        <button
          className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
          aria-label="Section 4"
        />
        <button
          className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
          aria-label="Section 5"
        />
        <img src="/arrowdown.svg" alt="" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto  lg:px-[4rem]  lg:py-20  ">
        {/* Left: Headline + copy */}
        <div
          className="z-[60] lg:left-[1.92rem] xl:left-[2rem] 2xl:left-[4rem] lg:top-[15%] 2xl:top-[21%] absolute space-y-2 "
        >
          {/* Kicker */}
          <div className="flex flex-col">
            <p
              className="text-xs md:text-sm tracking-[0.25em] lg:text-[14.4px] xl:text-[23px] 2xl:text-[26px] uppercase"
            >
              India’s Premier Motorsports League
            </p>
            <div className="h-0.5 bg-red-600/70 mt-2" />
          </div>

          <h1
            className="font-extrabold leading-[1.05] font-[Ethnocentric] italic lg:text-[38.4px] xl:text-[54px] 2xl:text-[60px]"
          >
            <span className="block">BUILDING THE</span>
            <span className="block">ADRENALIN</span>
            <span className="block">ECONOMY</span>
          </h1>

          <p
            className="max-w-md text-sm md:text-base lg:text-[10.4px] xl:text-[15px] 
          2xl:text-[17px] text-white/70 lg:w-[40%] xl:w-[55%] 2xl:w-[70%]"
          >
            We’re shaping a new era of Indian motorsports here elite teams,
            roaring machines, and passionate fans come together for pure
            velocity and spectacle.
          </p>
        </div>

        {/* Center: Car image */}
        <div
          className="relative flex justify-center z-50
         lg:top-[8rem] xl:top-[8rem] 2xl:top-[10rem] "
        >
          <img
            src="/heroimg.png"
            alt="Performance car silhouette"
            className=" lg:w-[600px] xl:w-[600px] xl:h-[500px] object-contain opacity-90"
            draggable="false"
          />
          <div
            className="pointer-events-none absolute z-60 
          inset-x-0 bottom-0 h-40  bg-gradient-to-t from-black to-transparent"
          />
        </div>

        {/* Right: Info cards */}
        <div className="absolute z-[60] lg:right-[2rem] lg:top-[38%] xl:right-[4.5rem] xl:top-[40%] 2xl:right-[8rem] 2xl:top-[40%] flex flex-col justify-items-start gap-4 ">
          <div className="flex justify-center items-center  gap-3">
            <img
              src="/herolocicon.svg"
              alt=""
              className=" lg:h-[30px] lg::w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[50px] 2xl:w-[50px]"
            />
            <div>
              <p className="text-sm md:text-base lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold">
                Buddh International <br /> Circuit, Greater Noida
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <img
              src="/heroclenicon.svg"
              alt=""
              className="lg:h-[30px] lg::w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[50px] 2xl:w-[50px]"
            />
            <div>
              <p className="text-sm md:text-base xl:text-[13px] font-semibold">
                TBD
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <img
              src="/heroteamicon.svg"
              alt=""
              className="lg:h-[30px] lg::w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[50px] 2xl:w-[50px]"
            />
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
        <div className="flex flex-col justify-center items-center">
          <img src="/mouse.svg" alt="" className="h-18 w-10 " />
          <img src="/downarrow.png" alt="" className="h-5 w-15 " />
          <img src="/downarrow.png" alt="" className="h-5 w-15 " />
        </div>
        <p className="text-xs md:text-sm text-white/60">
          Scroll Down To Know More…
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
