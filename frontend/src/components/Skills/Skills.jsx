import useScrollReveal from '../../hooks/useScrollReveal'
import './Skills.css'

function Skills() {
    const skillsRef = useScrollReveal()
  return (
    <section
        className="skills scroll-reveal"
        id="skills"
        ref={skillsRef}
    >
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I use to
            <span> bring ideas to life.</span>
          </h2>

          <p>
            I'm continuously expanding my technical skills and exploring
            new technologies through academic work, personal projects,
            and hands-on experience.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>

            <h3>Frontend Development</h3>

            <p>
              Building responsive and user-friendly interfaces with
              modern frontend technologies.
            </p>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>

            <h3>Backend Development</h3>

            <p>
              Developing reliable backend applications and APIs
              using object-oriented programming and modern frameworks.
            </p>

            <div className="skill-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>

            <h3>Programming</h3>

            <p>
              Applying programming fundamentals, object-oriented
              concepts, and problem-solving techniques.
            </p>

            <div className="skill-tags">
              <span>Java</span>
              <span>C#</span>
              <span>C</span>
              <span>PHP</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>

            <h3>UI / UX & Design</h3>

            <p>
              Combining technology and creativity to design clean,
              intuitive, and engaging user experiences.
            </p>

            <div className="skill-tags">
              <span>UI Design</span>
              <span>UX</span>
              <span>React</span>
              <span>Creative Design</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>

            <h3>Database & Tools</h3>

            <p>
              Working with databases, development environments,
              version control, and development tools.
            </p>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>

            <h3>Currently Exploring</h3>

            <p>
              Expanding my knowledge by experimenting with new
              technologies and modern software development practices.
            </p>

            <div className="skill-tags">
              <span>AI</span>
              <span>Cloud</span>
              <span>DevOps</span>
              <span>Machine Learning</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills