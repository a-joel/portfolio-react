import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Background Video or Image */}
      <video
        className="home-bg"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/netflix-preview.mp4"
      />
      <div className="overlay" />

      {/* Intro Section */}
      <div className="home-content">
        <h1 className="home-title">Hi, I'm <span className="accent">JOEL. A</span></h1>
        <p className="home-subtitle">
          A passionate <strong>Full Stack Developer</strong> who loves creating
          beautiful and efficient web experiences.
        </p>
        <Link to="/projects" className="btn-primary">
          Netflix clone
        </Link>
      </div>
    </div>
  );
}
