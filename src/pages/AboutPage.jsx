import { useEffect, useRef, useState } from 'react'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import AshishImge from '../assets/ashishImage.png'
import ShreeImage from '../assets/shree2.jpeg'
import AshamsImage from '../assets/Ashams1.jpeg'


const TEAM = [
  {
    name: 'Dr. Ashish Joe S S',
    role: 'Founder & Chief Learning Strategist',
    photo: AshishImge,
    bio: 'A visionary educator and leadership strategist with over a decade of expertise in communication training, organizational development, and executive coaching. A recipient of the prestigious Commonwealth SplitSite Doctoral Fellowship, he combines academic excellence with practical leadership experience to design transformative learning solutions. He has published widely and authored a book. At FLUENTO, Dr. Ashish champions the motto "Learn, Lead, Launch", helping organizations build future-ready leaders and drive sustainable success in an AI-driven world.',
    tag: 'Commonwealth Fellow · Published Author',
    number: '01'
  },
  {
    name: 'Subhashree S',
    role: 'Principal Leadership Consultant',
    photo: ShreeImage,
    bio: 'With over 12 years of global IT consulting experience, Subhashree brings deep expertise in the oil and gas sector, having worked with leading clients such as Total Petroleum, Shell, and Chevron. A Project Management Professional (PMP) certified consultant with specialized skills in SAP ISOIL, SAP SD, SAP S/4 HANA, SAP TM, and SAP Signavio. Her background combines technical mastery with business management acumen, enabling her to design learning solutions that bridge technology, strategy, and leadership.',
    tag: 'PMP Certified · SAP Expert · Shell · Total · Chevron',
    number: '02'
  },
  {
    name: 'Dr. Ashams Joe S S',
    role: 'Instructional Design Consultant',
    photo: AshamsImage,
    bio: 'Dr. Ashams Joe holds a PhD in Linguistics and Phonetics from the English and Foreign Language University. With over seven years of experience in B2B content strategy, curriculum design, and corporate communication, he has worked across industries to craft impactful training content and learning frameworks. At FLUENTO, he connects academic expertise with corporate training needs — ensuring programs are well-designed and aligned with organizational goals.',
    tag: 'PhD Linguistics · EFL University · B2B Curriculum Expert',
    number: '03'
  }
]

const VALUES = [
  {
    number: '01',
    title: 'Mission',
    text: 'Build future-ready leaders through world-class learning.',
    icon: '◎'
  },
  {
    number: '02',
    title: 'Vision',
    text: "Asia's most trusted corporate learning partner.",
    icon: '◌'
  },
  {
    number: '03',
    title: 'Motto',
    text: 'Learn. Lead. Launch.',
    icon: '✦'
  }
]

