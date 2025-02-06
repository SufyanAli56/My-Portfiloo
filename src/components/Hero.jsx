import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";  // Adjust this import if necessary

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "a Frontend Developer.",
        "a React Enthusiast.",
        "a Lifelong Learner.",
        "an Open Source Contributor.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative mt-10 py-12 px-6 lg:px-16 bg-white text-gray-900">
      {/* Profile Image with Motion Animation */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={assets.profile_img}
            alt="Profile Image"
            className="rounded-full w-34 lg:w-40 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Greeting Section */}
      <motion.h3
        className="flex justify-center items-center gap-2 text-xl md:text-2xl mb-4 bg-white text-gray-900 transition-colors duration-300 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.5 }}
      >
        Hi! I'm Sufyan Ali{" "}
        <motion.div
          className="w-6"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <img src={assets.hand_icon} alt="Hand Wave" />
        </motion.div>
      </motion.h3>

      {/* Title with Typed.js */}
      <motion.h1
        className="text-center text-4xl sm:text-6xl lg:text-[66px] font-bold font-Ovo text-gray-900 leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.5 }}
      >
        Frontend Web Developer <br />
      </motion.h1>
      <div className="flex justify-center items-center text-4xl font-Ovo font-extrabold text-blue-500">
        <span ref={typedRef}></span>
      </div>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I am a dedicated and enthusiastic{" "}
        <strong className="text-blue-500">Next.js</strong> and{" "}
        <strong className="text-blue-500">React.js</strong> developer with a
        passion for building high-performance, scalable web applications. My
        expertise lies in creating seamless user interfaces, optimizing
        application performance, and delivering responsive designs that provide
        exceptional user experiences. I aim to bring ideas to life through
        innovative and effective solutions.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        {/* Contact Button (Coming from the left) */}
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 rounded-full bg-blue-500 text-white text-lg font-medium flex items-center gap-2 shadow-md hover:bg-blue-600 transition"
        >
          Contact Me
          <img src={assets.right_arrow_white} alt="Arrow Icon" className="w-4" />
        </motion.a>

        {/* Resume Button (Coming from the right) */}
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={assets.resume_url}  // Assuming the resume is hosted in the `assets` folder
          download
          className="px-10 py-3 rounded-full border border-gray-300 text-gray-700 text-lg font-medium flex items-center gap-2 shadow-md hover:bg-gray-100 transition"
        >
          My Resume
          <img src={assets.download_icon} alt="Download Icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
