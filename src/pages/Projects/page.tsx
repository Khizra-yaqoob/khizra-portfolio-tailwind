import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  desc: string
  category: string
  icon: string
  img?: string
  badges: string[]
  link: string
  linkLabel: string
}

const allProjects: Project[] = [
  {
    id: 1, title: 'Student Management System',
    desc: 'A desktop application to manage student records, grades, and attendance using Java and MySQL with full CRUD operations.',
    category: 'java', icon: '🎓', img: '/images/project1.png',
    badges: ['Java', 'MySQL'], link: 'https://github.com/khizra-yaqoob', linkLabel: '↗ Code',
  },
  {
    id: 2, title: 'Library Management System',
    desc: 'Console-based system for managing books, issuing records, returns, and fine calculation using C++ and file handling.',
    category: 'cpp', icon: '📚', img: '/images/project2.png',
    badges: ['C++', 'OOP'], link: 'https://github.com/khizra-yaqoob', linkLabel: '↗ Code',
  },
  {
    id: 3, title: 'Portfolio Website',
    desc: 'Responsive personal portfolio website with dark/light theme, skill bars, project filters, and contact form.',
    category: 'web', icon: '🌐', img: '/images/project3.png',
    badges: ['HTML', 'CSS', 'JS'], link: 'https://github.com/khizra-yaqoob', linkLabel: '↗ Code',
  },
  {
    id: 4, title: 'Shop Inventory Dashboard',
    desc: 'Interactive inventory management dashboard with bar charts, CRUD operations, activity log, and CSV export feature.',
    category: 'database', icon: '🏪', img: '/images/project4.png',
    badges: ['MySQL', 'JavaScript'], link: '/dashboard', linkLabel: '↗ Open',
  },
  {
    id: 5, title: 'Scientific Calculator',
    desc: 'C++ calculator supporting arithmetic, trigonometry, logarithm, and complex mathematical expression evaluation.',
    category: 'cpp', icon: '🧮',
    badges: ['C++'], link: 'https://github.com/khizra-yaqoob', linkLabel: '↗ Code',
  },
  {
    id: 6, title: 'To-Do List App',
    desc: 'Browser-based task manager with add, delete, complete, and filter functionality using vanilla JavaScript.',
    category: 'web', icon: '✅',
    badges: ['JavaScript', 'HTML'], link: 'https://github.com/khizra-yaqoob', linkLabel: '↗ Code',
  },
]

type Filter = 'all' | 'java' | 'cpp' | 'web' | 'database'

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'web', label: 'Web' },
    { value: 'database', label: 'Database' },
  ]

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  return (
    <div className="page">

      {/* HEADER */}
      <section className="section project-header">
        <span className="section-number">03 — Projects</span>
        <h1 className="project-title">Things I've Built</h1>
        <div className="divider"></div>
        <p className="project-intro">
          A collection of projects built during my Computer Science degree
          and self-learning journey.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="filter-section">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </section>

      {/* PROJECT CARDS */}
      <section className="section project-grid">
        <div className="card-container project-container">
          {filtered.map((project) => (
            <div className="card project-card" key={project.id}>
              {project.img ? (
                <img src={project.img} alt={project.title} className="project-img" />
              ) : (
                <div className="project-placeholder">
                  <span className="placeholder-icon">{project.icon}</span>
                </div>
              )}
              <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                {project.link.startsWith('http') ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-code">
                    {project.linkLabel}
                  </a>
                ) : (
                  <Link to={project.link} className="project-code">
                    {project.linkLabel}
                  </Link>
                )}
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="badge-group">
                {project.badges.map((b) => (
                  <span className="badge" key={b}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Projects
