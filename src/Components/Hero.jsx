import React from 'react';
import heroImage from "../assets/hero-image.png";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";



const Hero = () => {
  return (
    <section id="home" className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-32 md:pt-44 pb-12 px-4 sm:px-6 lg:px-8'>

      {/* Left col */}
      <div className='w-full md:w-1/2 space-y-8'>
        {/* Start bages */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-color cursor-pointer'>
          <span className='text-blue-600  group-hover:text-amber-300 group-hover:scale-110 transition-transform'><FaStar /></span>
          <span className='text-sm font-medium'>Jump start your growth</span>
        </div>
        <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold leading-tight'>
          We boost the growth for
          <span className='text-blue-600 relative inline-block'>
            Startup to Fortune 100
            <span className='absolute bottom-0 left-0 w-full h-0.5'></span>
          </span>
          <span className="inline-flex items-center gap-1 ml-2">
            Companies <IoIosAlarm className="animate-pulse" />
          </span>
        </h1>

        {/* Paragraph */}
        <p className='text-gray-600 text-base sm:text-lg md:text-xl max-w-xl'>
          Get the most accurate leads, salespeople training and conversion tools — all with a single billing.
        </p>

        {/* Input form */}
        <div className="flex gap-2 max-w-md w-full">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
          />
          <button
            className="flex-shrink-0 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all hover:shadow-md"
          >
            <FaArrowRight className='cursor-pointer' />
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className='w-full md:w-1/2 mt-12 md:mt-0 md:pl-12'>
        <div className='relative'>
          <img
            src={heroImage}
            alt="hero"
            className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
