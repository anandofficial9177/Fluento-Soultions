import '../App.css'

export default function BookModal({ onNavigate, onBookClick, onDemoClick, onToast,onClose, onSuccess }) {
  const [form,   setForm]   = useState(INITIAL_FORM)
    const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const handleSubmit = async () => {
    // Basic validation
    if (!form.fullName.trim() || !form.company.trim() || !form.email.trim()) {
      onToast('Please fill in Name, Company and Email.')
      return
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      onToast('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    const templateParams = {
      to_email:      'ashish@fluentolearningsolutions.com',
      from_name:     form.fullName,
      company:       form.company,
      from_email:    form.email,
      phone:         form.phone        || 'Not provided',
      training_need: form.trainingNeed || 'Not specified',
      team_size:     form.teamSize     || 'Not specified',
      goals:         form.goals        || 'Not provided',
      reply_to:      form.email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <div className="form-tag">Free Consultation</div>
        <div style={{ fontFamily:'var(--font-heading)', fontSize:20, fontWeight:800, color:'var(--navy)', marginBottom:3 }}>
          Book Your Strategy Call
        </div>
        <div style={{ fontSize:11.5, color:'var(--g400)', marginBottom:20 }}>
          Our learning strategists map a personalized program to your goals — completely free.
        </div>

        <div className="form-fields">
          <div className="form-row">
            <input className="form-input" placeholder="Full Name" />
            <input className="form-input" placeholder="Company / Institution" />
          </div>
          <div className="form-row">
            <input className="form-input" placeholder="Email *" type="email" />
            <input className="form-input" placeholder="Phone" type="tel" />
          </div>
          <select className="form-input" style={{ cursor:'pointer' }}>
            <option value="">Training Need</option>
            <option>Leadership Development Lab</option>
            <option>Executive Communication</option>
            <option>AI Ready Workforce</option>
            <option>Org Excellence & Innovation</option>
            <option>All Programs</option>
          </select>
          <select className="form-input" style={{ cursor:'pointer' }}>
            <option value="">Team Size</option>
            <option>1–10</option>
            <option>11–25</option>
            <option>25–50</option>
            <option>50–200</option>
            <option>200+</option>
          </select>
          <textarea className="form-input form-textarea" placeholder="Tell us about your training goals..." />
            <button
                        className="form-submit"
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.75 : 1, position:'relative' }}
                      >
                        {status === 'loading' ? (
                          <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              style={{ animation:'spin 0.9s linear infinite' }}>
                              <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,.35)" strokeWidth="2"/>
                              <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Sending your inquiry...
                          </span>
                        ) : (
                          'Submit Inquiry & Book Consultation →'
                        )}
                      </button>
        </div>
      </div>
    </div>
  )
}
