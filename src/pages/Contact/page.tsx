import { useState } from 'react'

function Contact() {
  const [btnText, setBtnText] = useState('Send Message')
  const [btnDisabled, setBtnDisabled] = useState(false)

  function handleSend() {
    setBtnText('Sending…')
    setBtnDisabled(true)
    setTimeout(() => {
      setBtnText('✓ Sent!')
      setTimeout(() => {
        setBtnText('Send Message')
        setBtnDisabled(false)
      }, 3000)
    }, 1500)
  }

  const infoCards = [
    { icon: '📧', title: 'Email', content: <a href="mailto:khizra.yaqoob03@gmail.com">khizra.yaqoob03@gmail.com</a> },
    { icon: '📍', title: 'Location', content: 'Gujrat, Punjab, Pakistan' },
    { icon: '🎓', title: 'University', content: 'University of Gujrat (UOG)' },
    { icon: '🌐', title: 'GitHub', content: <a href="https://github.com/khizra-yaqoob" target="_blank" rel="noreferrer">github.com/khizra-yaqoob</a> },
    { icon: '💼', title: 'Availability', content: 'Open to internships, freelance projects, and collaboration opportunities.' },
  ]

  return (
    <div className="page">

      {/* HEADER */}
      <section className="section no-bottom-padding">
        <span className="section-number">Contact</span>
        <h1 className="contact-heading">Get In Touch</h1>
        <div className="divider"></div>
        <p className="contact-intro">
          Have a project or idea? Let's connect and build something great together.
        </p>
      </section>

      {/* CONTENT */}
      <section className="section contact-section">
        <div className="contact-wrapper">

          {/* INFO CARDS */}
          <div className="contact-info">
            {infoCards.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.icon} {card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="contact-form-box">
            <div className="contact-form">
              <h3>Send Message</h3>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="fname" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lname" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select name="subject">
                  <option value="">Select Subject</option>
                  <option>Project</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Your message..." required></textarea>
              </div>
              <button
                type="button"
                className="link-button"
                id="send-contact-btn"
                onClick={handleSend}
                disabled={btnDisabled}
              >
                {btnText}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact