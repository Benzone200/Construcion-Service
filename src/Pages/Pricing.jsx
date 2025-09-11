import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeSlideIn, underlineGrow, staggerContainer } from '../animations/variant.js';
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx"
import Footer from "../components/Footer.jsx";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Simple & Transparent Pricing
            </h2>
            <div className="w-20 sm:w-28 md:w-32 h-1 bg-blue-500 mx-auto"></div>
            <div className="inline-block mt-4 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base text-gray-600">
              Choose the plan that suits your needs, or request a custom quote tailored to your project.
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16">
            {/* Call-Out Fee Card */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Call-Out Fee</h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">$50</div>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Covers initial site visit and consultation
              </p>
              <button className="w-full bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base">
                Book Now
              </button>
            </div>

            {/* Hourly Rate Card */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Hourly Rate</h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                $40<span className="text-base sm:text-lg">/hr</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Covers initial site visit and consultation
              </p>
              <button className="w-full bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base">
                Get Started
              </button>
            </div>

            {/* Service Packages Card */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Service Packages</h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                <span className="text-sm sm:text-base md:text-lg font-normal">From </span>$100
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Covers initial site visit and consultation
              </p>
              <button className="w-full bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Need Something Specific?
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3">Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Service Needed Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3">Service Needed</label>
                <div className="relative">
                  <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base appearance-none bg-white">
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="maintenance">General Maintenance</option>
                    <option value="emergency">Emergency Repairs</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8 sm:mt-12">
              <button className="bg-blue-500 text-white py-3 sm:py-4 px-8 sm:px-12 rounded-lg font-medium hover:bg-blue-600 transition-colors text-base sm:text-lg">
                Get Your Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
