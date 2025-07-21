import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosStar } from "react-icons/io";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import {
  fadeIn,
  staggerContainer,
  scale,
} from '../ultils/motion'; // Assuming motion utilities are in this file

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains...",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional...",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now...",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded...",
  },
];

const TestimonialSection = () => {
  return (
    <motion.section
      id='testimonials'
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        variants={fadeIn('up', 0.2)}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Happy Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Hear directly from those who have experienced our exceptional service and results.
        </p>
      </motion.div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <BsChevronLeft className="text-xl" />
        </button>
        <button
          className="swiper-button-next-custom absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200"
          aria-label="Next testimonial"
        >
          <BsChevronRight className="text-xl" />
        </button>

        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}
          className="testimonials-swiper px-2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="md:py-12 py-4">
              <motion.div
                variants={scale(index * 0.1)}
                className="backdrop-blur-md bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full border-4 border-white shadow"
                  />
                </div>
                <div className="flex mb-2 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IoIosStar key={i} />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
