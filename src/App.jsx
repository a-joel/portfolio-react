import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Home from './components/home/Home.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/ContactForm.jsx'
import Certificates from './components/Certifications/Certificates.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Navbar /> <Home /> <Projects /> <Certificates /> <Contact /></>} />
        <Route path='/projects' element={<><Navbar /> <Projects /> <Contact /></>} />
      </Routes>
    </div>
  )
}

export default App
