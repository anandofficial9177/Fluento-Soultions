import { useEffect, useRef } from 'react'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'


const STAGES = [
  {
    number: '01',
    short: 'DISCOVER',
    title: 'Stage 1 — Discover',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 5 5" />
        <path d="M8.5 11h5" />
        <path d="M11 8.5v5" />
      </svg>
    ),

    desc:
      'We begin with deep organizational diagnostics — stakeholder interviews, leadership 360°s, and performance data analysis — to uncover the real learning gaps and identify what will truly move the needle for your organization.',

    label: 'Understand the real challenge',
    color: 'blue',
  },

  {
    number: '02',
    short: 'CONSULT',
    title: 'Stage 2 — Consult',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4.5A2.5 2.5 0 0 1 1.5 14V8A2.5 2.5 0 0 1 4 5.5Z" />
        <path d="M7 9h9M7 12.5h6" />
      </svg>
    ),

    desc:
      "We align with your leadership team on business objectives, success metrics, and program parameters — ensuring every learning element connects directly to your organization's most critical priorities and measurable outcomes.",

    label: 'Align learning with business',
    color: 'cyan',
  },

  {
    number: '03',
    short: 'CUSTOMIZE',
    title: 'Stage 3 — Customize',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 20 15.5 8.5" />
        <path d="m14 6 4 4" />
        <path d="m16 4 4 4" />
        <path d="M3 21h6" />
        <path d="M18 14v6M15 17h6" />
      </svg>
    ),

    desc:
      "Our instructional designers — led by Dr. Ashams Joe — craft a bespoke learning journey using your company's real challenges and context. Every module, case study, and simulation is designed specifically for your people. No off-the-shelf content. Ever.",

    label: 'Built around your people',
    color: 'purple',
  },

  {
    number: '04',
    short: 'DELIVER',
    title: 'Stage 4 — Deliver',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v11H4z" />
        <path d="M8 21h8" />
        <path d="M12 16v5" />
        <path d="m10 10 5-2.5-5-2.5z" />
      </svg>
    ),

    desc:
      'Expert facilitators deliver high-energy, immersive learning experiences through executive masterclasses, in-person workshops, online sessions, and action-learning projects tied to real business problems. Available In-House, In Person & Online.',

    label: 'Experience learning that sticks',
    color: 'blue',
  },

  {
    number: '05',
    short: 'COACH',
    title: 'Stage 5 — Coach',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c.5-4.2 3.2-7 7-7s6.5 2.8 7 7" />
        <path d="M18 4v3M16.5 5.5h3" />
      </svg>
    ),

    desc:
      'Dr. Ashish Joe provides ongoing executive coaching and peer accountability structures to ensure new behaviors take root and compound over time. Participants get continued access to their coach following program completion.',

    label: 'Turn learning into behavior',
    color: 'cyan',
  },

  {
    number: '06',
    short: 'MEASURE IMPACT',
    title: 'Stage 6 — Measure Impact',

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5" />
        <path d="M4 19h17" />
        <path d="m7 15 4-4 3 2 6-7" />
        <path d="M16 6h4v4" />
      </svg>
    ),

    desc:
      "We deliver a comprehensive Impact Report using the Kirkpatrick Model — measuring reaction, learning, behavior change, and business results. You'll see exactly what changed, by how much, and what the ROI of your investment was.",

    label: 'Prove the business impact',
    color: 'impact',
    highlight: true,
  },
]


export default function HowWeWork({
  onNavigate,
  onContactClick,
  onDemoClick,
  onToast
}) {

  const sectionRef = useRef(null)


  useEffect(() => {

    const section = sectionRef.current

    if (!section) return

    const items =
      section.querySelectorAll('.how-reveal')


    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }

        })

      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    )


    items.forEach(item => observer.observe(item))


    return () => observer.disconnect()

  }, [])


  return (
    <>

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="how-hero">

        <div className="how-hero-glow" />

        <div className="how-hero-grid" />

        <div className="how-hero-orb how-hero-orb-one" />
        <div className="how-hero-orb how-hero-orb-two" />


        <div className="how-hero-content">

          <span className="how-eyebrow">
            <span className="how-eyebrow-dot" />
            OUR METHODOLOGY
          </span>


          <h1>
            The FLUENTO
            <span>Learning Architecture</span>
          </h1>


          <div className="how-hero-line" />


          <p>
            A proven, science-backed 6-stage methodology
            that turns learning investment into measurable
            business transformation.
          </p>


          <div className="how-hero-meta">

            <div>
              <strong>06</strong>
              <span>STAGES</span>
            </div>

            <div>
              <strong>01</strong>
              <span>JOURNEY</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>IMPACT</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          METHODOLOGY
      ===================================================== */}

      <section
        className="how-section"
        ref={sectionRef}
      >

        <div className="how-section-header how-reveal">

          <span className="how-section-eyebrow">
            HOW WE WORK
          </span>

          <h2>
            From <span>Insight</span> to
            <br />
            <span>Impact</span>
          </h2>

          <p>
            Every FLUENTO engagement follows a structured
            journey designed to create meaningful,
            measurable and lasting transformation.
          </p>

        </div>


        <div className="how-timeline">

          {/* Central line */}
          <div className="how-timeline-line">
            <div className="how-timeline-progress" />
          </div>


          {STAGES.map((stage, index) => (

            <article
              key={stage.number}
              className={`
                how-stage
                ${index % 2 === 0 ? 'stage-left' : 'stage-right'}
                ${stage.highlight ? 'stage-highlight' : ''}
                how-reveal
              `}
              style={{
                '--stage-delay': `${index * 100}ms`
              }}
            >

              {/* Number node */}
              <div className="how-stage-node">

                <span>
                  {stage.number}
                </span>

              </div>


              {/* Card */}
              <div className="how-stage-card">

                <div className="how-stage-top">

                  <div className={`how-stage-icon ${stage.color}`}>
                    {stage.icon}
                  </div>


                  <div className="how-stage-heading">

                    <span className="how-stage-label">
                      {stage.short}
                    </span>

                    <h3>
                      {stage.title}
                    </h3>

                  </div>

                </div>


                <p className="how-stage-description">
                  {stage.desc}
                </p>


                <div className="how-stage-footer">

                  <span className="how-stage-result">
                    <span className="result-dot" />
                    {stage.label}
                  </span>

                  <span className="how-stage-index">
                    {stage.number} / 06
                  </span>

                </div>


                {/* Hover glow */}
                <div className="how-card-glow" />

              </div>

            </article>

          ))}

        </div>


        {/* Final outcome
        <div className="how-outcome how-reveal">

          <div className="how-outcome-icon">

            <svg viewBox="0 0 24 24" fill="none">

              <path d="M4 19V5" />
              <path d="M4 19h17" />
              <path d="m7 15 4-4 3 2 6-7" />

            </svg>

          </div>


          <div>

            <span>
              THE OUTCOME
            </span>

            <h3>
              Learning that creates measurable
              <strong> business impact.</strong>
            </h3>

          </div>


          <div className="how-outcome-arrow">
            →
          </div>

        </div> */}

      </section>


      <CtaBanner
        onContactClick={onContactClick}
        onDemoClick={onDemoClick}
      />

   <Footer
        onNavigate={onNavigate}
        onContactClick={onContactClick}
        onDemoClick={onDemoClick}
        onToast={onToast}
      />

    </>
  )
}