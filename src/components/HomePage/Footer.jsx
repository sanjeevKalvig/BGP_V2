import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#101010] w-full text-white p-4  md:px-[4rem] font-montserrat  flex justify-center items-center">
      <div className=" container  flex justify-between sm:justify-evenly items-center flex-wrap gap-4 sm:gap-0  ">
        {/* Logo and Social Icons */}
        <div className="w-[40%] sm:w-[30%] flex flex-col  ">
          <img
            src="logo.png"
            alt="Bhartiya Grand Prix"
            className=" mb-1 sm:w-[65%] md:w-[65%] lg:w-[60%] xl:w-[65%] r"
          />
          <div className="flex space-x-2 mb-2">
            <a href="#">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className=" sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="/Instagram.svg"
                alt="Instagram"
                className=" sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="/Youtube.svg"
                alt="YouTube"
                className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="X.svg"
                alt="Twitter"
                className=" sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px]"
              />
            </a>
          </div>

          <div className="text-[12px] sm:text-[9px] md:text-[9px] lg:text-[10px]  xl:text-[15px] text-gray-400">
            © 2025 Bhartiya Grand Prix. All rights reserved.
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-[50%] sm:w-[25%] grid grid-cols-2  text-sm text-left sm:text-center md:text-left font-montserrat  ">
          <div className="space-y-2 flex flex-col sm:text-[10px] md:text-[11px] lg:text-[15px] xl:text-[18px] leading-5 lg:leading-7 font-sans font-semibold">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Event Info
            </a>
            <a href="#teams" className="hover:underline">
              Teams
            </a>
            <a href="#tickets" className="hover:underline">
              Tickets
            </a>
          </div>
          <div className="space-y-2 flex flex-col sm:text-[10px] md:text-[11px] lg:text-[15px] xl:text-[18px] leading-5 lg:leading-7 font-sans font-semibold">
            <a href="#" className="hover:underline">
              Gallery
            </a>
            <a href="#news" className="hover:underline">
              News
            </a>
            <a href="#sponsors" className="hover:underline">
              Sponsors
            </a>
            {/* <a href="#contactus" className="hover:underline">
              Contact Us
            </a> */}
             <Link to="/contact"  className="hover:underline ">Contact Us</Link>
          </div>
        </div>

        {/* Subscription Form */}
        <div className=" sm:w-[35%] flex flex-col items-start leading-6 lg:leading-10">
          <p className="text-[14px] sm:text-[9px]  md:text-[10px]  lg:text-[15px] xl:text-[20px] font-sans font-semibold">
            Stay up to date on the latest from BGP!
          </p>
          <form className="flex flex-col gap-4 w-full text-[11px] md:text-[13px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full  py-2 rounded  bg-transparent items-start border-b-[1px] focus:outline-none"
            />
            <button
              className="bg-white sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[20px] font-light text-black  
          px-4 py-2 rounded sm:w-[90px] md:w-[100px] 
           lg:w-[130px] sm:h-[30px] md:h-[33px]  lg:h-[35px] xl:w-[170px] xl:h-[40px] flex justify-center items-center"
            >
              Login/Register
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
