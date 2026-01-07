import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { HomeIcon, Contact, NotebookPen, FileUser } from 'lucide-react'
function Navbar() {

  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    const aboutSection = document.getElementById('about');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
      <div className="nav-container">
        <div className="nav-items">
          <div className="nav-link home">
            <Link to={'/'}>
              <HomeIcon />
            </Link>
          </div>

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

          <div className="nav-link contact">
            <NavLink onClick={()=> handleScroll()}>
              <Contact />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
