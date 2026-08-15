import useScrollReveal from '../../hooks/useScrollReveal'
import './Achievements.css'

function Achievements() {
  const achievementsRef = useScrollReveal()

  return (
    <section
      className="achievements scroll-reveal"
      id="achievements"
      ref={achievementsRef}
    >
      <div className="achievements-container">

        <div className="achievements-heading">
          <p className="section-label">ACHIEVEMENTS</p>

          <h2>
            Milestones that shaped
            <span> my journey.</span>
          </h2>

          <p>
            A few milestones and experiences that reflect my growth,
            creativity, and involvement beyond academic work.
          </p>
        </div>

        <div className="achievements-grid">

          <div className="achievement-card">
            <div className="achievement-top">
              <span className="achievement-number">01</span>
              <span className="achievement-icon">🥇</span>
            </div>

            <div className="achievement-content">
              <h3>1st Place</h3>

              <h4>Pixel Peak</h4>

              <p className="achievement-category">
                Multimedia Competition
              </p>

              <p>
                Secured 1st place in a multimedia competition after
                completing a three-day bootcamp focused on design,
                creativity, and practical multimedia skills.
              </p>
            </div>

            <div className="achievement-status completed">
              Completed
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-top">
              <span className="achievement-number">02</span>
              <span className="achievement-icon">🎤</span>
            </div>

            <div className="achievement-content">
              <h3>Event Vice Chair</h3>

              <h4>RootX Workshop</h4>

              <p className="achievement-category">
                IEEE Student Branch of NIBM
              </p>

              <p>
                Currently serving as Event Vice Chair for RootX Workshop,
                contributing to the planning and coordination of a
                technical Linux-focused event.
              </p>
            </div>

            <div className="achievement-status ongoing">
              Ongoing
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Achievements