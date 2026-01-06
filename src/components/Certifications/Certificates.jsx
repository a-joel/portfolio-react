import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, BadgeCheck } from "lucide-react";
import "./Certificates.css";

const certificationsData = [
  {
    title: "Full Stack Development(MERN)",
    issuer: "Entri Elevate",
    date: "Nov 2025",
    link: "#",
    skills: ["HTML", "CSS", "React","JavaScript", "Tailwind", "NODE", "NEXT", "EXPRESS", "MONGODB", "NODEMON", "POSTMAN", "RESTFUL APIs"],
  },
  {
    title: "Communication Skills",
    issuer: "Mind Luster",
    date: "May 2025",
    link: "#",
    skills: ["Communication", "Negotiation"],
  }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const CertificationCard = ({ cert }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      ref={ref}
      variants={card}
      className="cert-card"
      onMouseMove={move}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className="cert-spotlight"
        style={{
          opacity: show ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.06), transparent 70%)`,
        }}
      />
      <div className="cert-content">
        <div className="cert-icon">
          <Award size={18} />
        </div>

        <div>
          <h3>{cert.title}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
        </div>

        <div className="cert-skills">
          {cert.skills.map((s) => (
            <span key={s} className="cert-skill">
              {s}
            </span>
          ))}
        </div>

        <div className="cert-footer">
          <span>
            <Calendar size={14} /> {cert.date}
          </span>
          <a className="cert-link" href={cert.link}>
            Verify <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};


export default function Certificates() {
  return (
    <section className="cert-section">
      <div className="cert-container">
        <div className="cert-header">
          <BadgeCheck size={32} color="#059669" />
          <h2 className="cert-title">Licenses & Certifications</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="cert-grid"
        >
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
