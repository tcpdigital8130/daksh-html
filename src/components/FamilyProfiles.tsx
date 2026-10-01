import React, { useState } from 'react';
import { Brain, Sparkles, Check, ArrowRight, Activity, Compass, Award } from 'lucide-react';
import { BENCHMARK_PERSONAS } from '../data/assessmentData';

interface FamilyProfilesProps {
  onSelectPersona?: (personaId: string) => void;
  onExploreReport: () => void;
}

export const FamilyProfiles: React.FC<FamilyProfilesProps> = ({
  onSelectPersona,
  onExploreReport,
}) => {
  const [selectedId, setSelectedId] = useState('aarav-class8');
  const activePersona = BENCHMARK_PERSONAS.find(p => p.id === selectedId) || BENCHMARK_PERSONAS[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (onSelectPersona) onSelectPersona(id);
  };

  return (
    <section id="profiles" className="py-16 md:py-24 bg-[#F4F7FB] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
              <span>Family Hub</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Multi-Profile Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              One Family. Individual Blueprints.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Toggle between family members to see how DAKSH decodes each child's distinct neurological strengths.
          </p>
        </div>

        {/* Profile Switcher Buttons (Directly mirroring the mobile app screenshot) */}
        <div className="flex flex-wrap gap-3 mb-8">
          {BENCHMARK_PERSONAS.slice(0, 3).map((p) => {
            const isSelected = p.id === selectedId;
            return (
              <button
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className={`p-3 pr-5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#4338CA] shadow-md shadow-indigo-950/5 ring-2 ring-[#4338CA]/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg relative ${
                  isSelected ? 'bg-indigo-50 border-2 border-[#4338CA]' : 'bg-slate-100'
                }`}>
                  {p.id.includes('aarav') ? '👦' : p.id.includes('ananya') ? '👧' : '👨'}
                  {isSelected && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4338CA] text-white flex items-center justify-center text-[9px] shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">{p.name}</p>
                  <p className="text-[11px] text-slate-500">{p.ageGroup}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Compact, Highly Visual Profile Blueprint Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Hemispheric Dominance Balance Bar */}
            <div className="lg:col-span-4 space-y-5 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <span className="text-[11px] font-bold text-[#4338CA] uppercase tracking-wider block">
                  Neocortex Balance
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-0.5">
                  {activePersona.dominantHemisphere}
                </h3>
              </div>

              {/* Visual Balance Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span className="text-indigo-600">Left: {activePersona.leftBrainPercentage}%</span>
                  <span className="text-cyan-600">Right: {activePersona.rightBrainPercentage}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className="h-full bg-[#4338CA] transition-all duration-500" 
                    style={{ width: `${activePersona.leftBrainPercentage}%` }} 
                  />
                  <div 
                    className="h-full bg-cyan-500 transition-all duration-500" 
                    style={{ width: `${activePersona.rightBrainPercentage}%` }} 
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Logic · Math · Linear</span>
                  <span>Spatial · Intuition · Rhythm</span>
                </div>
              </div>

              {/* VAK Style */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[#4338CA]">Primary Learning Channel</span>
                  <span className="text-xs font-bold text-indigo-900">{activePersona.learningStyle.primaryStyle}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  {activePersona.learningStyle.recommendation}
                </p>
              </div>
            </div>

            {/* Top 4 Multiple Intelligences */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Top Intelligences (Howard Gardner 8-Factor)
              </span>

              <div className="space-y-3">
                {activePersona.intelligences.slice(0, 4).map((intel) => (
                  <div key={intel.key} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{intel.label}</span>
                      <span className="font-mono font-bold text-[#4338CA]">{intel.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-[#4338CA] rounded-full transition-all duration-500"
                        style={{ width: `${intel.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Career Horizon Recommendations */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Recommended Horizons
              </span>

              <div className="space-y-2.5">
                {activePersona.topCareers.slice(0, 2).map((career, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                      {career.matchScore}% Match
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                      {career.title}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      {career.coreStrength}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#diagnostic-report"
                className="w-full py-2.5 px-3 rounded-xl bg-[#161248] hover:bg-[#2A2B78] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
