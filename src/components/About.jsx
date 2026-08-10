import { useEffect, useRef } from 'react'
import '../App.css'

export default function About({ onNavigate, onBookClick }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    if (ref.current)
      ref.current.querySelectorAll('.sr,.sl,.srr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" ref={ref}>
      <div className="inner">
        <div className="about-grid">

          {/* ── Left: Illustration ── */}
          <div className="sl">
            <div className="about-illustration">
              <svg width="250" height="200" viewBox="0 0 250 200" fill="none">
                <defs>
                  <linearGradient id="aboutGrad" x1="0" y1="0" x2="250" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <polygon points="125,20 195,60 195,140 125,180 55,140 55,60"
                  fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.25)" strokeWidth="1.5" />
                <polygon points="125,45 170,70 170,130 125,155 80,130 80,70"
                  fill="rgba(37,99,235,.12)" stroke="rgba(37,99,235,.35)" strokeWidth="1.5" />
                <polygon points="125,70 150,84 150,116 125,130 100,116 100,84"
                  fill="url(#aboutGrad)" />
                <circle cx="125" cy="100" r="14" fill="white" opacity=".9" />
                <path d="M119 100l4 5 9-9" stroke="url(#aboutGrad)" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="55"  cy="60"  r="7" fill="url(#aboutGrad)" opacity=".8" />
                <circle cx="195" cy="60"  r="7" fill="url(#aboutGrad)" opacity=".8" />
                <circle cx="55"  cy="140" r="7" fill="url(#aboutGrad)" opacity=".8" />
                <circle cx="195" cy="140" r="7" fill="url(#aboutGrad)" opacity=".8" />
                <circle cx="125" cy="20"  r="7" fill="#FBBF24" />
              </svg>

              <div className="about-pill about-pill-1">
                <div>
                  <div className="about-pill-label">Founded</div>
                  <div className="about-pill-value">Commonwealth Fellow</div>
                </div>
              </div>
              <div className="about-pill about-pill-2">
                <div>
                  <div className="about-pill-label">Excellence</div>
                  <div className="about-pill-value">Impact-First</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="srr">
            <span className="eyebrow">About FLUENTO</span>
            <h2 className="sec-h2">We Don't Just Deliver Training — We Build Capability</h2>

            <p style={{ fontSize: 13, color: 'var(--g500)', lineHeight: 1.8, marginBottom: 14 }}>
              At FLUENTO Corporate Learning Solutions, we help organizations build future-ready leaders,
              strengthen communication, develop high-performing teams, and prepare their workforce for
              the challenges of an AI-driven world.
            </p>
            <p style={{ fontSize: 13, color: 'var(--g500)', lineHeight: 1.8, marginBottom: 18 }}>
              Through executive masterclasses, leadership consulting, coaching, and customized learning
              solutionsssss, we don't simply deliver training — we build organizational capability that drives
              measurable business results.
            </p>

            <div className="check-list">
              {[
                ['Academic + Practical', '— Commonwealth SplitSite Doctoral Fellowship expertise'],
                ['AI-Driven World Ready', '— Human skills + digital fluency, together'],
                ['Measurable Results',    '— Business impact, not just training checkboxes'],
              ].map(([bold, rest]) => (
                <div key={bold} className="check-item">
                  <div className="check-dot">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="check-text"><strong>{bold}</strong> {rest}</div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" onClick={() => onNavigate('about')}>
              Meet Our Experts →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
