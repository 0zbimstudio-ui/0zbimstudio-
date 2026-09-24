import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

export default function Founder() {
  return (
    <section
      id="founder"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        padding: '7rem 0',
      }}
    >
      <div className="site-container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="founder-grid"
        >
          {/* Left — Portrait */}
          <div style={{
            position: 'relative',
            maxWidth: '420px',
            width: '100%',
          }}>
            <div style={{
              aspectRatio: '4/5',
              overflow: 'hidden',
              backgroundColor: '#2A2A28',
            }}>
              <img
                src={STUDIO_INFO.founderImage}
                alt={`${STUDIO_INFO.founderDisplayName} — ${STUDIO_INFO.founderTitle}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>

            {/* Caption beneath photo */}
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {STUDIO_INFO.founderDisplayName}
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: '0.25rem',
                  letterSpacing: '0.04em',
                }}>
                  {STUDIO_INFO.founderTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1.25rem',
              }}>
                Meet the Founder
              </p>

              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {STUDIO_INFO.founderDisplayName}
              </h2>
            </div>

            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '500px',
              borderLeft: '2px solid rgba(255,255,255,0.12)',
              paddingLeft: '1.5rem',
            }}>
              "{STUDIO_INFO.founderCopy}"
            </blockquote>

            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="btn-outline-inverse"
              style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
            >
              <span>Contact Directly</span>
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
