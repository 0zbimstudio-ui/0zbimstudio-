import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'var(--color-bg-dark)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Background architectural image with overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/images/projects/visualization.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.18,
      }} />

      {/* Gradient overlay from bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '65%',
        background: 'linear-gradient(to top, var(--color-bg-charcoal) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle top rule */}
      <div style={{
        position: 'absolute',
        top: '72px',
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: 'rgba(255,255,255,0.08)',
      }} />

      {/* Main Content — anchored to bottom */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, paddingBottom: '6rem' }}>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'flex-end',
        }}
          className="hero-grid"
        >
          {/* Left — Text content */}
          <div style={{ maxWidth: '780px' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: '24px',
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.3)',
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}>
                BIM + Architectural Services
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '1.75rem',
              }}
            >
              Building Better<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Through BIM.</em>
            </h1>

            {/* Supporting text */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '540px',
              marginBottom: '3rem',
            }}>
              Precision-driven BIM and architectural solutions for smarter design, coordination, and construction.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('contact'); }}
                className="btn-dark-inverse"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                onClick={e => { e.preventDefault(); scrollTo('services'); }}
                className="btn-outline-inverse"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255,255,255,0.3)',
          cursor: 'pointer',
        }}
          onClick={() => scrollTo('about')}
        >
          <span style={{
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            writingMode: 'vertical-rl',
          }}>
            Scroll
          </span>
          <ArrowDown size={12} />
        </div>

      </div>

      {/* Bottom horizontal rule */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: 'rgba(255,255,255,0.06)',
      }} />
    </section>
  );
}
