import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      alert('Please enter email and password.')
      return
    }
    const users: { name: string; email: string; password: string }[] =
      JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      alert(`Login successful! Welcome, ${user.name}`)
      navigate('/dashboard')
    } else {
      alert('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="page auth-page">
      <section className="section auth-section">
        <div className="auth-box">

          <h1 className="auth-title">Login</h1>
          <p className="auth-sub">Welcome back — sign in to continue</p>

          <form className="auth-form" onSubmit={handleSubmit}>
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
                type="password" placeholder="Your password" required
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="link-button auth-btn">
              Login
            </button>
          </form>

          <p className="auth-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>

        </div>
      </section>
    </div>
  )
}

export default Login
