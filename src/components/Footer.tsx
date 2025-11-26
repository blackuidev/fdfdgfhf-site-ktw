import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-6 md:px-12 lg:px-24"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div className="text-lg font-semibold hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          BlackUI Dev
        </motion.div>
        <motion.nav className="flex space-x-4 md:space-x-6 lg:space-8"
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } } }}
        >
          <motion.a href="#" className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
          <motion.a href="#" className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Services
          </motion.a>
          <motion.a href="#" className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Products
          </motion.a>
          <motion.a href="#" className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </motion.nav>
        <motion.div className="text-sm text-gray-400"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } } }}
        >
          &copy; {new Date().getFullYear()} BlackUI Dev. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
