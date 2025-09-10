import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Service",
      price: "$99",
      features: [
        "Initial consultation",
        "Basic repairs",
        "1 year warranty",
        "24/7 support"
      ]
    },
    {
      title: "Standard Service",
      price: "$199",
      features: [
        "Everything in Basic",
        "Advanced repairs",
        "2 year warranty",
        "Priority support",
        "Free estimates"
      ]
    },
    {
      title: "Premium Service",
      price: "$299",
      features: [
        "Everything in Standard",
        "Full renovation",
        "5 year warranty",
        "Dedicated project manager",
        "Free maintenance"
      ]
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
          <h1 className="text-[35px] md:text-[45px] font-extrabold text-[#333333] leading-auto">Our Pricing Plans</h1>
          <motion.div
            className="border border-[#007bff] w-[130px] h-[10px] bg-[#007bff] mx-auto mt-4"
            variants={underlineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          />
          <p className="text-[18px] text-[#666] mt-4 max-w-2xl mx-auto">
            Choose the perfect plan for your home or office maintenance needs. All plans include professional service and satisfaction guarantee.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-[#007bff]"
                variants={fadeSlideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div className="bg-[#007bff] text-white text-center py-6">
                  <h3 className="text-[24px] font-bold">{plan.title}</h3>
                  <div className="text-[40px] font-extrabold mt-2">{plan.price}</div>
                  <p className="text-[14px] opacity-90">per service</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[16px]">
                        <span className="text-[#007bff] mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#007bff] text-white py-3 px-6 rounded-lg mt-6 hover:bg-[#0056b3] transition-colors duration-300 font-semibold">
                    Choose Plan
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
          <h2 className="text-[28px] font-bold text-[#333333] mb-4">Need a Custom Quote?</h2>
          <p className="text-[18px] text-[#666] mb-6">Contact us for personalized pricing based on your specific requirements.</p>
          <button className="bg-[#007bff] text-white py-3 px-8 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-semibold">
            Get Free Quote
          </button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
