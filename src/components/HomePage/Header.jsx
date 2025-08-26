import React from 'react'

const Header = () => {
  return (
    <div className='relative px-[4rem] mt-10 flex justify-between items-center '>
      {/* logo */}
      <img src="./logo.png" className='w-52' alt="" />

      {/* countdown */}
      <div className="px-3 rounded-3xl absolute -top-[80%] pt-12 pb-3 left-[50%] -translate-x-1/2 bg-[#840000] shadow-[0_0_40px_red] z-40">
        <div className="flex gap-12 items-center justify-between rounded-3xl border-2 border-[#c40100] px-6 py-2 bg-black">
          <p className="text-xl font-bold uppercase [word-spacing:5px]">Race Countdown</p>
          <div className="flex items-center justify-end mt-1 text-white font-bold text-sm sm:text-base">
            <div className="flex flex-col items-center">
              <p className="text-2xl border-r-2 border-red-700 px-4 -mb-1">23</p>
              <p className="text-[10px]">DAYS</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl border-r-2 border-red-700 px-4 -mb-1">14</p>
              <p className="text-[10px]">HOURS</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl border-r-2 border-red-700 px-4 -mb-1">36</p>
              <p className="text-[10px]">MINUTES</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl px-4 -mb-1">05</p>
              <p className="text-[10px]">SECONDS</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 pr-5'>
        {/* contactus button */}
        <button className='border-4 border-[rgba(196,1,0,0.3)] bg-[#6F0000]  px-4 py-2 -skew-x-6 rounded-[10px]'>CONTACT US</button>
        {/* hamburger menu */}
        <div className='flex flex-col'>
          <span className='text-[12px]'>MENU</span>
          <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='w-10 h-1 bg-white '></span>
            <span className='w-8 h-1 bg-white '></span>
            <span className='w-4 h-1 bg-white '></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header