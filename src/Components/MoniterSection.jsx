import React from 'react';
import { motion } from 'framer-motion';
import moniterCard from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { fadeIn, textVariant, slideIn, staggerContainer } from "../ultils/motion";

const MoniterSection = () => {
  return (
    <motion.section
      id="moniter"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-10 md:py-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* Text Content */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          className="md:w-1/2 w-auto text-center md:text-left"
        >
          <motion.p
            variants={textVariant(0.3)}
            className="text-green-500 font-semibold"
          >
            MONITOR
          </motion.p>

          <motion.h2
            variants={textVariant(0.4)}
            className="text-2xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5"
          >
            Introducing Best Mobile Carousel
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-left text-gray-600 mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id
            dignissimos expedita provident esse! Repudiandae assumenda vel ut
            officiis doloribus, suscipit maxime itaque blanditiis eum expedita?
            Alias excepturi quidem dicta.
          </motion.p>

          <motion.a
            href="#"
            variants={fadeIn("up", 0.6)}
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all w-fit mx-auto md:mx-0"
          >
            Learn more about monitoring
            <IoIosArrowRoundForward className="size-8" />
          </motion.a>
        </motion.div>

        {/* Image Side */}
        <motion.div
          variants={slideIn("right", "spring", 0.4, 1)}
          className="md:w-1/2 w-auto cursor-pointer"
        >
          <img
            src={moniterCard}
            alt="Monitor Card"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MoniterSection;

