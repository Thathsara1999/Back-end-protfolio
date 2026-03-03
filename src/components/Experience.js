import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Work Experience
      </motion.h2>

      <div className="timeline">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
