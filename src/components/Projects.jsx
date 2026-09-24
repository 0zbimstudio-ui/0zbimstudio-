import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// PORTFOLIO PLACEHOLDER
// No real project information has been provided.
// This section is structured for easy population later.
// Replace the placeholder cards with actual project data
// when imagery and descriptions become available.
// ─────────────────────────────────────────────────────────────

const PLACEHOLDER_CATEGORIES = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Interior',
  'BIM Modeling',
  'Visualization',
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '7rem 0',
      }}
    >
      <div className="site-container">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <p className="label-sm">Selected Work</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-ink)',
                maxWidth: '480px',
              }}
            >
              A selection of BIM, architectural modeling, documentation, and visualization work.
            </h2>
          </div>
        </div>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: 'var(--color-ink-10)', marginBottom: '3rem' }} />

        {/* Placeholder Grid — 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
          className="projects-grid"
        >
          {PLACEHOLDER_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--color-bg-warm)',
                border: '1px solid var(--color-ink-10)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Image placeholder */}
              <div style={{
                aspectRatio: '16/10',
                backgroundColor: 'var(--color-concrete)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Subtle architectural grid pattern */}
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.15,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                </svg>

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-concrete-dark)',
                  }}>
                    Project Image
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-ink-40)',
                    marginBottom: '0.25rem',
                  }}>
                    {cat}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    color: 'var(--color-ink-40)',
                    fontStyle: 'italic',
                  }}>
                    Coming Soon
                  </span>
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--color-ink-10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-ink-20)',
                }}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about portfolio population */}
        <div style={{
          borderTop: '1px solid var(--color-ink-10)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: 'var(--color-ink-40)',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            Portfolio projects will be added here. Each card supports a project image, title, type, service provided, and description.
          </p>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline"
            style={{ fontSize: '0.8125rem' }}
          >
            Discuss a Project
          </a>
        </div>

      </div>
    </section>
  );
}
