import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all fields.')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    const users: { name: string; email: string; password: string }[] =
      JSON.parse(localStorage.getItem('users') || '[]')
    if (users.some(u => u.email === email)) {
      alert('Email already registered. Please login.')
      return
    }
    users.push({ name, email, password })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registration successful! Please login.')
    navigate('/login')
  }

  return (
    <div className="page auth-page">
      <section className="section auth-section">
        <div className="auth-box">

          <h1 className="auth-title">Create Account</h1>
          <p className="auth-sub">Join to manage your inventory dashboard</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text" placeholder="Your full name" required
                value={name} onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email" placeholder="you@example.com" required
                value={email} onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password" placeholder="Create a password" required
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password" placeholder="Repeat password" required
                value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="link-button auth-btn">
              Register
            </button>
          </form>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>

        </div>
      </section>
    </div>
  )
}

export default Register
