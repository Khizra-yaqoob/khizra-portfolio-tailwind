import { Link } from 'react-router-dom'

function About() {
  const timeline = [
    { year: '🏫 2023 — University Started', desc: 'Enrolled in BS Computer Science at the University of Gujrat. Began learning C++ and OOP fundamentals.' },
    { year: '💻 2024 — Web Development', desc: 'Learned HTML, CSS, JavaScript. Built first responsive websites and started exploring front-end frameworks.' },
    { year: '🗄️ 2024 — Database Systems', desc: 'Studied MySQL and relational databases. Completed projects integrating Java applications with MySQL backend.' },
    { year: '🚀 2025 — Portfolio Projects', desc: 'Built a full portfolio website, student management system, library system, and inventory dashboard.' },
  ]

  // Ye sirf logic hai, styling nahi.
  const baseUrl = (import.meta as any).env.BASE_URL;

  return (
    <div className="page">

      {/* HEADER */}
      <section className="section no-bottom-padding">
        <span className="section-number">01 — About Me</span>
        <h1 className="about-heading">Who I Am</h1>
        <div className="divider"></div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="section about-section">
        <div className="about-wrapper">

          <div className="about-text">
            <p>
              Hey! I'm <strong>Khizra Yaqoob</strong>, a Computer Science student
              at the University of Gujrat.
            </p>
            <p>
              I am passionate about programming and building software that solves
              real-world problems. My academic journey has equipped me with a
              strong foundation in OOP, web development, database systems, and
              software engineering.
            </p>
            <p>
              My core skills include Java, C++, JavaScript, HTML, CSS, and MySQL.
              I enjoy turning ideas into working software and continuously
              improving my technical knowledge.
            </p>
            <p>
              Outside of coding, I enjoy exploring new technologies, reading about
              software architecture, and working on personal projects that
              challenge my problem-solving abilities.
            </p>
            <div className="about-buttons">
              <Link to="/contact" className="link-button">Hire Me</Link>
              {/* Sirf href path fix kiya hai, styling button ki CSS file se hi aa rahi hai */}
              <a href={`${baseUrl}Khizra-CV.pdf`} download>
                <button>Download CV</button>
              </a>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="profile-img-box">
              <img 
                src={`${baseUrl}images/profile.png`} 
                alt="Khizra Yaqoob" 
                className="profile-img" 
              />
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
            <div className="card">
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:khizra.yaqoob03@gmail.com">
                  khizra.yaqoob03@gmail.com
                </a>
              </p>
            </div>
            <div className="card">
              <h3>💼 Status</h3>
              <p>Open to internships and freelance web development work.</p>
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="section no-top-padding">
        <div className="section-header">
          <span className="section-number">02 — Journey</span>
          <h2>My Timeline</h2>
          <div className="divider"></div>
        </div>
        <div className="card-container">
          {timeline.map((item) => (
            <div className="card" key={item.year}>
              <h3>{item.year}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About