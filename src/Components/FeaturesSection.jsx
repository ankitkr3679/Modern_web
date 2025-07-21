import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, staggerContainer, scale } from '../ultils/motion'; 

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      id="about"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      {/* heading text */}
      <motion.div variants={textVariant(0.1)} className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">
          How can we help your business?
        </h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* features box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.2)}
            className="flex flex-col text-center items-center p-6"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? '#F1EFFD' : index === 1 ? '#FEE7E7' : '#FFF3E4',
              }}
            >
              <div className="text-3xl cursor-pointer">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* motion button without blur */}
      <motion.div
        variants={scale(0.3)}
        className="text-center mt-12"
      >
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;

