import { useState, useEffect, useCallback } from 'react'
import './App.css'

// Layout
import Navbar from './components/Navbar'

// Modals
import BookModal  from './components/BookModal'
import VideoModal from './components/VideoModal'

// Pages
import Home         from './pages/Home'
import AboutPage    from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import HowWeWork    from './pages/HowWeWork'
import Contact      from './pages/Contact'

// ─── Success modal (inline — small enough to keep here) ─────────────
function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box" style={{ maxWidth: 370 }}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <div className="success-state">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ display:'block', margin:'0 auto 14px' }}>
            <circle cx="30" cy="30" r="28" fill="rgba(34,197,94,.09)" stroke="rgba(34,197,94,.28)" strokeWidth="2"/>
            <path d="M18 30l9 9 15-18" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="success-heading">You're All Set!</div>
          <p className="success-text">
            Your inquiry has been received. A FLUENTO learning strategist will contact you
            within 4 business hours to schedule your free discovery call.
          </p>
          <div className="success-note">
            <div className="success-note-label">NEXT STEP</div>
            <div className="success-note-text">
              Check your inbox for a confirmation from fluentolearningsolutions@gmail.com
            </div>
          </div>
          <button className="btn btn-primary" style={{ marginTop:16, width:'100%', justifyContent:'center' }} onClick={onClose}>
            Done — Thank You!
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Toast ──────────────────────────────────────────────────────────
function Toast({ message, onHide }) {
  useEffect(() => {
    const t = setTimeout(onHide, 3000)
    return () => clearTimeout(t)
  }, [message])

  return (
    <div className="toast">
      <span>✅</span>
      <span>{message}</span>
    </div>
  )
}

// ─── Scroll-reveal hook ──────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.sr,.sl,.srr,.sc')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })
}

// ─── App ─────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage]       = useState('home')
  const [showBook, setBook]   = useState(false)
  const [showVideo, setVideo] = useState(false)
  const [showSuccess, setSuccess] = useState(false)
  const [toast, setToast]     = useState(null)

  useScrollReveal()

  const navigate = useCallback((p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openBook  = () => { setBook(true);  setVideo(false) }
  const openDemo  = () => { setVideo(true); setBook(false)  }
  const onSuccess = () => { setBook(false); setSuccess(true) }
  const showToast = (msg) => setToast(msg)
  const openContact = useCallback(() => {
  setPage('contact')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}, [])

  // Ripple effect on all buttons
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest('button')
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const rip = document.createElement('span')
      rip.style.cssText = `
        position:absolute;width:80px;height:80px;border-radius:50%;
        background:rgba(255,255,255,.18);
        transform:translate(-50%,-50%) scale(0);
        pointer-events:none;z-index:10;
        animation:ripple .5s ease forwards;
      `
      rip.style.left = (e.clientX - rect.left) + 'px'
      rip.style.top  = (e.clientY - rect.top)  + 'px'
      btn.style.position = 'relative'
      btn.style.overflow = 'hidden'
      btn.appendChild(rip)
      setTimeout(() => rip.remove(), 500)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const commonProps = { onNavigate: navigate,  onContactClick: openContact, onBookClick: openBook, onDemoClick: openDemo, onToast: showToast }

  return (
    
    <>
      <style>{`@keyframes ripple { to { transform:translate(-50%,-50%) scale(3.5); opacity:0; } }`}</style>

      <Navbar
        currentPage={page}
        onNavigate={navigate}
        onBookClick={openBook}
        onDemoClick={openDemo}
          onContactClick={openContact}

      />

      {/* Pages */}
      {page === 'home'     && <Home         {...commonProps} />}
      {page === 'about'    && <AboutPage    {...commonProps} />}
      {page === 'programs' && <ProgramsPage {...commonProps} />}
      {page === 'how'      && <HowWeWork    {...commonProps} />}
      {page === 'contact'  && <Contact      {...commonProps} onSuccess={onSuccess} />}
      

      {/* Modals */}
      {showBook    && <BookModal  onClose={() => setBook(false)}    onSuccess={onSuccess} />}
      {showVideo   && <VideoModal onClose={() => setVideo(false)} />}
      {showSuccess && <SuccessModal onClose={() => setSuccess(false)} />}

      {/* Toast */}
      {toast && <Toast message={toast} onHide={() => setToast(null)} />}
    </>
  )
}
