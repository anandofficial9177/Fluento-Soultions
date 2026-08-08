import '../App.css'

const STORIES = [
  { company:'TechCorp India',  title:'"How Leadership Training Doubled Our Manager Effectiveness Score"', duration:'3:18', bg:'linear-gradient(135deg,#071A35,#1a3a6e)' },
  { company:'FinServe Group',  title:'"Our AI Upskilling Journey: From Resistance to +34% Productivity"', duration:'2:47', bg:'linear-gradient(135deg,#2D1B69,#1a3a6e)' },
  { company:'MNC Corp',        title:'"Transforming 2000 Employees: Inside a Full-Scale FLUENTO Deployment"', duration:'4:05', bg:'linear-gradient(135deg,#064E3B,#0C2860)' },
]

export default function VideoStories({ onDemoClick }) {
  return (
    <section className="video-stories-section">
      <div className="inner">
        <div className="sh">
          <span className="eyebrow">Video Testimonials</span>
          <h2 className="sec-h2">Stories of Transformation</h2>
          <p className="sec-sub">
            Hear directly from leaders who've experienced the FLUENTO difference
            in their organizations.
          </p>
        </div>

        <div className="video-stories-grid">
          {STORIES.map((s, i) => (
            <div key={s.company} className="video-story-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
              onClick={onDemoClick}>
              <div className="video-story-thumb" style={{ background: s.bg }}>
                <div className="video-story-play">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2l9 5-9 5V2z" fill="#071A35" />
                  </svg>
                </div>
                <div className="video-story-duration">{s.duration}</div>
              </div>
              <div className="video-story-body">
                <div className="video-story-company">{s.company}</div>
                <div className="video-story-title">{s.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
