import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>KY.</h1>
          <p>CS Student &amp; Developer based in Pakistan.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <a href="https://github.com/khizra-yaqoob" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:khizra.yaqoob03@gmail.com">Email</a>
        </div>
      </div>
      <p className="footer-copy">© 2026 Khizra Yaqoob. All rights reserved.</p>
    </footer>
  )
}

export default Footer
