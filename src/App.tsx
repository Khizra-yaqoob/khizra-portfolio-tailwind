import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Home from './pages/Home/page'
import About from './pages/About/page'
import Projects from './pages/Projects/page'
import Skills from './pages/Skills/page'
import Contact from './pages/Contact/page'
import Dashboard from './pages/Dashboard/page'
import Login from './pages/Login/page'
import Register from './pages/Register/page'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
