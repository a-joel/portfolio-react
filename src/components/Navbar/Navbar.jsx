import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { HomeIcon, Contact, NotebookPen, FileUser, BadgeCheck, Code } from 'lucide-react'
import joelPhoto from '../../assets/linkedinprofile.jpg';
function Navbar() {

  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    const aboutSection = document.getElementById('about');
    const mySkillsSection = document.getElementById('my-skills');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (mySkillsSection) {
      mySkillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <div className="logo-container">
        <div className="logo-section">
          <Link to={'/'}>
            <img src={joelPhoto} alt="Joel" />
          </Link>
        </div>
      </div>
      <div>
      <div className="nav-container">
        <div className="nav-items">

          <div className="nav-link about">
            <NavLink onClick={()=> handleScroll()}>
              <FileUser />
                </NavLink>
          </div>

          <div className="nav-link projects">
            <NavLink to={'/projects'}>
              <NotebookPen />
            </NavLink>
          </div>

          <div className="nav-link skills">
            <Link >
              <Code />
            </Link>
          </div>

          <div className="nav-link contact">
            <NavLink onClick={()=> handleScroll()}>
              <Contact />
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    <div className="whatsapp-logo-section">
      <div className="whatsapp-logo">
        <a href="https://wa.me/+917418283366" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
    </>
  )
}

export default Navbar
