import React from 'react';
import { PRINCIPLES } from '../data/studioData';

export default function WhyUs() {
  return (
    <section
      id="whyus"
      style={{
        backgroundColor: 'var(--color-bg-warm)',
        padding: '7rem 0',
        borderTop: '1px solid var(--color-ink-10)',
        borderBottom: '1px solid var(--color-ink-10)',
      }}
    >
      <div className="site-container">

        {/* Section Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem',
          marginBottom: '4rem',
        }}
          className="why-header"
        >
          <p className="label-sm">Why 0ZBIMStudio</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--color-ink)',
              maxWidth: '420px',
            }}
          >
            Built Around Precision
          </h2>
        </div>

        {/* 6 Principles — clean 3×2 grid, text only, separated by rules */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          borderTop: '1px solid var(--color-ink-10)',
          borderLeft: '1px solid var(--color-ink-10)',
        }}
          className="principles-grid"
        >
          {PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.number}
              style={{
                padding: '2.5rem 2rem',
                borderRight: '1px solid var(--color-ink-10)',
                borderBottom: '1px solid var(--color-ink-10)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: 'var(--color-ink-20)',
                marginBottom: '1.25rem',
              }}>
                {principle.number}
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                {principle.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'var(--color-ink-60)',
              }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
