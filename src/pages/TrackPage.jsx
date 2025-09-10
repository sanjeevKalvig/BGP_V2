import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const TrackPage = () => {
  const cards = [
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 1",
    },
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 2",
    },
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 3",
    },
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 4",
    },
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 5",
    },
    {
      trackImage: "/track.png",
      trackName: "Buddh International Circuit 1",
    },
  
  ];

  return (
    <div>
      <Header />
      {/* Header section with background text */}
      <div className="relative hidden sm:flex flex-col sm:flex-row items-center justify-between  sm:mt-[6rem] xl:mt-[12rem] px-[6rem] font-ethnocentric ">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] lg:text-[80px]
          xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          TRACKS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            TRACKS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden  h-1 w-1/4 sm:hidden lg:block bg-[#C40100]"></span>
      </div>

      {/* Mobile + tab header */}
      <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0 mb-[2rem] mt-10 sm:hidden">
        <span className="font-[Ethnocentric]">Tracks</span>
        <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
      </h2>

      <div
        relative
        className="grid grid-cols-2 gap-3 sm:gap-10 px-[1rem] sm:px-[6rem] py-[2rem]  lg:py-[10rem]"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b  from-[#000000] to-[#510100] border border-[#B60000] rounded-[15px] lg:h-[450px]"
          >
            {/* Background image filling card */}
            <img
              src={card.trackImage}
              alt=""
              className="absolute inset-0  h-full object-cover rounded-[15px] opacity-10 "
            />
            {/* Content above background */}
            <div className=" z-10 p-4   bottom-12 ">
              <img
                src={card.trackImage}
                alt={card.trackName}
                className="w-full h-full rounded-md  "
              />
              <span className="text-white font-semibold font-ethnocentric text-[12px] sm:text-[16px] lg:text-[30px] w-[30%]  ">
                {card.trackName}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TrackPage;
