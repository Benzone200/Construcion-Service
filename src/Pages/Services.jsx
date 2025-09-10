import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Electrical from "../assets/images/electrical.png";
import Plumbing from "../assets/images/plumbing.png";
import Renovation from "../assets/images/renovation.png";
import Repairs from "../assets/images/repairs.png";
import Cleaning from "../assets/images/cleaning.png";
import Carpentry from "../assets/images/carpentry.png";
import Pest from "../assets/images/pest.png";

const Services = () => {
  const services = [
    {
      title: "Electrical Services",
      img: Electrical,
      description: "Complete electrical installations, repairs, and maintenance for residential and commercial properties. Licensed electricians with years of experience.",
      features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Emergency Repairs"]
    },
    {
      title: "Plumbing Services",
      img: Plumbing,
      description: "Professional plumbing solutions including pipe repairs, fixture installations, and water system maintenance. 24/7 emergency service available.",
      features: ["Pipe Repairs", "Fixture Installation", "Drain Cleaning", "Water Heater Service"]
    },
    {
      title: "Renovation Services",
      img: Renovation,
      description: "Full renovation and remodeling services to transform your space. From kitchen makeovers to complete home renovations.",
      features: ["Kitchen Renovation", "Bathroom Remodeling", "Flooring Installation", "Interior Design"]
    },
    {
      title: "Repair Services",
      img: Repairs,
      description: "Quick and reliable repair services for all your home and office maintenance needs. Same-day service for urgent repairs.",
      features: ["Emergency Repairs", "Appliance Repair", "Door & Window Repair", "Structural Repairs"]
    },
    {
      title: "Cleaning Services",
      img: Cleaning,
      description: "Professional cleaning services for homes and offices. Deep cleaning, regular maintenance, and specialized cleaning solutions.",
      features: ["Deep Cleaning", "Regular Maintenance", "Carpet Cleaning", "Window Cleaning"]
    },
    {
      title: "Carpentry Services",
      img: Carpentry,
      description: "Custom carpentry and woodworking services. From custom furniture to structural woodwork and repairs.",
      features: ["Custom Furniture", "Cabinet Installation", "Deck Building", "Wood Repairs"]
    },
    {
      title: "Pest Control",
      img: Pest,
      description: "Effective pest control services to eliminate and prevent pest infestations. Safe and eco-friendly solutions for your property.",
      features: ["Termite Control", "Rodent Control", "Insect Control", "Prevention Services"]
    }
  ];

  return (
    <>
      <Navbar />
      <section className="py-[50px] bg-[#f5f5f5] min-h-screen">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h1 className="text-[35px] md:text-[45px] font-extrabold text-[#333333] leading-auto">Our Services</h1>
          <motion.div
            className="border border-[#007bff] w-[130px] h-[10px] bg-[#007bff] mx-auto mt-4"
            variants={underlineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          />
          <p className="text-[18px] text-[#666] mt-4 max-w-2xl mx-auto">
            Comprehensive construction and maintenance services tailored to meet all your property needs. Professional, reliable, and affordable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-[#007bff]"
                variants={fadeSlideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div className="p-6">
                  <img src={service.img} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <h3 className="text-[22px] font-bold text-[#333333] mb-3">{service.title}</h3>
                  <p className="text-[16px] text-[#666] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[14px] text-[#666]">
                        <span className="text-[#007bff] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#007bff] text-white py-2 px-4 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-[28px] font-bold text-[#333333] mb-4">Need Our Services?</h2>
          <p className="text-[18px] text-[#666] mb-6">Get a free quote for your project today. Our team is ready to help you.</p>
          <button className="bg-[#007bff] text-white py-3 px-8 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-semibold">
            Get Free Quote
          </button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
