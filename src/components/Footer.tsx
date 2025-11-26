import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="bg-gray-900 text-white py-8 mt-12"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BlackUI. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <FaLinkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            Contact us: <a href="mailto:support@blackui.com" className="text-white hover:text-gray-300">support@blackui.com</a>
          </p>
          <p className="text-sm text-gray-400">
            Address: 123 Main Street, Anytown, CA 12345
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
