import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/studioData';
import { Plus, Minus } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('bim');
  const [expandedService, setExpandedService] = useState(null);

  const currentCategory = SERVICE_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section
      id="services"
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
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          <p className="label-sm">Services</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--color-ink)',
              maxWidth: '560px',
            }}
          >
            Comprehensive BIM & Architectural Solutions
          </h2>
        </div>

        {/* Layout: Category tabs left, service list right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
          className="services-grid"
        >
          {/* Category Navigation — horizontal on mobile, stacked tabs on desktop */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0',
            borderBottom: '1px solid var(--color-ink-10)',
            overflowX: 'auto',
          }}>
            {SERVICE_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setExpandedService(null); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '1rem 1.5rem 1rem 0',
                    marginRight: '2rem',
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '2px solid var(--color-ink)' : '2px solid transparent',
                    marginBottom: '-1px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: isActive ? 'var(--color-ink-40)' : 'var(--color-ink-20)',
                  }}>
                    {cat.number}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--color-ink)' : 'var(--color-ink-40)',
                    transition: 'color 0.2s ease',
                  }}>
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Content */}
          {currentCategory && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="service-content-grid">

              {/* Category Summary */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--color-ink-60)',
                maxWidth: '560px',
              }}>
                {currentCategory.summary}
              </p>

              {/* Service List — accordion style */}
              <div style={{ borderTop: '1px solid var(--color-ink-10)' }}>
                {currentCategory.services.map((service, idx) => {
                  const isOpen = expandedService === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--color-ink-10)',
                      }}
                    >
                      <button
                        onClick={() => setExpandedService(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1.25rem 0',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          gap: '1rem',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                          <span style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.625rem',
                            fontWeight: 400,
                            letterSpacing: '0.08em',
                            color: 'var(--color-ink-20)',
                            minWidth: '1.5rem',
                          }}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                            fontWeight: 400,
                            color: 'var(--color-ink)',
                            lineHeight: 1.3,
                          }}>
                            {service.title}
                          </span>
                        </div>
                        <div style={{
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--color-ink-10)',
                          flexShrink: 0,
                          color: 'var(--color-ink-40)',
                        }}>
                          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{ paddingBottom: '1.5rem', paddingLeft: '2.75rem' }}>
                          <p style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            fontWeight: 300,
                            lineHeight: 1.75,
                            color: 'var(--color-ink-60)',
                          }}>
                            {service.description}
                          </p>
                          <a
                            href="#contact"
                            onClick={e => {
                              e.preventDefault();
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.375rem',
                              marginTop: '1rem',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.8125rem',
                              fontWeight: 400,
                              color: 'var(--color-ink)',
                              textDecoration: 'none',
                              borderBottom: '1px solid var(--color-ink-20)',
                              paddingBottom: '2px',
                              transition: 'border-color 0.15s ease',
                            }}
                          >
                            Enquire about this service
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
