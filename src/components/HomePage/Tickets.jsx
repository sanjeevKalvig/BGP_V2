import React from "react";

const Tickets = () => {
  const ticketCategories = [
    {
      icons: "/GeneralticketsIcon.svg",
      title: "General Admission",
      price: "₹5000",
      description: "Access to all general areas",
    },
    {
      icons: "/PaddocktickeIcon.svg",
      title: "Paddock Pass",
      price: "₹10000",
      description: "Exclusive access to the paddock",
    },
    {
      icons: "/vipTicIcon.svg",
      title: "VIP Grandstand",
      price: "₹15000",
      description: "Reserved grandstand seating",
    },
  ];
  return (
    <div className="mb-[6rem] lg:space-y-7 ">
      {/* Heading */}
      <h2 className="text-2xl lg:text-[1.6rem] xl:text-[1.9rem] 2xl:text-3xl font-bold uppercase hidden lg:flex flex-col  px-4 lg:px-0">
        <span className="font-[Ethnocentric]">Tickets</span>
        <span className="h-[4px] w-[6rem] xl:w-[6.6rem] 2xl:w-[7.3rem] bg-[#C40100] inline-block" />
      </h2>

        {/* Mobile + tab header */}
        <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0 mb-0">
          <span className="font-[Ethnocentric]">Tickets</span>
          <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
        </h2>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row h-auto justify-center items-center gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 p-10 lg:p-14 xl:p-16 2xl:p-20 font-montserrat">
        {ticketCategories.map((ticket, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-t from-[#242424] to-[#000000] 
            w-[85%] lg:w-[32%] xl:w-[27%] 2xl:w-[20%]
            h-auto lg:h-[420px] xl:h-[460px] 2xl:h-[380px]
            rounded-lg shadow-lg p-3 xl:p-2 2xl:p-1 gap-3 max-w-sm 
            text-center flex flex-col justify-center items-center border border-gray-500"
          >
            {/* Icon */}
            <div className="relative z-10">
              <img
                src={ticket.icons}
                className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>

            {/* Title */}
            <h3 className="w-full text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-2xl font-bold mb-2 uppercase">
              {ticket.title}
            </h3>

            <img src="/redlineIMg.svg" alt="" />

            {/* Price */}
            <p className="text-xl lg:text-[1.3rem] xl:text-[1.6rem] 2xl:text-2xl font-semibold mb-2">
              {ticket.price}
            </p>

            {/* Description */}
            <p className="mb-4 w-[75%] opacity-45 text-left text-sm lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-base">
              {ticket.description}
            </p>

            {/* Button */}
            <button
              className="w-[70%] h-[38px] lg:h-[36px] xl:h-[38px] 2xl:h-[40px] 
              flex justify-center items-center hover:bg-red-800 text-white 
              text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base 
              px-4 py-2 rounded-[10px] mb-2 font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
        ))}
      </div>

      <img src="/redlineIMg.svg" alt=""  className="m-2"/>

      {/* CTA */}
      <div className=" flex flex-col justify-center items-center gap-4 sm:py-10">
        <div className="w-[70%] flex justify-center items-center gap-7">
          <button
            className="bg-gradient-to-t from-[#B70000] to-[#510000] hover:bg-red-800 text-white 
            px-6 py-3 text-[8px] sm:text-[10px] lg:text-sm xl:text-[0.9rem] 2xl:text-[20px] 
            rounded-[15px] font-bold lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem]"
          >
            Buy Tickets Now
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white 
            px-6 py-3  text-[8px] sm:text-[10px] lg:text-sm xl:text-[0.9rem] 2xl:text-[20px] 
            rounded-[15px] font-bold lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem]"
          >
            View Seating Map
          </button>
        </div>
        <p className="text-xs lg:text-sm xl:text-[0.9rem] 2xl:text-base">
          All tickets valid for July 7th, 2025. Terms & Conditions Apply
        </p>
      </div>
    </div>
  );
};

export default Tickets;
