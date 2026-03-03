import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          {portfolioData.name}
        </motion.h1>
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          {portfolioData.title}
        </motion.h2>
        <motion.p className="hero-tagline" variants={itemVariants}>
          {portfolioData.tagline}
        </motion.p>
        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-background"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default Hero;
