import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologies from "./data/technologies.json";

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Dev Stack home">
      <span className="brand-mark">DS</span>
      <span>Dev <b>Stack</b></span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <Brand />

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a className="active" href="#home" onClick={close}>Home</a>
          <a href="#technologies" onClick={close}>Technologies</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="auth-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#technologies">Explore Technologies</a>
          <a className="secondary-btn" href="#about">Learn More</a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="cube cube-top">AI</div>
        <div className="cube cube-mid"><i></i><i></i><i></i></div>
        <div className="cube cube-bottom"></div>
        <div className="glow"></div>
      </div>
    </section>
  );
}

function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <div className="tech-icon-wrap">
          <img src={tech.icon} alt="" className="tech-icon" />
        </div>
        {tech.badge && <span className="badge">{tech.badge}</span>}
      </div>

      <h3>{tech.name}</h3>
      <p className="description">{tech.description}</p>

      <div className="meta">
        <span className="chip">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="rating">★ {tech.rating}</span>
      </div>

      <button
        className={`add-btn ${selected ? "added" : ""}`}
        disabled={selected}
        onClick={() => onAdd(tech)}
      >
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div className="stack-heading">
        <h2>Your Stack</h2>
        <p>{stack.length} Technology{stack.length === 1 ? "" : "ies"} Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <strong>Your stack is empty</strong>
          <span>Add technologies to start building your stack.</span>
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>
              <button onClick={() => onRemove(item)} aria-label={`Remove ${item.name}`}>×</button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
      )}
    </aside>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4>PRODUCT</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>
        <div id="about">
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Careers</a>
        </div>
        <div>
          <h4>LEGAL</h4>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    // The assignment requires loading technology data from a JSON file.
    const timer = setTimeout(() => {
      setTechs(technologies);
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (tech) => {
    setStack((current) => current.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="technologies container">
          <div className="section-title">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <span>Loading technologies...</span>
            </div>
          ) : (
            <div className="builder-layout">
              <div className="tech-grid">
                {techs.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    selected={stack.some((item) => item.id === tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
              <StackPanel
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>
        

        <section id="projects" className="projects container">
          <div className="mini-project">
            <span>PROJECT BUILDER</span>
            <h2>Choose a stack that works for you.</h2>
            <p>Compare technologies by category, difficulty, and rating, then keep your selected tools together in one place.</p>
            <a href="#technologies" className="primary-btn">Build Your Stack</a>
          </div>
        </section>
      </main>
      <Footer />

    </>
  );
}