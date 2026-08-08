import '../App.css'

const INDUSTRIES = [
  { name:'Information Technology', icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="4" y="6" width="22" height="16" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M9 26h22M15 26v4M21 26v4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12h8M9 16h5" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name:'Manufacturing',          icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="7" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M19 5v4M19 29v4M5 19h4M29 19h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/><circle cx="19" cy="19" r="3" fill="#2563EB"/></svg> },
  { name:'Healthcare',             icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M19 5l3 8h8l-6.5 5 2.5 8-7-5-7 5 2.5-8L8 13h8z" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)" strokeLinejoin="round"/></svg> },
  { name:'Education',              icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="7" y="16" width="24" height="17" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M7 22h24" stroke="#2563EB" strokeWidth="1"/><path d="M14 8h10l4 8H10z" stroke="#2563EB" strokeWidth="1.5" fill="rgba(6,182,212,.08)" strokeLinejoin="round"/></svg> },
  { name:'Oil & Gas',              icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M19 8c-5.5 0-10 4.5-10 10 0 4 2 7.5 5 9.5V32h10v-4.5c3-2 5-5.5 5-9.5 0-5.5-4.5-10-10-10z" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M19 13v5l3 2" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name:'Finance & BFSI',         icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M7 28l8-9 5 4 7-10 8 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="26.5" width="30" height="1.5" rx=".75" fill="#CBD5E1"/></svg> },
  { name:'Retail & Consumer',      icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="12" width="22" height="20" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M15 12v-3a4 4 0 018 0v3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M13 21h12M13 25h8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name:'Government & PSU',       icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="7" y="18" width="24" height="15" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="rgba(37,99,235,.05)"/><path d="M5 18h28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 10h12l3 8H10z" stroke="#2563EB" strokeWidth="1.5" fill="rgba(6,182,212,.07)" strokeLinejoin="round"/></svg> },
]

export default function Industries() {
  return (
    <section className="section section-alt">
      <div className="inner">
        <div className="sh sh-center">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="sec-h2">Sector-Native Expertise</h2>
          <p className="sec-sub">
            From IT giants to oil majors — FLUENTO's programs are industry-contextualized
            and results-driven.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.name} className={`industry-card sc`}
              style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="industry-icon">{ind.icon}</div>
              <div className="industry-name">{ind.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
