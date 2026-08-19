import '../App.css'

const PROGRAMS = ['Leadership Dev Lab','Executive Communication','AI Ready Workforce','Org Excellence']
const COMPANY  = ['About Us','Our Experts','How We Work','Contact Us']
const COMPANY_NAV = ['about','about','how','contact']
import logoLight from '../assets/logolight.png'

export default function Footer({ onNavigate, onContactClick, onDemoClick, onToast }) {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand column */}
        <div>
          <div className="footer-logo" >
          <img src={logoLight} alt="Fluento Logo" style={{ width: '156px'}}/> 
          </div>
          <p className="footer-desc"> All capital, But first letter is wrong. something Which one? Oh, Oh, he I, I know once, check the one, one.            Building future-ready leaders and AI-powered
            workforces across the globe.
          </p>

          {/* Socials */}
          <div className="footer-socials">
            {[
              { label: 'LinkedIn', path: 'M3 5v4M3 3.5v.5M5 9V6.5c0-1 .5-1.5 1.5-1.5S8 5.5 8 6.5V9' },
            ].map((_, i) => (
              <button key={i} className="footer-social-btn"
                onClick={() => onToast('Opening social media...')}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="2" stroke="rgba(255,255,255,.5)" strokeWidth="1" />
                  <path d="M3 5v4M3 3.5v.5M5 9V6.5c0-1 .5-1.5 1.5-1.5S8 5.5 8 6.5V9"
                    stroke="rgba(255,255,255,.5)" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
            ))}
            <button className="footer-social-btn" onClick={() => onToast('Opening Twitter/X...')}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 2l4 4.5-4 4h1.5L5.5 7 9 10H10.5L6.5 5.5l4-3.5H9L5.5 4.5 2 2H1z"
                  fill="rgba(255,255,255,.5)" />
              </svg>
            </button>
            <button className="footer-social-btn" onClick={() => onToast('Opening YouTube...')}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="2.5" width="10" height="7" rx="2"
                  stroke="rgba(255,255,255,.5)" strokeWidth="1" fill="none" />
                <path d="M4.5 4.5l4 1.5-4 1.5V4.5z" fill="rgba(255,255,255,.5)" />
              </svg>
            </button>
          </div>

          {/* Newsletter */}
          {/* <div className="footer-newsletter">
            <input placeholder="Work email..." />
            <button onClick={() => onToast('Subscribed! ✓')}>Subscribe →</button>
          </div> */}
        </div>

        {/* Programs column */}
        <div className="footer-col">
          <h5>Programs</h5>
          <ul className="footer-links">
            {PROGRAMS.map(p => (
              <li key={p}>
                <a onClick={() => onNavigate('programs')}>{p}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul className="footer-links">
            {COMPANY.map((c, i) => (
              <li key={c}>
                <a onClick={() => onNavigate(COMPANY_NAV[i])}>{c}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect column */}
        <div className="footer-col">
          <h5>Connect</h5>
          <ul className="footer-links">
            <li><a>fluentolearningsolutions@gmail.com</a></li>
            <li><a onClick={onContactClick}>Book Consultation</a></li>
            {/* <li><a onClick={() => onToast('Downloading brochure...')}>Download Brochure</a></li> */}
            <li><a onClick={onDemoClick}>Watch Demo</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div>© 2025 FLUENTO LEARNING SOLUTIONS · fluentolearningsolutions.com</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </div>
    </footer>
  )
}
