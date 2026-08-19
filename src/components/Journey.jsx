import { useEffect, useRef, useState } from 'react'
import '../App.css'

const STEPS = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/><path d="M20 20l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, name:'Discover', desc:'Needs analysis & diagnostic', active:true },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12h10M7 8h6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="4" width="18" height="16" rx="3" stroke="#94A3B8" strokeWidth="1.5" fill="none"/></svg>, name:'Consult', desc:'Strategic alignment' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l1.5 3h3.5l-2.8 2.2.9 3L12 9.5 9.9 11.2l.9-3L8 6h3.5z" stroke="#94A3B8" strokeWidth="1.5" fill="none"/><path d="M6 18h12M8 21h8" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/></svg>, name:'Customize', desc:'Bespoke design' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-14 9V3z" stroke="#94A3B8" strokeWidth="1.5" strokeLinejoin="round" fill="none"/></svg>, name:'Deliver', desc:'Expert facilitation' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#94A3B8" strokeWidth="1.5" fill="none"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>, name:'Coach', desc:'Ongoing mentoring' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="4" height="7" rx="1" stroke="#94A3B8" strokeWidth="1.5" fill="none"/><rect x="10" y="9" width="4" height="12" rx="1" stroke="#94A3B8" strokeWidth="1.5" fill="none"/><rect x="17" y="4" width="4" height="17" rx="1" stroke="#94A3B8" strokeWidth="1.5" fill="none"/></svg>, name:'Measure', desc:'Quantified impact' },
]

export default function Journey({ onNavigate }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setAnimated(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" ref={ref}>
      <div className="inner">
        <div className="sh sh-center">
          <span className="eyebrow">Our Methodology</span>
          <h2 className="sec-h2">Your FLUENTO Learning Journey</h2>
          <p className="sec-sub">
            A proven 6-stage architecture that converts learning investment into
            measurable organizational transformation.
          </p>
        </div>

        <div className="journey-wrap">
          <div className="journey-track">
            <div className={`journey-track-fill ${animated ? 'animated' : ''}`} />
          </div>

          <div className="journey-steps">
            {STEPS.map((step, i) => (
              <div key={step.name} className="journey-step"
                style={{ transitionDelay: `${i * 0.1}s` }}
                onClick={() => onNavigate('how')}>
                <div className="journey-step-num"
                  style={step.active ? {
                    background: 'linear-gradient(135deg,#01a3a1,#06B6D4)',
                    borderColor: 'transparent',
                  } : {}}>
                  {step.icon}
                </div>
                <div className="journey-step-name">{step.name}</div>
                <div className="journey-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign:'center', marginTop:34 }}>
          <button className="btn btn-primary" onClick={() => onNavigate('how')}>
            View Full Methodology →
          </button>
        </div>
      </div>
    </section>
  )
}
