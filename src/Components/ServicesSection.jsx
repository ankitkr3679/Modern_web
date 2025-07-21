import React from 'react';
import { motion } from 'framer-motion';
import { BiTime } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '../ultils/motion';

const services = [
  {
    icon: <BsStack className="w-6 h-6 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and for one, Muskehounds are always ready.",
    link: "#learn-more"
  },
  {
    icon: <HiLightBulb className="w-6 h-6 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more"
  },
  {
    icon: <FiSettings className="w-6 h-6 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more"
  },
  {
    icon: <BiTime className="w-6 h-6 text-cyan-500" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more"
  }
];

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Left Content */}
        <motion.div className="lg:w-1/3 text-center lg:text-left" variants={fadeIn("right", 0.2)}>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Future of support <br /> with new shape
          </h2>
          <p className=" text-left text-gray-600 text-base mb-6">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              </span>
              <span className="text-gray-700 text-sm">UX design content strategy</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              </span>
              <span className="text-gray-700 text-sm">Development bring</span>
            </li>
          </ul>
          <motion.button
            variants={fadeIn("up", 0.4)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:w-2/3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.2)}
              className="bg-gray-50 rounded-2xl p-4 sm:p-6 transition-all hover:shadow-lg hover:scale-[1.02] duration-300"
            >
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-neutral-800 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 font-medium text-xs sm:text-sm hover:text--700 transition-colors"
              >
                Learn More &rarr;
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default ServicesSection;

