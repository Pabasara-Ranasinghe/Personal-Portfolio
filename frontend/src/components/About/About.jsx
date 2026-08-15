import useScrollReveal from '../../hooks/useScrollReveal'
import './About.css'

function About() {
    const aboutRef = useScrollReveal()

  return (
    <section
        className="about scroll-reveal"
        id="about"
        ref={aboutRef}
    >
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Pabasara Ranasinghe, a Software Engineering student
              who enjoys turning ideas into practical and engaging
              digital experiences.
            </p>

            <p>
              I'm interested in software development, UI/UX design,
              and creating applications that are both functional and
              enjoyable to use. I love combining technical knowledge
              with creativity when working on projects.
            </p>

            <p>
              I'm continuously learning new technologies, improving
              my problem-solving skills, and challenging myself through
              projects that help me grow as a developer.
            </p>
          </div>

          <div className="about-highlights">

            <div className="about-card">
              <span>01</span>

              <h3>Creative</h3>

              <p>
                I enjoy bringing creativity into software development
                and designing engaging user experiences.
              </p>
            </div>

            <div className="about-card">
              <span>02</span>

              <h3>Curious</h3>

              <p>
                I'm always exploring new technologies and learning
                how they can be used to solve real-world problems.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>

              <h3>Driven</h3>

              <p>
                I believe in continuous improvement and enjoy turning
                challenges into opportunities to learn.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About