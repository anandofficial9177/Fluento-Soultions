import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'
import contactImage from '../assets/contactformimagebg.jpg'

// ============================================================
// EmailJS Configuration
// ============================================================
const EMAILJS_SERVICE_ID = 'service_e1pxdzl'
const EMAILJS_TEMPLATE_ID = 'template_qeo75pn'
const EMAILJS_PUBLIC_KEY = 'qT3H_vG3f4qpUeuXA'

const INITIAL_FORM = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  trainingNeed: [],
  teamSize: '',
  goals: '',
}

// ============================================================
// Existing single-select dropdown
// Used for Team Size
// ============================================================
function AnimatedDropdown({
  name,
  value,
  placeholder,
  options,
  onChange,
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const selectedOption =
    options.find(option => option.value === value)?.label || placeholder

  const handleSelect = (option) => {
    onChange({
      target: {
        name,
        value: option.value,
      },
    })

    setOpen(false)
  }

  return (
    <div
      className={`animated-dropdown ${open ? 'dropdown-open' : ''}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`animated-dropdown-trigger ${
          value ? 'has-value' : ''
        }`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="dropdown-selected-text">
          {selectedOption}
        </span>

        <span className="dropdown-arrow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="animated-dropdown-menu">
        <div className="dropdown-glow" />

        {options.map((option, index) => (
          <button
            type="button"
            key={option.value}
            className={`animated-dropdown-option ${
              value === option.value ? 'selected' : ''
            }`}
            style={{ '--option-index': index }}
            onClick={() => handleSelect(option)}
          >
            <span className="option-dot" />

            <span className="option-label">
              {option.label}
            </span>

            {value === option.value && (
              <span className="option-check">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// Multi-select dropdown
// Used for Training Need
// ============================================================
function MultiSelectDropdown({
  name,
  value = [],
  placeholder,
  options,
  onChange,
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const allSelected =
    options.length > 0 && value.length === options.length

  const handleSelectAll = () => {
    onChange({
      target: {
        name,
        value: allSelected
          ? []
          : options.map(option => option.value),
      },
    })
  }

  const handleToggle = (optionValue) => {
    const updatedValues = value.includes(optionValue)
      ? value.filter(item => item !== optionValue)
      : [...value, optionValue]

    onChange({
      target: {
        name,
        value: updatedValues,
      },
    })
  }

  const selectedLabels = options
    .filter(option => value.includes(option.value))
    .map(option => option.label)

  let displayText = placeholder

  if (allSelected) {
    displayText = 'All Courses Selected'
  } else if (selectedLabels.length === 1) {
    displayText = selectedLabels[0]
  } else if (selectedLabels.length > 1) {
    displayText = `${selectedLabels.length} Courses Selected`
  }

  return (
    <div
      className={`animated-dropdown ${open ? 'dropdown-open' : ''}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`animated-dropdown-trigger ${
          value.length > 0 ? 'has-value' : ''
        }`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="dropdown-selected-text">
          {displayText}
        </span>

        <span className="dropdown-arrow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="animated-dropdown-menu">
        <div className="dropdown-glow" />

        {/* Select All */}
        <button
          type="button"
          className={`animated-dropdown-option ${
            allSelected ? 'selected' : ''
          }`}
          onClick={handleSelectAll}
        >
          <span className="option-checkbox">
            {allSelected ? '✓' : ''}
          </span>

          <span className="option-label">
            Select All
          </span>
        </button>

        {/* Individual courses */}
        {options.map((option, index) => {
          const isSelected = value.includes(option.value)

          return (
            <button
              type="button"
              key={option.value}
              className={`animated-dropdown-option ${
                isSelected ? 'selected' : ''
              }`}
              style={{ '--option-index': index }}
              onClick={() => handleToggle(option.value)}
            >
              <span className="option-checkbox">
                {isSelected ? '✓' : ''}
              </span>

              <span className="option-label">
                {option.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================
// Contact Page
// ============================================================
export default function Contact({
  onNavigate,
  onBookClick,
  onDemoClick,
  onToast,
}) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    if (
      !form.fullName.trim() ||
      !form.company.trim() ||
      !form.email.trim()
    ) {
      onToast('Please fill in Name, Company and Email.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      onToast('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    const templateParams = {
      to_email: 'ashish@fluentolearningsolutions.com',
      from_name: form.fullName,
      company: form.company,
      from_email: form.email,
      phone: form.phone || 'Not provided',

      // Sends every selected course to EmailJS
      training_need:
        form.trainingNeed.length > 0
          ? '• ' + form.trainingNeed.join('\n• ')
          : 'Not specified',

      team_size: form.teamSize || 'Not specified',
      goals: form.goals || 'Not provided',
      reply_to: form.email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const resetForm = () => setStatus('idle')

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-orb"
          style={{
            width: 240,
            height: 240,
            top: -50,
            right: -30,
            background: 'rgba(6,182,212,.15)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-hero-title">
            <span className="grad-text">
              GET IN TOUCH
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="contact-section">
        <div className="inner">
          <div className="contact-wrap">

            {/* Left: Professional Visual Panel */}
            <div className="contact-visual">
              <div className="contact-visual-image">
                <img
                  src={contactImage}
                  alt="Corporate training and professional learning"
                />

                <div className="contact-visual-overlay" />

                <div className="contact-visual-content">
                  <span className="contact-visual-eyebrow">
                    FLUENTO LEARNING SOLUTIONS
                  </span>

                  <h2>
                    Let's Start a
                    <br />
                    <span>Conversation</span>
                  </h2>

                  <p>
                    To receive a tailored plan
                  </p>

                  <div className="contact-visual-line" />
                </div>
              </div>

              {/* Contact details */}
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 4h16v16H4z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />

                      <path
                        d="m4 5 8 7 8-7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="contact-detail-label">
                      Email Us
                    </div>

                    <div className="contact-detail-value">
                      @fluentolearningsolutions.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div>
              <div className="form-card">

                {/* Success State */}
                {status === 'success' && (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px 0',
                    }}
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      style={{
                        display: 'block',
                        margin: '0 auto 16px',
                      }}
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="30"
                        fill="rgba(34,197,94,.09)"
                        stroke="rgba(34,197,94,.3)"
                        strokeWidth="2"
                      />

                      <path
                        d="M19 32l9 9 17-19"
                        stroke="#22C55E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 22,
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: 8,
                      }}
                    >
                      Inquiry Sent!
                    </div>

                    <p
                      style={{
                        fontSize: 13,
                        color: 'var(--g500)',
                        lineHeight: 1.7,
                        marginBottom: 16,
                      }}
                    >
                      Your inquiry has been emailed to our team.
                      A FLUENTO learning strategist will reply within
                      4 business hours.
                    </p>

                    <div
                      style={{
                        padding: 14,
                        borderRadius: 10,
                        background: 'rgba(37,99,235,.05)',
                        border: '1px solid rgba(37,99,235,.1)',
                        marginBottom: 20,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          color: 'var(--cyan)',
                          marginBottom: 4,
                          letterSpacing: 1,
                        }}
                      >
                        EMAIL SENT TO
                      </div>

                      <div
                        style={{
                          fontSize: 12,
                          color: 'var(--g600)',
                          fontWeight: 500,
                        }}
                      >
                        @fluentolearningsolutions.com
                      </div>
                    </div>

                    <button
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                      }}
                      onClick={resetForm}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}

                {/* Error State */}
                {status === 'error' && (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px 0',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 48,
                        marginBottom: 12,
                      }}
                    >
                      ⚠️
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 18,
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: 8,
                      }}
                    >
                      Something Went Wrong
                    </div>

                    <p
                      style={{
                        fontSize: 13,
                        color: 'var(--g500)',
                        lineHeight: 1.7,
                        marginBottom: 16,
                      }}
                    >
                      We couldn't send your inquiry.
                      Please try again, or email us directly at&nbsp;
                      <strong style={{ color: 'var(--navy)' }}>
                        fluentolearningsolutions@gmail.com
                      </strong>
                    </p>

                    <button
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                      }}
                      onClick={resetForm}
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {/* Form State */}
                {(status === 'idle' || status === 'loading') && (
                  <>
                    <div className="form-heading">
                      Tell us what you need
                    </div>

                    <div className="form-sub">
                      We reply in one working day.
                      Fields marked{' '}
                      <span style={{ color: '#EF4444' }}>
                        *
                      </span>{' '}
                      are required.
                    </div>

                    <div className="form-fields">

                      {/* Row 1 */}
                      <div className="form-row">
                        <div style={{ position: 'relative' }}>
                          <input
                            className="form-input"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            required
                          />
                        </div>

                        <input
                          className="form-input"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company / Institution *"
                          required
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="form-row">
                        <input
                          className="form-input"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          type="email"
                          required
                        />

                        <input
                          className="form-input"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          type="tel"
                        />
                      </div>

                      {/* Training Need - MULTI SELECT */}
                      <MultiSelectDropdown
                        name="trainingNeed"
                        value={form.trainingNeed}
                        placeholder="Training Need — Select Course"
                        onChange={handleChange}
                        options={[
                          {
                            value: 'Leadership Development Lab',
                            label: 'Leadership Development Lab',
                          },
                          {
                            value: 'Executive Communication & Strategic Influence',
                            label: 'Executive Communication & Strategic Influence',
                          },
                          {
                            value: 'AI Ready Workforce',
                            label: 'AI Ready Workforce',
                          },
                          {
                            value: 'Organizational Excellence & Innovation',
                            label: 'Organizational Excellence & Innovation',
                          },
                          {
                            value: 'Custom / Blended Program',
                            label: 'Custom / Blended Program',
                          },
                        ]}
                      />

                      {/* Team Size - EXISTING SINGLE SELECT */}
                      <AnimatedDropdown
                        name="teamSize"
                        value={form.teamSize}
                        placeholder="Team Size"
                        onChange={handleChange}
                        options={[
                          {
                            value: '1–10',
                            label: '1–10 Employees',
                          },
                          {
                            value: '11–25',
                            label: '11–25 Employees',
                          },
                          {
                            value: '26–50',
                            label: '26–50 Employees',
                          },
                          {
                            value: '51–100',
                            label: '51–100 Employees',
                          },
                          {
                            value: '100–500',
                            label: '100–500 Employees',
                          },
                          {
                            value: '500+',
                            label: '500+ Employees',
                          },
                        ]}
                      />

                      {/* Goals */}
                      <textarea
                        className="form-input form-textarea"
                        name="goals"
                        value={form.goals}
                        onChange={handleChange}
                        placeholder="Tell us about your training goals..."
                      />

                      {/* Submit */}
                      <button
                        className="form-submit"
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                        style={{
                          opacity: status === 'loading' ? 0.75 : 1,
                          position: 'relative',
                        }}
                      >
                        {status === 'loading' ? (
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 10,
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              style={{
                                animation:
                                  'spin 0.9s linear infinite',
                              }}
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="6"
                                stroke="rgba(255,255,255,.35)"
                                strokeWidth="2"
                              />

                              <path
                                d="M8 2a6 6 0 016 6"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>

                            Sending your inquiry...
                          </span>
                        ) : (
                          'Submit Inquiry & Book Consultation →'
                        )}
                      </button>

                      {/* Privacy note */}
                      <p
                        style={{
                          fontSize: 10,
                          color: 'var(--g400)',
                          textAlign: 'center',
                          lineHeight: 1.55,
                        }}
                      >
                        Your data is sent securely to our team
                        @fluentolearningsolutions.com.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <Footer
        onNavigate={onNavigate}
        onBookClick={onBookClick}
        onDemoClick={onDemoClick}
        onToast={onToast}
      />
    </>
  )
}