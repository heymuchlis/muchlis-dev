import { useEffect, useState } from "react";
import {
  ArrowUpRight, Github, Send, MapPin, Code2, Database,
  Cloud, Sparkles, ExternalLink, Menu, X, MessageCircle
} from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { profile, projects, skills } from "./data";

function App() {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = `${profile.name} — Developer Portfolio`;
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const submitGuestbook = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSending(true);
    try {
      if (db) {
        await addDoc(collection(db, "guestbook"), {
          name: form.name.trim(),
          message: form.message.trim(),
          createdAt: serverTimestamp()
        });
      }
      setForm({ name: "", message: "" });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Firebase belum terhubung. Isi .env lalu deploy ulang.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-dot" />
            muchlis<span>.dev</span>
          </button>

          <div className={`nav-links ${menu ? "open" : ""}`}>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("stack")}>Stack</button>
            <button onClick={() => scrollTo("guestbook")}>Guestbook</button>
          </div>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AVAILABLE FOR BUILDING</div>
            <h1>Building useful things<br /><em>for the real world.</em></h1>
            <p className="hero-text">
              I'm <strong>{profile.name}</strong>, a developer from {profile.location}.
              I turn ideas into fast, clean web apps, automation and dashboards.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollTo("projects")}>
                Explore projects <ArrowUpRight size={17} />
              </button>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
            <div className="mini-meta">
              <span><MapPin size={14} /> Indonesia</span>
              <span><Sparkles size={14} /> Always experimenting</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-top">
              <span className="terminal-dots"><i /><i /><i /></span>
              <span>muchlis@portfolio ~</span>
            </div>
            <pre>{`$ whoami

Muchlis
Full Stack Developer

$ current_focus

→ Web Applications
→ Trading Systems
→ Automation
→ Cloud Infrastructure

$ status

● online
● shipping ideas`}</pre>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head">
            <span className="kicker">01 / ABOUT</span>
            <h2>Not just a portfolio.</h2>
          </div>
          <div className="about-grid">
            <p className="big-copy">{profile.bio}</p>
            <div className="about-cards">
              <div><Code2 /><strong>Build</strong><span>Interfaces & systems</span></div>
              <div><Database /><strong>Connect</strong><span>Data & APIs</span></div>
              <div><Cloud /><strong>Deploy</strong><span>Cloud-native apps</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head row">
            <div>
              <span className="kicker">02 / PROJECTS</span>
              <h2>Things I've built.</h2>
            </div>
            <span className="count">{String(projects.length).padStart(2, "0")} PROJECTS</span>
          </div>

          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project ${i === 0 ? "featured" : ""}`} key={p.title}>
                <div className="project-no">0{i + 1}</div>
                <div className="project-status">{p.status}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>
                  <a href={p.github} target="_blank" rel="noreferrer">Source <Github size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section container">
          <div className="section-head">
            <span className="kicker">03 / STACK</span>
            <h2>Tools I like to use.</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, i) => <span key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>)}
          </div>
        </section>

        <section id="guestbook" className="section container guestbook">
          <div className="guest-copy">
            <span className="kicker">04 / GUESTBOOK</span>
            <h2>Say hello.</h2>
            <p>Leave a quick message. Messages are stored in Firebase Firestore.</p>
            <div className="socials">
              <a href={profile.telegram} target="_blank" rel="noreferrer"><Send size={17} /> Telegram</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><MessageCircle size={17} /> LinkedIn</a>
            </div>
          </div>

          <form className="guest-form" onSubmit={submitGuestbook}>
            <label>Name<input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></label>
            <label>Message<textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Write something..." rows="5" /></label>
            <button className="btn primary" disabled={sending}>
              {sending ? "Sending..." : sent ? "Sent ✓" : "Send message"} <ArrowUpRight size={17} />
            </button>
          </form>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React + Firebase.</span>
        <button onClick={() => scrollTo("home")}>Back to top ↑</button>
      </footer>
    </div>
  );
}

export default App;