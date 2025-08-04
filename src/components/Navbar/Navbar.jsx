import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import './Navbar.css';
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        <p className="name">Joel</p>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        <Menu size={24} />
      </button>

      {/* Mobile Links */}
      {open && (
        <div style={{
          position: "absolute", top: "4rem", left: 0, width: "100%",
          background: "var(--nav-bg)", display: "flex", flexDirection: "column", alignItems: "center",
          gap: "1rem", padding: "1rem 0"
        }}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
