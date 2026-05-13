import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'dark'
  )
  const [shrunk, setShrunk] = useState(false)
  const navigate = useNavigate()

  // Apply theme on mount and change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => setShrunk(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  function handleNavClick() {
    setMenuOpen(false)
  }

  function handleLogout() {
    localStorage.removeItem('currentUser')
    navigate('/login')
  }

  const currentUser = localStorage.getItem('currentUser')

  return (
    <nav className={shrunk ? 'nav-shrunk' : ''}>
      <NavLink to="/" className="logo" onClick={handleNavClick}>
        KY.
      </NavLink>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
            Dashboard
          </NavLink>
        </li>
        {currentUser ? (
          <li>
            <button className="sm-button" onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={handleNavClick}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <button id="theme-toggle" className="sm-button" onClick={toggleTheme}>
        {theme === 'dark' ? '☀ Light' : '☾ Dark'}
      </button>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
