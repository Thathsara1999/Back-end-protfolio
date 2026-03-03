import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import emailjs from "emailjs-com";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Initialize EmailJS with your credentials
    // You need to sign up at emailjs.com and get your credentials
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: portfolioData.name,
        },
        "YOUR_USER_ID",
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    stackoverflow: FaStackOverflow,
  };

  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">{portfolioData.contact.email}</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-text">{portfolioData.contact.phone}</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-text">
              {portfolioData.contact.location}
            </span>
          </div>

          <div className="social-links">
            {Object.entries(portfolioData.contact.social).map(
              ([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              },
            )}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="error-message">
              Failed to send message. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
