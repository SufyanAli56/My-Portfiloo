import React from "react";
import { assets, serviceData } from "../assets/assets"; // Adjust the path based on where you store assets
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Introduction */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I am a passionate frontend developer from Pakistan with 1.5 years of
        hands-on experience in building responsive and dynamic web applications
        using technologies like React.js and Next.js. I have worked on various
        projects and collaborated with talented teams to create seamless user
        experiences.
      </motion.p>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-black cursor-pointer bg-white transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation for each card
          >
            <div className="flex justify-center mb-4">
              <img src={icon} className="w-14 h-14" alt={title} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <a
              href={link}
              className="flex items-center justify-center gap-2 text-blue-500 text-sm font-medium hover:underline"
            >
              Read More{" "}
              <motion.div
                className="w-4 h-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={assets.right_arrow}
                  alt="Arrow"
                  className="w-4 h-4 transition-transform transform group-hover:translate-x-2"
                />
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
