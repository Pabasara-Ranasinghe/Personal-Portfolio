import './Hero.css'
import profileImage from '../../assets/images/profile2.jpeg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>Pabasara Ranasinghe</h1>

          <h2>Software Engineering Undergraduate</h2>

          <p className="hero-description">
            I enjoy building modern, user-friendly and meaningful digital
            experiences using technology and creativity.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">

            <div className="hero-card-circle">
              <img
                src={profileImage}
                alt="Pabasara Ranasinghe"
                className="profile-image"
              />
            </div>

            <div className="hero-card-content">
              <span>SOFTWARE ENGINEERING</span>
              <strong>UNDERGRADUATE</strong>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero