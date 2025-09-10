import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Electrical from "../assets/images/electrical.png";
import Plumbing from "../assets/images/plumbing.png";
import Renovation from "../assets/images/renovation.png";
import Repairs from "../assets/images/repairs.png";

const Projects = () => {
  const projects = [
    {
      title: "Complete Home Renovation",
      category: "Renovation",
      description: "Full kitchen and bathroom renovation with modern fixtures and finishes.",
      image: Renovation,
      status: "Completed"
    },
    {
      title: "Electrical System Upgrade",
      category: "Electrical",
      description: "Complete electrical panel upgrade and wiring modernization for safety compliance.",
      image: Electrical,
      status: "Completed"
    },
    {
      title: "Plumbing Installation",
      category: "Plumbing",
      description: "New plumbing system installation for residential property with water-saving fixtures.",
      image: Plumbing,
      status: "In Progress"
    },
    {
      title: "Emergency Repairs",
      category: "Repairs",
      description: "24/7 emergency repair service for burst pipes and electrical faults.",
      image: Repairs,
      status: "Completed"
    },
    {
      title: "Office Building Maintenance",
      category: "Maintenance",
      description: "Ongoing maintenance contract for commercial office building systems.",
      image: Renovation,
      status: "Ongoing"
    },
    {
      title: "Smart Home Integration",
      category: "Electrical",
      description: "Installation of smart home automation systems and energy-efficient lighting.",
      image: Electrical,
      status: "Completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Ongoing':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

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
          <h1 className="text-[35px] md:text-[45px] font-extrabold text-[#333333] leading-auto">Our Projects</h1>
          <motion.div
            className="border border-[#007bff] w-[130px] h-[10px] bg-[#007bff] mx-auto mt-4"
            variants={underlineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          />
          <p className="text-[18px] text-[#666] mt-4 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in construction and maintenance services.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                variants={fadeSlideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#007bff] text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-[20px] font-bold text-[#333333] mb-3">{project.title}</h3>
                  <p className="text-[16px] text-[#666] mb-4">{project.description}</p>
                  <button className="text-[#007bff] font-semibold hover:text-[#0056b3] transition-colors duration-300">
                    View Details →
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
          <h2 className="text-[28px] font-bold text-[#333333] mb-4">Ready to Start Your Project?</h2>
          <p className="text-[18px] text-[#666] mb-6">Let's discuss your requirements and create something amazing together.</p>
          <button className="bg-[#007bff] text-white py-3 px-8 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-semibold">
            Get Started
          </button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
