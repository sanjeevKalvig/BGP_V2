import React from 'react'
import Header from '../components/HomePage/Header'
import Footer from '../components/HomePage/Footer'
function DashboardPage() {
  return (
    <div>
      <Header />
      <div className='px-4 sm:px-7 md:px-8 lg:px-16 my-12 sm:my-16 md:my-24 lg:my-40'>
        <div className='flex justify-between'>
          <button className='bg-[#232323] px-4 sm:px-6 py-1 rounded-md'>My tickets</button>
          <button className='bg-[#2D0000] border border-[#6F0000]  px-4 sm:px-6 py-1 rounded-md'>Download Ticket</button>
        </div>

        {/* Dashboard Data */}
        <div className='flex flex-col mt-4 text-[10px] sm:text-[12px] lg:text-[16px]'>
          <div className='flex gap-3 sm:gap-6 justify-between items-center border-y py-3 sm:py-6'>
            <div className='flex gap-2 sm:gap-8 items-center'>
              <div className='h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-red-600 border border-white cursor-pointer'></div>
              <div className='flex flex-col'>
                <span className='font-bold'>Bhartiya Grand Prix 2025</span>
                <span>Booking Reference:#ABC12344</span>
                <span>Silverstone Circuit,UK</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span>VIP Paddock</span>
              <span>Gradstand A- Row 3,Seat 12</span>
            </div>
            <div>Rs.5300 (incl. fees)</div>
          </div>
          <div className='flex gap-3 sm:gap-6 justify-between items-center border-y py-3 sm:py-6'>
            <div className='flex gap-2 sm:gap-8 items-center'>
              <div className='h-3 w-3 sm:h-5 sm:w-5 rounded-full  border border-white cursor-pointer'></div>
              <div className='flex flex-col'>
                <span className='font-bold'>Bhartiya Grand Prix 2025</span>
                <span>Booking Reference:#ABC12344</span>
                <span>Silverstone Circuit,UK</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span>VIP Paddock</span>
              <span>Gradstand A- Row 3,Seat 12</span>
            </div>
            <div>Rs.5300 (incl. fees)</div>
          </div>
          <div className='flex gap-3 sm:gap-6 justify-between items-center border-y py-3 sm:py-6'>
            <div className='flex gap-2 sm:gap-8 items-center'>
              <div className='h-3 w-3 sm:h-5 sm:w-5 rounded-full  border border-white cursor-pointer'></div>
              <div className='flex flex-col'>
                <span className='font-bold'>Bhartiya Grand Prix 2025</span>
                <span>Booking Reference:#ABC12344</span>
                <span>Silverstone Circuit,UK</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span>VIP Paddock</span>
              <span>Gradstand A- Row 3,Seat 12</span>
            </div>
            <div>Rs.5300 (incl. fees)</div>
          </div>
          <div className='flex gap-3 sm:gap-6 justify-between items-center border-y py-3 sm:py-6'>
            <div className='flex gap-2 sm:gap-8 items-center'>
              <div className='h-3 w-3 sm:h-5 sm:w-5 rounded-full  border border-white cursor-pointer'></div>
              <div className='flex flex-col'>
                <span className='font-bold'>Bhartiya Grand Prix 2025</span>
                <span>Booking Reference:#ABC12344</span>
                <span>Silverstone Circuit,UK</span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span>VIP Paddock</span>
              <span>Gradstand A- Row 3,Seat 12</span>
            </div>
            <div>Rs.5300 (incl. fees)</div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default DashboardPage