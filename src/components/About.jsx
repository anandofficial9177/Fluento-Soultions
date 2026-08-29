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
                    <stop stopColor="#01a3a1" />
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
            <span className="eyebrow" style={{fontSize:"20px"}}>OUR STORY </span>
            {/* <h2 className="sec-h2">Learning that moves <br/>Organizations forward</h2> */}
            <p style={{ fontSize: 20, color: 'var(--g500)', lineHeight: 1.8, marginBottom: 14 }}>
              FLUENTO began with simple conversations over coffee—with friends and family working in the corporate world, sharing the everyday challenges they faced. From presentations that lacked confidence to ineffective knowledge transfers, routine online meetings, communication gaps, and growing uncertainty around AI, the same concerns kept surfacing. Leadership and team dynamics were often overlooked, while training remained generic, technical, and sometimes painfully dull. We saw a need for something different: learning shaped around real needs, delivered by experienced professionals, and made practical, engaging, and organic. That spark became FLUENTO—a journey to help people and organizations flow into excellence.
            </p>
   

            {/* <div className="check-list">
              {[
                ['Customized Context', '— Designed around your needs'],
                ['People + Performance', '— Growth that drives outcomes'],
                ["Buit For What's Next", '— Ready for AI, innovation and change'],
                ['Measurable Results',    '— Business impact, not just training checkboxes'],
              ].map(([bold, rest]) => (
                <div key={bold} className="check-item">
                  <div className="check-dot">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="#01a3a1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="check-text"><strong>{bold}</strong> {rest}</div>
                </div>
              ))}
            </div> */}

            {/* <button className="btn btn-primary" onClick={() => onNavigate('about')}>
              MORE ABOUT US →
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
