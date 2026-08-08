import { useEffect, useRef, useState } from 'react'
import '../App.css'

function useCounter(target, duration = 2200, delay = 0) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(ease * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [started, target, duration, delay])

  return [value, setStarted]
}

function StatCard({ target, suffix, label, icon, delay }) {
  const [count, setStarted] = useCounter(target, 2200, delay)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <StatCard target={500}   suffix="+" label="Companies Transformed"   delay={0}
          icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="4" y="14" width="9" height="16" rx="2" fill="rgba(37,99,235,.35)"/><rect x="14.5" y="8" width="9" height="22" rx="2" fill="rgba(37,99,235,.55)"/><rect x="25" y="18" width="9" height="12" rx="2" fill="rgba(6,182,212,.55)"/></svg>}
        />
        <StatCard target={10000} suffix="+" label="Professionals Upskilled" delay={200}
          icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="13" r="6" fill="rgba(37,99,235,.5)"/><path d="M8 30c0-6.1 4.9-11 11-11s11 4.9 11 11" stroke="rgba(6,182,212,.8)" strokeWidth="2.5" strokeLinecap="round" fill="none"/></svg>}
        />
        <StatCard target={200}   suffix="+" label="Workshops Delivered"     delay={400}
          icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="5" y="9" width="28" height="18" rx="3" fill="rgba(37,99,235,.18)" stroke="rgba(37,99,235,.45)" strokeWidth="1.5"/><path d="M12 17h14M12 21h9" stroke="rgba(6,182,212,.8)" strokeWidth="2" strokeLinecap="round"/></svg>}
        />
        <StatCard target={8}     suffix="+" label="Years of Excellence"     delay={600}
          icon={<svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="13" stroke="rgba(37,99,235,.4)" strokeWidth="2" fill="none"/><path d="M19 10v9l5 4" stroke="rgba(6,182,212,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="19" cy="19" r="2" fill="rgba(6,182,212,.9)"/></svg>}
        />
      </div>
    </section>
  )
}
