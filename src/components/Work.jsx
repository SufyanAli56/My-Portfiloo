import React from "react";
import { assets } from "../assets/assets"; // Adjust the path based on your project structure
import Img1 from "../assets/public/work-1.png";
import Img2 from "../assets/public/work-2.png";
import Img3 from "../assets/public/Coinest.png";
import Img4 from "../assets/public/work 4.png";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      image: Img1,
      name: "Uk-Paradise",
      link: "https://eclectic-alpaca-e591b4.netlify.app",
    },
    {
      image: Img2,
      name: "Dominae",
      link: "https://idyllic-rolypoly-b65aee.netlify.app",
    },
    {
      image: Img3,
      name: "Dashboard",
      link: "https://bespoke-croissant-01be71.netlify.app/",
    },
    {
      image: Img4,
      name: "Lms",
      link: "https://magenta-nasturtium-ea82f5.netlify.app/",
    },
  ];

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Latest Work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:bg-blue-50 hover:shadow-xl hover:translate-y-2 cursor-pointer relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation for each card
          >
            {/* Image */}
            <div className="w-full aspect-w-1 aspect-h-1 relative">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="object-cover w-full h-full"
              />
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center mt-24 items-center">
                <motion.h3
                  className="text-lg font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.name}
                </motion.h3>
              </div>
            </div>

            {/* Button on White Background */}
            <div className="bg-white p-4 text-center">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View Project
                <img
                  src={assets.right_arrow}
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center mt-10">
        <motion.button
          className="p-4 px-8 rounded-full border border-gray-300 bg-white text-gray-800 font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="#"
            className="flex items-center gap-2"
          >
            Show More
            <motion.div
              className="w-5 h-5"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={assets.right_arrow_bold}
                alt="Arrow"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.div>
          </a>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Work;