export default function AboutPage({
  onNavigate,
  onContactClick,
  onDemoClick,
  onToast
}) {

  const pageRef = useRef(null)
    const [activeTeamIndex, setActiveTeamIndex] = useState(0)


  useEffect(() => {
    const root = pageRef.current

    if (!root) return

    const elements = root.querySelectorAll(
      '.about-reveal, .about-stagger'
    )

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef} className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-grid" />

        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />
        <div className="about-orb about-orb-three" />

        <div className="about-hero-content">

          <div className="about-eyebrow about-reveal">
            <span className="about-eyebrow-line" />
            ABOUT FLUENTO
          </div>

          <h1 className="about-hero-title about-reveal">
            Where
            <span> Excellence </span>
            Meets
            <em> Purpose</em>
          </h1>

          <p className="about-hero-description about-reveal">
            We believe learning should flow with ease-helping people grow, leaders evolve, and organizations move towards excellence
          </p>

          <div className="about-hero-bottom about-reveal">

            <div className="about-scroll">
              <span className="about-scroll-line" />
              <span>Scroll to explore</span>
            </div>
{/* 
            <div className="about-hero-motto">
              LEARN
              <span>·</span>
              LEAD
              <span>·</span>
              LAUNCH
            </div> */}

          </div>

        </div>

        <div className="about-hero-number">
          01
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story section">

        <div className="about-story-inner">

          <div className="about-section-label about-reveal">
            <span>01</span>
            OUR MISSION
          </div>

          <div className="about-story-layout">

            <div className="about-story-heading about-reveal">

              <h2>
                Learning that
                <span> moves </span>
                organizations
                <em> forward.</em>
              </h2>

            </div>

            <div className="about-story-copy about-reveal">

              <p>
                At FLUENTO Corporate Learning Solutions, we help
                organizations build future-ready leaders, strengthen
                communication, develop high-performing teams, and
                prepare their workforce for the challenges of an
                AI-driven world.
              </p>

              <p>
                Through executive masterclasses, leadership consulting,
                coaching, and customized learning solutions, we build
                organizational capability that drives measurable
                business results.
              </p>

                  <div className="check-list">
              {[
                ['Customized Context', '— Designed around your needs'],
                ['People + Performance', '— Growth that drives outcomes'],
                ["Buit For What's Next", '— Ready for AI, innovation and change'],
                ['Measurable Results',    '— Business impact, not just training checkboxes'],
              ].map(([bold, rest]) => (
                <div key={bold} className="check-item">
                  <div className="check-dot">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="#01a3a1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="check-text"><strong>{bold}</strong> {rest}</div>
                </div>
              ))}
            </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION / MOTTO
      ===================================================== */}

      <section className="about-values">

        <div className="about-values-glow" />

        <div className="about-values-inner">

          <div className="about-section-label about-section-label-light about-reveal">
            <span>02</span>
            WHAT DRIVES US
          </div>

          <div className="about-values-header about-reveal">

            <h2>
              Purpose is our
              <span> foundation.</span>
            </h2>

            <p>
              Everything we design begins with a clear purpose:
              helping people and organizations become better versions
              of themselves.
            </p>

          </div>

          <div className="about-values-grid">

            {VALUES.map((value, index) => (

              <div
                key={value.title}
                className="about-value-card about-stagger"
                style={{
                  transitionDelay: `${index * 120}ms`
                }}
              >

                <div className="about-value-top">

                  <span className="about-value-number">
                    {value.number}
                  </span>

                  <span className="about-value-icon">
                    {value.icon}
                  </span>

                </div>

                <div className="about-value-content">

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </div>

                <div className="about-value-arrow">
                  ↗
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM
      ===================================================== */}
<div className="about-team-showcase">

  {/* =========================================
      LEFT SIDE — CONSTANT CONTENT
  ========================================= */}
  <div className="about-team-left">

    <div className="about-section-label">
      <span>03</span>
      MEET OUR EXPERTS
    </div>

    <h2>
      The learning
      <span> architects behind</span>
      <em>FLUENTO</em>
    </h2>

    {/* <p className="about-team-description">
      Our experts bring together academic excellence,
      practical leadership experience, and a passion
      for transformative learning.
    </p> */}

  </div>


  {/* =========================================
      RIGHT SIDE — ONE PERSON AT A TIME
  ========================================= */}
  <div className="about-team-right">

    {TEAM.map((member, index) => {

      if (index !== activeTeamIndex) return null

      return (

        <article
          key={member.name}
          className="about-team-single-card"
        >

          {/* IMAGE */}
          <div
            className="about-team-single-photo"
            style={{
  backgroundImage: `url(${member.photo})`
}}
          >

            <div className="about-team-photo-grid" />

            <div className="about-team-number">
              {member.number}
            </div>

            <div className="about-team-photo-overlay" />

          </div>


          {/* PERSON DETAILS */}
          <div className="about-team-single-body">

            <div className="about-team-role">
              {member.role}
            </div>

            <h3>
              {member.name}
            </h3>

            <p>
              {member.bio}
            </p>

            {/* <div className="about-team-tag">
              <span>✦</span>
              {member.tag}
            </div> */}

          </div>


          {/* NEXT BUTTON */}
          <button
            className="about-team-next"
            onClick={() => {
              setActiveTeamIndex(
                (prev) => (prev + 1) % TEAM.length
              )
            }}
            aria-label="Next team member"
          >

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

        </article>

      )

    })}

  </div>

</div>


      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      {/* <section className="about-closing">

        <div className="about-closing-orb" />

        <div className="about-closing-inner about-reveal">

          <span className="about-closing-small">
            THE FLUENTO BELIEF
          </span>

          <h2>
            When people
            <span> grow,</span>
            <br />
            organizations
            <em> thrive.</em>
          </h2>

          <p>
            We don't just deliver training.
            We create experiences that change how people
            think, communicate, lead and perform.
          </p>

        </div>

      </section> */}


      <CtaBanner
        onContactClick={onContactClick}
        onDemoClick={onDemoClick}
        heading="Partner With Our Experts"
        sub="Let's build a custom learning solution for your organization."
      />

      <Footer
        onNavigate={onNavigate}
        onContactClick={onContactClick}
        onDemoClick={onDemoClick}
        onToast={onToast}
      />

    </div>
  )
}