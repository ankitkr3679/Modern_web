import React from 'react';
import { motion } from 'framer-motion';
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { fadeIn, textVariant, slideIn, staggerContainer } from "../ultils/motion";

const ScheduleSection = () => {
  return (
    <motion.section
      id="schedule"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-10 md:py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

        {/* Image Side */}
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          className="md:w-1/2 w-full cursor-pointer"
        >
          <img
            src={scheduleImage}
            alt="Schedule Illustration"
            className="w-auto h-auto object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="md:w-1/2 w-full text-center md:text-left"
        >
          <motion.p
            variants={textVariant(0.4)}
            className="text-orange-500 font-semibold"
          >
            SCHEDULE
          </motion.p>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-2xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
          >
            Streamline Your Business <br /> with Smart Scheduling Solutions
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-left text-gray-600 mb-8"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium impedit assumenda officiis exercitationem autem
            asperiores, aspernatur, debitis ducimus unde temporibus dignissimos
            sint dolore. Totam saepe ab commodi fugit voluptates porro.
          </motion.p>

          <motion.a
            href="#"
            variants={fadeIn("up", 0.8)}
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all w-fit mx-auto md:mx-0"
          >
            Explore scheduling features
            <IoIosArrowRoundForward className="size-8" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
