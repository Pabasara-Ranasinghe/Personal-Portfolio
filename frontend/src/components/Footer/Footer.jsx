import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h3>Pabasara Ranasinghe<span>.</span></h3>
            <p>
              Software Engineering student passionate about
              building meaningful digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">

            <a
              href="mailto:rpabasara216@gmail.com"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/pabasara-ranasinghe-359523313"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/PabasaraRanasinghe216"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Pabasara Ranasinghe.
            All rights reserved.
          </p>

          <p className="footer-made">
            Built with React & Spring Boot
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer