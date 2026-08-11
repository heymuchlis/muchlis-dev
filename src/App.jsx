import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Sparkles,
  X,
  Zap
} from "lucide-react";

const projects = [
  {
    title: "Muchlis.dev",
    type: "Personal Portfolio",
    description:
      "A personal digital home for projects, experiments, and things I'm building on the web.",
    tags: ["React", "Vite", "Cloudflare"],
    href: "https://github.com/heymuchlis/muchlis-dev"
  },
  {
    title: "XAU Signal Platform",
    type: "Trading Web Concept",
    description:
      "A professional signal dashboard concept with Telegram notifications and room for live market tooling.",
    tags: ["Dashboard", "Telegram", "Firebase"],
    href: "#"
  },
  {
    title: "Digital Playground",
    type: "Experiments",
    description:
      "Small ideas, prototypes, and useful web experiments built while learning and shipping.",
    tags: ["Web", "UI", "Experiments"],
    href: "#"
  }
];

const skills = [
  "React",
  "Vite",
  "JavaScript",
  "Firebase",
  "Cloudflare",
  "GitHub",
  "REST API",
  "Telegram"
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark">M</span>
            <span>muchlis<span className="brand-dot">.dev</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a
              className="nav-github"
              href="https://github.com/heymuchlis"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              Currently building on the web
            </div>

            <p className="hero-kicker">HELLO, I'M MUCHLIS</p>
            <h1>
              Digital
              <span> builder.</span>
            </h1>

            <p className="hero-lead">
              I build useful digital things, explore new ideas, and turn
              experiments into real projects.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore projects
                <ArrowUpRight size={17} />
              </a>
              <a className="button ghost" href="https://github.com/heymuchlis" target="_blank" rel="noreferrer">
                <Github size={17} />
                GitHub
              </a>
            </div>

            <div className="mini-stats">
              <div>
                <strong>01</strong>
                <span>Portfolio</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Ideas</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Curious</span>
              </div>
            </div>
          </div>

          <div className="hero-card-wrap" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card">
              <div className="code-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>muchlis.dev</span>
                <Sparkles size={15} />
              </div>
              <pre>{`const muchlis = {
  role: "digital builder",
  stack: ["web", "cloud", "data"],
  mindset: "keep shipping",
  status: "building..."
};`}</pre>
              <div className="code-footer">
                <span><Zap size={13} /> live on Cloudflare</span>
                <span>v1.1.0</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionTitle
            eyebrow="01 / ABOUT"
            title="Building things, one idea at a time."
            text="This is my corner of the internet — a place to collect projects, experiments, lessons, and whatever I'm currently obsessed with building."
          />

          <div className="about-grid">
            <div className="about-card accent-card">
              <Globe2 size={25} />
              <h3>Web & Digital</h3>
              <p>
                From a simple landing page to a full web app, I enjoy turning
                rough ideas into something people can actually use.
              </p>
            </div>
            <div className="about-card">
              <Code2 size={25} />
              <h3>Learn by building</h3>
              <p>
                I don't wait until I know everything. I learn, experiment,
                break things, fix them, and ship the next version.
              </p>
            </div>
            <div className="about-card">
              <BriefcaseBusiness size={25} />
              <h3>Practical mindset</h3>
              <p>
                The goal isn't to use the most tools. It's to build something
                useful, maintainable, and worth coming back to.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="02 / TOOLBOX"
              title="Things I work with."
              text="A growing toolbox for turning ideas into products."
            />
            <div className="skill-list">
              {skills.map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionTitle
            eyebrow="03 / PROJECTS"
            title="Stuff I'm building."
            text="A few projects and concepts from the playground."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={project.href} target={project.href !== "#" ? "_blank" : undefined} rel="noreferrer">
                  View project <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div>
              <span className="eyebrow">04 / CONTACT</span>
              <h2>Have an idea?</h2>
              <p>Let's turn it into something real.</p>
            </div>
            <a className="button primary" href="mailto:hello@muchlis.dev">
              <Mail size={17} />
              Say hello
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {year} Muchlis. Built with curiosity.</span>
        <div>
          <a href="https://github.com/heymuchlis" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href="mailto:hello@muchlis.dev"><MessageCircle size={16} /></a>
          <Moon size={15} />
        </div>
      </footer>
    </div>
  );
}
