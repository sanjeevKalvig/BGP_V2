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
      <div className="relative flex flex-col sm:flex-row px-[4rem] items-center justify-between mb-6 sm:mb-8 md:mb-[3rem] font-[Ethnocentric] lg:mt-[8rem]">
        {/* Big background text */}
        <span
          className="absolute w-full sm:w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl 
          sm:text-6xl md:text-[70px] xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none 
          pointer-events-none tracking-wide px-[4rem]"
        >
          TRACKS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11 ">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
            TRACKS
          </span>
          <span className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#C40100] inline-block"></span>
        </div>
        {/* Red line */}
        <span className="h-0.5 sm:h-1 w-full sm:w-[45%] bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
      </div>

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
