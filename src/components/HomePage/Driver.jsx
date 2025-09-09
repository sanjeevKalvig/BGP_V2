import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const Driver = () => {
  return (
    <div className="w-full text-white px-8 sm:px-[4rem] flex flex-col relative mt-[6rem]">
      <Header />
      <Carousel />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="relative  items-center justify-between mb-12 font-[Ethnocentric] hidden lg:flex">
        {/* Big background text */}
        <span className="absolute w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl sm:text-[70px] md:text-[70px] lg:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide">
          DRIVERS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-10 translate-x-11">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-3 py-1 mr-3 relative">
            DRIVERS
          </span>
          <span className="h-[2px] sm:h-[2px] w-[10rem] bg-[#C40100] inline-block"></span>
        </div>

        {/* Red line */}
        <span className="h-1 w-1/3 bg-[#C40100] hidden lg:inline-block "></span>
      </div>
      {/* Mobile + tab header */}
      <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0">
        <span className="font-[Ethnocentric]">DRIVERS</span>
        <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
      </h2>
    </>
  );
};

const Carousel = () => {
  const drivers = [
    { id: 1, name: "KARAN SINGH", imgPath: "/driver.png" },
    { id: 2, name: "AMAN VERMA", imgPath: "/driver.png" },
    { id: 3, name: "RAHUL SHARMA", imgPath: "/driver.png" },
    { id: 4, name: "VIKAS KUMAR", imgPath: "/driver.png" },
    { id: 5, name: "ANUJ PATEL", imgPath: "/driver.png" },
    { id: 6, name: "ROHAN SINGH", imgPath: "/driver.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const len = drivers.length;

  // Update visibleCount based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => setCurrentIndex((p) => (p + 1) % len);
  const handlePrev = () => setCurrentIndex((p) => (p - 1 + len) % len);

  // Build visible items based on responsive count
  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (currentIndex + i) % len;
    return drivers[idx];
  });

  return (
    <div className="container mx-auto relative mt-20 mb-20 xl:pl-[3.5rem]">
      {/* Cards */}
      <div className="flex justify-center gap-6 lg:gap-10 xl:px-16 relative w-full  ">
        {visible.map((driver, index) => {
          // Check if the current card is the center card
          const isCenter = index === Math.floor(visible.length / 2);
          return (
            <div key={driver.id} className="min-w-[260px] sm:min-w-[300px]">
              <div
                className={`border-2 border-red-700 h-60 w-full relative ${
                  isCenter
                    ? "bg-gradient-to-b from-[#000000] to-[#470000]"
                    : "bg-transparent"
                }`}
              >
                {/* Driver Image */}
                <img
                  src={driver.imgPath}
                  alt={driver.name}
                  className="absolute bottom-[-4px] object-contain w-full z-30"
                />

                {/* Team Logo */}
                {isCenter ? (
                  <img
                    src="/teamlogo.svg"
                    alt="logo"
                    className="absolute inset-0 w-[80%] mx-auto opacity-20 z-10"
                  />
                ) : (
                  <img
                    src="/teamlogo.svg"
                    alt="logo"
                    className="absolute top-1 right-4 w-[50px] h-[50px] z-10"
                  />
                )}

                {/* Driver Name */}
                <span className="absolute z-50 bottom-0 left-[-32px] text-2xl sm:text-3xl font-bold">
                  {driver.name}
                </span>
              </div>

              <div className="bg-[#202020] py-5 px-5 flex justify-between">
                <button className="bg-[#292929] px-4 py-2 text-base sm:text-xl text-[#848484]">
                  STATS
                </button>
                <button className="bg-[#292929] px-4 py-2 text-base sm:text-xl text-[#848484]">
                  DETAILS
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlayed Arrows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between z-30 px-2">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="pointer-events-auto rounded-full p-2 hover:bg-[#202020]"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          aria-label="Next"
          onClick={handleNext}
          className="pointer-events-auto rounded-full p-2 hover:bg-[#202020]"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Driver;
