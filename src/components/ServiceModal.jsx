import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, FileText, Send } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function ServiceModal({ service, onClose, onSelectService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#141821] border border-white/20 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl cad-crosshair">
        
        {/* Technical Corner Accents */}
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr" />
        <div className="cad-corner-bl" />
        <div className="cad-corner-br" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full border border-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono-tech rounded mb-4">
          <span>{service.categoryName.toUpperCase()}</span>
          <span>•</span>
          <span>REF-0{service.id}</span>
        </div>

        {/* Service Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables Section */}
        <div className="bg-[#0B0D10] p-4 rounded border border-white/10 mb-6">
          <h4 className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Key Service Deliverables & Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a
            href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(`Enquiry: ${service.title}`)}`}
            className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enquire for {service.title}</span>
          </a>

          <button
            onClick={onClose}
            className="btn-secondary text-xs py-2.5 px-4"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
