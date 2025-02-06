import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full px-[12%] py-16">
        {/* Introduction */}
        <motion.h2
          className="text-center text-5xl font-Ovo text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sufyan Ali <span className="text-red-600 text-5xl font-bold">.</span>
        </motion.h2>

        {/* Email Section */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lg text-gray-700">📧</span>
          <p className="text-lg text-gray-700">sufyanaliii1127@gmail.com</p>
        </motion.div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-300 mt-6"></div>

        {/* Footer Links and Socials */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            © 2025 <span className="font-semibold">Sufyan Ali</span>. All rights reserved.
          </motion.p>

          <motion.ul
            className="flex gap-6 text-sm text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <li className="hover:text-blue-500 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          </motion.ul>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 text-sm">Connect with me:</p>
            <div className="flex gap-3 text-blue-500">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sufyan-ali-145589289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaLinkedinIn size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/SufyanAli56"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
