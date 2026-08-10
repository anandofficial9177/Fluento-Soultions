import { useEffect, useRef, useState } from 'react'
import '../App.css'
import Footer from '../components/Footer'



const PROGRAM_DATA = [
  {
    title: 'Leadership Development Lab',

    desc:
      'Build confident leaders who inspire performance and drive organizational success. This immersive lab blends self-awareness, team dynamics, and strategic decision-making into a transformative leadership journey.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image: 'src/assets/leadership-development.jpg',

    theme: 'blue',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        width="30"
        height="30"
      >
        <circle
          cx="32"
          cy="32"
          r="29"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="32"
          cy="23"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="19"
          cy="34"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="45"
          cy="34"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M21 49c1.5-7 5-10 11-10s9.5 3 11 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M9 49c1-5 4-7 9-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M55 49c-1-5-4-7-9-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },


  {
    title:
      'Executive Communication & Strategic Influence',

    desc:
      'Master the art of communication that commands attention and shapes outcomes. From boardroom presentations to persuasive storytelling, this program equips executives to communicate with clarity, confidence, and impact.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      'src/assets/executive-communication.jpg',

    theme: 'purple',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        width="30"
        height="30"
      >
        <path
          d="M14 18h36a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H32l-10 8v-8h-8a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M19 30h26M19 38h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },


  {
    title: 'AI Ready Workforce',

    desc:
      'Prepare your teams for the intelligent workplace of tomorrow. This course bridges digital fluency with human skills — helping professionals harness AI tools while strengthening creativity, collaboration, and ethical leadership.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      'src/assets/ai-ready-workforce.jpg',

    theme: 'cyan',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        width="30"
        height="30"
      >
        <rect
          x="18"
          y="18"
          width="28"
          height="28"
          rx="6"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 30h14M25 36h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M32 9v7M32 48v7M9 32h7M48 32h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="m17 17 4 4M43 43l4 4M47 17l-4 4M21 43l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },


  {
    title:
      'Organizational Excellence & Innovation',

    desc:
      'Unlock the potential of your organization through strategic thinking, innovation, and sustainable growth. This program cultivates cultures of excellence where talent thrives and change becomes opportunity.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      'src/assets/organizational-excellence.jpg',

    theme: 'orange',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        width="30"
        height="30"
      >
        <path
          d="M32 8c-10 0-18 7-18 17 0 7 4 11 8 15 2 2 3 5 3 8h14c0-3 1-6 3-8 4-4 8-8 8-15 0-10-8-17-18-17Z"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 54h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M27 26c2-3 8-3 10 0-3 1-5 4-5 8-1-4-3-7-5-8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
]
const PROGRAM_DETAILS = {

  'Leadership Development Lab': {

    intro:
      "Today's organizations need leaders who can do more than manage- they must inspire, influence, adapt, and drive meaningful results. The Leadership Development Lab is an immersive executive course designed to cultivate leadership capability at every level, equipping participants with the mindset and practical skills to lead confidently in an increasingly complex business environment. Participants explore leadership styles, team dynamics, and strategic decision-making through immersive experiences that go beyond theory.",

    customization:
      "Every Leadership Development Lab is fully tailored to your organization's leadership maturity, business objectives, industry context, and organizational challenges. We believe leadership development should never be generic- it should be designed around the leaders you have and the leaders you aspire to build.",

    benefits: [
      "Master the Transition Triad: Successfully shift your focus from personal output to team-wide excellence.",
      "Enhanced Executive Presence: Lead with the credibility and confidence required to influence stakeholders across all levels.",
      "Strategic Team Building: Cultivate high-performing teams by fostering accountability, collaboration, and psychological safety.",
      "Advanced Decision Intelligence: Develop the mindset to make informed strategic choices in complex, dynamic business environments.",
      "Measurable Performance: Translate leadership principles into actionable blueprints that drive immediate business results."
    ]

  },


  'Executive Communication & Strategic Influence': {

    intro:
      "In today's business landscape, communication is more than a skill—it is a strategic advantage. From boardroom presentations to persuasive storytelling, participants learn to command attention and shape outcomes as part of the Executive Communication & Strategic Influence course. Designed around real organizational scenarios, the program transforms communication into a powerful leadership capability. It equips the learners to make business case presentations, influence stakeholders, lead meetings and navigate complex workspace conversations. This course is designed to transform how executives communicate with confidence and influence with purpose.",

    customization:
      "Every session is customized to reflect your organization's communication culture, business environment, leadership expectations, and industry-specific challenges. Every learning journey is designed to solve real communication needs—not deliver generic content.",

    benefits: [
      "Command the Boardroom: Deliver persuasive business cases and presentations that shape executive outcomes.",
      "Strategic Data Storytelling: Master the skill of using information to structure clear, impactful discussions for meetings and proposals.",
      "Navigate Complex Conversations: Gain the professionalism and tactical skills required for difficult negotiations and cross-cultural communication.",
      "Influence Without Authority: Strengthen your ability to align stakeholders and drive organizational change through purposeful dialogue.",
      "Credibility & Representation: Represent your organization with a refined presence that builds lasting trust with internal and external partners."
    ]

  },


  'AI Ready Workforce': {

    intro:
      "Artificial Intelligence is transforming the way organizations work but people determine organizational growth. The AI Ready Workforce course bridges the gap between digital fluency and human intelligence. Rather than concentrating solely on technology, the program explores how organizations can build adaptable, future-ready teams. Participants explore how to combine critical thinking, creativity, collaboration and ethical leadership with AI-powered tools to create a lasting competitive advantage.",

    customization:
      "Every AI Ready Workforce program is designed specifically around your organization's digital maturity, workforce capability, transformation goals, and industry landscape. We tailor every learning experience to ensure immediate relevance and business impact.",

    benefits: [
      "Develop an AI-Ready Mindset: Shift from tech-avoidance to a strategic mindset that embraces AI as a catalyst for business growth.",
      "Exponential Productivity: Increase efficiency through workflow automation and the effective use of AI-powered research and communication tools.",
      "Strengthen Human-Centric Skills: Enhance critical thinking, emotional intelligence, and creativity—skills that remain uniquely human in the digital age.",
      "Responsible AI Governance: Identify opportunities for ethical AI adoption and learn to manage the risks of digital transformation.",
      "Future-Ready Roadmaps: Build practical action plans to align your workforce's digital maturity with the organization’s transformation goals."
    ]

  },


  'Organizational Excellence & Innovation': {

    intro:
      "Sustainable success is achieved when organizations continuously evolve, innovate, and build the capability to respond to change. The Organizational Excellence & Innovation course explores the intersection of business intelligence and creative problem-solving. Participants learn to build agile organizations that can sense and respond to external shifts before they impact the enterprise. Through a highly engaging learning experience, participants explore how high-performing organizations create alignment between strategy, people, innovation, and execution- without losing sight of long-term sustainability.",

    customization:
      "Recognizing that every organization is unique, the sessions are fully customized to your strategic priorities, organizational culture, operational challenges, and desired business outcomes. Our approach ensures that every solution is practical, relevant, and immediately applicable within your organizational context.",

    benefits: [
      "Drive Sustained Profitability: Learn to balance short-term operational needs with the long-term visionary thinking required for sustainable growth.",
      "Build Social Architecture: Create a culture of continuous improvement and innovation that attracts and retains top talent.",
      "Cross-Functional Alignment: Improve collaboration across teams to ensure that all business units are aligned with the enterprise vision.",
      "Change Leadership Mastery: Gain the tools to lead large-scale change initiatives effectively, minimizing burnout and maximizing engagement.",
      "Actionable Growth Strategies: Develop competitive strategies and business models that ensure long-term sustainability in an evolving market."
    ]

  }

}



export default function Programs({   onNavigate,
  onContactClick,
  onDemoClick,
  onToast }) {                  

  const sectionRef = useRef(null)

  const [activeIndex, setActiveIndex,] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState(null)


  useEffect(() => {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }

        })

      },
      {
        threshold: 0.1
      }
    )


    if (sectionRef.current) {

      sectionRef.current
        .querySelectorAll('.program-reveal')
        .forEach(el => observer.observe(el))

    }


    return () => observer.disconnect()

  }, [])


  // const goNext = () => {

  //   setActiveIndex(
  //     prev =>
  //       prev === PROGRAM_DATA.length - 1
  //         ? 0
  //         : prev + 1
  //   )

  // }


  // const goPrev = () => {

  //   setActiveIndex(
  //     prev =>
  //       prev === 0
  //         ? PROGRAM_DATA.length - 1
  //         : prev - 1
  //   )

  // }


  return (

    <div
      ref={sectionRef}
      className="programs-section"
      id="programs"
    >

      {/* Decorative background */}

      <div className="programs-glow programs-glow-one" />

      <div className="programs-glow programs-glow-two" />

      <div className="programs-grid-bg" />


      <div className="programs-container">


        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="programs-heading program-reveal">

          <div className="programs-eyebrow">

            <span className="eyebrow-line" />

            <span>WHAT WE OFFER</span>

            <span className="eyebrow-line" />

          </div>


          <h2>

            Our Flagship{' '}

            <span>
              Learning Programs
            </span>

          </h2>


          <p>

            Four transformative programs designed to build
            confident leaders, future-ready teams, and
            high-performance organizations.

          </p>

        </div>



        {/* ==================================================
            DESKTOP PROGRAM CAROUSEL
        ================================================== */}

        <div className="program-carousel-wrapper">


          {/* Previous */}

          {/* <button
            type="button"
            className="program-nav program-nav-prev"
            onClick={goPrev}
            aria-label="Previous program"
          >

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >

              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

            </svg>

          </button> */}



          <div className="program-carousel">

            <div
              className="program-track"
              style={{
                '--active-index': activeIndex
              }}
            >

              {PROGRAM_DATA.map((program, index) => (

                <article
                  key={program.title}
                  className={`
                    program-card
                    program-card-${program.theme} 
                    program-reveal
                    ${index === activeIndex ? 'program-active' : ''}
                  `}
                  onClick={(e) => {
    e.stopPropagation()
    setSelectedProgram(program)
  }
}
                >


                  {/* Image */}

                  <div className="program-image">

                    <img
                      src={program.image}
                      alt={program.title}
                    />

                    <div className="program-image-overlay" />

                  </div>


                  {/* Card content */}

                  <div className="program-content">


                    {/* Icon */}

                    <div className="program-icon">

                      {program.icon}

                    </div>


                    {/* Title */}

                    <h3>
                      {program.title}
                    </h3>


                    <div className="program-divider" />


                    {/* Description */}

                    <p>
                      {program.desc}
                    </p>


                    {/* Tags */}

                    <div className="program-tags">

                      {program.tags.map(tag => (

                        <span
                          key={tag}
                          className="program-tag"
                        >

                          {tag}

                        </span>

                      ))}

                    </div>


                    {/* Explore */}

                    <button
                      type="button"
                      className="program-explore"
    onClick={(e) => {
    e.stopPropagation()
    setSelectedProgram(program)
  }}

                    >

                      <span>
                        Explore Program
                      </span>

                      <span className="program-arrow">
                        →
                      </span>

                    </button>


                  </div>

                </article>

              ))}

            </div>

          </div>



          {/* Next */}

          {/* <button
            type="button"
            className="program-nav program-nav-next"
            onClick={goNext}
            aria-label="Next program"
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

          </button> */}

        </div>



        {/* ==================================================
            DOTS
        ================================================== */}

        {/* <div className="program-dots">

          {PROGRAM_DATA.map((program, index) => (

            <button
              key={program.title}
              type="button"
              aria-label={`Go to ${program.title}`}
              className={
                index === activeIndex
                  ? 'program-dot active'
                  : 'program-dot'
              }
              onClick={() =>
                setActiveIndex(index)
              }
            />

          ))}

        </div> */}



        {/* ==================================================
            VIEW ALL
        ================================================== */}

         <div className="programs-view-all">

      {/* <button
        type="button"
        className="program-view-button"
        onClick={() =>
          onNavigate?.('programs')
        }
      >

        <span>
          View All Program Details
        </span>

        <span>
          →
        </span>

      </button> */}

    </div>

  </div>


{/* ==================================================
    PROGRAM DETAILS POPUP
================================================== */}

{selectedProgram && (

  <div
    className="program-popup-overlay"
    onClick={() => setSelectedProgram(null)}
  >

    <div
      className="program-popup"
      onClick={(e) => e.stopPropagation()}
    >

      {/* ================================================
          CLOSE BUTTON
      ================================================ */}

      <button
        type="button"
        className="program-popup-close"
        onClick={() => setSelectedProgram(null)}
        aria-label="Close program details"
      >
        ×
      </button>


      {/* ================================================
          HERO IMAGE
      ================================================ */}

      <div className="program-popup-image">

        <img
          src='src/assets/leadership-details.jpg'
  
        />

        <div className="program-popup-image-overlay" />


        <div className="program-popup-heading">
{/* 
          <span>
            FLUENTO LEARNING PROGRAM
          </span>

          <h2>
            {selectedProgram.title}
          </h2> */}

        </div>

      </div>


      {/* ================================================
          CONTENT
      ================================================ */}

      <div className="program-popup-content">

        {(() => {

          const details =
            PROGRAM_DETAILS[selectedProgram.title]

          if (!details) {
            return (
              <p>
                Program details are currently
                unavailable.
              </p>
            )
          }

          return (
            <>

              {/* ==========================================
                  PROGRAM OVERVIEW
              ========================================== */}

              <div className="program-popup-section">

                <div className="program-popup-label">
                  PROGRAM OVERVIEW
                </div>

                <p className="program-popup-intro">
                  {details.intro}
                </p>

              </div>


              {/* ==========================================
                  CUSTOMIZATION
              ========================================== */}

              <div className="program-popup-customization">

                <div className="program-popup-label">
                  TAILORED FOR YOUR ORGANIZATION
                </div>

                <p>
                  {details.customization}
                </p>

              </div>


              {/* ==========================================
                  COURSE BENEFITS
              ========================================== */}

              <div className="program-popup-benefits">

                <div className="program-popup-label">
                  COURSE BENEFITS
                </div>


                <div className="program-benefits-list">

                  {details.benefits.map(
                    (benefit, index) => {

                      const separator =
                        benefit.indexOf(': ')

                      const heading =
                        separator !== -1
                          ? benefit.substring(
                              0,
                              separator
                            )
                          : benefit

                      const description =
                        separator !== -1
                          ? benefit.substring(
                              separator + 2
                            )
                          : ''

                      return (

                        <div
                          key={index}
                          className="program-benefit"
                        >

                          <div className="program-benefit-number">

                            {String(index + 1).padStart(
                              2,
                              '0'
                            )}

                          </div>


                          <div className="program-benefit-text">

                            <strong>
                              {heading}
                              {description && ':'}
                            </strong>

                            {description && (
                              <span>
                                {' '}
                                {description}
                              </span>
                            )}

                          </div>

                        </div>

                      )

                    }
                  )}

                </div>

              </div>


              {/* ==========================================
                  POPUP FOOTER
              ========================================== */}

              <div className="program-popup-footer">

                <div>

                  <strong>
                    Ready to build this capability?
                  </strong>

                  <small>
                    Let's create a learning journey
                    designed around your organization.
                  </small>

                </div>


                <button
                  type="button"
                  className="program-popup-cta"
                  onClick={() => {

                    setSelectedProgram(null)

                    onNavigate?.('contact')

                  }}
                >

                  Book a Consultation

                  <span>
                    →
                  </span>

                </button>

              </div>

            </>
          )

        })()}

      </div>

    </div>

  </div>

)}
        <Footer
          onNavigate={onNavigate}
          onContactClick={onContactClick}
          onDemoClick={onDemoClick}
          onToast={onToast}
        /> 

</div>
    
    

  )
  
  

}               