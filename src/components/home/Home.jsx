import { Link } from "react-router-dom";
import resume from '../../assets/joelresume.pdf';
import joelPhoto from '../../assets/linkedinprofile.jpg';
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  const reveal = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    }
  };
  return (
    <div className="home-container">
      {/* Background Video or Image */}

      <div className="overlay" />
      <div className="home-content">
        <motion.section
        variants={reveal}
        initial= 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.3}}
        >
          <motion.h1
          variants={reveal}
          className="home-title">Hi, I'm <span className="accent">JOEL. A</span></motion.h1>
        <motion.h1 variants={reveal} className="about-title">About Me</motion.h1>
        <motion.p variants={reveal} className="about-text">
          A passionate <strong>Full Stack Developer</strong> focused on creating elegant, efficient, and user-friendly applications.
          <br /><br />
          I specialize in JavaScript (React, Node.js), REST APIs, and cloud deployment.
          When I'm not coding, I love exploring design trends, contributing to
          open-source projects, and solving complex problems with elegant solutions.
        </motion.p>
        </motion.section>
        <motion.a
        variants={reveal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{scale: 0.95}}
          href={resume}
          download
          className="btn-primary"
        >
          Download Resume
        </motion.a>


      </div>

      <div className="about-photo">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15 }}
          src={joelPhoto} alt="My Profile" />
      </div>
    </div>
  );
}
