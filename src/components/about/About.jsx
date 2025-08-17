import "./About.css";
import resume from "../../assets/joelresume.pdf";
import joelPhoto from "../../assets/linkedinprofile.jpg";
export default function About() {
  return (
    <div className="about-container" id="about">
      {/* Profile Image */}
      <div className="about-photo">
        <img src={joelPhoto} alt="My Profile" />
      </div>

      {/* Intro & Resume */}
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi, I’m <strong>Joel</strong>, a passionate Full Stack Developer
          focused on creating elegant, efficient, and user-friendly applications.
          <br /><br />
          I specialize in JavaScript (React, Node.js), REST APIs, and cloud deployment.
          When I'm not coding, I love exploring design trends, contributing to
          open-source projects, and solving complex problems with elegant solutions.
        </p>
        <a href={resume} download className="btn-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
}
