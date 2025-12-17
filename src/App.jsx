import './App.css'

const projects = [
  {
    title: 'Voice-Based Desktop Assistant',
    description:
      'Offline Python assistant that performs searches, opens apps, reads PDFs, and executes voice-triggered actions with speech recognition and TTS.',
    tags: ['Python', 'Automation', 'Voice'],
  },
  {
    title: 'Employee Details Management',
    description:
      'Full-stack web app with React + Node.js + Express + MySQL. Role-based dashboards for admins and employees, secure auth, and full CRUD.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
  },
]

const skills = [
  'React + modern JavaScript',
  'Design systems & tokens',
  'Creative coding & motion',
  'Accessible, resilient UI',
  'Prototyping in Figma',
  'Storytelling with data',
]

const contacts = [
  { label: 'GitHub', href: 'https://github.com/vishnu261204', value: '@vishnu261204' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-vishnuram', value: '-vishnuram' },
  { label: 'Email', href: 'mailto:rvvishnuram26@gmail.com', value: 'rvvishnuram26@gmail.com' },
  { label: 'Phone', href: 'tel:+919047917428', value: '+91 9047917428' },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="avatar" aria-label="Vishnu Ram R V">VR</div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            className="btn btn-ghost nav__cta"
            href="https://github.com/vishnu261204"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <header className="hero">
        <div className="hero__copy">
          <h1>
            Hi, I&apos;m <span className="highlight">R V Vishnu Ram</span>—a full-stack developer crafting expressive digital
            experiences.
          </h1>
          <p className="lead">
            I build end-to-end products with React, Node.js, and clean APIs, pairing systematic engineering with vibrant
            visuals so everything ships fast and feels intentional.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#projects">
              See my work
            </a>
            <a className="btn btn-ghost" href="mailto:rvvishnuram26@gmail.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="https://github.com/vishnu261204" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact-bar">
            {contacts.map((contact) => (
              <a key={contact.label} className="contact-chip" href={contact.href} target="_blank" rel="noreferrer">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
        </div>

      </header>

      <section id="projects" className="section">
        <div className="section__heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Resume projects with practical impact</h2>
          </div>
        </div>

        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <div className="card__header">
                <h3>{project.title}</h3>
                <span className="pill pill--soft">Resume</span>
              </div>
              <p className="muted">{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-link">GitHub →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section section--surface">
        <div className="section__heading">
          <div>
            <p className="eyebrow">Expertise</p>
            <h2>Technologies I've worked with</h2>
          </div>
        </div>

        <div className="grid grid--dense">
          {skills.map((skill) => (
            <div key={skill} className="card card--compact">
              <span className="meta-dot" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="callout">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Let&apos;s craft something unforgettable</h2>
            <p className="muted">
              Tell me about the product, the users, and the feeling you want them to keep. I&apos;ll respond with a
              visual direction and a short plan.
            </p>
          </div>
          <div className="callout__actions">
            <a className="btn btn-primary" href="mailto:rvvishnuram26@gmail.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="#projects">
              Browse projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
