import React, { useState } from 'react';
import { Brain, Fingerprint, Cpu, Layers, ChevronRight } from 'lucide-react';
import { BRAIN_LOBES } from '../data/assessmentData';

export const MethodologySection: React.FC = () => {
  const [selectedLobeIndex, setSelectedLobeIndex] = useState(0);
  const activeLobe = BRAIN_LOBES[selectedLobeIndex];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>The Science of Potential</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Tri-Pillar Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Replacing guesswork with empirical neuro-cognitive science.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Conventional assessments rely entirely on self-perception questionnaires, which are vulnerable to social desirability and peer bias. DAKSH triangulates three independent scientific lenses.
          </p>
        </div>

        {/* Tri-Pillar Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1: Dermatoglyphics Multiple Intelligence Test (Warm Amber pastel box) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF8] border border-amber-200/90 shadow-xs hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-xs">
              <Fingerprint className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
                01. Innate Hardware
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Dermatoglyphics Multiple Intelligence Test
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Epidermal ridge patterns form in utero simultaneously with the neocortex between the 13th and 19th weeks. Ridge density and delta configurations provide biometric markers for innate synaptic distribution across brain lobes.
            </p>
            <div className="pt-2 border-t border-amber-100 text-xs text-slate-500 flex items-center justify-between font-mono">
              <span>Biometric Integrity</span>
              <span className="text-amber-700 font-bold">100% Unalterable</span>
            </div>
          </div>

          {/* Pillar 2: Cognitive Aptitude (Sky Blue pastel box like Brain Dominance in screenshot) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFD] border border-sky-200/90 shadow-xs hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-xs">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-sky-700 font-bold uppercase tracking-wider block">
                02. Operating Software
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Adaptive Cognitive Aptitude
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Standardized fluid intelligence instruments measuring working memory capacity, spatial mental rotation, algorithmic reasoning, and speed of quantitative pattern recognition.
            </p>
            <div className="pt-2 border-t border-sky-100 text-xs text-slate-500 flex items-center justify-between font-mono">
              <span>Standardization</span>
              <span className="text-sky-700 font-bold">Adaptive Difficulty</span>
            </div>
          </div>

          {/* Pillar 3: Psychometrics (Soft Indigo / Purple pastel box) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8FF] border border-indigo-200/90 shadow-xs hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-[#4338CA] shadow-xs">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#4338CA] font-bold uppercase tracking-wider block">
                03. Behavioral Dynamics
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Psychometric EQ & AQ
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Deep character profiling rooted in Big Five trait psychology, emotional intelligence (EQ), and adversity quotient (AQ) to predict stress handling and workplace leadership compatibility.
            </p>
            <div className="pt-2 border-t border-indigo-100 text-xs text-slate-500 flex items-center justify-between font-mono">
              <span>Psychometric Validity</span>
              <span className="text-[#4338CA] font-bold">Cronbach Alpha 0.88</span>
            </div>
          </div>

        </div>

        {/* Interactive Cerebral Lobe & Ridge Explorer */}
        <div className="bg-[#F8FAFD] border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wider block mb-1">
              Interactive Cortex Mapping
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              How fingerprint ridges map to cerebral lobes
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a cerebral lobe below to explore its corresponding finger ridge correlation and cognitive faculties.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Lobe selection buttons */}
            <div className="lg:col-span-5 space-y-2">
              {BRAIN_LOBES.map((lobe, idx) => {
                const isSelected = selectedLobeIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedLobeIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#4338CA] text-slate-900 shadow-sm ring-1 ring-[#4338CA]'
                        : 'bg-white/70 border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div>
                      <p className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#4338CA]' : 'text-slate-900'}`}>{lobe.lobe}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{lobe.fingerprints}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#4338CA] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Lobe Detailed Display */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-[#161248]">
                    {activeLobe.lobe}
                  </h4>
                  <span className="text-xs text-[#4338CA] font-semibold">
                    Mapped to: {activeLobe.fingerprints}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#4338CA] flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Primary Cognitive Domain
                </span>
                <p className="text-sm font-bold text-slate-900">
                  {activeLobe.cognitiveDomain}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Scientific Mechanism & Insight
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeLobe.details}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-[11px] text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>DAKSH algorithm measures total ridge count (TRC) to calculate neural bandwidth density.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

