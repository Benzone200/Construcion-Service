import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeSlideIn, staggerContainer } from "../animations/variant.js";

import bg1 from "../assets/images/carousel1.png";
import bg2 from "../assets/images/carousel2.png";
import bg3 from "../assets/images/carousel3.png";
import elec from "../assets/images/elec.png";
import plum from "../assets/images/plum.png";
import reno from "../assets/images/reno.png";

const Carousel = () => {
  const images = [bg1, bg2, bg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Text Content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-4 md:px-12 lg:px-20 text-white ml-0 md:ml-6 lg:ml-[100px]">
        
        {/* Heading */}
        <motion.h1
          variants={fadeSlideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-2xl md:text-4xl lg:text-[64px] font-bold max-w-md md:max-w-2xl lg:max-w-4xl mt-8 md:mt-16 lg:mt-[110px]"
        >
          Reliable & Building Maintenance at Your Service
        </motion.h1>

        {/* Services Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-50 pt-6 md:pt-12 lg:pt-[70px]"
        >
          {/* Electrical */}
          <motion.div variants={fadeSlideIn} className="flex space-x-3 md:space-x-4 lg:space-x-4">
            <img
              src={elec}
              className="w-[24px] h-[32px] md:w-[28px] md:h-[36px] lg:w-[30px] lg:h-[40px] mt-4 md:mt-6 lg:mt-[30px]"
              alt="elec"
            />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                Electrical
              </h2>
              <p className="text-sm md:text-base lg:text-[24px] opacity-80 w-[200px] md:w-[220px] lg:w-[240px]">
                Safe and Efficient Installations & Repairs for home & office
              </p>
            </div>
          </motion.div>

          {/* Plumbing */}
          <motion.div variants={fadeSlideIn} className="flex space-x-3 md:space-x-4 mt-6 md:mt-0">
            <img
              src={plum}
              className="w-[24px] h-[32px] md:w-[28px] md:h-[36px] lg:w-[30px] lg:h-[40px] mt-4 md:mt-6 lg:mt-[30px]"
              alt="plumbing"
            />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                Plumbing
              </h2>
              <p className="text-sm md:text-base lg:text-[24px] opacity-80 w-[170px] md:w-[200px] lg:w-[250px]">
                Reliable plumbing solutions for home & office
              </p>
            </div>
          </motion.div>

          {/* Renovation */}
          <motion.div variants={fadeSlideIn} className="flex space-x-3 md:space-x-4 mt-6 md:mt-0">
            <img
              src={reno}
              className="w-[24px] h-[32px] md:w-[28px] md:h-[36px] lg:w-[30px] lg:h-[40px] mt-4 md:mt-6 lg:mt-[30px]"
              alt="reno"
            />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                Renovation
              </h2>
              <p className="text-sm md:text-base lg:text-[24px] opacity-80 w-[150px] md:w-[180px] lg:w-[240px]">
                Transform and upgrade your spaces with ease
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;