import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";

const TeamsPage = () => {
  // Dummy data including driver name
  const cards = [
    {
      id: 1,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
    {
      id: 2,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
    {
      id: 3,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
    {
      id: 4,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
    {
      id: 5,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
    {
      id: 6,
      carImage: "/teamscar.png",
      teamLogo: "/teamlogo.svg",
      driverName: "Karan Singh",
      coDriverName: "Karan Singh",
      carBrandLogo: "/teamsLogoIcon.svg",
    },
  ];
  return (
    <div className=" relative w-full">
      <Header />
      {/* Header section with background text */}
     <div className="relative flex flex-col sm:flex-row items-center justify-between lg:mt-[15rem] px-[6rem] font-ethnocentric">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] 
          lg:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          TEAMS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            TEAMS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden sm:inline-block h-1 w-1/4 bg-[#C40100]"></span>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(
            ({
              id,
              carImage,
              teamLogo,
              driverName,
              coDriverName,
              carBrandLogo,
            }) => (
              <div
                key={id}
                className=" relative bg-gradient-to-b from-[#000000] to-[#470000] rounded-xl shadow-lg p-4 w-[20rem] sm:w-[25rem] h-[16rem] overflow-hidden "
              >
                 <div className="absolute w-full flex justify-center items-center opacity-40 top-7">
                    <img src={teamLogo} alt="" className="opacity-40 w-[95%]" />
                 </div>
                <div className="absolute h-full flex items-center justify-center  -top-7 ">
                  <img
                    src={carImage}
                    alt="Car"
                    className="object-fill w-full opacity-60 "
                    loading="lazy"
                  />
                </div>
                <div className=" w-full absolute  px-3  bottom-2 left-2  mt-4  flex justify-around items-center font-ethnocentric">
                  {/* Team logo and driver name row */}
                  <div className=" w-[25%]">
                    <img
                      src={teamLogo}
                      alt="Team Logo"
                      className="w-full]"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-white lg:text-[15px] font-semibold w-[25%] text-center">
                    {driverName}
                  </div>

                  {/* Co-driver name */}
                  <div className="text-white font-semibold  lg:text-[15px] w-[25%] text-center ">
                    {coDriverName}
                  </div>
                  {/* Car brand logo aligned right */}
                  <div className=" w-[25%]  flex items-center justify-center">
                    <img
                      src={carBrandLogo}
                      alt="Car Brand Logo"
                      className=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamsPage;
