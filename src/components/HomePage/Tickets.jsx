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
    <div className="lg:mb-[6rem] lg:space-y-7">
      <h2 className="text-3xl font-bold uppercase  flex flex-col  ">
        <span className="font-[Ethnocentric]">Tickets</span>
        <span className="h-[4px] w-[7.3rem] bg-[#C40100] inline-block "></span>
      </h2>
      <div className="flex flex-col lg:flex-row h-auto justify-center items-center gap-6 lg:gap-4 2xl:gap-8 p-20 2xl:px-8 font-montserrat  ">
        {ticketCategories.map((ticket, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-t from-[#242424] to-[#000000]  w-[80%] lg:w-[30%] lg:h-[500px] xl:w-[25%] xl:h-[500px] 
            2xl:w-[20%]
             2xl:h-[380px] rounded-lg
             shadow-lg p-2 xl:p-1 gap-3 max-w-sm text-center 
                       flex flex-col justify-center items-center border border-gray-500"
          >
            <div className="relative z-10">
              {/* This ensures the image stays above the shadow */}
              <img
                src={ticket.icons}
                className=" lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[60px] 2xl:h-[60px]"
                alt="ticketicon"
              />
            </div>
            <h3 className="w-full text-[1.7rem] 2xl:text-2xl font-bold mb-2  2xl:w-[70%]  uppercase ">
              {ticket.title}
            </h3>
            <img src="/redlineIMg.svg" alt="" />
            <p className="text-2xl font-semibold mb-2">{ticket.price}</p>
            <p className="mb-4 w-[70%] opacity-45 text-left">
              {ticket.description}
            </p>
            <button
              className="w-[70%] h-[40px] flex justify-center items-center hover:bg-red-800 text-white px-4 py-2 
            rounded-[10px] mb-2  font-bold border-[3px] border-red-700"
            >
              PURCHASE
            </button>
          </div>
        ))}
      </div>
      <img src="/redlineIMg.svg" alt="" />

      <div className="mt-12 flex flex-col justify-center items-center gap-4">
        <div className="w-[70%] flex  justify-center items-center  gap-7">
          <button className="bg-gradient-to-t from-[#B70000] to-[#510000]  hover:bg-red-800 text-white px-6 py-3 text-[12px] rounded-[15px] 2xl:text-[20px] lg:text-lg xl:w-[16rem] font-bold">
            Buy Tickets Now
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 text-[12px]  lg:text-lg rounded-[15px] 2xl:text-[20px] xl:w-[16rem] font-bold">
            View Seating Map
          </button>
        </div>
        <p>All tickets valid for July 7th, 2025. Terms & Conditions Apply</p>
      </div>
    </div>
  );
};

export default Tickets;
