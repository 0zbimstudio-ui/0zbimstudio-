import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowRight, Mail, Send } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-blueprint-radial relative overflow-hidden border-t border-b border-white/10">
      {/* Background CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="glass-panel p-10 sm:p-16 rounded-2xl border border-white/15 max-w-4xl mx-auto relative cad-crosshair shadow-2xl">
          
          {/* Corner Accents */}
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono-tech text-[#00F0FF] rounded-sm mb-6">
            <span>INITIATE COLLABORATION</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-6">
            {STUDIO_INFO.ctaHeadline}
          </h2>

          {/* Copy */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {STUDIO_INFO.ctaCopy}
          </p>

          {/* Dual Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary text-sm py-3.5 px-8 flex items-center justify-center gap-2 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="btn-secondary text-sm py-3.5 px-8 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#00F0FF]" />
              <span>Email 0ZBIMStudio</span>
            </a>
          </div>

          <div className="mt-8 text-xs font-mono-tech text-slate-500">
            DIRECT EMAIL: <span className="text-slate-300">{STUDIO_INFO.email}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
