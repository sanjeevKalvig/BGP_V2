import React from "react";

const SponsorsSection = () => {
  // Array of sponsor data - replace with actual logo URLs and links
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
    <div className="px-4 sm:px-6 md:px-8 lg:px-[6rem]">
      <h2 className="text-2xl sm:text-3xl font-bold uppercase flex flex-col">
        <span className="font-[Ethnocentric]">SPONSORS</span>
        <span className="h-[4px] w-[6rem] bg-[#C40100] inline-block"></span>
      </h2>
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[6rem]">
        {/* Logos Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center border h-[80px] sm:h-[90px] lg:h-[100px] w-full md:w-[180px] lg:w-[200px]"
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
                  className="w-24 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-18 md:h-20 object-contain p-2 box-border"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Become a Sponsor Section */}
        <div className="text-center">
          <a
            href="#sponsor"
            className="text-red-500 hover:text-red-400 hover:underline text-sm sm:text-base font-medium transition-colors duration-200"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;