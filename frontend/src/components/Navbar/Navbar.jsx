import { useState } from 'react'
import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Pabasara Ranasinghe
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <a
            href="#contact"
            className="btn btn-primary"
          >
            Contact Me
          </a>

          <ThemeToggle />

        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions">

          <ThemeToggle />

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a
          href="#contact"
          className="mobile-contact"
          onClick={closeMenu}
        >
          Contact
        </a>

      </div>

    </nav>
  )
}

export default Navbar