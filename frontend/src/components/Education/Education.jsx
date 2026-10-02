import useScrollReveal from '../../hooks/useScrollReveal'
import './Education.css'

function Education() {
  const educationRef = useScrollReveal()

  return (
    <section
      className="education scroll-reveal"
      id="education"
      ref={educationRef}
    >
      <div className="education-container">

        <div className="education-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic journey in
            <span> software engineering.</span>
          </h2>

          <p>
            Building a strong foundation in software engineering through
            continuous learning, academic study, and practical experience.
          </p>
        </div>

        <div className="education-timeline">

          {/* Certificate */}

          <div className="education-item">

            <div className="education-date">
              <span>12/2023</span>
              <span>04/2024</span>
            </div>

            <div className="education-line">
              <span className="education-dot"></span>
            </div>

            <div className="education-card">

              <div className="education-card-top">
                <span className="education-number">01</span>
              </div>

              <h3>
                Certificate in Software Engineering
              </h3>

              <h4>
                National Institute of Business Management (NIBM)
              </h4>

              <p className="education-location">
                Colombo, Sri Lanka
              </p>

              <p className="education-description">
                Completed a foundational program in Software Engineering,
                establishing the initial knowledge and skills for further
                studies in the field.
              </p>

            </div>

          </div>


          {/* Diploma */}

          <div className="education-item">

            <div className="education-date">
              <span>07/2024</span>
              <span>07/2025</span>
            </div>

            <div className="education-line">
              <span className="education-dot"></span>
            </div>

            <div className="education-card">

              <div className="education-card-top">
                <span className="education-number">02</span>

                <span className="education-gpa">
                  GPA 3.9
                </span>
              </div>

              <h3>
                Diploma in Software Engineering
              </h3>

              <h4>
                National Institute of Business Management (NIBM)
              </h4>

              <p className="education-location">
                Colombo, Sri Lanka
              </p>

              <p className="education-description">
                Completed a Diploma in Software Engineering, building
                foundational knowledge in programming, software development,
                databases, and object-oriented programming.
              </p>

            </div>

          </div>


          {/* Higher National Diploma */}

          <div className="education-item">

            <div className="education-date">
              <span>10/2025</span>
              <span>10/2026</span>
            </div>

            <div className="education-line">
              <span className="education-dot"></span>
            </div>

            <div className="education-card">

              <div className="education-card-top">
                <span className="education-number">03</span>

                <span className="education-status">
                  Ongoing
                </span>
              </div>

              <h3>
                Higher National Diploma in Software Engineering
              </h3>

              <h4>
                National Institute of Business Management (NIBM)
              </h4>

              <p className="education-location">
                Colombo, Sri Lanka
              </p>

              <p className="education-description">
                Currently pursuing a Higher National Diploma in Software
                Engineering with a focus on developing practical software
                engineering knowledge and technical skills.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education