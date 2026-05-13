import { useEffect } from 'react'

const programmingSkills = [
  { label: 'Java', pct: '80%', cls: 'skill-java' },
  { label: 'C++', pct: '75%', cls: 'skill-cpp' },
  { label: 'JavaScript', pct: '70%', cls: 'skill-js' },
  { label: 'MySQL', pct: '72%', cls: 'skill-sql' },
]

const webSkills = [
  { label: 'HTML & CSS', pct: '85%', cls: 'skill-html' },
  { label: 'Git / GitHub', pct: '65%', cls: 'skill-git' },
  { label: 'Problem Solving', pct: '78%', cls: 'skill-ps' },
]

const skillsTable = [
  { tech: 'Java', category: 'Programming', level: 'Intermediate', years: 2, status: 'Active' },
  { tech: 'C++', category: 'Programming', level: 'Intermediate', years: 2, status: 'Active' },
  { tech: 'JavaScript', category: 'Web', level: 'Intermediate', years: 1, status: 'Learning' },
  { tech: 'MySQL', category: 'Database', level: 'Intermediate', years: 1, status: 'Active' },
  { tech: 'HTML / CSS', category: 'Web', level: 'Advanced', years: 2, status: 'Active' },
  { tech: 'Git', category: 'Tools', level: 'Beginner', years: 1, status: 'Learning' },
]

function Skills() {
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

      {/* HEADER */}
      <section className="section no-bottom-padding">
        <span className="section-number">Skills</span>
        <h1 className="skills-heading">What I Work With</h1>
        <div className="divider"></div>
        <p className="skills-intro">
          Technologies and tools I use to build projects and solve problems.
        </p>
      </section>

      {/* SKILL BARS */}
      <section className="section skills-section">
        <div className="skills-wrapper">

          <div className="skills-col">
            <h3 className="skills-subheading">Programming Languages</h3>
            <div className="skill-bar-wrap">
              {programmingSkills.map((s) => (
                <div className="skill-item" key={s.label}>
                  <div className="skill-label">
                    <span>{s.label}</span>
                    <span>{s.pct}</span>
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
              {webSkills.map((s) => (
                <div className="skill-item" key={s.label}>
                  <div className="skill-label">
                    <span>{s.label}</span>
                    <span>{s.pct}</span>
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

      {/* SKILLS TABLE */}
      <section className="section no-top-padding">
        <div className="section-header">
          <span className="section-number">Details</span>
          <h2>Skills Summary</h2>
          <div className="divider"></div>
        </div>
        <div className="table-container">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Technology</th>
                <th>Category</th>
                <th>Level</th>
                <th>Years</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {skillsTable.map((row) => (
                <tr key={row.tech}>
                  <td>{row.tech}</td>
                  <td>{row.category}</td>
                  <td>{row.level}</td>
                  <td>{row.years}</td>
                  <td><span className="badge">{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}

export default Skills
