import React from 'react';
import { Smartphone, CheckCircle, FileText, UserCheck, Milestone, ArrowRight } from 'lucide-react';

interface DiagnosticJourneyProps {
  onStartAssessment: () => void;
  onBookCounseling: () => void;
}

export const DiagnosticJourney: React.FC<DiagnosticJourneyProps> = ({
  onStartAssessment,
  onBookCounseling,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Digital Onboarding & Biometrics',
      icon: Smartphone,
      subtitle: 'Fast OTP Registration',
      description: 'Create your profile via web or the DAKSH mobile app in under 60 seconds. Capture biometric ridge markers with our guided scanner or begin digital screener.'
    },
    {
      num: '02',
      title: 'Adaptive Multi-Lens Assessment',
      icon: CheckCircle,
      subtitle: '10–20 Minutes',
      description: 'Engage with our calibrated scenario-based cognitive aptitude screener and psychometric indicators designed to test problem-solving, EQ, and stress recovery.'
    },
    {
      num: '03',
      title: 'Real-Time Diagnostic Generation',
      icon: FileText,
      subtitle: 'Instant Synthesis',
      description: 'Our proprietary algorithm computes your Left-vs-Right brain equilibrium, 8-Factor Multiple Intelligences, VAK learning style, and IQ/EQ/AQ quotients.'
    },
    {
      num: '04',
      title: 'Certified Counselor Debrief',
      icon: UserCheck,
      subtitle: '1-on-1 Personalized Session',
      description: 'Connect with a certified career psychologist or master Dermatoglyphics Multiple Intelligence Test counselor to reconcile differences, address academic friction, and uncover latent talents.'
    },
    {
      num: '05',
      title: 'Continuous Growth Roadmap',
      icon: Milestone,
      subtitle: 'Lifetime Alignment',
      description: 'Receive concrete academic stream recommendations, competitive exam targets, and a personalized 6-month developmental milestone tracker.'
    }
  ];

  return (
    <section id="journey" className="py-16 md:py-24 bg-[#F4F7FB] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>Simple Process</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>From Confusion to Conviction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Your journey to self-discovery in five structured steps.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            A frictionless, scientifically grounded diagnostic workflow designed for clarity at every milestone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#4338CA] font-mono tracking-tighter">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#4338CA] flex items-center justify-center group-hover:bg-[#4338CA] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#4338CA] block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-400 font-mono font-medium">
                  <span>Step {idx + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#161248] via-[#1E1B4B] to-[#2E2A72] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to begin your diagnostic evaluation?</h3>
            <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 font-normal">
              Take the fast online screener or book an in-depth counseling session with certified psychologists.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onStartAssessment}
              className="px-5 py-2.5 text-xs font-bold text-[#161248] bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Take Fast Screener</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#161248]" />
            </button>
            <button
              onClick={onBookCounseling}
              className="px-4 py-2.5 text-xs font-bold text-cyan-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors cursor-pointer"
            >
              <span>Book Counselor</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

