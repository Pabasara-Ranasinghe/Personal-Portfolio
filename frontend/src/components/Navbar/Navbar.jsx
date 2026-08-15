import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          Pabasara Ranasinghe
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
        </div>

        <div className="navbar-actions">

            <a href="#contact" className="btn btn-primary">
                Contact Me
            </a>

            <ThemeToggle />
        </div>

      </div>
    </nav>
  )
}

export default Navbar