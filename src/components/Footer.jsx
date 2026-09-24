import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Selected Work', href: '#projects' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'BIM Modeling',
  'Architectural Services',
  '3D Visualization',
  'BIM Coordination',
  'Construction Documentation',
];

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-charcoal)',
      color: 'rgba(255,255,255,0.6)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
    }}>
      <div className="site-container">

        {/* Top Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '2.5rem',
        }}
          className="footer-grid"
        >

          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '-0.01em',
                marginBottom: '0.25rem',
              }}>
                0ZBIMStudio
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>
                BIM &amp; Architecture
              </p>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '300px',
            }}>
              Precision BIM and architectural services for smarter design, coordination, and construction.
            </p>

            <a
              href={`mailto:${STUDIO_INFO.email}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              {STUDIO_INFO.email}
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Nav Column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
              marginBottom: '1.25rem',
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER_NAV.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
              marginBottom: '1.25rem',
            }}>
              Services
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICE_LINKS.map(service => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={e => { e.preventDefault(); scrollTo('#services'); }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'flex-end' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.375rem, 3vw, 2rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.25,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '260px',
            }}>
              Ready to build something together?
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="btn-outline-inverse"
              style={{ alignSelf: 'flex-start' }}
            >
              Start a Project
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.2)',
          }}>
            © {new Date().getFullYear()} 0ZBIMStudio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              transition: 'border-color 0.15s ease, color 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
            }}
          >
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}
