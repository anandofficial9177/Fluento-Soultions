import { useRef, useState, useEffect } from 'react'
import '../App.css'
import bgVideo from '../assets/bgvideo.mp4'

export default function Hero({ onContactClick, onDemoClick }) {
  const bgVideoRef   = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Fade in the bg video once it can play
  useEffect(() => {
    const v = bgVideoRef.current
    if (!v) return
    const handler = () => setVideoLoaded(true)
    v.addEventListener('canplay', handler)
    return () => v.removeEventListener('canplay', handler)
  }, [])

  return (
    <section className="hero hero-video">

      {/* ── Background video (muted, looping, no controls) ── */}
 <video
  ref={bgVideoRef}
  className={`hero-bg-video ${videoLoaded ? 'loaded' : ''}`}
  src={bgVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>

      {/* ── Gradient overlay so text stays readable ── */}
      <div className="hero-video-overlay" />

      {/* ── Animated orbs (still layered on top) ── */}
      <div className="hero-orb" style={{
        width: 520, height: 520,
        background: 'rgba(37,99,235,.18)',
        top: -140, right: -100,
        animation: 'orbFloat 14s ease-in-out infinite',
      }} />
      <div className="hero-orb" style={{
        width: 320, height: 320,
        background: 'rgba(6,182,212,.14)',
        bottom: -60, left: -60,
        animation: 'orbFloat 11s ease-in-out infinite 3s',
      }} />

      {/* ── Minimal hero content ── */}
      <div className="hero-minimal-inner">

        {/* Badge */}
        <div className="hero-badge" style={{ animation: 'fadeUp .7s ease both' }}>
          <span className="hero-badge-dot" />
          Flow into Excellence
        </div>

        {/* H1 */}
        <h1 className="hero-h1">
          <span className="line-1">Learn.</span>
          <span className="line-2">Lead.</span>
          <span className="line-3">Launch.</span>
        </h1>

        {/* One-line subtitle only */}
        <p className="hero-minimal-sub">
          Empowering leaders, transforming organizations,<br />
          shaping the future of work.
        </p>

        {/* CTA buttons */}
        <div className="hero-minimal-btns">
<button
  className="btn btn-primary"
  onClick={onContactClick}
>
  Book a Free Consultation
</button>

          {/* Watch Demo — triggers fullscreen player */}
          <button className="hero-play-btn" onClick={onDemoClick}>
            <span className="hero-play-circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5l10 5.5-10 5.5V2.5z" fill="white" />
              </svg>
            </span>
            Watch Platform Demo
          </button>
        </div>

        {/* Minimal floating stats strip */}
        {/* <div className="hero-stats-strip">
          {[
            { n: '500+',  l: 'Companies' },
            { n: '10K+',  l: 'Professionals' },
            { n: '98%',   l: 'Satisfaction' },
            { n: '8+',    l: 'Years' },
          ].map(s => (
            <div key={s.l} className="hero-stat-chip">
              <span className="hero-stat-n">{s.n}</span>
              <span className="hero-stat-l">{s.l}</span>
            </div>
          ))}
        </div> */}
      </div>

      {/* ── Bottom scroll hint ── */}
      {/* <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span>Scroll to explore</span>
      </div> */}
    </section>
  )
}