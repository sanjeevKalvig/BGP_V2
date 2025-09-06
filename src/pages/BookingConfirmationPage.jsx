import React from 'react'
import Header from '../components/HomePage/Header'
import Footer from '../components/HomePage/Footer'

function BookingConfirmationPage() {
    const bookingData = {
        "Booking Reference": "#ABC12345",
        "Name": "John Doe",
        "Event": "Grand Prix Championship",
        "Date & Time": "12 October 2025,2:00 PM",
        "Venue": "Silverstone Circuit, UK",
        "Ticket Type": "VIP Paddock",
        "Seats": "Grandstand A - Row 3,Seat 12",
        "Quantity": "2",
        "Price Paid": "$299 (incl.fees)"
    }
    return (
        <div>
            <Header />
            <div className='px-4 sm:px-7 md:px-8 lg:px-16 my-12 sm:my-16 md:my-24 lg:my-40'>
                <div className='font-[Ethnocentric] text-xl sm:text-3xl md:text-4xl lg:text-6xl'>BOOKING CONFIRMATION</div>
                <div className='flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center mt-16 sm:pl-4 md:pl-8 lg:pl-16'>
                    {/* Booing Data */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 ">
                        {Object.entries(bookingData).map(([key, value]) => (
                            <div key={key} className="flex sm:text-[18px] md:text-[20px]  lg:text-[24px] gap-1">
                                <span className="font-semibold text-[#AFAFAF]">{key}:</span>
                                <span className="">{value}</span>
                            </div>
                        ))}
                    </div>
                    <img src="./scanner.png" alt="image " className='bg-white rounded-xl h-[200px] lg:h-[400px] self-center' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BookingConfirmationPage