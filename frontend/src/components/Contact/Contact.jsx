import useScrollReveal from '../../hooks/useScrollReveal'
import { BsGithub } from "react-icons/bs";
import { MdEmail } from 'react-icons/md'
import './Contact.css'

function Contact() {
  const contactRef = useScrollReveal()

  return (
    <section
      className="contact scroll-reveal"
      id="contact"
      ref={contactRef}
    >
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's create something
            <span> meaningful together.</span>
          </h2>

          <p>
            Have a project idea, collaboration opportunity, or simply
            want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            {/* Email */}
            <div className="contact-item">
              <span className="contact-icon">
                <MdEmail />
              </span>

              <div>
                <span>Email</span>
                <a href="mailto:rpabasara216@gmail.com">
                  rpabasara216@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <span className="contact-icon">in</span>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/pabasara-ranasinghe-359523313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <span className="contact-icon">
                <BsGithub />
              </span>

              <div>
                <span>GitHub</span>
                <a
                  href="https://github.com/Pabasara-Ranasinghe"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my repositories
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact