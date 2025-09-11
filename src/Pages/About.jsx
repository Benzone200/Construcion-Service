import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeUp, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx"
import Carousel from "../components/Carousel.jsx";
import James from "../assets/images/James.png"
import Sophia from "../assets/images/Sophia.png"
import Michael from "../assets/images/Michael.png"
import Mason from "../assets/images/Mason.png"
import Jemmy from "../assets/images/Jemmy.png"
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <Carousel />

      <section className="flex flex-col py-8 sm:py-10 md:py-12 lg:py-[50px]">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">

          {/* Our Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 
              variants={fadeDown} 
              className="text-2xl sm:text-3xl md:text-[30px] lg:text-[35px] font-extrabold text-[#333333] leading-snug"
            >
              Our Story
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-[#000000] text-sm sm:text-base md:text-[14px] lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ullamcorper nisl, 
              et aliquam lorem condimentum sit amet. Fusce egestas nunc vel ipsum lacinia euismod. 
              Nullam et purus mattis, vestibulum urna et, venenatis libero. Integer interdum lectus
              vitae sapien volutpat, condimentum ultrices nisi elementum. 
              In porttitor turpis lectus, a dictum nisi interdum et. 
              Curabitur convallis euismod quam eu ultricies. 
              Nulla tincidunt interdum nisi ac posuere.
              Phasellus eget mattis libero, quis facilisis urna. 
              Nam blandit ut turpis at lobortis. 
              Morbi nec ante pellentesque, efficitur lectus eu, tincidunt odio.
            </motion.p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <motion.h2 
              variants={fadeDown} 
              className="text-2xl sm:text-3xl md:text-[30px] lg:text-[35px] font-extrabold text-[#333333] leading-snug"
            >
              Core Values
            </motion.h2>
            <motion.div 
              variants={underlineGrow} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false }} 
              className="border solid border-blue-500 bg-blue-500 w-[80px] sm:w-[100px] lg:w-[110px] h-[4px] lg:h-[6px] mt-2" 
            />

            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap md:flex-row gap-6 md:gap-12 lg:space-x-30 py-6 md:py-10 lg:py-15 px-4 md:px-8 lg:px-12">
              {[
                { title: "Certified Technicians", text: "Fusce justo est, iaculis id suscipit consequat, rutrum non augue. Donec ultrices risus in tempus iaculis. Fusce placerat aliquam justo, sed pellentesque turpis vulputate sit amet. Phasellus rhoncus libero nec sapien." },
                { title: "24/7 Support", text: "Fusce justo est, iaculis id suscipit consequat, rutrum non augue. Donec ultrices risus in tempus iaculis. Fusce placerat aliquam justo, sed pellentesque turpis vulputate sit amet. Phasellus rhoncus libero nec sapien." },
                { title: "Affordable Pricing", text: "Fusce justo est, iaculis id suscipit consequat, rutrum non augue. Donec ultrices risus in tempus iaculis. Fusce placerat aliquam justo, sed pellentesque turpis vulputate sit amet. Phasellus rhoncus libero nec sapien." },
                { title: "Fast Response", text: "Fusce justo est, iaculis id suscipit consequat, rutrum non augue. Donec ultrices risus in tempus iaculis. Fusce placerat aliquam justo, sed pellentesque turpis vulputate sit amet. Phasellus rhoncus libero nec sapien." }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUp} className="max-w-[250px]">
                  <h3 className="text-sm sm:text-base md:text-[14px] lg:text-[15px] font-bold leading-snug">{item.title}</h3>
                  <motion.div 
                    variants={underlineGrow} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: false }} 
                    className="border solid border-blue-500 bg-blue-500 w-[40px] sm:w-[50px] lg:w-[55px] h-[3px] lg:h-[4px] mt-2" 
                  />
                  <p className="mt-2 text-[#000000] text-xs sm:text-sm md:text-[13px] lg:text-[13px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-10"
          >
            <motion.h2 
              variants={fadeDown} 
              className="text-2xl sm:text-3xl md:text-[30px] lg:text-[35px] font-extrabold text-[#333333] leading-snug text-center"
            >
              Meet our Team
            </motion.h2>
            <motion.div 
              variants={underlineGrow} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false }} 
              className="border solid border-blue-500 bg-blue-500 w-[80px] sm:w-[100px] lg:w-[110px] h-[4px] lg:h-[6px] mt-2 mx-auto" 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-8 md:gap-y-10 mt-6 sm:mt-8 md:mt-10 place-items-center">
              {[James, Sophia, Michael, Mason, Jemmy].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  variants={fadeUp}
                  className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] hover:scale-110 shadow-md"
                />
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-12 sm:mt-14 md:mt-16"
          >
            <motion.h2 
              variants={fadeDown} 
              className="text-2xl sm:text-3xl md:text-[30px] lg:text-[35px] font-extrabold text-[#333333] leading-snug"
            >
              Contact Us
            </motion.h2>
            <motion.div 
              variants={underlineGrow} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false }} 
              className="border solid border-blue-500 bg-blue-500 w-[80px] sm:w-[100px] lg:w-[110px] h-[4px] lg:h-[6px] mt-2" 
            />

            <motion.form
              variants={fadeUp}
              className="w-full max-w-full sm:max-w-[90%] md:max-w-[800px] lg:max-w-[1000px] p-4 sm:p-5 space-y-6 sm:space-y-8 md:space-y-10 ml-0 sm:ml-4 md:ml-8 lg:ml-[50px] mt-4 sm:mt-6 md:mt-[20px]"
            >
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number <span className="italic text-gray-500">(Required)</span></label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email <span className="italic text-gray-500">(Required)</span></label>
                  <input type="email" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
              </div>

              {/* Address Line 1 */}
              <div>
                <label className="block text-sm font-medium mb-1">Address Line 1</label>
                <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
              </div>

              {/* Address Line 2 */}
              <div>
                <label className="block text-sm font-medium mb-1">Address Line 2</label>
                <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
              </div>

              {/* City and Post Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Post Code</label>
                  <input type="text" className="w-full border rounded px-3 py-2 text-sm border-gray-400" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">Message <span className="italic text-gray-500">(Required)</span></label>
                <textarea rows="5" maxLength={600} className="w-full border rounded px-3 py-2 text-sm border-gray-400"></textarea>
                <p className="text-xs text-gray-500 mt-1">0 of 600 max characters</p>
              </div>

              {/* Image Upload Section */}
              <div>
                <label className="block text-sm font-medium mb-2">Add any relevant images</label>
                <div className="border border-dashed border-gray-400 bg-gray-100 rounded-md p-6 sm:p-8 text-center text-gray-700 text-sm cursor-pointer">
                  <p>Drop files here or</p>
                  <p className="underline">Select files</p>
                  <input type="file" multiple className="hidden" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Max size: 50MB</p>
              </div>

              {/* Submit */}
              <div className="mt-4 sm:mt-5 md:mt-6">
                <button type="submit" className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
