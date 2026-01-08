import "./Projects.css";
import eliteShopping from "../../assets/elite-shopping.png";
import netflixClone from "../../assets/netflix.png";
import eliteDashboard from "../../assets/elite-dashboard.png";
import hospitalManagement from "../../assets/heal-zone-linkedin-preview.png";
import landingPage from "../../assets/landing-page-internships.png";
import todoList from "../../assets/to-do-list.png";
import flightDeck from "../../assets/flight-deck-360.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Netflix Clone",
    desc: "A Netflix-inspired streaming app built with React & Firebase.",
    image: netflixClone,
    link: "https://silver-heliotrope-45a917.netlify.app/",
  },
  {
    title: "E-Commerce Store",
    desc: "A full-stack MERN e-commerce app with admin dashboard.",
    image: eliteShopping,
    link: "https://aesthetic-faun-cb579c.netlify.app/",
  },
  {
    title: "User Dashboard",
    desc: "Minimal, responsive, and API Integrated user dashboard",
    image: eliteDashboard,
    link: "https://neon-melomakarona-41f8cf.netlify.app/",
  },
  {
    title: "Hospital Management System",
    desc: "Minimal, responsive, and API Integrated user dashboard and admin panel",
    image: hospitalManagement,
    link: "https://healing-zone-hospitals.netlify.app/",
  },
  {
    title: "Internship Landing Page",
    desc: "Beautiful landing page for internship opportunities",
    image: landingPage,
    link: "https://creative-hamster-f62ef8.netlify.app/",
  },
  {
    title: "To Do List Application",
    desc: "Developed a to do list for getting things done without forgetting it.",
    image: todoList,
    link: "https://creative-rugelach-840757.netlify.app/",
  },
  {
    title: "Flight Ticket Application",
    desc: "Navigate and book flights, cancel anytime.",
    image: flightDeck,
    link: "https://ephemeral-crepe-ff3a11.netlify.app/home",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">My Work</h1>
      <p className="projects-subtitle">
        A collection of my best projects that showcase my passion for building modern web experiences.
      </p>

      {/* 🔥 STAGGER CONTAINER */}
      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            variants={item}
            whileHover={{ scale: 1.04 }}
          >
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
              <div className="project-overlay">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Home button stays clean */}
      <Link to="/">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="view-project-btn"
        >
          Home
        </motion.button>
      </Link>
    </div>
  );
}
