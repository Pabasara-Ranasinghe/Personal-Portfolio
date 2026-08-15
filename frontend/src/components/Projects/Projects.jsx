import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.css'

function Projects() {
    const projectsRef = useScrollReveal()
  return (
    <section
        className="projects scroll-reveal"
        id="projects"
        ref={projectsRef}
    >
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Things I've
            <span> built & explored.</span>
          </h2>

          <p>
            A selection of academic, personal, and research projects
            that reflect my interests in software development, AI,
            mobile applications, IoT, and emerging technologies.
          </p>
        </div>

        <div className="projects-grid">

          {/* =========================
              PROJECT 01
          ========================= */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">01</span>

              <span className="project-type">
                AI • Full Stack
              </span>
            </div>

            <div className="project-content">

              <h3>Emergency Blood Network</h3>

              <p>
                An AI-powered emergency blood donation management
                platform designed to connect blood donors, hospitals,
                and blood banks during critical situations.
              </p>

              <p>
                Implemented donor eligibility prediction using Machine
                Learning and developed secure RESTful APIs with JWT
                authentication. The application was containerized with
                Docker and deployed on AWS EC2 with automated CI/CD
                using GitHub Actions.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Python</span>
                <span>Flask</span>
                <span>Scikit-learn</span>
                <span>Docker</span>
                <span>AWS EC2</span>
                <span>GitHub Actions</span>
              </div>

            </div>

            <div className="project-footer">

              <span className="project-status">
                Completed
              </span>

              <a
                href="#"
                className="project-link"
              >
                View Project
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* =========================
              PROJECT 02
          ========================= */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>

              <span className="project-type">
                Android • Algorithms
              </span>
            </div>

            <div className="project-content">

              <h3>Emergency Blood Matching Tool</h3>

              <p>
                An Android application developed as the second phase
                of an Emergency Blood Matching Tool, transforming a
                Java console application into a mobile solution.
              </p>

              <p>
                Implemented role-based access for hospitals, blood
                donors, blood banks, and administrators, together with
                modules for emergency requests, donor availability,
                blood bank inventory, and notification workflows.
              </p>

              <p>
                Applied Graph data structures and Dijkstra's Shortest
                Path Algorithm to identify the nearest compatible blood
                donor and reduce emergency response time.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Android Studio</span>
                <span>Data Structures</span>
                <span>Algorithms</span>
                <span>Graph</span>
                <span>Dijkstra</span>
              </div>

            </div>

            <div className="project-footer">

              <span className="project-status">
                Completed
              </span>

              <a
                href="#"
                className="project-link"
              >
                View Project
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* =========================
              PROJECT 03
          ========================= */}

          <article className="project-card project-research">

            <div className="project-top">
              <span className="project-number">03</span>

              <span className="project-type">
                Ongoing Research
              </span>
            </div>

            <div className="project-content">

              <h3>MilkGuard Ecosystem</h3>

              <p>
                An IoT-based milk quality monitoring ecosystem focused
                on detecting potential milk spoilage through real-time
                sensor monitoring and cloud-based data processing.
              </p>

              <p>
                The system integrates sensor data with Firebase cloud
                services, includes RFID-based milk collector
                identification, and provides a real-time dashboard for
                monitoring milk quality.
              </p>

              <div className="project-tech">
                <span>ESP-32</span>
                <span>Arduino IDE</span>
                <span>C++</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>IoT</span>
                <span>RFID</span>
              </div>

            </div>

            <div className="project-footer">

              <span className="project-status project-status-research">
                Research in Progress
              </span>

              <a
                href="#"
                className="project-link"
              >
                Explore
                <span>↗</span>
              </a>

            </div>

          </article>


          {/* =========================
              PROJECT 04
          ========================= */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">04</span>

              <span className="project-type">
                Web Development
              </span>
            </div>

            <div className="project-content">

              <h3>Medora</h3>

              <p>
                A modern health guidance application designed to help
                users understand their symptoms and receive accessible
                health-related guidance through an intuitive interface.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>REST API</span>
              </div>

            </div>

            <div className="project-footer">

              <span className="project-status">
                In Development
              </span>

              <a
                href="#"
                className="project-link"
              >
                View Project
                <span>↗</span>
              </a>

            </div>

          </article>

        </div>

      </div>
    </section>
  )
}

export default Projects