import React from "react"; 
import { assets, infoList, toolsData } from "../assets/assets"; // Adjust the import path based on your file structure.
import { motion } from "framer-motion";
import Sufyan2 from '../assets/public/Sufyan-2.jpeg'
const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-white text-gray-900"
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
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Content Section */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Sufyan2}
            alt="Profile"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Text and Info Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 text-lg leading-relaxed">
            I am a passionate Frontend Developer with 1.5 years of hands-on
            experience in building responsive and dynamic web applications. I
            have honed my skills in technologies like <strong>React.js</strong>{" "}
            and <strong>Next.js</strong>, delivering user-friendly interfaces
            and optimized performance. During my journey, I have contributed to
            impactful projects, collaborated with talented teams, and
            continuously pushed myself to stay updated with the latest trends in
            web development.
          </p>

          {/* Info List */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border border-gray-300 rounded-xl p-6 shadow-sm transition-transform transform cursor-pointer hover:scale-105 hover:-translate-y-4 hover:shadow-lg duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={icon} alt={title} className="w-7 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            className="my-6 text-gray-800 font-Ovo text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="group relative flex items-center justify-center p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={tool}
                  alt={`Tool ${index + 1}`}
                  className="w-7 sm:w-10"
                />
                <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                  Tool {index + 1}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
