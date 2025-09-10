import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const TicketsPage = () => {
  return (
    <div className="">
      <Header />
      {/* Header section with background text */}
      <div className="relative hidden sm:flex flex-col sm:flex-row items-center justify-between lg:mb-[8rem] sm:mt-[6rem] xl:mt-[12rem] px-[6rem] font-ethnocentric ">
        {/* Big background text */}
        <span
          className="absolute left-[4rem] top-[30%] -translate-y-1/2 text-5xl sm:text-6xl md:text-[70px] lg:text-[80px]
          xl:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide"
        >
          TICKETS
        </span>

        {/* Foreground small header */}
        <div className="z-10 flex flex-col items-start">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            TICKETS
          </span>
          <span className="h-[2px] w-[8rem] md:w-[10rem] bg-[#C40100] inline-block mt-2"></span>
        </div>

        {/* Red line on right */}
        <span className="hidden  h-1 w-1/4 sm:hidden lg:block bg-[#C40100]"></span>
      </div>

      {/* Mobile + tab header */}
      <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0 mb-[2rem] mt-10 sm:hidden">
        <span className="font-[Ethnocentric]">Tickets</span>
        <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
      </h2>
      <div className="px-[2rem] sm:px-[6rem] space-y-20 pb-[4rem] sm:pb-[8rem]">
        <div className=" flex flex-col sm:flex-row items-center gap-7 ">
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                       h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                       rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                       text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/GeneralticketsIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
              GENERAL ADMISSION
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹5000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
                          flex justify-center items-center hover:bg-red-800 text-white 
                          text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
                          px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
          <div className="flex flex-col  sm:w-[60%]">
            <h2 className="uppercase  lg:text-[40px] font-ethnocentric mx-auto">
              THE essential experience{" "}
            </h2>
            <p className="text-[16px] font-montserrat mx-auto sm:mx-0">
              The Essential ExperienceGet full-day access to the racing action
              from general  stands. Feel the roar of the engines and
              witness 
              thrilling overtakes up close.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse  sm:flex-row items-center   justify-end  gap-10 sm:text-right">
          {/* Text Section */}
          <div className="flex flex-col sm:w-[70%]">
            <h2 className="uppercase lg:text-[40px] font-ethnocentric mx-auto sm:mx-0">
              Behind the Scenes Access
            </h2>
            <p className="text-[16px] font-montserrat">
              The Essential Experience Get full-day access to the racing action from general stands. Feel the roar of the engines and witness thrilling overtakes up close.
            </p>
          </div>
          {/* Card Section */}
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/PaddocktickeIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
             paddock <br />pass
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹10000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
              flex justify-center items-center hover:bg-red-800 text-white 
              text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
              px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row items-center gap-7 ">
          <div
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
                       h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
                       rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
                       text-center flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              <img
                src="/vipTicIcon.svg"
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
              vip <br /> grandstand
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              ₹15000
            </p>
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              Premium seating, pit access, and exclusive hospitality zone.
            </p>
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
                          flex justify-center items-center hover:bg-red-800 text-white 
                          text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
                          px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
          <div className="flex flex-col sm:w-[60%] ">
            <h2 className="uppercase  lg:text-[40px] font-ethnocentric mx-auto sm:mx-0">
              THE essential experience{" "}
            </h2>
            <p className="text-[16px] font-montserrat">
              The Essential ExperienceGet full-day access to the racing action
              from general  stands. Feel the roar of the engines and
              witness 
              thrilling overtakes up close.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TicketsPage;
