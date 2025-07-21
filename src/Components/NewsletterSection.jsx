import React from 'react';
import { IoCloudDownloadSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn } from '../ultils/motion';

const NewletterSection = () => {
  return (
    <motion.section
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm border border-white/20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-20 py-16 relative z-10 bg-gradient-to-br from-blue-600 to-blue-800">
          {/* Left Text */}
          <motion.div
            variants={slideIn('left', 'spring', 0.3, 1)}
            className="text-center lg:text-left text-white max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Subscribe to get the latest news, exclusive offers, and mouthwatering updates—delivered weekly.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            variants={slideIn('right', 'spring', 0.4, 1)}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none bg-white/80 text-gray-800 placeholder-gray-500 border-none outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-green-500 text-white font-medium rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition cursor-pointer"
            >
              <span>Download</span>
              <IoCloudDownloadSharp className="text-lg" />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewletterSection;

