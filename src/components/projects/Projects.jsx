import "./Projects.css";
import eliteShopping from "../../assets/elite-shopping.png";
import netflixClone from "../../assets/netflix.png";
import eliteDashboard from "../../assets/elite-dashboard.png";
const projects = [
  {
    title: "Netflix Clone",
    desc: "A Netflix-inspired streaming app built with React & Firebase.",
    image: netflixClone,
    link: "https://a-joel.github.io/netflix-clone/",
  },
  {
    title: "E-Commerce Store",
    desc: "A full-stack MERN e-commerce app with admin dashboard.",
    image: eliteShopping,
    link: "https://a-joel.github.io/elite-shopping/",
  },
  {
    title: "User Dashboard",
    desc: "Minimal, responsive, and API Integrated user dashboard",
    image: eliteDashboard,
    link: "https://a-joel.github.io/elite-shopping-dashboard/",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Work</h1>
      <p className="projects-subtitle">
        A collection of my best projects that showcase my passion for building modern web experiences.
      </p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
              <div className="project-overlay">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
