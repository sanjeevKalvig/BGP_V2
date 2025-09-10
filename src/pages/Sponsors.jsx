import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      logo: "/logo.png",
      website: "https://sponsor1.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 2,
      name: "Sponsor 2",
      logo: "/logo.png",
      website: "https://sponsor2.com",
    },
    {
      id: 3,
      name: "Sponsor 3",
      logo: "/logo.png",
      website: "https://sponsor3.com",
    },
    {
      id: 4,
      name: "Sponsor 4",
      logo: "/logo.png",
      website: "https://sponsor4.com",
    },
    {
      id: 5,
      name: "Sponsor 5",
      logo: "/logo.png",
      website: "https://sponsor5.com",
    },
    {
      id: 6,
      name: "Sponsor 6",
      logo: "/logo.png",
      website: "https://sponsor6.com",
    },
    {
      id: 7,
      name: "Sponsor 7",
      logo: "/logo.png",
      website: "https://sponsor7.com",
    },
    {
      id: 8,
      name: "Sponsor 8",
      logo: "/logo.png",
      website: "https://sponsor8.com",
    },
    {
      id: 9,
      name: "Sponsor 9",
      logo: "/logo.png",
      website: "https://sponsor9.com",
    },
    {
      id: 10,
      name: "Sponsor 10",
      logo: "/logo.png",
      website: "https://sponsor10.com",
    },
  ];
  return (
    <div>
      <Header />
      {/* Header section with background text */}
      <div className="relative hidden sm:flex flex-col sm:flex-row items-center justify-between lg:mb-[8rem] sm:mt-[6rem] xl:mt-[12rem] px-[6rem] font-ethnocentric ">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] lg:text-[80px]
          xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          SPONSORS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            SPONSORS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden  h-1 w-1/4 sm:hidden lg:block bg-[#C40100]"></span>
      </div>

      {/* Mobile + tab header */}
      <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0  mt-10 sm:hidden">
        <span className="font-[Ethnocentric]">Sponsors</span>
        <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
      </h2>
      <div className="sm:px-[6rem] pt-[4rem] lg:pt-[0rem]">
        <div className=" px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-6 lg:mb-12 w-full">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center border h-20 sm:h-24 lg:h-28 w-full"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-16 sm:w-20 md:w-24 lg:w-28 h-8 sm:h-10 md:h-12 object-contain p-1 box-border"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="h-1 w-4/5 bg-[#790706] mx-auto"></div>

        <div className="w-full flex flex-col items-center py-12 lg:py-16 space-y-6 lg:space-y-8">
          <div className="bg-[#575757] w-4/5 lg:h-[300px] flex justify-center items-center">
            <img src="/logo.png" alt="brandlogo" className="p-4" />
          </div>
          <p className="w-4/5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="h-1 w-4/5 bg-[#790706] mx-auto"></div>

        <div className="w-full flex flex-col items-center py-12 lg:py-16 space-y-6 lg:space-y-8">
          <div className="bg-[#575757] w-4/5 lg:h-[300px] flex justify-center items-center">
            <img src="/logo.png" alt="brandlogo" className="p-4" />
          </div>
          <p className="w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
