import React from 'react';
import { IoCloudDownloadSharp } from 'react-icons/io5';

const NewletterSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm border border-white/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-20 py-16 relative z-10  bg-gradient-to-br from-blue-600 to-blue-800">
          {/* Left Text */}
          <div className="text-center lg:text-left text-white max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Subscribe to get the latest news, exclusive offers, and mouthwatering updates—delivered weekly.
            </p>
          </div>

          

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none bg-white/80 text-gray-800 placeholder-gray-500 border-none outline-none  "

            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-green-500 text-white font-medium rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition cursor-pointer"
            >
              <span>Download</span>
              <IoCloudDownloadSharp className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewletterSection;
