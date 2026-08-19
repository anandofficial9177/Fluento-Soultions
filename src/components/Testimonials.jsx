import '../App.css'

const TESTIMONIALS = [
  {
    text: "FLUENTO's Leadership Development Lab transformed how our senior team approaches strategy. Productivity improved and board communication reached an entirely new level. The ROI was measurable within 60 days.",
    initials: 'RK', name: 'Rajesh Kumar', role: 'CHRO, TechCorp India',
    company: 'TECHCORP INDIA',
    avatarGrad: 'linear-gradient(135deg,#01a3a1,#06B6D4)',
  },
  {
    text: "The AI Ready Workforce program was exceptional. Our teams went from resistant to enthusiastic about AI tools in just 3 days. Productivity metrics improved 34% in Q1. FLUENTO made it purposeful, not overwhelming.",
    initials: 'SP', name: 'Sunita Patel', role: 'CEO, FinServe Group',
    company: 'FINSERVE GROUP',
    avatarGrad: 'linear-gradient(135deg,#7C3AED,#01a3a1)',
  },
  {
    text: "Dr. Ashish and the FLUENTO team brought world-class L&D to our organization. This isn't corporate training — it's business transformation through learning. The customization sets them apart completely.",
    initials: 'AM', name: 'Arun Mehta', role: 'VP Learning, MNC Corp',
    company: 'MNC CORP',
    avatarGrad: 'linear-gradient(135deg,#06B6D4,#01a3a1)',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="inner">
        <div className="sh sh-center">
          <span style={{ fontSize:10, fontWeight:700, color:'var(--cyanBr)', letterSpacing:3, textTransform:'uppercase', display:'block', marginBottom:10 }}>
            Client Stories
          </span>
          <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(24px,4vw,38px)', fontWeight:800, color:'#fff', letterSpacing:-1, marginBottom:12 }}>
            Trusted by Leaders Who Demand Excellence
          </h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testimonial-card"
              style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div className="testimonial-avatar" style={{ background: t.avatarGrad }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
              <div className="testimonial-company">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
