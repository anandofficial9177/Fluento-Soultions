import { useEffect, useRef, useState } from 'react'
import '../App.css'


// ============================================================
// FLUENTO PROGRAM DATA
// ============================================================

const PROGRAM_DATA = [

  {
    id: 'leadership',

    number: '01',

    title: 'Leadership Development Lab',

    shortTitle: 'Leadership',

    desc:
      'Build confident leaders who inspire performance and drive organizational success. This immersive lab blends self-awareness, team dynamics, and strategic decision-making into a transformative leadership journey.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      '/assets/programs/leadership-development.jpg',

    theme: 'blue',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >

        <circle
          cx="32"
          cy="21"
          r="7"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="17"
          cy="34"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="47"
          cy="34"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M22 50c1.5-7 4.5-10 10-10s8.5 3 10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M8 50c1-5 4-7 9-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M56 50c-1-5-4-7-9-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

      </svg>
    )
  },


  {
    id: 'communication',

    number: '02',

    title:
      'Executive Communication & Strategic Influence',

    shortTitle: 'Communication',

    desc:
      'Master the art of communication that commands attention and shapes outcomes. From boardroom presentations to persuasive storytelling, this program equips executives to communicate with clarity, confidence, and impact.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      '/assets/programs/executive-communication.jpg',

    theme: 'purple',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >

        <path
          d="M11 16h42a6 6 0 0 1 6 6v23a6 6 0 0 1-6 6H32l-11 8v-8h-10a6 6 0 0 1-6-6V22a6 6 0 0 1 6-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M18 29h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M18 38h19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M18 47h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

      </svg>
    )
  },


  {
    id: 'ai',

    number: '03',

    title: 'AI Ready Workforce',

    shortTitle: 'AI Workforce',

    desc:
      'Prepare your teams for the intelligent workplace of tomorrow. This course bridges digital fluency with human skills — helping professionals harness AI tools while strengthening creativity, collaboration, and ethical leadership.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      '/assets/programs/ai-ready-workforce.jpg',

    theme: 'cyan',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >

        <rect
          x="17"
          y="17"
          width="30"
          height="30"
          rx="7"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 29h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M25 36h9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M32 8v7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M32 49v7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M8 32h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M49 32h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="m15 15 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="m44 44 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="m49 15-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="m20 44-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

      </svg>
    )
  },


  {
    id: 'innovation',

    number: '04',

    title:
      'Organizational Excellence & Innovation',

    shortTitle: 'Innovation',

    desc:
      'Unlock the potential of your organization through strategic thinking, innovation, and sustainable growth. This program cultivates cultures of excellence where talent thrives and change becomes opportunity.',

    tags: [
      'In-House Training',
      'In Person',
      'Online'
    ],

    image:
      '/assets/programs/organizational-excellence.jpg',

    theme: 'orange',

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >

        <path
          d="M32 7c-11 0-20 8-20 19 0 8 5 13 9 17 2 2 3 5 3 8h16c0-3 1-6 3-8 4-4 9-9 9-17C52 15 43 7 32 7Z"
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
          d="M27 27c3-4 7-4 10 0-4 1-6 4-5 8-1-4-2-7-5-8Z"
          stroke="currentColor"
          strokeWidth="2"
        />

      </svg>
    )
  }

]


// ============================================================
// PROGRAMS COMPONENT
// ============================================================

