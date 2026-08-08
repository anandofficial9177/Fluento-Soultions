import '../App.css'

const TRADITIONAL = [
  'Generic off-the-shelf content, zero customization',
  'Disconnected from real business challenges',
  'No post-training coaching or follow-through',
  'No AI readiness or future-skills integration',
  'ROI is anecdotal, never quantified',
]
const FLUENTO = [
  'Fully customized programs aligned to business outcomes',
  'Industry-specific expertise — oil & gas, IT, finance, BFSI',
  'Executive coaching with milestone accountability',
  'AI fluency integrated across every learning program',
  'Quantified impact reports with measurable ROI',
]

const XIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M2.5 2.5l4 4M6.5 2.5l-4 4" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M1.5 4.5l2 2 4-4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function WhyFluento() {
  return (
    <section className="why-section">
      <div className="orb" style={{
        width:400, height:400, background:'rgba(37,99,235,.1)',
        top:-80, right:-80, position:'absolute', filter:'blur(90px)',
      }} />

      <div className="inner" style={{ position:'relative', zIndex:2 }}>
        <div className="sh sh-center">
          <span style={{ fontSize:10, fontWeight:700, color:'var(--cyanBr)', letterSpacing:3, textTransform:'uppercase', display:'block', marginBottom:10 }}>
            Why FLUENTO
          </span>
          <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(24px,4vw,40px)', fontWeight:800, color:'#fff', letterSpacing:-1, marginBottom:10 }}>
            A Different Kind of Partner
          </h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,.5)', maxWidth:460, margin:'0 auto', lineHeight:1.8 }}>
            Why growth-focused organizations choose FLUENTO over traditional training vendors.
          </p>
        </div>

        <div className="why-cards">
          {/* Traditional */}
          <div className="why-card why-card-traditional">
            <div className="why-card-title">
              Traditional Training
              <span className="why-badge why-badge-old">Legacy</span>
            </div>
            {TRADITIONAL.map(text => (
              <div key={text} className="why-item">
                <div className="why-item-icon why-item-no"><XIcon /></div>
                <div className="why-item-text">{text}</div>
              </div>
            ))}
          </div>

          {/* FLUENTO */}
          <div className="why-card why-card-fluento">
            <div className="why-card-title">
              FLUENTO Approach
              <span className="why-badge why-badge-new">Excellence</span>
            </div>
            {FLUENTO.map(text => (
              <div key={text} className="why-item">
                <div className="why-item-icon why-item-yes"><CheckIcon /></div>
                <div className="why-item-text ok">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
