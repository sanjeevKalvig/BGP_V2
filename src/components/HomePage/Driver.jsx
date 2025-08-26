import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Driver = () => {
  return (
    <div className=" w-full text-white px-[4rem] flex flex-col relative mt-[6rem]  ">
      <Header />
      <Carousel />
    </div>
  )
}

const Header = () => {
  return (
    <div className="relative flex items-center justify-between mb-[3rem]  font-[Ethnocentric]">
      {/* Big background text */}
      <span className="absolute w-1/2 left-0 top-1/2 -translate-y-1/2 text-[70px]
   md:text-[120px] font-extrabold text-[#B2B2B2]/10 select-none pointer-events-none tracking-wide ">
        DRIVERS
      </span>

      {/* Foreground small header */}
      <div className="z-10 flex flex-col items-center mt-10 translate-x-11 " >
        <span className=" text-3xl md:text-4xl font-bold text-white px-3 py-1 mr-3 relative">
          DRIVERS
        </span>
        <span className="h-[2px] w-[10rem] bg-[#C40100] inline-block"></span>
      </div>
      {/* Red line */}
      <span className="h-1  w-1/3 bg-[#C40100] inline-block"></span>
    </div>
  )
}

const Carousel = () => {
  const drivers = [
    { id: 1, name: "KARAN SINGH", imgPath: "/driver.png" },
    { id: 2, name: "KARAN SINGH", imgPath: "/driver.png" },
    { id: 3, name: "KARAN SINGH", imgPath: "/driver.png" },
  ];
  return (
    <div className='container mx-auto relative mt-20 mb-20 xl:pl-[3.5rem]  '>

      {/* Indicators */}
      <div className='relative '>
        <ChevronLeft className='absolute left-0 translate-y-32 rounded-full cursor-pointer hover:bg-[#202020]' size={40} />
        <ChevronRight className='absolute right-0 translate-y-32 rounded-full cursor-pointer hover:bg-[#202020]' size={40} />
      </div>

      {/* Cards */}
      <div className='flex justify-around xl:pl-[4rem] xl:pr-[4rem]'>
        {
          drivers.map((driver, index) => (
            <div key={index} className=''>
              <div className='border-2 border-red-700 h-60 w-[330px] relative'>
                <img src={driver.imgPath} alt="" className='absolute bottom-[-4px] ' />
                <span className='absolute bottom-0 left-[-32px] text-4xl font-bold'>{driver.name}</span>

              </div>
              <div className='bg-[#202020] py-5 px-5 flex justify-between '>
                <button className='bg-[#292929] px-7 py-2 text-xl text-[#848484]'>STATS</button>
                <button className='bg-[#292929] px-7 py-2 text-xl text-[#848484]'>DETAILS</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Driver