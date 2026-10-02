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
              I'm Pabasara Ranasinghe, a second year Software Engineering student
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

              <h3>Adaptable</h3>

              <p>
                I enjoy learning new technologies and adapting to
                 different challenges throughout my development journey.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>

              <h3>Innovative</h3>

              <p>
                I enjoy turning ideas into practical digital solutions
                 and finding creative ways to approach problems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About