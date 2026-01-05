import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HomeIcon, Contact, NotebookPen, FileUser } from 'lucide-react'
function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-items">
          <div className="nav-link home">
            <NavLink to={'/'}>
              <HomeIcon />
            </NavLink>
          </div>

          <div className="nav-link about">
            <NavLink to="/">
              <FileUser />
                </NavLink>
          </div>

          <div className="nav-link projects">
            <NavLink to={'/projects'}>
              <NotebookPen />
            </NavLink>
          </div>

          <div className="nav-link contact">
            <NavLink to={'#contact'}>
              <Contact />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
