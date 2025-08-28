import React from "react";

const Contact = () => {
  return (
    <div className="w-full px-[6rem]  mb-[6rem]">
      <h2 className="text-3xl font-bold uppercase  flex flex-col  ">
        <span className="font-[Ethnocentric]">Contact Us</span>
        <span className="h-[4px] w-[6rem] bg-[#C40100] inline-block "></span>
      </h2>
      <div className="bg-black text-white py-12 flex flex-col items-center  px-6 max-w-[1600px] ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[35%_20%_25%]  justify-center  gap-8">
          {/* Left Form Fields */}
          <div className="flex flex-col space-y-8">
            {/* Full Name */}
            <div className="flex items-center rounded-md px-4 py-3 border">
              <img src="/fullnameIcon.svg" alt="User" className=" h-10 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full h-[3rem] text-sm lg:text-[20px] placeholder-gray-400"
              />
            </div>

            {/* Organization */}
            <div className="flex items-center  rounded-md px-4 py-3 border">
              <img src="/orgIcon.svg" alt="Company" className=" h-10 mr-3" />
              <input
                type="text"
                placeholder="Organization/Company"
                className="bg-transparent outline-none w-full h-[3rem] text-sm lg:text-[20px] placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-md px-4 py-3">
              <img src="/emailIcon.svg" alt="Email" className=" h-10 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none w-full  h-[3rem] text-sm lg:text-[20px] placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-md px-4 py-3">
              <img src="/phoneIcon.svg" alt="Phone" className=" h-10 mr-3" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent outline-none w-full  h-[3rem] text-sm lg:text-[20px] placeholder-gray-400"
              />
            </div>

            {/* Inquiry Type */}
            <div className="flex items-center border rounded-md px-4 py-3">
              
              <select className="bg-transparent outline-none w-full  h-[3rem] text-sm lg:text-[20px] text-gray-400">
                <option value="">Type of Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="general">General</option>
              </select>
            </div>
          </div>

          {/* Middle Message Box */}
          <div className="flex flex-col">
            <textarea
              rows="10"
              placeholder="Message"
              className="bg-transparent border h-[79%] rounded-md px-4 py-3 outline-none text-sm lg:text-[20px]"
            ></textarea>
            <button className="mt-8 bg-gradient-to-t from-[#B70000] to-[#510000]  hover:bg-red-700 px-6 py-3 rounded-md text-sm lg:text-[20px] font-medium transition">
              Send Message
            </button>
            <span className="text-xs text-gray-400 mt-2">
              We typically respond within 24 hours
            </span>
          </div>

          {/* Right Contact Info */}
          <div className="border rounded-md px-6 py-6 h-[79%] space-y-5">
            <h3 className="text-lg font-semibold mb-4 lg:text-[22px]">
              Contact Information
            </h3>
            <p className="text-sm mb-2 font-bold lg:text-[20px]">
              Email
              <span className="font-medium opacity-[50%] text-[15px] ">
                {" "}
                <br />
                bgp@gmail.com{" "}
              </span>
            </p>
            <p className="text-sm mb-2 font-bold lg:text-[20px]">
              Phone
              <span className="font-medium opacity-[50%] text-[15px] ">
                {" "}
                <br />
                +91 8000004000{" "}
              </span>
            </p>
            
            <p className="text-sm mb-2 font-medium">Follow us on</p>
            <div className="flex space-x-3 mt-2">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              <img src="/Instagram.svg" alt="Instagram" className="w-6 h-6" />
              <img src="/Youtube.svg" alt="YouTube" className="w-6 h-6" />
              <img src="/X.svg" alt="Twitter" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
