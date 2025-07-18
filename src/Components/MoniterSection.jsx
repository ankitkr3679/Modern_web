import React from 'react'
import moniterCard from "../assets/monitor-card.webp"
import { IoIosArrowRoundForward } from "react-icons/io";

const MoniterSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10 md:py-15'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* left */}
        <div className='md:w-1/2 w-full text-center md:text-left'>
          <p className='text-green-500 font-semibold'>MONITER</p>
          <h2 className='text-2xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5 '>
            Introducing best mobile carousele
          </h2>
          <p className='text-left text-gray-600 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id dignissimos expedita provident esse! Repudiandae assumenda vel ut officiis doloribus, suscipit maxime itaque blanditiis eum expedita? Alias excepturi quidem dicta.
          </p>
          <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Learn more about monitoring <IoIosArrowRoundForward className='size-8' /> </a>
        </div>

        {/* right */}
        <div className='md:w-1/2 w-auto cursor-pointer'>
          <img src={moniterCard} alt='schedule image' className='w-auto h-full' />
        </div>
      </div>
    </section>
  )
}


export default MoniterSection




