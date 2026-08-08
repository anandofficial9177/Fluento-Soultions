import { useEffect, useRef, useState } from 'react'
import '../App.css'
import leadershipImage from '../assets/leadership-development.jpg'
import communicationImage from '../assets/executive-communication.jpg'
import aiImage from '../assets/ai-ready-workforce.jpg'
import innovationImage from '../assets/organizational-excellence.jpg'

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

    image: leadershipImage,

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
      communicationImage,

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
      aiImage,

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
      innovationImage,

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


export default function Programs({ onNavigate }) {

  const sectionRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)


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


  const goNext = () => {

    setActiveIndex(
      prev =>
        prev === PROGRAM_DATA.length - 1
          ? 0
          : prev + 1
    )

  }


  const goPrev = () => {

    setActiveIndex(
      prev =>
        prev === 0
          ? PROGRAM_DATA.length - 1
          : prev - 1
    )

  }


  return (

    <section
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


          {/* Previous

          <button
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
                  onClick={() =>
                    onNavigate?.('programs')
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
                      onClick={event => {

                        event.stopPropagation()

                        onNavigate?.('programs')

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



          {/* Next

          <button
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

          <button
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

          </button>

        </div>

      </div>

    </section>

  )

}