import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/studioData';

export default function BimWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="workflow"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '7rem 0',
      }}
    >
      <div className="site-container">

        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="label-sm" style={{ marginBottom: '1rem' }}>BIM Workflow</p>
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
            From Design Intent to Digital Delivery
          </h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div style={{ marginBottom: '3rem' }} className="hidden md:block">
          {/* Step headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            borderBottom: '1px solid var(--color-ink-10)',
          }}>
            {WORKFLOW_STEPS.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  style={{
                    padding: '1.5rem 0 1.25rem',
                    paddingRight: '1rem',
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '2px solid var(--color-ink)' : '2px solid transparent',
                    marginBottom: '-1px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: isActive ? 'var(--color-ink-40)' : 'var(--color-ink-20)',
                    marginBottom: '0.5rem',
                  }}>
                    {step.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9375rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--color-ink)' : 'var(--color-ink-40)',
                    transition: 'color 0.2s ease',
                  }}>
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active step description */}
          <div style={{
            paddingTop: '2.5rem',
            maxWidth: '580px',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--color-ink-60)',
            }}>
              {WORKFLOW_STEPS[activeStep].description}
            </p>

            {/* Step navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
            }}>
              {WORKFLOW_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    width: activeStep === i ? '2rem' : '0.5rem',
                    height: '2px',
                    backgroundColor: activeStep === i ? 'var(--color-ink)' : 'var(--color-ink-20)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.3s ease, background-color 0.2s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical stacked steps */}
        <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column' }}>
          {WORKFLOW_STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1.75rem 0',
                borderBottom: '1px solid var(--color-ink-10)',
                alignItems: 'flex-start',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: 'var(--color-ink-20)',
                paddingTop: '0.2rem',
                minWidth: '1.75rem',
              }}>
                {step.number}
              </span>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: '0.5rem',
                }}>
                  {step.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--color-ink-60)',
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
