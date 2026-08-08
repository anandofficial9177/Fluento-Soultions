import '../App.css'

export default function VideoShowcase({ onDemoClick }) {
  return (
    <section className="video-showcase">
      <div className="inner">
        <div className="sh sh-center">
          <span className="eyebrow">Platform in Action</span>
          <h2 className="sec-h2">See How FLUENTO Transforms Organizations</h2>
          <p className="sec-sub">
            Watch how FLUENTO's learning architecture takes organizations from training
            investment to measurable leadership impact.
          </p>
        </div>

        <div className="video-player" onClick={onDemoClick}>
          <div className="video-thumb">
            <div className="video-grid-overlay" />

            {/* Preview frame */}
            <div className="video-preview-frame">
              <div className="video-preview-bar">
                <div style={{ display: 'flex', gap: 4 }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                    <div key={c} className="video-preview-dot" style={{ background: c }} />
                  ))}
                </div>
              </div>
              <div className="video-preview-stats">
                {[['500+','Companies'],['10K+','Professionals'],['98%','Satisfaction']].map(([n,l]) => (
                  <div key={l} className="video-preview-stat">
                    <div className="video-preview-stat-n">{n}</div>
                    <div className="video-preview-stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Play button */}
            <div className="video-play-overlay">
              <div className="video-play-circle">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 3l14 9-14 9V3z" fill="white" />
                </svg>
              </div>
            </div>

            {/* Meta */}
            <div className="video-meta">
              <div className="video-label">Platform Demo</div>
              <div className="video-duration">2:34</div>
              <div className="video-title-text">Full FLUENTO Platform Walkthrough</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
