import { useEffect, useRef, useState } from 'react'
import '../App.css'

export default function VideoModal({ onClose }) {
  const videoRef     = useRef(null)
  const containerRef = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted]       = useState(false)
  const [volume, setVolume]     = useState(1)
  const [showControls, setShowControls] = useState(true)
  const hideTimer = useRef(null)

  // Auto-play when modal opens
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  // Hide controls after 3s of inactivity
  const resetHideTimer = () => {
    setShowControls(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
  }

  useEffect(() => {
    resetHideTimer()
    return () => clearTimeout(hideTimer.current)
  }, [])

  // ESC closes modal
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Video event handlers
  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0)
  }

  const handleEnded = () => setPlaying(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else          { v.pause(); setPlaying(false) }
  }

  const seek = (e) => {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct  = (e.clientX - rect.left) / rect.width
    v.currentTime = pct * v.duration
    setProgress(pct * 100)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const changeVolume = (e) => {
    const v = videoRef.current
    if (!v) return
    const val = parseFloat(e.target.value)
    v.volume = val
    setVolume(val)
    setMuted(val === 0)
  }

  // Native fullscreen
  const toggleFullscreen = () => {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) el.requestFullscreen?.()
    else document.exitFullscreen?.()
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60), sec = Math.floor(s % 60)
    return `${m}:${sec < 10 ? '0' : ''}${sec}`
  }

  const currentTime = duration ? (progress / 100) * duration : 0

  return (
    <div className="fsvid-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div
        ref={containerRef}
        className="fsvid-container"
        onMouseMove={resetHideTimer}
        onMouseLeave={() => { if (playing) setShowControls(false) }}
      >
        {/* ── Video element ── */}
        <video
          ref={videoRef}
          className="fsvid-video"
          src="/hero-demo.mp4"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onClick={togglePlay}
          playsInline
        />

        {/* ── Top bar: close button ── */}
        <div className={`fsvid-top ${showControls ? 'controls-visible' : 'controls-hidden'}`}>
          <div className="fsvid-top-left">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="5" fill="url(#fsLogoGrad)"/>
              <defs>
                <linearGradient id="fsLogoGrad" x1="0" y1="0" x2="20" y2="20">
                  <stop stopColor="#2563EB"/><stop offset="1" stopColor="#06B6D4"/>
                </linearGradient>
              </defs>
              <path d="M4 4h7a3 3 0 010 6H4V4z" fill="rgba(255,255,255,.9)"/>
            </svg>
            <span className="fsvid-title">FLUENTO Platform Demo</span>
          </div>
          <button className="fsvid-close-btn" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Close</span>
          </button>
        </div>

        {/* ── Center play/pause icon (shown briefly on toggle) ── */}
        {!playing && (
          <div className="fsvid-center-play" onClick={togglePlay}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 4l18 10-18 10V4z" fill="white"/>
            </svg>
          </div>
        )}

        {/* ── Bottom controls ── */}
        <div className={`fsvid-controls ${showControls ? 'controls-visible' : 'controls-hidden'}`}>

          {/* Progress bar */}
          <div className="fsvid-progress" onClick={seek}>
            <div className="fsvid-progress-fill" style={{ width: `${progress}%` }} />
            <div className="fsvid-progress-thumb" style={{ left: `${progress}%` }} />
          </div>

          {/* Controls row */}
          <div className="fsvid-controls-row">
            {/* Play/Pause */}
            <button className="fsvid-ctrl-btn" onClick={togglePlay} title={playing ? 'Pause' : 'Play'}>
              {playing
                ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="5" height="14" rx="1" fill="white"/><rect x="10" y="2" width="5" height="14" rx="1" fill="white"/></svg>
                : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 2.5l12 6.5-12 6.5V2.5z" fill="white"/></svg>
              }
            </button>

            {/* Volume */}
            <button className="fsvid-ctrl-btn" onClick={toggleMute} title="Mute/Unmute">
              {muted || volume === 0
                ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 6h3l4-4v14l-4-4H3z" fill="white"/><path d="M14 6l-4 4M14 10l-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 6h3l4-4v14l-4-4H3z" fill="white"/><path d="M13 6a4 4 0 010 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
              }
            </button>
            <input
              className="fsvid-volume-slider"
              type="range" min="0" max="1" step="0.05"
              value={muted ? 0 : volume}
              onChange={changeVolume}
            />

            {/* Time */}
            <span className="fsvid-time">{fmt(currentTime)} / {fmt(duration)}</span>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Fullscreen */}
            <button className="fsvid-ctrl-btn" onClick={toggleFullscreen} title="Fullscreen">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 7V3h4M11 3h4v4M15 11v4h-4M7 15H3v-4"
                  stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}