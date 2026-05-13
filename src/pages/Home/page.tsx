import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // Skill bar animation using IntersectionObserver
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fills = document.querySelectorAll<HTMLElement>('.skill-fill')
    if (!fills.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const labelEl = el.closest('.skill-item')
              ?.querySelector('.skill-label span:last-child')
            if (labelEl) el.style.width = labelEl.textContent || '0%'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    fills.forEach((f) => {
      f.style.width = '0%'
      observer.observe(f)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <span className="section-number">👋 Welcome to my portfolio</span>
          <h1>
            Hi, I'm <span className="accent-text">Khizra Yaqoob</span>
          </h1>
          <h2>Computer Science Student &amp; Developer</h2>
          <p>
            Passionate Computer Science student at the University of Gujrat.
            Skilled in Java, C++, HTML, CSS, JavaScript, and MySQL.
            I enjoy building responsive and user-friendly applications.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="link-button">View Projects</Link>
            <Link to="/contact"><button>Contact Me</button></Link>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="section-header">
          <span className="section-number">01 — Highlights</span>
          <h2>What I Do</h2>
          <div className="divider"></div>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>💻 Programming</h3>
            <p>
              Developing robust applications using Java and C++ with strong OOP
              concepts, design patterns, and clean architecture principles.
            </p>
          </div>
          <div className="card">
            <h3>🌐 Web Development</h3>
            <p>
              Creating fully responsive websites using HTML, CSS, and JavaScript.
              Focus on clean layouts, accessibility, and smooth user experience.
            </p>
          </div>
          <div className="card">
            <h3>🗄️ Database</h3>
            <p>
              Designing and managing relational databases using MySQL. Writing
              optimized SQL queries, joins, and stored procedures.
            </p>
          </div>
          <div className="card">
            <h3>🔧 Problem Solving</h3>
            <p>
              Strong analytical thinking and algorithmic approach to solving
              real-world software problems using data structures.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="section-header">
          <span className="section-number">02 — About Me</span>
          <h2>Who I Am</h2>
          <div className="divider"></div>
        </div>
        <div className="about-wrapper">
          <div className="about-text">
            <p>
              Hey! I'm <strong>Khizra Yaqoob</strong>, a Computer Science student
              at the University of Gujrat (2023–2027). I am passionate about
              programming, building software, and learning new technologies.
            </p>
            <p>
              My academic journey has equipped me with strong foundations in
              object-oriented programming, web development, database systems,
              and software engineering principles.
            </p>
            <p>
              I am currently focused on improving my front-end development skills
              and working on projects that solve real problems for real people.
            </p>
            <div className="about-buttons">
              <Link to="/contact" className="link-button">Hire Me</Link>
              <Link to="/about"><button>Read More</button></Link>
            </div>
          </div>
          <div className="about-sidebar">
            <div className="profile-img-box">
              <img src="/images/profile.png" alt="Khizra Yaqoob" className="profile-img" />
            </div>
            <div className="card">
              <h3>🎓 Education</h3>
              <p>
                BS Computer Science<br />
                <span className="muted-text">University of Gujrat (2023–2027)</span>
              </p>
            </div>
            <div className="card">
              <h3>📍 Location</h3>
              <p>Gujrat, Punjab, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="section-header">
          <span className="section-number">03 — Projects</span>
          <h2>Featured Projects</h2>
          <div className="divider"></div>
        </div>
        <div className="card-container project-container">
          <div className="card project-card">
            <img src="/images/project1.png" alt="Student Management System" className="project-img" />
            <div className="project-card-header">
              <span className="project-icon">🎓</span>
              <a href="https://github.com/khizra-yaqoob" target="_blank" rel="noreferrer" className="project-code">↗ Code</a>
            </div>
            <h3>Student Management System</h3>
            <p className="project-desc">Java desktop app for managing student records, grades, and attendance with MySQL.</p>
            <div className="badge-group">
              <span className="badge">Java</span>
              <span className="badge">MySQL</span>
            </div>
          </div>
          <div className="card project-card">
            <img src="/images/project2.png" alt="Library Management System" className="project-img" />
            <div className="project-card-header">
              <span className="project-icon">📚</span>
              <a href="https://github.com/khizra-yaqoob" target="_blank" rel="noreferrer" className="project-code">↗ Code</a>
            </div>
            <h3>Library Management System</h3>
            <p className="project-desc">C++ console-based system for managing books, issuing records, returns, and fines.</p>
            <div className="badge-group">
              <span className="badge">C++</span>
              <span className="badge">OOP</span>
            </div>
          </div>
          <div className="card project-card">
            <img src="/images/project3.png" alt="Portfolio Website" className="project-img" />
            <div className="project-card-header">
              <span className="project-icon">🌐</span>
              <a href="https://github.com/khizra-yaqoob" target="_blank" rel="noreferrer" className="project-code">↗ Code</a>
            </div>
            <h3>Portfolio Website</h3>
            <p className="project-desc">Responsive portfolio with dark/light theme, skill bars, project filters, and contact form.</p>
            <div className="badge-group">
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JS</span>
            </div>
          </div>
        </div>
        <div className="center-btn">
          <Link to="/projects" className="link-button">View All Projects</Link>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="section" ref={skillsRef}>
        <div className="section-header">
          <span className="section-number">04 — Skills</span>
          <h2>What I Work With</h2>
          <div className="divider"></div>
        </div>
        <div className="skills-wrapper">
          <div className="skills-col">
            <h3 className="skills-subheading">Programming Languages</h3>
            <div className="skill-bar-wrap">
              {[
                { label: 'Java', pct: '80%', cls: 'skill-java' },
                { label: 'C++', pct: '75%', cls: 'skill-cpp' },
                { label: 'JavaScript', pct: '70%', cls: 'skill-js' },
              ].map((s) => (
                <div className="skill-item" key={s.label}>
                  <div className="skill-label">
                    <span>{s.label}</span><span>{s.pct}</span>
                  </div>
                  <div className="skill-track">
                    <div className={`skill-fill ${s.cls}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-col">
            <h3 className="skills-subheading">Web &amp; Tools</h3>
            <div className="skill-bar-wrap">
              {[
                { label: 'HTML & CSS', pct: '85%', cls: 'skill-html' },
                { label: 'MySQL', pct: '72%', cls: 'skill-sql' },
                { label: 'Git / GitHub', pct: '65%', cls: 'skill-git' },
              ].map((s) => (
                <div className="skill-item" key={s.label}>
                  <div className="skill-label">
                    <span>{s.label}</span><span>{s.pct}</span>
                  </div>
                  <div className="skill-track">
                    <div className={`skill-fill ${s.cls}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section">
        <div className="section-header">
          <span className="section-number">05 — Dashboard</span>
          <h2>Portfolio Dashboard</h2>
          <div className="divider"></div>
          <p>Manage portfolio projects and view graphical statistics for stock inventory.</p>
        </div>
        <div className="card-container">
          {[
            { icon: '📂', title: 'View All Stock', desc: 'Display all inventory items in a sortable, searchable table with stock status indicators.' },
            { icon: '➕', title: 'Insert New Stock', desc: 'Add new products with name, category, price, and quantity into the inventory database.' },
            { icon: '✏️', title: 'Update Stock', desc: 'Edit existing inventory records and update stock quantities and product information.' },
            { icon: '🗑️', title: 'Delete Stock', desc: 'Remove products from inventory with confirmation prompts to prevent accidental deletion.' },
            { icon: '📊', title: 'Graphical View', desc: 'Visual bar chart of stock levels per product category with real-time data updates.' },
            { icon: '📋', title: 'Activity Log', desc: 'Track all recent inventory actions including additions, updates, and deletions with timestamps.' },
          ].map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/dashboard" className="link-button">Open</Link>
            </div>
          ))}
        </div>
      </section>

      {/* LOGIN / REGISTER */}
      <section className="section">
        <div className="section-header">
          <span className="section-number">06 — Account</span>
          <h2>Login or Register</h2>
          <div className="divider"></div>
          <p>Create an account or sign in to access the dashboard and manage inventory.</p>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>🔐 Login</h3>
            <p>Sign in with your email and password to access your personalized portfolio dashboard.</p>
            <Link to="/login" className="link-button">Login</Link>
          </div>
          <div className="card">
            <h3>📝 Register</h3>
            <p>Create a new account with your name, email, and password to get started.</p>
            <Link to="/register" className="link-button">Register</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
