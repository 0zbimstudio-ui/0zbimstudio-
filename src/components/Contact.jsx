import React, { useState } from 'react';
import { STUDIO_INFO, PROJECT_TYPES } from '../data/studioData';
import { ArrowRight, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const subject = encodeURIComponent(`0ZBIMStudio Enquiry — ${form.projectType || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType || 'Not specified'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '7rem 0',
        borderTop: '1px solid var(--color-ink-10)',
      }}
    >
      <div className="site-container">

        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="label-sm" style={{ marginBottom: '1rem' }}>Contact</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--color-ink)',
              maxWidth: '640px',
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
            }}
          >
            Ready to discuss your project?
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'var(--color-ink-60)',
            maxWidth: '480px',
          }}>
            {STUDIO_INFO.contactCopy}
          </p>
        </div>

        {/* Two-column: Form left, Details right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
          className="contact-grid"
        >

          {/* ── Form ── */}
          {submitted ? (
            <div style={{
              padding: '3rem',
              backgroundColor: 'var(--color-bg-warm)',
              border: '1px solid var(--color-ink-10)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--color-ink-10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
              }}>
                <Send size={16} style={{ color: 'var(--color-ink-40)' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 500,
                color: 'var(--color-ink)',
              }}>
                Message Sent
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'var(--color-ink-60)',
              }}>
                Your email client should have opened. If not, you can reach us directly at <strong>{STUDIO_INFO.email}</strong>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-ink)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  marginTop: '0.5rem',
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Name + Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-name" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--color-ink-60)',
                    letterSpacing: '0.04em',
                  }}>
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-email" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--color-ink-60)',
                    letterSpacing: '0.04em',
                  }}>
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Project Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-type" style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--color-ink-60)',
                  letterSpacing: '0.04em',
                }}>
                  Service Required
                </label>
                <select
                  id="contact-type"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' }}
                >
                  <option value="">Select a service</option>
                  {PROJECT_TYPES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-message" style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--color-ink-60)',
                  letterSpacing: '0.04em',
                }}>
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your project requirements, scope, timeline, and any specific needs…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                />
              </div>

              {/* Error */}
              {error && (
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: '#C0392B',
                  fontWeight: 400,
                }}>
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn-dark"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Send Message</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          {/* ── Contact Details ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <p className="label-sm" style={{ marginBottom: '0.75rem' }}>Direct Contact</p>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
                  fontWeight: 400,
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink-60)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink)'}
              >
                <Mail size={16} style={{ flexShrink: 0, color: 'var(--color-ink-40)' }} />
                {STUDIO_INFO.email}
              </a>
            </div>

            {/* What to expect */}
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--color-bg-warm)',
              border: '1px solid var(--color-ink-10)',
            }}>
              <p className="label-sm" style={{ marginBottom: '1.25rem' }}>What Happens Next</p>
              {[
                ['Review', 'We read your enquiry and project requirements carefully.'],
                ['Discussion', 'We follow up to discuss scope, timeline, and deliverables.'],
                ['Proposal', 'We provide a clear outline of the approach and what we will deliver.'],
              ].map(([title, desc]) => (
                <div key={title} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--color-ink-10)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    minWidth: '5.5rem',
                    flexShrink: 0,
                    paddingTop: '1px',
                  }}>
                    {title}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'var(--color-ink-60)',
                  }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  fontWeight: 300,
  color: 'var(--color-ink)',
  backgroundColor: 'var(--color-bg-warm)',
  border: '1px solid var(--color-ink-10)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
  lineHeight: 1.5,
};
