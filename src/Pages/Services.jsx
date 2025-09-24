import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";

import install from "../assets/images/install.png"
import repair from "../assets/images/repair.png"
import gen from "../assets/images/gen.png"
import panel from "../assets/images/panel.png"
import leak from "../assets/images/leak.png"
import pipe from "../assets/images/pipe.png"
import water from "../assets/images/water.png"
import filter from "../assets/images/filter.png"
import interior from "../assets/images/interior.png"
import full from "../assets/images/full.png"
import floor from "../assets/images/floor.png"
import roof from "../assets/images/roof.png"
import furniture from "../assets/images/furniture.png"
import support from "../assets/images/support.png"
import clean from "../assets/images/clean.png"
import control from "../assets/images/control.png"

import Footer from "../components/Footer.jsx";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.15, // stagger effect
      ease: "easeOut"
    }
  }),
  exit: (i) => ({
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.2,
      delay: (i * 0.1),
      ease: "easeIn"
    }
  })
};

const Services = () => {
  // Function to render each card with animation
  const renderCard = (i, img, title, width, text, sectionIndex = 0) => (
    <motion.div
      key={`${sectionIndex}-${i}`}
      className="bg-white shadow-md overflow-hidden mx-auto md:mx-0"
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={i}
    >
      <img
        src={img}
        alt={title}
        className="h-[140px] w-full md:w-[260px] lg:w-[300px] object-cover"
      />
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl lg:text-[22px] font-bold text-gray-800">
          {title}
        </h3>
        <div className="mb-2"></div>
        <p className="text-sm md:text-base text-gray-600 max-w-xs">
          {text}
        </p>
        <button className="mt-4 text-white text-xs md:text-sm bg-blue-500 px-3 py-2 font-medium hover:underline">
          See more &gt;
        </button>
      </div>
    </motion.div>
  );

  const sampleText =
    "We provide safe and reliable electrical installation, upgrades and maintenance for both home and offices, ensuring your power runs smoothly without interruptions.";

  return (
    <>
      <Navbar />
      <Carousel />

      {/* Electrical Services */}
      <section className="mt-10 px-4 md:px-10 lg:mx-20 ">
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-[35px] font-extrabold text-[#333333]">
            Electrical Services
          </h2>
          <div className="border border-blue-500 bg-blue-500 w-[100px] md:w-[140px] h-[5px] md:h-[7px] mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20">
          {renderCard(0, install, "Installations", "w-[40px]", sampleText, 0)}
          {renderCard(1, repair, "Repairs", "w-[60px]", sampleText, 0)}
          {renderCard(2, gen, "Generator Services", "w-[70px]", sampleText, 0)}
          {renderCard(3, panel, "Panel Upgrades", "w-[60px]", sampleText, 0)}
        </div>
      </section>

      {/* Plumbing Services */}
      <section className="mt-16 px-4 md:px-10 lg:mx-20">
        <h2 className="text-2xl md:text-3xl lg:text-[35px] font-extrabold text-[#333333] text-center md:text-left">
          Plumbing Services
        </h2>
        <div className="border border-blue-500 bg-blue-500 w-[100px] md:w-[140px] h-[5px] md:h-[7px] mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 mt-6">
          {renderCard(0, leak, "Leak Detections", "w-[60px]", sampleText, 1)}
          {renderCard(1, pipe, "Pipe Installations", "w-[60px]", sampleText, 1)}
          {renderCard(2, water, "Water Heater", "w-[60px]", sampleText, 1)}
          {renderCard(3, filter, "Water Filtration", "w-[60px]", sampleText, 1)}
        </div>
      </section>

      {/* Renovation */}
      <section className="mt-16 px-4 md:px-10 lg:mx-20">
        <h2 className="text-2xl md:text-3xl lg:text-[35px] font-extrabold text-[#333333] text-center md:text-left">
          Renovation & Remodeling
        </h2>
        <div className="border border-blue-500 bg-blue-500 w-[100px] md:w-[140px] h-[5px] md:h-[7px] mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 mt-6">
          {renderCard(0, interior, "Interior Upgrades", "w-[60px]", sampleText, 2)}
          {renderCard(1, full, "Full Renovations", "w-[60px]", sampleText, 2)}
          {renderCard(2, floor, "Flooring & Tiling", "w-[60px]", sampleText, 2)}
          {renderCard(3, roof, "Roofing & Ceilings", "w-[60px]", sampleText, 2)}
        </div>
      </section>

      {/* More Services */}
      <section className="mt-16 px-4 md:px-10 lg:mx-20">
        <h2 className="text-2xl md:text-3xl lg:text-[35px] font-extrabold text-[#333333] text-center md:text-left">
          More Services
        </h2>
        <div className="border border-blue-500 bg-blue-500 w-[100px] md:w-[140px] h-[5px] md:h-[7px] mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 lg:mb-30 mt-6">
          {renderCard(0, furniture, "Furniture Repairs", "w-[60px]", sampleText, 3)}
          {renderCard(1, support, "Customer Support", "w-[60px]", sampleText, 3)}
          {renderCard(2, clean, "Cleaning Services", "w-[60px]", sampleText, 3)}
          {renderCard(3, control, "Pest Control", "w-[60px]", sampleText, 3)}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
