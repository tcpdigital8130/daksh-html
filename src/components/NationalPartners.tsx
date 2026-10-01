import React from 'react';
import { ShieldCheck, Award, Building2 } from 'lucide-react';
import { INSTITUTIONAL_PARTNERS } from '../data/assessmentData';

interface NationalPartnersProps {
  onOpenCounseling?: () => void;
}

export const NationalPartners: React.FC<NationalPartnersProps> = ({ onOpenCounseling }) => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal, clean */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>Institutional Governance</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>National Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Trusted by Premier Public Enterprises & Consortia.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed font-normal">
            DAKSH powers large-scale human capital benchmarking for central government enterprises, industry federations, and nationwide educational consortia.
          </p>
        </div>

        {/* Institutional Partner Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INSTITUTIONAL_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200 hover:border-indigo-300 transition-all space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#4338CA] font-bold">
                  {partner.type}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500">{partner.category}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]" />
                <span>{partner.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
