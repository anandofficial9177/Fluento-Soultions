import '../App.css'

const POSTS = [
  {
    thumb: { bg:'linear-gradient(135deg,#EEF2FF,#DBEAFE)' },
    category: 'AI & Future of Work',
    title: 'Why Every Leader Needs an AI Literacy Baseline in 2025',
    meta: 'FLUENTO Research · Dec 2024 · 7 min',
  },
  {
    thumb: { bg:'linear-gradient(135deg,#F0FDF4,#DCFCE7)' },
    category: 'Leadership',
    title: 'The 5 Habits That Separate Good Leaders from Truly Great Ones',
    meta: 'Dr. Ashish Joe S S · Nov 2024 · 5 min',
  },
  {
    thumb: { bg:'linear-gradient(135deg,#FFF7ED,#FEF3C7)' },
    category: 'L&D Strategy',
    title: 'Measuring Real ROI on Corporate Learning: A Framework That Works',
    meta: 'FLUENTO Team · Oct 2024 · 8 min',
  },
]

export default function Blog({ onToast }) {
  return (
    <section className="section">
      <div className="inner">
        <div className="sh">
          <span className="eyebrow">Insights</span>
          <h2 className="sec-h2">Thought Leadership from FLUENTO</h2>
          <p className="sec-sub">
            Expert perspectives on leadership, the future of work, and building
            high-performance organizations.
          </p>
        </div>

        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <div key={p.title} className="blog-card sr"
              style={{ transitionDelay: `${i * 0.15}s` }}
              onClick={() => onToast('Opening article...')}>
              <div className="blog-thumb" style={{ background: p.thumb.bg }} />
              <div className="blog-body">
                <div className="blog-cat">{p.category}</div>
                <div className="blog-title">{p.title}</div>
                <div className="blog-meta">{p.meta}</div>
                <div className="blog-read">Read Article <span>→</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
