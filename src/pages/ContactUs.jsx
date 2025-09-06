import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="relative z-50">
          <Header />
        </div>
        <img
          src="/carbgcon.png"
          alt="bgImage"
          className="absolute top-0 lg:-top-10 z-10 overflow-hidden w-full h-auto object-cover opacity-50"
        />
        <div className="flex z-50 py-10 sm:py-16 lg:py-20 relative justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-0">
          <div className="w-full sm:w-[85%] lg:w-[70%] bg-[#121212f2] rounded-2xl sm:rounded-[3rem] p-4 sm:p-6 lg:p-[4rem] h-auto lg:h-[650px]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase flex flex-col">
              <span className="font-[Ethnocentric]">Contact Us</span>
              <span className="h-[3px] sm:h-[4px] w-[4rem] sm:w-[5rem] lg:w-[6rem] bg-[#C40100] inline-block mt-2"></span>
            </h2>
            <div className="text-white flex flex-col items-center justify-center mt-4 sm:mt-6">
              <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6">
                {/* Left Form Section */}
                <div className="bg-[#0B0B0BF2] flex flex-col w-full sm:w-[65%] border rounded-[10px] sm:rounded-[15px] gap-3 sm:gap-5 p-4 sm:p-5 lg:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 lg:gap-5 w-full">
                    {/* Left Form Fields */}
                    <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-6 w-full sm:w-[60%]">
                      {/* Full Name */}
                      <div className="bg-[#191919] flex items-center rounded-md px-3 sm:px-4 py-2 sm:py-3 border">
                        <img
                          src="/fullnameIcon.svg"
                          alt="User"
                          className="h-5 sm:h-6 lg:h-7 mr-2 sm:mr-3"
                        />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="bg-transparent outline-none w-full h-[1.2rem] sm:h-[1.5rem] text-xs sm:text-sm lg:text-[20px] placeholder-gray-400"
                        />
                      </div>

                      {/* Organization */}
                      <div className="bg-[#191919] flex items-center rounded-md px-3 sm:px-4 py-2 sm:py-3 border">
                        <img
                          src="/orgIcon.svg"
                          alt="Company"
                          className="h-5 sm:h-6 lg:h-7 mr-2 sm:mr-3"
                        />
                        <input
                          type="text"
                          placeholder="Organization/Company"
                          className="bg-transparent outline-none w-full h-[1.2rem] sm:h-[1.5rem] text-xs sm:text-sm lg:text-[20px] placeholder-gray-400"
                        />
                      </div>

                      {/* Email */}
                      <div className="bg-[#191919] flex items-center border rounded-md px-3 sm:px-4 py-2 sm:py-3">
                        <img
                          src="/emailIcon.svg"
                          alt="Email"
                          className="h-5 sm:h-6 lg:h-7 mr-2 sm:mr-3"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="bg-transparent outline-none w-full h-[1.2rem] sm:h-[1.5rem] text-xs sm:text-sm lg:text-[20px] placeholder-gray-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="bg-[#191919] flex items-center border rounded-md px-3 sm:px-4 py-2 sm:py-3">
                        <img
                          src="/phoneIcon.svg"
                          alt="Phone"
                          className="h-5 sm:h-6 lg:h-7 mr-2 sm:mr-3"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="bg-transparent outline-none w-full h-[1.2rem] sm:h-[1.5rem] text-xs sm:text-sm lg:text-[20px] placeholder-gray-400"
                        />
                      </div>
                      <button className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-b from-[#3F0000] to-[#CA0000] hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm lg:text-[20px] font-medium transition">
                        Send Message
                      </button>
                    </div>

                    {/* Middle Message Box */}
                    <div className="flex flex-col w-full sm:w-[40%] sm:h-[92%] mt-3 sm:mt-0">
                      <textarea
                        rows="5"
                        placeholder="Message"
                        className="bg-[#191919] border h-[100px] sm:h-full rounded-md px-3 sm:px-4 py-2 sm:py-3 outline-none 
                        text-xs sm:text-sm lg:text-[20px]"
                      ></textarea>

                      <span className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2">
                        We typically respond within 24 hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Contact Info */}
                <div className="bg-[#0B0B0BF2] border w-full sm:w-[35%]  rounded-[6px] p-3 sm:p-4 lg:p-6 items-center">
                  <div className="bg-[#191919] h-full flex flex-col rounded-[6px] border p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-5">
                    <h3 className="text-base sm:text-md lg:text-lg xl:text-[22px] font-semibold mb-2 sm:mb-4">
                      Contact Information
                    </h3>
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 font-bold lg:text-[17px]">
                      Email
                      <span className="font-medium opacity-[50%] text-[12px] sm:text-[15px]">
                        <br />
                        bgp@gmail.com
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 font-bold lg:text-[17px]">
                      Phone
                      <span className="font-medium opacity-[50%] text-[12px] sm:text-[15px]">
                        <br />
                        +91 8000004000
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 font-bold lg:text-[17px]">
                      Follow us on
                    </p>
                    <div className="flex space-x-2 sm:space-x-3 mt-1 sm:mt-2">
                      <img
                        src="/facebook.svg"
                        alt="Facebook"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      <img
                        src="/Instagram.svg"
                        alt="Instagram"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      <img
                        src="/Youtube.svg"
                        alt="YouTube"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                      <img
                        src="/X.svg"
                        alt="Twitter"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                    <img src="/redlineIMg.svg" alt="redline" className="mt-2 sm:mt-auto w-[4rem] sm:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;