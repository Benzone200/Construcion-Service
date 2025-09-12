import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";

import office from "../assets/images/office.png";
import bathroom from "../assets/images/bathroom.png";
import commercial from "../assets/images/commercial.png";
import drainage from "../assets/images/drainage.png";
import factory from "../assets/images/factory.png";
import furn from "../assets/images/furn.png";
import home from "../assets/images/home.png";
import kitchen from "../assets/images/kitchen.png";
import lighting from "../assets/images/lighting.png";
import remodel from "../assets/images/remodel.png";
import residential from "../assets/images/residential.png";
import wall from "../assets/images/wall.png";
import Footer from "../components/Footer.jsx";

const Projects = () => {
  const filters = ["All", "Electrical", "Plumbing", "Renovation", "Repairs"];

  const images = [
    { src: office, alt: "Office Window Installation" },
    { src: home, alt: "Home Pest Control" },
    { src: furn, alt: "Furniture Repair" },
    { src: remodel, alt: "Office Remodeling" },
    { src: kitchen, alt: "Kitchen Renovation" },
    { src: residential, alt: "Residential Electrical" },
    { src: commercial, alt: "Commercial Plumbing" },
    { src: wall, alt: "Wall Crack Fix" },
    { src: lighting, alt: "Office Lighting Installations" },
    { src: factory, alt: "Factory Power Upgrade" },
    { src: bathroom, alt: "Bathroom Remodeling" },
    { src: drainage, alt: "Drainage Fix" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <motion.div
            className="text-center mb-10"
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <motion.div
              className="border border-[#007bff] w-[80px] sm:w-[100px] md:w-[130px] h-[4px] md:h-[8px] bg-[#007bff] mx-auto"
              variants={underlineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {filters.map((filter, i) => (
              <motion.button
                key={i}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 text-black hover:bg-blue-500 hover:text-white text-sm sm:text-base"
                variants={fadeSlideIn}
                custom={i}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Images */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full h-80 sm:h-56 md:h-64  lg:w-[300px] lg:h-[70] object-cover shadow-lg hover:scale-105 transition-transform duration-300 rounded-md"
                variants={fadeSlideIn}
                custom={i}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
