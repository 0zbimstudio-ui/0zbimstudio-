import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Work',     href: '#projects' },
  { label: 'Founder',  href: '#founder' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          backgroundColor: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-ink-10)' : '1px solid transparent',
        }}
      >
        <div className="site-container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}>
            {/* Logo */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); scrollTo('#home'); }}
              style={{ textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-ink)',
                  lineHeight: 1,
                }}>
                  0ZBIMStudio
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-40)',
                  lineHeight: 1,
                }}>
                  BIM &amp; Architecture
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    color: 'var(--color-ink-60)',
                    textDecoration: 'none',
                    padding: '0.5rem 0.875rem',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink-60)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="hidden md:inline-flex btn-dark"
              style={{ padding: '0.625rem 1.375rem', fontSize: '0.8125rem' }}
            >
              Start a Project
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: '1px solid var(--color-ink-10)',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--color-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          backgroundColor: 'var(--color-bg)',
          borderTop: '1px solid var(--color-ink-10)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          gap: '0',
        }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 300,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                padding: '1rem 0',
                borderBottom: '1px solid var(--color-ink-10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={18} style={{ color: 'var(--color-ink-40)' }} />
            </a>
          ))}

          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
            className="btn-dark"
            style={{ marginTop: '2rem', justifyContent: 'center' }}
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
