import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';

import Carousel from "../components/Carousel.jsx";
import Electrical from "../assets/images/electrical.png";
import Plumbing from "../assets/images/plumbing.png";
import Renovation from "../assets/images/renovation.png";
import Repairs from "../assets/images/repairs.png";
import Cleaning from "../assets/images/cleaning.png";
import Carpentry from "../assets/images/carpentry.png";
import Pest from "../assets/images/pest.png";
import Stars from "../assets/images/stars.png";
import Google from "../assets/images/google.png";
import Edinburgh from "../assets/images/edinburgh.png";
import Trustpilot from "../assets/images/trustpilot.png";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const services = [
    { title: "Electrical", img: Electrical },
    { title: "Plumbing", img: Plumbing },
    { title: "Renovation", img: Renovation },
    { title: "Repairs", img: Repairs },
    { title: "Cleaning", img: Cleaning },
    { title: "Carpentry", img: Carpentry },
    { title: "Pest Control", img: Pest },
  ];

  const reviews = [
    { img: Google, reviews: 300 },
    { img: Edinburgh, reviews: 532 },
    { img: Trustpilot, reviews: 10 },
  ];

  return (
    <>
      <Carousel />

      <section className="py-[50px] bg-[#f5f5f5]">
        {/* Section Heading */}
        <motion.div
          className="lg:ml-[190px] ml-22 md:ml-80"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-[35px] font-extrabold text-[#333333] leading-auto">Our Services</h2>
          <motion.div
            className="border border-[#007bff] w-[130px] h-[10px] bg-[#007bff]"
            variants={underlineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          />
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="max-w-6xl py-10 mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1xl xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow hover:shadow-lg hover:scale-105 transition h-[390px] border border-[#007bff]"
                variants={fadeSlideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <img src={service.img} alt={service.title} className="w-full h-30 object-cover" />
                <div className="pl-3">
                  <h3 className="mt-4 text-[23px] font-bold">{service.title}</h3>
                  <div className="border border-[#007bff] w-[70px] h-[5px] bg-[#007bff]"></div>
                  <p className="w-[220px] mt-2 text-[#000000] text-[15px]">
                    We provide safe and reliable installation, repairs and maintenance for both homes and offices.
                  </p>
                </div>
                <div className="mt-[30px] ml-[12px] bg-[#007bff] w-[120px] h-[40px] px-[18px] py-[8px]">
                  <a href="#" className="text-white">See More &gt;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Reviews Section */}
        <motion.div
          className="flex flex-col justify-center items-center mt-[80px]"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] leading-auto text-[#333333] font-extrabold text-center">
            What our customers think
          </h1>
          <motion.div
            className="border border-[#007bff] w-[100px] md:w-[150px] lg:w-[250px] h-[3px] lg:h-[5px] bg-[#007bff] mx-auto mt-2"
            variants={underlineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-[30px] md:mt-[50px] lg:mt-[100px] md:space-x-8 lg:space-x-[100px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center mt-8 md:mt-0"
              variants={fadeSlideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <img src={Stars} alt="Rating" />
              <h2 className="text-[20px] pt-[20px] md:text-[22px] lg:text-[25px] font-bold leading-[10px] lg:pt-[30px]">
                {item.reviews} Reviews
              </h2>
              <img src={item.img} alt="Platform" className="mt-10 lg:w-[147px] lg:h-[83px] lg:mt-[10px]" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Home;