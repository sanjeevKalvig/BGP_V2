import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";



const NewsPage = () => {
  const cards = [
    {
      image: "news/news1.jpg",
      title: "F1 Season Opener Thrills Fans",
      description:
        "The Formula 1 season kicks off with high-speed drama, unexpected overtakes, and a nail-biting finish under the lights.",
    },
    {
      image: "news/news2.jpg",
      title: "Street Racing League Expands",
      description:
        "The underground street racing league gains global attention as new cities join the adrenaline-fueled competition.",
    },
    {
      image: "news/news3.jpg",
      title: "Rookie Stuns with First Podium",
      description:
        "A rookie driver makes headlines by securing a podium finish against seasoned rivals in a tense Grand Prix battle.",
    },
    {
      image: "news/news4.jpg",
      title: "Desert Rally Challenge",
      description:
        "Drivers push their limits in the extreme desert rally, battling scorching heat, tough dunes, and relentless terrain.",
    },
    {
      image: "news/news5.jpg",
      title: "Endurance Race Dominated",
      description:
        "A legendary team dominates the 24-hour endurance race with flawless pit stops, teamwork, and strategy execution.",
    },
    {
      image: "news/news6.jpg",
      title: "Sunset Speedway Showdown",
      description:
        "The Sunset Speedway hosts a thrilling showdown as rivals clash in the final laps for ultimate championship glory.",
    },
  ];

  return (
    <div className=" ">
      <Header />
       {/* Header section with background text */}
       <div className="relative hidden sm:flex flex-col sm:flex-row items-center justify-between sm:mt-[6rem] xl:mt-[12rem] px-[6rem] font-ethnocentric ">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] lg:text-[80px]
          xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          LATEST NEWS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            LATEST NEWS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden  h-1 w-1/4 sm:hidden lg:block bg-[#C40100]"></span>
      </div>

      {/* Mobile + tab header */}
       <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0 mb-2 mt-10 sm:hidden">
          <span className="font-[Ethnocentric]">Latest News</span>
          <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
        </h2>

      <div className="px-[2rem] sm:px-[6rem] w-full  flex flex-col justify-center  h-auto mt-[2rem] lg:mt-[6rem] space-y-7">
        <div className=" lg:h-[600px] w-full">
          <img
            src="/news/news.jpg"
            alt="nesIcon"
            className="object-cover h-full w-full"
          />
        </div>
        <h2 className="lg:text-[60px] 2xl:text-[65px] font-ethnocentric">
          LOREM IPSUM
        </h2>
        <p className="lg:text-[45px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="px-[2rem] sm:px-[6rem] w-full flex  justify-center items-center mt-[2rem] lg:mt-[6rem] mb-[1rem] ">
        {/* Red line on right */}
        <div className=" sm:inline-block h-1 w-full bg-[#C40100]"></div>
      </div>

      {/* News cards  */}

      <div className="px-[2rem] sm:px-[6rem] w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-20 lg:mb-[4rem]">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-transparent  shadow-md overflow-hidden flex flex-col items-center text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-64 w-full object-cover"
            />
            <div className="py-5 flex-1 flex flex-col text-left">
              <h3 className="sm:text-2xl font-bold text-white mb-2 font-ethnocentric">
                {card.title}
              </h3>
              <p className="text-lg text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
