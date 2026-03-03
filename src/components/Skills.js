import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const categories = [
    { title: "Languages", items: portfolioData.skills.languages },
    { title: "Frameworks", items: portfolioData.skills.frameworks },
    { title: "Databases", items: portfolioData.skills.databases },
    { title: "Tools & DevOps", items: portfolioData.skills.tools },
    { title: "Architecture", items: portfolioData.skills.architecture },
  ];

  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-items">
              {category.items.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
