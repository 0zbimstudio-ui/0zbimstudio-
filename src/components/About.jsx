import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '7rem 0',
      }}
    >
      <div className="site-container">

        {/* Section Label */}
        <p className="label-sm" style={{ marginBottom: '3.5rem' }}>
          About the Studio
        </p>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
          className="about-grid"
        >
          {/* Left — Headline */}
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: 'var(--color-ink)',
                maxWidth: '620px',
              }}
            >
              Where Architecture Meets Digital Precision
            </h2>
          </div>

          {/* Right — Body Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '580px' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--color-ink-60)',
            }}>
              {STUDIO_INFO.aboutParagraph1}
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--color-ink-60)',
            }}>
              {STUDIO_INFO.aboutParagraph2}
            </p>

            {/* Approach pillars — minimal, text-only */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              marginTop: '1rem',
              borderTop: '1px solid var(--color-ink-10)',
            }}>
              {[
                'Architectural Understanding',
                'Digital BIM Modeling',
                'Technical Documentation',
                'Disciplined Coordination',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem 0',
                    borderBottom: '1px solid var(--color-ink-10)',
                    borderRight: i % 2 === 0 ? '1px solid var(--color-ink-10)' : 'none',
                    paddingRight: i % 2 === 0 ? '1.5rem' : '0',
                    paddingLeft: i % 2 !== 0 ? '1.5rem' : '0',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    color: 'var(--color-ink-60)',
                    lineHeight: 1.4,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
