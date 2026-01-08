// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import axios from "axios";
import "../home/Home.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // Reset errors
    setNameError("");
    setEmailError("");

    // Validation
    if (!name.trim()) {
      setNameError("Please enter your name");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }

    if (hasError) return;

    try {
      setIsSubmitting(true);

      // 👉 SEND TO NODEMAILER BACKEND
      await axios.post(import.meta.env.VITE_API_BASE_URL, {
        name,
        email,
        message,
      });

      // Success
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};



  if (isSent) {
    return (
      <motion.div
        className="success-wrapper"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="success-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          ✓
        </motion.div>

        <h2 className="success-title">Message Sent Successfully</h2>
        <p className="success-text">
          Thank you for reaching out. Your message has been delivered to{" "}
          <strong className="joel-name">Joel. A</strong> and you’ll hear back soon.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="resend-btn"
          onClick={() => setIsSent(false)}
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <>
    <div className="contact-container" id="contact">
      <div>
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Whether you have a project idea, job opportunity, or just want to say hi — let's talk.
        </p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="name-error">{nameError}</p>}

          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="email-error">{emailError}</p>}

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="vertical-line"></div>

      {/* Social Links (unchanged) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="social-links-section"
      >
        <motion.h1
        variants={item}
        className="contact-title">Follow my profiles</motion.h1>
        <p className="contact-subtitle">
          Whether you have a project idea, job opportunity, or just want to <br /> say hi — let's talk.
        </p>
        <div className="icons-container">
          <div className="card">
            <motion.a
            variants={item}
            href="mailto:joelvijay319@gmail.com" className="socialContainer containerTwo">
              <svg className="socialSvg mailSvg" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.278-3.167a1 1 0 0 0-1.014 0L2.5 10.267V5.383l4.794 2.883L15 3.5V10.267Z" />
              </svg>
            </motion.a>

            <motion.a
            variants={item}
            href="https://github.com/a-joel" className="socialContainer containerTwo" target="_blank" rel="noopener noreferrer">
              <svg className="socialSvg githubSvg" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </motion.a>

            <motion.a
            variants={item}
            href="https://www.linkedin.com/in/joel-a-r/" className="socialContainer containerThree">
              <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </motion.a>

            <motion.a
            variants={item}
            href="https://wa.me/7418283366" className="socialContainer containerFour">
              <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
              </svg>
            </motion.a>

            <motion.a
            variants={item}
            href="https://www.instagram.com/smuggler-teritory" className="socialContainer containerFour">
  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2.25c1.7 0 1.985.01 2.685.04.65.025 1.015.14 1.335.29.365.17.64.395.945.695.3.3.53.575.695.935.155.325.27.69.295 1.34.03.7.04 1.01.04 2.755s-.01 2.045-.04 2.745c-.025.65-.14 1.015-.295 1.335a2.86 2.86 0 0 1-.695.945 2.86 2.86 0 0 1-.945.695c-.32.155-.685.27-1.335.295-.7.03-1.01.04-2.76.04s-2.045-.01-2.745-.04c-.65-.025-1.015-.14-1.335-.295a2.86 2.86 0 0 1-.945-.695 2.86 2.86 0 0 1-.695-.945c-.155-.32-.27-.685-.295-1.335C2.26 10.045 2.25 9.735 2.25 8c0-1.7.01-1.985.04-2.685.025-.65.14-1.015.295-1.335a2.86 2.86 0 0 1 .695-.945A2.86 2.86 0 0 1 4.23 2.695c.32-.155.685-.27 1.335-.295C6.265 2.26 6.575 2.25 8 2.25zm0-1.75C6.545 0.5 6.21 0.51 5.4 0.54c-.835.032-1.395.19-2.04.49A4.365 4.365 0 0 0 2.225 2.225c-.3.645-.458 1.205-.49 2.04C1.71 5.075 1.7 5.41 1.7 6.875v2.25c0 1.465.01 1.8.03 2.61.032.835.19 1.395.49 2.04.3.645.712 1.057 1.357 1.357.645.3 1.205.458 2.04.49.81.02 1.145.03 2.61.03s1.8-.01 2.61-.03c.835-.032 1.395-.19 2.04-.49.645-.3 1.057-.712 1.357-1.357.3-.645.458-1.205.49-2.04.02-.81.03-1.145.03-2.61v-2.25c0-1.465-.01-1.8-.03-2.61-.032-.835-.19-1.395-.49-2.04a4.365 4.365 0 0 0-1.357-1.357A4.365 4.365 0 0 0 10.6 0.54c-.81-.03-1.145-.04-2.6-.04zm0 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z"/>
  </svg>
</motion.a>
          </div>
        </div>
      </motion.div>
    </div>
    <div className="title-circuit">
  <motion.ul
    className="title-wrapper"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    {"MERN STACK DEVELOPER".split("").map((char, i) => (
      <motion.li
        key={i}
        variants={item}
        className="title-text"
      >
        {char === " " ? "\u00A0" : char}
      </motion.li>
    ))}
  </motion.ul>
</div>


    </>
  );
}