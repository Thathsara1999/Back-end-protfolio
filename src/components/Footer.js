import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          &copy; {currentYear} Backend Engineer Portfolio. All rights reserved.
        </p>
        <p>Designed & Built with ❤️ using React</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
