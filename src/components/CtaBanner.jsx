import '../App.css'

export default function CtaBanner({
  onContactClick,
  onDemoClick,
  heading = 'Ready to Transform Your Organization?',
  sub = 'Join 500+ forward-thinking organizations that trust FLUENTO to build future-ready leaders, high-performing teams, and AI-powered workforces.'
}) {
  return (
    <section className="cta-banner">

      {/* Background effects */}
      <div className="cta-grid-bg" />
      <div className="cta-world-map" />

      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="cta-orb cta-orb-3" />

      <div className="cta-wave cta-wave-1" />
      <div className="cta-wave cta-wave-2" />


      <div className="cta-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="cta-main">

          <div className="cta-eyebrow">
            <span className="cta-eyebrow-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 2v5" />
                <path d="M12 17v5" />
                <path d="M4.93 4.93l3.54 3.54" />
                <path d="M15.53 15.53l3.54 3.54" />
                <path d="M2 12h5" />
                <path d="M17 12h5" />
                <path d="M4.93 19.07l3.54-3.54" />
                <path d="M15.53 8.47l3.54-3.54" />
              </svg>
            </span>

            LET'S BUILD THE FUTURE, TOGETHER
          </div>


          <h2 className="cta-h2">
            Ready to Transform Your
            <span> Organization?</span>
          </h2>


          <div className="cta-title-line" />


          <p className="cta-sub">
            {sub}
          </p>


          {/* Buttons */}
          <div className="cta-buttons">

            <button
              type="button"
              className="cta-primary-btn"
              onClick={onContactClick}
            >

              <span className="cta-btn-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="17"
                    rx="2"
                  />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                  <path d="M8 14h2" />
                  <path d="M14 14h2" />
                </svg>
              </span>

              <span>
                Book a Free Consultation
              </span>

              <span className="cta-arrow">
                →
              </span>

            </button>


            <button
              type="button"
              className="cta-secondary-btn"
              onClick={onDemoClick}
            >

              <span className="cta-play">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span>
                Watch Platform Demo
              </span>

              <span className="cta-arrow">
                →
              </span>

            </button>

          </div>


          {/* Trust */}
          {/* <div className="cta-trust">

            <div className="cta-avatars">

              <div className="cta-avatar avatar-one">
                A
              </div>

              <div className="cta-avatar avatar-two">
                S
              </div>

              <div className="cta-avatar avatar-three">
                D
              </div>

            </div>

            <span>
              Trusted by 500+ organizations across 20+ industries
            </span>

          </div> */}


          {/* Statistics */}
          {/* <div className="cta-stats">

            <div className="cta-stat">

              <div className="cta-stat-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                  <path d="M2 21h20" />
                  <path d="M8 7h2" />
                  <path d="M14 7h2" />
                  <path d="M8 11h2" />
                  <path d="M14 11h2" />
                  <path d="M8 15h2" />
                  <path d="M14 15h2" />
                </svg>
              </div>

              <strong>500+</strong>

              <span>
                Organizations Served
              </span>

            </div>


            <div className="cta-stat">

              <div className="cta-stat-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M16 14c2.8.3 5 2.7 5 5.5" />
                </svg>
              </div>

              <strong>50,000+</strong>

              <span>
                Professionals Trained
              </span>

            </div>


            <div className="cta-stat">

              <div className="cta-stat-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 19l5-5 4 3 7-9" />
                  <path d="M15 8h5v5" />
                </svg>
              </div>

              <strong>98%</strong>

              <span>
                Client Satisfaction
              </span>

            </div>


            <div className="cta-stat">

              <div className="cta-stat-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3c3 3.2 3 14.8 0 18" />
                  <path d="M12 3c-3 3.2-3 14.8 0 18" />
                </svg>
              </div>

              <strong>20+</strong>

              <span>
                Industries Impacted
              </span>

            </div>

          </div> */}

        </div>


        {/* =================================================
            RIGHT GLASS PANEL
        ================================================= */}

        <div className="cta-feature-card">

          <div className="cta-feature-border" />

          <h3>
            Why Organizations
            <span> Choose FLUENTO</span>
          </h3>


          {/* Feature 1 */}
          <div className="cta-feature">

            <div className="cta-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v6" />
                <path d="M21 12h-6" />
              </svg>
            </div>

            <div>
              <h4>
                Proven Impact
              </h4>

              <p>
                Measurable improvement in leadership
                effectiveness and team performance.
              </p>
            </div>

          </div>


          {/* Feature 2 */}
          <div className="cta-feature">

            <div className="cta-feature-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                <path d="M16 14c3 .2 5 2.5 5 5" />
              </svg>

            </div>

            <div>

              <h4>
                Expert-Led Learning
              </h4>

              <p>
                Programs designed and delivered by
                industry experts and academic leaders.
              </p>

            </div>

          </div>


          {/* Feature 3 */}
          <div className="cta-feature">

            <div className="cta-feature-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="M7 15l4-4 3 2 5-6" />
                <path d="M15 7h4v4" />
              </svg>

            </div>

            <div>

              <h4>
                Customized for You
              </h4>

              <p>
                Solutions tailored to your organization's
                goals, culture, and challenges.
              </p>

            </div>

          </div>


          {/* Feature 4 */}
          <div className="cta-feature">

            <div className="cta-feature-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />
                <path d="M9 12l2 2 4-5" />
              </svg>

            </div>

            <div>

              <h4>
                Future-Ready Approach
              </h4>

              <p>
                AI-driven, innovative, and aligned with
                the future of work.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}