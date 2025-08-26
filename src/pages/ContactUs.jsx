import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative z-50">
          <Header />
        </div>
        <img
          src="/carbgcon.png"
          alt="bgImage"
          className="absolute lg:-top-10 z-10 overflow-hidden"
        />
        <div className="flex z-50  py-20 relative justify-center items-center  overflow-hidden ">
          <div className="w-[70%]  bg-[#282727] rounded-[3rem] p-[4rem] lg:h-[600px]">
            <h2 className="text-3xl font-bold uppercase  flex flex-col  ">
              <span className="font-[Ethnocentric]">Contact Us</span>
              <span className="h-[4px] w-[6rem] bg-[#C40100] inline-block "></span>
            </h2>
            <div className=" text-white  flex flex-col items-center justify-center mt-6  ">
              <div className="w-full flex  gap-4">
                <div className="bg-[#343333] flex justify-center w-[65%] border rounded-[15px] gap-5 p-7">
                  {/* Left Form Fields */}
                  <div className="   flex flex-col space-y-6 w-[60%]">
                    {/* Full Name */}
                    <div className="bg-[#343232] flex items-center rounded-md px-4 py-3 border">
                      <img
                        src="/fullnameIcon.svg"
                        alt="User"
                        className=" h-7 mr-3"
                      />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="bg-transparent outline-none w-full h-[1.5rem] text-sm lg:text-[20px] placeholder-gray-400"
                      />
                    </div>

                    {/* Organization */}
                    <div className="bg-[#343232] flex items-center   rounded-md px-4 py-3 border">
                      <img
                        src="/orgIcon.svg"
                        alt="Company"
                        className=" h-7 mr-3"
                      />
                      <input
                        type="text"
                        placeholder="Organization/Company"
                        className="bg-transparent outline-none w-full h-[1.5rem] text-sm lg:text-[20px] placeholder-gray-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="bg-[#343232] flex items-center border rounded-md px-4 py-3">
                      <img
                        src="/emailIcon.svg"
                        alt="Email"
                        className=" h-7 mr-3"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-transparent outline-none w-full  h-[1.5rem] text-sm lg:text-[20px] placeholder-gray-400"
                      />
                    </div>

                    {/* Phone */}
                    <div className="bg-[#343232] flex items-center border rounded-md px-4 py-3">
                      <img
                        src="/phoneIcon.svg"
                        alt="Phone"
                        className=" h-7 mr-3"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="bg-transparent outline-none w-full  h-[1.5rem] text-sm lg:text-[20px] placeholder-gray-400"
                      />
                    </div>
                    <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-sm lg:text-[20px] font-medium transition">
                      Send Message
                    </button>
                  </div>

                  {/* Middle Message Box */}
                  <div className="flex flex-col w-[30%]">
                    <textarea
                      rows="10"
                      placeholder="Message"
                      className="bg-[#343232] border h-[79%] rounded-md px-4 py-3 outline-none text-sm lg:text-[20px]"
                    ></textarea>

                    <span className="text-xs text-gray-400 mt-2">
                      We typically respond within 24 hours
                    </span>
                  </div>
                </div>

                {/* Right Contact Info */}
                <div className="bg-[#343333] border w-[35%] rounded-[6px] p-6 items-center">
                  <div className="bg-[#343232]  h-full flex flex-col rounded-[6px]   border p-5 space-y-5">
                    <h3 className="text-lg font-semibold mb-4 lg:text-[22px]">
                      Contact Information
                    </h3>
                    <p className="text-sm mb-2 font-bold lg:text-[17px]">
                      Email
                      <span className="font-medium opacity-[50%] text-[15px] ">
                        {" "}
                        <br />
                        bgp@gmail.com{" "}
                      </span>
                    </p>
                    <p className="text-sm mb-2 font-bold lg:text-[17px]">
                      Phone
                      <span className="font-medium opacity-[50%] text-[15px] ">
                        {" "}
                        <br />
                        +91 8000004000{" "}
                      </span>
                    </p>

                    <p className="text-sm mb-2 font-bold lg:text-[17px]">
                      Follow us on
                    </p>
                    <div className="flex space-x-3 mt-2">
                      <img
                        src="/facebook.svg"
                        alt="Facebook"
                        className="w-6 h-6"
                      />
                      <img
                        src="/Instagram.svg"
                        alt="Instagram"
                        className="w-6 h-6"
                      />
                      <img
                        src="/Youtube.svg"
                        alt="YouTube"
                        className="w-6 h-6"
                      />
                      <img src="/X.svg" alt="Twitter" className="w-6 h-6" />
                    </div>
                    <img src="/redlineIMg.svg" alt="redline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
      
    </>
  );
};

export default ContactUs;
