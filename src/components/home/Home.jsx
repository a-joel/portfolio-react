import { Link } from "react-router-dom";
import resume from '../../assets/joelresume.pdf';
import joelPhoto from '../../assets/linkedinprofile.jpg';
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Background Video or Image */}

      <div className="overlay" />
      <div className="home-content">
        <h1 className="home-title">Hi, I'm <span className="accent">JOEL. A</span></h1>
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          A passionate <strong>Full Stack Developer</strong> focused on creating elegant, efficient, and user-friendly applications.
          <br /><br />
          I specialize in JavaScript (React, Node.js), REST APIs, and cloud deployment.
          When I'm not coding, I love exploring design trends, contributing to
          open-source projects, and solving complex problems with elegant solutions.
        </p>
        <a href={resume} download className="btn-primary">
          Download Resume
        </a>
      </div>
      <div className="about-photo">
        <img src={joelPhoto} alt="My Profile" />
      </div>
    </div>
  );
}
