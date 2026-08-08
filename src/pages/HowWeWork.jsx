import CtaBanner from '../components/CtaBanner'
import Footer    from '../components/Footer'

const STAGES = [
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="13" cy="13" r="9" stroke="white" strokeWidth="2"/><path d="M26 26l-4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, title:'Stage 1 — Discover', desc:"We begin with deep organizational diagnostics — stakeholder interviews, leadership 360°s, and performance data analysis — to uncover the real learning gaps and identify what will truly move the needle for your organization.", highlight:false },
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 8h16M6 14h12M6 20h8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, title:'Stage 2 — Consult', desc:"We align with your leadership team on business objectives, success metrics, and program parameters — ensuring every learning element connects directly to your organization's most critical priorities and measurable outcomes.", highlight:false },
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 22l5-5 4 3 8-10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title:'Stage 3 — Customize', desc:"Our instructional designers — led by Dr. Ashams Joe — craft a bespoke learning journey using your company's real challenges and context. Every module, case study, and simulation is designed specifically for your people. No off-the-shelf content. Ever.", highlight:false },
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 4l18 10-18 10V4z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/></svg>, title:'Stage 4 — Deliver', desc:"Expert facilitators deliver high-energy, immersive learning experiences through executive masterclasses, in-person workshops, online sessions, and action-learning projects tied to real business problems. Available In-House, In Person & Online.", highlight:false },
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="white" strokeWidth="2" fill="none"/><path d="M7 24c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>, title:'Stage 5 — Coach', desc:"Dr. Ashish Joe provides ongoing executive coaching and peer accountability structures to ensure new behaviors take root and compound over time. Participants get continued access to their coach following program completion.", highlight:false },
  { icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="16" width="5" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/><rect x="11.5" y="10" width="5" height="14" rx="1" stroke="white" strokeWidth="1.5" fill="none"/><rect x="19" y="4" width="5" height="20" rx="1" stroke="white" strokeWidth="1.5" fill="none"/></svg>, title:'Stage 6 — Measure Impact', desc:"We deliver a comprehensive Impact Report using the Kirkpatrick Model — measuring reaction, learning, behavior change, and business results. You'll see exactly what changed, by how much, and what the ROI of your investment was.", highlight:true },
]

export default function HowWeWork({ onNavigate, onBookClick, onDemoClick, onToast }) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-orb" style={{ width:260, height:260, top:-60, left:'10%', background:'rgba(37,99,235,.2)' }} />
        <div style={{ position:'relative', zIndex:2 }}>
          <span style={{ fontSize:10, fontWeight:700, color:'var(--cyanBr)', letterSpacing:3, textTransform:'uppercase', display:'block', marginBottom:10 }}>Our Methodology</span>
          <h1 className="page-hero-title">The FLUENTO<br /><span className="grad-text">Learning Architecture</span></h1>
          <p className="page-hero-sub">A proven, science-backed 6-stage methodology that turns learning investment into measurable business transformation.</p>
        </div>
      </div>

      <section className="section">
        <div className="inner">
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {STAGES.map(stage => (
              <div key={stage.title} className={`how-step-card ${stage.highlight ? 'highlight' : ''}`}>
                <div className="how-step-icon">{stage.icon}</div>
                <div>
                  <div className="how-step-title">{stage.title}</div>
                  <p className="how-step-desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onBookClick={onBookClick} onDemoClick={onDemoClick} />
      <Footer onNavigate={onNavigate} onBookClick={onBookClick} onDemoClick={onDemoClick} onToast={onToast} />
    </>
  )
}
