import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const EventPage = () => {
  const eventData = [
    {
      status: "Upcoming",
      title: "Buddh International Circuit",
      description:
        "The Buddh International Circuit is set to host the next thrilling race of the Bharatiya Grand Prix. Expect fierce battles, dramatic overtakes, and pure racing adrenaline.",
      date: {
        start: "22 SEP",
        end: "25 SEP",
      },
      temperature: "28°C Day",
      teams: 10,
      button: "Buy Tickets Now",
      bgImage: "/event/event1.jpg",
    },
    {
      status: "Upcoming",
      title: "Buddh International Circuit",
      description:
        "The Buddh International Circuit is set to host the next thrilling race of the Bharatiya Grand Prix. Expect fierce battles, dramatic overtakes, and pure racing adrenaline.",
      date: {
        start: "22 SEP",
        end: "25 SEP",
      },
      temperature: "28°C Day",
      teams: 10,
      button: "Buy Tickets Now",
      bgImage: "/event/event2.jpg",
    },
  ];

  const previousEventData = [
    {
      status: "Previous",
      title: "Madras Motor Race Track",
      description:
        "The Madras Motor Race Track witnessed intense competition and skillful driving in the last season’s thrilling race weekend.",
      date: {
        start: "10 AUG",
        end: "13 AUG",
      },
      temperature: "30°C Day",
      teams: 8,
      button: "View Highlights",
      bgImage: "/event/event3.jpg",
    },
    {
      status: "Previous",
      title: "Hyderabad Street Circuit",
      description:
        "The Hyderabad Street Circuit offered one of the most challenging urban tracks, with breathtaking moments and close finishes last year.",
      date: {
        start: "05 JUL",
        end: "08 JUL",
      },
      temperature: "35°C Day",
      teams: 9,
      button: "View Highlights",
      bgImage: "/event/event4.jpg",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-[#1A1A1A] min-h-screen">
        <div className="relative z-50">
          <Header />
        </div>

        {/* Background Image */}
        <img
          src="/event/eventimg.jpg"
          alt="bgImage"
          className="absolute top-0 lg:-top-10 z-10 w-full object-cover opacity-30"
        />

        {/* Hero Content */}
        <div className="absolute text-white text-left z-[60] bottom-12 left-[12px] sm:left-[4rem] md:left-[6rem]">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <h3 className="text-lg font-bold tracking-wider lg:text-[50px] font-ethnocentric">
              NEXT
            </h3>
            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold leading-tight lg:text-[50px] text-[#A4A4A4] font-ethnocentric">
              BUDDH INTERNATIONAL <br /> CIRCUIT
            </h1>

            <p className="mt-6 text-[#878787] max-w-2xl lg:text-[20px]">
              The Buddh International Circuit is set to host the next thrilling
              race of the Bharatiya Grand Prix. Expect fierce battles, dramatic
              overtakes, and pure racing adrenaline.
            </p>

            {/* Info Grid (Hero Section) */}
            <div className="mt-8 flex flex-wrap justify-start items-center gap-3">
              {/* Date Range */}
              <div className="flex items-center gap-2">
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center flex justify-center items-center gap-2">
                  <div className="rounded-md text-center">
                    <p className="text-lg font-bold leading-none">22</p>
                    <p className="text-xs font-semibold">SEP</p>
                  </div>
                  <span className="text-white font-bold">—</span>
                  <div className="rounded-md text-center">
                    <p className="text-lg font-bold leading-none">25</p>
                    <p className="text-xs font-semibold">SEP</p>
                  </div>
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                <p className="text-sm font-bold leading-none">28°C</p>
                <p className="text-xs font-semibold">DAY</p>
              </div>

              {/* Teams */}
              <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                <p className="text-sm font-bold leading-none">10</p>
                <p className="text-xs font-semibold">TEAMS</p>
              </div>

              {/* Button */}
              <button className="bg-[#B70000] hover:bg-red-700 text-white font-bold px-6 py-2 rounded-md">
                BUY TICKETS NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Section Header */}
      <div className="p-[4rem]">
        <div className="relative flex flex-col sm:flex-row items-center justify-between  font-[Ethnocentric]">
          <span
            className="absolute w-full sm:w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl 
            sm:text-6xl md:text-[70px] lg:text-[90px] font-extrabold text-[#B2B2B2]/10 select-none 
            pointer-events-none tracking-wide"
          >
            UPCOMING
          </span>

          <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
              UPCOMING
            </span>
            <span className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#C40100] inline-block"></span>
          </div>
          <span className="h-0.5 sm:h-1 w-full sm:w-1/3 bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
        </div>
      </div>

      {/* Upcoming Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-[1rem] sm:px-[4rem] lg:px-[6rem] ">
        {eventData.slice(0, 2).map((event, index) => (
          <div
            key={index}
            className="relative bg-[#111] rounded-xl overflow-hidden shadow-lg group w-[100%] sm:w-[80%] lg:w-1/2 h-[450px] lg:h-[500px]"
          >
            {/* Card Background */}
            <img
              src={event.bgImage}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition"
            />

            {/* Card Content */}
            <div className="absolute p-3 sm:p-6 z-10 text-white space-y-4 bottom-0">
              <h3 className="text-lg font-bold tracking-wider font-ethnocentric">
                {event.status}
              </h3>
              <h2 className="text-2xl font-bold font-ethnocentric">
                {event.title}
              </h2>
              <p className="text-sm text-gray-300">{event.description}</p>

              {/* Info Grid */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">
                    {event.date.start} → {event.date.end}
                  </p>
                </div>
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">{event.temperature}</p>
                </div>
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">{event.teams} TEAMS</p>
                </div>
              </div>
              <button className="mt-4 bg-[#B70000] hover:bg-red-700 text-white font-bold px-6 py-2 rounded-md">
                {event.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Section Header */}
      <div className="p-[4rem]">
        <div className="relative flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-[3rem] font-[Ethnocentric]">
          <span
            className="absolute w-full sm:w-1/2 left-0 top-1/2 -translate-y-1/2 text-5xl 
            sm:text-6xl md:text-[70px] lg:text-[90px] font-extrabold text-[#B2B2B2]/10 select-none 
            pointer-events-none tracking-wide"
          >
            PREVIOUS
          </span>

          <div className="z-10 flex flex-col items-center mt-6 sm:mt-8 md:mt-10 translate-x-0 sm:translate-x-11">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white px-2 sm:px-3 py-1 mr-0 sm:mr-3 relative">
              PREVIOUS
            </span>
            <span className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#C40100] inline-block"></span>
          </div>
          <span className="h-0.5 sm:h-1 w-full sm:w-1/3 bg-[#C40100] inline-block mt-2 sm:mt-0"></span>
        </div>
      </div>

      {/* Previous Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-[1rem] sm:px-[4rem] lg:px-[6rem] mb-[8rem]">
        {previousEventData.slice(0, 2).map((event, index) => (
          <div
            key={index}
            className="relative bg-[#111] rounded-xl overflow-hidden shadow-lg group w-[100%] sm:w-[80%] lg:w-1/2 h-[450px] lg:h-[500px]"
          >
            {/* Card Background */}
            <img
              src={event.bgImage}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition"
            />

            {/* Card Content */}
            <div className="absolute p-3 sm:p-6 z-10 text-white space-y-4 bottom-0">
              <h3 className="text-lg font-bold tracking-wider font-ethnocentric">
                {event.status}
              </h3>
              <h2 className="text-2xl font-bold font-ethnocentric">
                {event.title}
              </h2>
              <p className="text-sm text-gray-300">{event.description}</p>

              {/* Info Grid */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">
                    {event.date.start} → {event.date.end}
                  </p>
                </div>
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">{event.temperature}</p>
                </div>
                <div className="bg-black border border-red-600 rounded-md px-4 py-2 text-center">
                  <p className="text-sm font-bold">{event.teams} TEAMS</p>
                </div>
              </div>
              <button className="mt-4 bg-[#B70000] hover:bg-red-700 text-white font-bold px-6 py-2 rounded-md">
                {event.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default EventPage;
