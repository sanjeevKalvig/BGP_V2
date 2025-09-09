import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
  const items = [
    {
      header: "Question 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta magni neque impedit aperiam repellendus debitis ullam, alias vel doloremque, iure sapiente ex quo, natus officiis tempore non ratione nemo.",
    },
    {
      header: "Question 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta magni neque impedit aperiam repellendus debitis ullam, alias vel doloremque, iure sapiente ex quo, natus officiis tempore non ratione nemo.",
    },
    {
      header: "Question 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta magni neque impedit aperiam repellendus debitis ullam, alias vel doloremque, iure sapiente ex quo, natus officiis tempore non ratione nemo.",
    },
    {
      header: "Question 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta magni neque impedit aperiam repellendus debitis ullam, alias vel doloremque, iure sapiente ex quo, natus officiis tempore non ratione nemo.",
    },
  ];

  const [active, setActive] = useState(0);
  function handleAccordion(index) {
    if (active == index) {
      setActive(-1);
      return;
    }
    setActive(index);
  }

  return (
    <div
      className=" lg:pt-20 lg:pb-20 sm:pb-16 px-4 py-5 sm:px-8  font-montserrat  flex flex-col gap-[4rem] justify-center radial-gradient "
     
    >
      <h2 className="text-3xl relative font-bold uppercase hidden lg:flex flex-col left-[4rem]   ">
        <span className="font-[Ethnocentric]">FAQS</span>
        <span className="h-[4px] w-[3rem] bg-[#C40100] inline-block "></span>
      </h2>

       {/* Mobile + tab header */}
       <h2 className="text-2xl sm:text-[2rem] md:text-[3rem]  font-bold uppercase flex flex-col justify-center items-center lg:hidden gap-2 lg:gap-0 mb-2">
          <span className="font-[Ethnocentric]">FAQS</span>
          <span className="h-[4px] w-[6rem] sm:w-[40%] bg-[#C40100] inline-block" />
        </h2>

      <div className="sm:px-[4rem] max-w-[1920px] m-auto flex flex-col gap-8 items-center w-full  ">
        <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-[1560px] ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-[1px] rounded-[4px] px-2 sm:px-3 w-full "
            >
              <div
                className="flex justify-between cursor-pointer py-1 sm:py-3 items-center "
                onClick={() => handleAccordion(index)}
              >
                <span className="text-xl">{item.header}</span>
                {active == index ? (
                  <MdOutlineKeyboardArrowUp
                    size={40}
                    className="text-[#E03131]"
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    size={40}
                    className="text-[#E03131]"
                  />
                )}
              </div>
              <img
                src="/redlineIMg.svg"
                alt=""
                className={`${active == index ? "" : "hidden"}`}
              />
              <div
                className={` transition-all border-t-0 opacity-0 pt-0 h-0 overflow-hidden
                  ${active == index ? "pt-3 h-52 sm:h-32 opacity-100" : ""}`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
