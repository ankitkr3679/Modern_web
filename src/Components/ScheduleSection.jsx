import React from 'react'
import scheduleImage from "../assets/stats.webp"
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10 md:py-15'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* left */}
        <div className='md:w-1/2 w-auto cursor-pointer'>
          <img src={scheduleImage} alt='schedule image' className='w-auto h-full' />
        </div>

        {/* right */}
        <div className='md:w-1/2 w-full text-center md:text-left'>
          <p className='text-orange-500 font-semibold'>SCHEDULE</p>
          <h2 className='text-2xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
            Streamline Your Business <br /> with Smart Scheduling Solutions
          </h2>
          <p className='text-left text-gray-600 mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium impedit assumenda officiis exercitationem autem asperiores, aspernatur, debitis ducimus unde temporibus dignissimos sint dolore. Totam saepe ab commodi fugit voluptates porro.
          </p>
          <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Explore scheduling features <IoIosArrowRoundForward className='size-8' /> </a>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
