import { useEffect, useState, useRef } from 'react'
import '../App.css'
import logo from '../assets/FluentoLogo.png'
import logoLight from '../assets/logolight.png'

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT US' },
  { id: 'programs', label: 'WHAT WE OFFER' },
  { id: 'how', label: 'HOW WE WORK' },
  { id: 'contact', label: 'CONTACT US' },
]

export default function Navbar({
  currentPage,
  onNavigate,
  onContactClick,
  onDemoClick
}) {

  const [pillVisible, setPillVisible] = useState(true)
  const [compactVisible, setCompactVisible] = useState(false)
  const [atTop, setAtTop] = useState(true)

  // Mobile drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const lastScrollY = useRef(0)
  const pillTimer = useRef(null)
  const compactTimer = useRef(null)

  /* =====================================================
     SCROLL NAVBAR BEHAVIOUR
  ===================================================== */

  useEffect(() => {

    const onScroll = () => {

      const current = window.scrollY
      const isDown = current > lastScrollY.current
      const nowAtTop = current < 10

      setAtTop(nowAtTop)

      if (nowAtTop) {

        clearTimeout(compactTimer.current)
        clearTimeout(pillTimer.current)

        setCompactVisible(false)
        setPillVisible(true)

      } else if (isDown && current > 80) {

        clearTimeout(pillTimer.current)
        clearTimeout(compactTimer.current)

        setPillVisible(false)

        compactTimer.current = setTimeout(() => {
          setCompactVisible(true)
        }, 220)

      } else if (!isDown) {

        clearTimeout(compactTimer.current)
        clearTimeout(pillTimer.current)

        setCompactVisible(false)

        pillTimer.current = setTimeout(() => {
          setPillVisible(true)
        }, 120)
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


  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }

  }, [mobileMenuOpen])


  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleMobileNavigate = (id) => {

    setMobileMenuOpen(false)

    setTimeout(() => {
      onNavigate(id)
    }, 200)
  }


  /* =====================================================
     LOGO MARK
  ===================================================== */

  const LogoMark = ({ size = 32 }) => (

    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >

      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#navGrad)"
      />

      <defs>

        <linearGradient
          id="navGrad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
        >

          <stop stopColor="#01a3a1" />
          <stop offset="1" stopColor="#06B6D4" />

        </linearGradient>

      </defs>

      <path
        d="M7 7h11a5 5 0 010 10H7V7z"
        fill="rgba(255,255,255,.9)"
      />

      <path
        d="M7 15h13"
        stroke="rgba(255,255,255,.4)"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </svg>
  )


  return (

    <>

      {/* =================================================
          DESKTOP / TABLET FULL PILL NAVBAR
      ================================================= */}

      <div
        className={`navbar-pill-outer ${
          pillVisible ? 'pill-visible' : 'pill-hidden'
        }`}
      >

        <nav
          className={`navbar-pill ${
            !atTop ? 'navbar-pill-scrolled' : ''
          }`}
        >

          {/* LOGO */}

          <button
            className="pill-logo"
            onClick={() => onNavigate('home')}
          >

            <img
              src={logo}
              alt="Fluento Logo"
              className="logo-img"
              style={{ width: 50 }}
            />

            <div>
              <div className="pill-logo-section">
              <div className="pill-logo-name">
                FLUENTO
              </div>
              </div>

              <div className="pill-logo-tag">
                LEARNING SOLUTIONS
              </div>

            </div>

          </button>


          {/* NAV LINKS */}

          <div className="pill-links">

            {NAV_LINKS.map(link => (

              <button
                key={link.id}
                className={`pill-link ${
                  currentPage === link.id
                    ? 'pill-link-active'
                    : ''
                }`}
                onClick={() => onNavigate(link.id)}
              >

                {link.label}

              </button>

            ))}

          </div>


          {/* ACTION BUTTONS */}

          <div className="pill-actions">

            <button
              className="pill-demo-btn"
              onClick={onDemoClick}
            >
              WATCH DEMO
            </button>

            <button
              className="pill-cta-btn"
              onClick={onContactClick}
            >
              Book Consultation
            </button>

          </div>

        </nav>

      </div>


      {/* =================================================
          COMPACT DESKTOP BAR
      ================================================= */}

      <div
        className={`compact-bar ${
          compactVisible
            ? 'compact-visible'
            : 'compact-hidden'
        }`}
      >

        <button
          className="compact-logo"
          onClick={() => onNavigate('home')}
        >

         <div class="compact-logo-img">
           <img src={logoLight} alt="Fluento Logo" style={{ width: '132px' }}/>
         </div>

        </button>


        <div className="compact-divider" />


        <button
          className="compact-cta"
          onClick={onContactClick}
        >
          Book Consultation
        </button>


        {/* DESKTOP COMPACT MENU */}

        <button
          className="compact-menu"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >

            <path
              d="M2 4.5h14M2 9h14M2 13.5h14"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

          </svg>

        </button>

      </div>


      {/* =================================================
          MOBILE TOP BAR
      ================================================= */}

      <div className="mobile-navbar">

        <button
          className="mobile-brand"
          onClick={() => onNavigate('home')}
        >

          <img
            src={logo}
            alt="Fluento Logo"
          />

          <div className="mobile-brand-text">

            <div className="mobile-brand-name">
              FLUENTO
            </div>

            <div className="mobile-brand-tag">
              LEARNING SOLUTIONS
            </div>

          </div>

        </button>


        <button
          className={`mobile-menu-button ${
            mobileMenuOpen ? 'menu-open' : ''
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >

          <span />
          <span />
          <span />

        </button>

      </div>


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      <div
        className={`mobile-menu-overlay ${
          mobileMenuOpen ? 'overlay-visible' : ''
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />


      {/* =================================================
          MOBILE RIGHT SIDEBAR
      ================================================= */}

      <aside
        className={`mobile-sidebar ${
          mobileMenuOpen
            ? 'mobile-sidebar-open'
            : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >

        {/* SIDEBAR HEADER */}

        <div className="mobile-sidebar-header">

          <button
            className="mobile-sidebar-logo"
            onClick={() => handleMobileNavigate('home')}
          >

            <LogoMark size={36} />

            <div>

              <div className="mobile-sidebar-brand">
                FLUENTO
              </div>

              <div className="mobile-sidebar-tag">
                LEARNING SOLUTIONS
              </div>

            </div>

          </button>


          <button
            className="mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >

            <span />
            <span />

          </button>

        </div>


        {/* SIDEBAR NAVIGATION */}

        <div className="mobile-sidebar-content">

          <div className="mobile-nav-label">
            NAVIGATION
          </div>


          <nav className="mobile-nav-links">

            {NAV_LINKS.map((link, index) => (

              <button
                key={link.id}
                className={`mobile-nav-link ${
                  currentPage === link.id
                    ? 'mobile-nav-link-active'
                    : ''
                }`}
                onClick={() =>
                  handleMobileNavigate(link.id)
                }
                style={{
                  '--delay': `${index * 0.06}s`
                }}
              >

                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span className="mobile-nav-title">
                  {link.label}
                </span>

                <span className="mobile-nav-arrow">
                  →
                </span>

              </button>

            ))}

          </nav>


          {/* SIDEBAR ACTIONS */}

          <div className="mobile-sidebar-actions">

            <button
              className="mobile-demo-button"
              onClick={() => {
                setMobileMenuOpen(false)
                onDemoClick()
              }}
            >
              WATCH PLATFORM DEMO
            </button>


            <button
              className="mobile-consult-button"
              onClick={() => {
                setMobileMenuOpen(false)
                onContactClick()
              }}
            >
              BOOK A FREE CONSULTATION
              <span>→</span>
            </button>

          </div>


          {/* SIDEBAR FOOTER */}

          <div className="mobile-sidebar-footer">

            <div className="mobile-footer-line" />

            <p>
              LEARN. LEAD. LAUNCH.
            </p>

            <span>
              Corporate Learning Solutions
            </span>

          </div>

        </div>

      </aside>


      {/* =================================================
          SPACER
      ================================================= */}

      <div className="navbar-spacer" />

    </>
  )
}