import { useEffect, useState, useRef } from 'react'
import '../App.css'
import logo from '../assets/FluentoLogo.png'

const NAV_LINKS = [
  { id: 'home',     label: 'HOME' },
  { id: 'about',    label: 'ABOUT US' },
  { id: 'programs', label: 'WHAT WE OFFER' },
  { id: 'how',      label: 'HOW WE WORK' },
  { id: 'contact',  label: 'CONTACT US' },
]

export default function Navbar({ currentPage, onNavigate, onContactClick, onDemoClick }) {
  const [pillVisible,    setPillVisible]    = useState(true)
  const [compactVisible, setCompactVisible] = useState(false)
  const [atTop,          setAtTop]          = useState(true)

  const lastScrollY  = useRef(0)
  const pillTimer    = useRef(null)
  const compactTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const current      = window.scrollY
      const isDown       = current > lastScrollY.current
      const nowAtTop     = current < 10

      setAtTop(nowAtTop)

      if (nowAtTop) {
        /* ── Back at the very top — restore full pill ── */
        clearTimeout(compactTimer.current)
        clearTimeout(pillTimer.current)
        setCompactVisible(false)
        setPillVisible(true)

      } else if (isDown && current > 80) {
        /* ── Scrolling DOWN past threshold — hide pill, show compact ── */
        clearTimeout(pillTimer.current)
        clearTimeout(compactTimer.current)
        setPillVisible(false)
        compactTimer.current = setTimeout(() => setCompactVisible(true), 220)

      } else if (!isDown) {
        /* ── Scrolling UP — hide compact, restore pill ── */
        clearTimeout(compactTimer.current)
        clearTimeout(pillTimer.current)
        setCompactVisible(false)
        pillTimer.current = setTimeout(() => setPillVisible(true), 120)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(pillTimer.current)
      clearTimeout(compactTimer.current)
    }
  }, [])

  /* ── shared logo SVG ── */
  const LogoMark = ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#navGrad)" />
      <defs>
        <linearGradient id="navGrad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M7 7h11a5 5 0 010 10H7V7z" fill="rgba(255,255,255,.9)" />
      <path d="M7 15h13" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  return (
    <>
      {/* ═══════════════════════════════════════════════
          FULL PILL NAVBAR
      ═══════════════════════════════════════════════ */}
      <div className={`navbar-pill-outer ${pillVisible ? 'pill-visible' : 'pill-hidden'}`}>
        <nav className={`navbar-pill ${!atTop ? 'navbar-pill-scrolled' : ''}`}>

          {/* Logo */}
          <button className="pill-logo" onClick={() => onNavigate('home')}>
            <img src={logo} alt="Fluento Logo" className="logo-img" style={{ width: 50, }} />
            <div>
              <div className="pill-logo-name" style={{fontfamily:'  font-family: "Mokoto", "sans-serif"'}}>FLUENTO</div>
              <div className="pill-logo-tag">LEARNING SOLUTIONS</div>
            </div>
          </button>

          {/* Nav links */}
          <div className="pill-links">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`pill-link ${currentPage === link.id ? 'pill-link-active' : ''}`}
                onClick={() => onNavigate(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="pill-actions">
            <button className="pill-demo-btn" onClick={onDemoClick}>
              WATCH DEMO
            </button>
            <button className="pill-cta-btn" onClick={onContactClick}>
              Book Consultation
            </button>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════
          COMPACT FLOATING BAR  (top-right, scroll-down)
      ═══════════════════════════════════════════════ */}
      <div className={`compact-bar ${compactVisible ? 'compact-visible' : 'compact-hidden'}`}>
        {/* Mini logo wordmark */}
        <button className="compact-logo" onClick={() => onNavigate('home')}>
          <LogoMark size={24} />
          <span className="compact-logo-name">FLUENTO</span>
        </button>

        {/* Divider */}
        <div className="compact-divider" />

        {/* CTA */}
        <button className="compact-cta"   onClick={onContactClick}>
          Book Consultation
        </button>

        {/* Menu icon */}
        <button className="compact-menu" onClick={() => onNavigate(currentPage)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12"
              stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Spacer (compensates for fixed positioning) ── */}
      <div className="navbar-spacer" />
    </>
  )
}