export default function Programs({ onNavigate }) {

  const sectionRef = useRef(null)

  const [activeCard, setActiveCard] = useState(0)


  // ==========================================================
  // SCROLL REVEAL
  // ==========================================================

  useEffect(() => {

    const section = sectionRef.current

    if (!section) return


    const elements =
      section.querySelectorAll('.program-scroll-reveal')


    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'program-visible'
              )

            }

          })

        },

        {
          threshold: 0.12
        }

      )


    elements.forEach(element => {

      observer.observe(element)

    })


    return () => {

      observer.disconnect()

    }

  }, [])


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const handlePrevious = () => {

    setActiveCard(
      previous =>
        previous === 0
          ? PROGRAM_DATA.length - 1
          : previous - 1
    )

  }


  const handleNext = () => {

    setActiveCard(
      previous =>
        previous === PROGRAM_DATA.length - 1
          ? 0
          : previous + 1
    )

  }


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <section
      ref={sectionRef}
      className="fluento-programs"
      id="programs"
    >


      {/* ======================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="programs-background-grid" />

      <div className="programs-background-glow glow-blue" />

      <div className="programs-background-glow glow-cyan" />


      <div className="programs-inner">


        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <div
          className="
            programs-header
            program-scroll-reveal
          "
        >

          <div className="programs-label">

            <span className="program-label-line" />

            <span>
              WHAT WE OFFER
            </span>

            <span className="program-label-line" />

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



        {/* ====================================================
            DESKTOP CARD AREA
        ==================================================== */}

        <div className="programs-stage">


          {/* LEFT ARROW */}

          <button
            type="button"
            className="programs-arrow programs-arrow-left"
            onClick={handlePrevious}
            aria-label="Previous program"
          >

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
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

          </button>


          {/* ==================================================
              CARDS
          ================================================== */}

          <div className="programs-cards">


            {PROGRAM_DATA.map(
              (program, index) => (

                <article
                  key={program.id}

                  className={`
                    fluento-program-card
                    program-theme-${program.theme}
                    program-scroll-reveal
                    ${activeCard === index
                      ? 'program-card-active'
                      : ''
                    }
                  `}

                  onMouseEnter={() =>
                    setActiveCard(index)
                  }

                  onFocus={() =>
                    setActiveCard(index)
                  }

                  onClick={() =>
                    onNavigate?.('programs')
                  }
                >


                  {/* ========================================
                      IMAGE
                  ======================================== */}

                  <div className="program-card-image">

                    <img
                      src={program.image}
                      alt=""
                      loading="lazy"
                      onError={event => {

                        event.currentTarget.style.display =
                          'none'

                      }}
                    />

                  </div>


                  {/* ========================================
                      COLOR OVERLAY
                  ======================================== */}

                  <div className="program-card-overlay" />


                  {/* ========================================
                      TOP NUMBER
                  ======================================== */}

                  <div className="program-number">

                    {program.number}

                  </div>


                  {/* ========================================
                      ICON
                  ======================================== */}

                  <div className="program-card-icon">

                    {program.icon}

                  </div>


                  {/* ========================================
                      CONTENT
                  ======================================== */}

                  <div className="program-card-content">


                    <div className="program-card-mini-label">

                      FLUENTO PROGRAM

                    </div>


                    <h3>

                      {program.title}

                    </h3>


                    <div className="program-card-line" />


                    <p>

                      {program.desc}

                    </p>


                    {/* TAGS */}

                    <div className="program-card-tags">

                      {program.tags.map(tag => (

                        <span key={tag}>

                          {tag}

                        </span>

                      ))}

                    </div>


                    {/* EXPLORE */}

                    <button
                      type="button"
                      className="program-card-explore"

                      onClick={event => {

                        event.stopPropagation()

                        onNavigate?.('programs')

                      }}
                    >

                      <span>
                        Explore Program
                      </span>

                      <span className="program-explore-arrow">
                        →
                      </span>

                    </button>

                  </div>


                  {/* ========================================
                      BOTTOM GLOW
                  ======================================== */}

                  <div className="program-card-bottom-glow" />


                </article>

              )
            )}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="programs-arrow programs-arrow-right"
            onClick={handleNext}
            aria-label="Next program"
          >

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
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


        </div>



        {/* ====================================================
            PAGINATION
        ==================================================== */}

        <div className="programs-pagination">


          <div className="program-pagination-dots">

            {PROGRAM_DATA.map(
              (program, index) => (

                <button
                  key={program.id}
                  type="button"

                  aria-label={
                    `Show ${program.title}`
                  }

                  className={
                    activeCard === index
                      ? 'active'
                      : ''
                  }

                  onClick={() =>
                    setActiveCard(index)
                  }
                />

              )
            )}

          </div>


          <div className="programs-counter">

            <strong>
              {String(activeCard + 1).padStart(2, '0')}
            </strong>

            <span>
              /
            </span>

            <span>
              {String(PROGRAM_DATA.length).padStart(2, '0')}
            </span>

          </div>


        </div>



        {/* ====================================================
            VIEW ALL BUTTON
        ==================================================== */}

        <div
          className="
            programs-bottom-action
            program-scroll-reveal
          "
        >

          <button
            type="button"
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

          </button>

        </div>


      </div>

    </section>

  )

}