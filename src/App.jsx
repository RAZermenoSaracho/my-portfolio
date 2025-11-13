import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setMenuOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <span className="logo-mark">{'{RZ}'}</span>
            <span className="logo-text">Ricardo Zermeño</span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="mobile-menu">
          <button onClick={() => handleNavClick('#about')}>About</button>
          <button onClick={() => handleNavClick('#experience')}>Experience</button>
          <button onClick={() => handleNavClick('#projects')}>Portfolio</button>
          <button onClick={() => handleNavClick('#contact')}>Contact</button>
        </nav>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">Civil Engineer · Software Engineer</p>
          <h1>
            I build solutions in <span className="highlight">data</span> and{' '}
            <span className="highlight">web development</span>.
          </h1>
          <p className="hero-subtitle">
            I specialize in data analysis, automation with Python, and web application
            development. I’m seeking remote opportunities (+50k USD) where I can deliver
            measurable value through technical problem-solving.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Portfolio
            </a>
            <a className="btn secondary" href="#experience">
              View Resume
            </a>
            {/* We'll connect this to a real CV PDF later */}
            <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>
              Download CV (coming soon)
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm Ricardo Zermeño, a software engineer with a background in civil engineering.
          I specialize in building technical solutions across data, automation, and web
          development. I have hands-on experience delivering real-world projects using
          Python, SQL, Odoo, and modern web technologies.
        </p>
        <p>
          I’m especially interested in the intersection of <strong>data</strong> and{' '}
          <strong>web development</strong>: building tools that automate workflows, generate
          meaningful insights, and help businesses make better decisions.
        </p>
      </section>

      {/* EXPERIENCE / EDUCATION */}
      <section id="experience" className="section">
        <h2>Experience & Education</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Civil Engineer</h3>
            <p className="card-subtitle">Vive RAMZSA SA DE CV</p>
            <p className="card-meta">Project management · AutoCAD · Revit · Budgeting</p>
            <p>
              Led and coordinated construction projects, managing cross-functional teams,
              cost control, technical documentation, and client communication.
            </p>
          </div>

          <div className="card">
            <h3>Functional and Technical Support Analyst (Odoo)</h3>
            <p className="card-subtitle">Odoo</p>
            <p className="card-meta">Python · Odoo Framework · Business Process Automation</p>
            <p>
              Supported clients during Odoo implementations by aligning business requirements
              with the system, solving issues, and improving communication between users
              and developers.
            </p>
            <p>
              Built and customized Odoo modules, automated business workflows, and
              implemented system integrations. Collaborated directly with clients to
              analyze requirements, design solutions, and ensure smooth deployment
              across operational areas.
            </p>
          </div>

          <div className="card">
            <h3>Bachelor of Software Engineering</h3>
            <p className="card-subtitle">Hybridge University</p>
            <p className="card-meta">In progress</p>
            <p>
              Studying algorithms, data structures, system design, and web development.
              Complementing my studies with personal projects and daily practice.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Portfolio</h2>
        <p className="section-intro">
          Here you can find my projects in <strong>Data</strong> and{' '}
          <strong>Web Development</strong>. Some of them are currently in progress — I will
          continue adding descriptions, code, and live demos.
        </p>

        <div className="filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Data</button>
          <button className="filter-btn">Web Dev</button>
        </div>

        <div className="cards-grid">
          {/* Data Project */}
          <div className="card">
            <div className="badge">Data</div>
            <h3>Data Analysis Project (Example)</h3>
            <p className="card-meta">Python · Pandas · SQL</p>
            <p>
              Exploratory data analysis and automated reporting using Python and SQL.
              (We will later define real datasets and objectives.)
            </p>
            <div className="card-links">
              <a href="#" onClick={(e) => e.preventDefault()}>
                View on GitHub (coming soon)
              </a>
            </div>
          </div>

          {/* Web Dev Project */}
          <div className="card">
            <div className="badge badge-alt">Web Dev</div>
            <h3>Web App for Process Management (Example)</h3>
            <p className="card-meta">React · REST API</p>
            <p>
              A single-page application designed to manage operations efficiently with
              a modern, clean interface. Ideal for demonstrating frontend skills.
            </p>
            <div className="card-links">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Live Demo (coming soon)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out if you're hiring for a remote role, looking to collaborate,
          or want more details about my experience.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:ricardozs_96@hotmail.com">ricardozs_96@hotmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/ricardo-zermeno/" target="_blank" rel="noreferrer">
              linkedin.com/in/ricardo-zermeno/
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/RAZermenoSaracho" target="_blank" rel="noreferrer">
              github.com/RAZermenoSaracho
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ricardo Zermeño · Built with data & code.</p>
      </footer>
    </div>
  );
}

export default App;
