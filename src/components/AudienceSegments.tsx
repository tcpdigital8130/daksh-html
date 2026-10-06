import React, { useState } from 'react';
import { GraduationCap, HeartHandshake, Briefcase, Rocket, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceSegmentsProps {
  onStartAssessment: () => void;
  onBookCounseling: () => void;
}

export const AudienceSegments: React.FC<AudienceSegmentsProps> = ({
  onStartAssessment,
  onBookCounseling,
}) => {
  const [activeTab, setActiveTab] = useState<'students' | 'parents' | 'professionals' | 'entrepreneurs' | 'corporates'>('students');

  const segments = {
    students: {
      title: 'Students (Grades 8-12 & College)',
      icon: GraduationCap,
      lead: 'End academic confusion with empirical cognitive alignment.',
      description: 'Over 68% of Indian students choose their academic streams due to parental or peer pressure. DAKSH maps your authentic cognitive wiring so you choose with absolute clarity.',
      benefits: [
        'Precise stream selection after Class 10: Science (PCM/PCB), Commerce, Humanities, or Design.',
        'Competitive exam fit analysis: JEE Advanced, NEET, CUET, CLAT, or Civil Services.',
        'Learning style optimization (VAK) to reduce revision hours and exam anxiety.',
        'Identification of cognitive blindspots before entrance exam prep begins.'
      ],
      sampleQuestion: 'Should I opt for engineering or design when my math and visual scores are equally high?',
      actionLabel: 'Take Student Diagnostic Screener'
    },
    parents: {
      title: 'Parents & Families',
      icon: HeartHandshake,
      lead: 'Nurture your child’s innate brilliance without comparisons.',
      description: 'Every child’s brain is uniquely patterned. Understand their natural temperament, attention rhythm, and emotional thresholds to eliminate domestic homework stress.',
      benefits: [
        'Understand your child’s primary learning channel (Visual vs Auditory vs Kinesthetic).',
        'Identify dormant multiple intelligences (musical, spatial, athletic) early in childhood.',
        'End unhealthy comparisons with siblings or school peers using scientific data.',
        'Personalized parenting communication blueprint for adolescent transitions.'
      ],
      sampleQuestion: 'Why does my child struggle with rote memorization but excel at building physical models?',
      actionLabel: 'Evaluate Your Child’s Potential'
    },
    professionals: {
      title: 'Working Professionals & Mid-Career',
      icon: Briefcase,
      lead: 'Navigate career transitions and master executive presence.',
      description: 'Feeling stagnated in your current job or contemplating a pivotal transition? DAKSH reveals whether your stress stems from working against your innate cognitive grain.',
      benefits: [
        'Evaluate career pivot feasibility into Product, Data Strategy, or Management.',
        'Uncover executive EQ blindspots and team communication friction points.',
        'Calibrate leadership style between analytical execution and charismatic vision.',
        'Maximize high-leverage flow states in daily knowledge work.'
      ],
      sampleQuestion: 'Should I transition from an Individual Contributor (IC) engineering role to people management?',
      actionLabel: 'Take Career Alignment Screener'
    },
    entrepreneurs: {
      title: 'Entrepreneurs & Startup Founders',
      icon: Rocket,
      lead: 'Calibrate risk tolerance, decision velocity, and co-founder synergy.',
      description: 'Founding a venture demands extreme cognitive agility. DAKSH benchmarks your Adversity Quotient (AQ) and creative synthesis against high-performing founders.',
      benefits: [
        'Benchmark your Adversity Quotient (AQ) to sustain high-stress capital cycles.',
        'Map co-founder cognitive synergy: pairing analytical left-brain COOs with creative right-brain CEOs.',
        'Identify natural delegation weaknesses to prevent founder bottlenecking.',
        'Sharpen investor storytelling and charismatic stakeholder resonance.'
      ],
      sampleQuestion: 'What cognitive archetype should I look for in my technical or operational co-founder?',
      actionLabel: 'Evaluate Founder AQ & Strengths'
    },
    corporates: {
      title: 'Corporates, Schools & CSR Initiatives',
      icon: Building2,
      lead: 'Data-driven talent architecture and scalable human capital transformation.',
      description: 'Used by major organizations like IRCON International, Central Electronics Ltd, and CII to benchmark organizational capabilities and foster women leadership.',
      benefits: [
        'High-volume cohort benchmarking for graduate trainee programs and campus hiring.',
        'Leadership succession planning using standardized psychological metrics.',
        'High-impact CSR education initiatives empowering underprivileged youth across India.',
        'Comprehensive enterprise analytics dashboard with batch reporting.'
      ],
      sampleQuestion: 'How can our institution screen 2,000 candidates efficiently with objective cognitive metrics?',
      actionLabel: 'Request Institutional Cohort Demo'
    }
  };

  const current = segments[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="audiences" className="py-16 md:py-24 bg-[#F4F7FB] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>Tailored Solutions</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Who Can Benefit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Empowering every stage of the human journey.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            From students selecting high school streams to executives navigating boardrooms, DAKSH delivers tailored self-awareness.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="p-1.5 bg-white border border-slate-200 rounded-3xl flex flex-wrap gap-1.5 mb-8 shadow-xs">
          {(
            [
              { key: 'students', label: 'Students & Stream Selection', icon: GraduationCap },
              { key: 'parents', label: 'Parents & Child Guidance', icon: HeartHandshake },
              { key: 'professionals', label: 'Professionals & Executives', icon: Briefcase },
              { key: 'entrepreneurs', label: 'Founders & Entrepreneurs', icon: Rocket },
              { key: 'corporates', label: 'Institutions & CSR', icon: Building2 },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.key;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 text-xs font-bold rounded-2xl transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#4338CA] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Segment Detail Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Lead and Benefits */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4338CA] flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs text-[#4338CA] font-bold">{current.lead}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Outcomes & Advantages:
                </p>
                <div className="space-y-2">
                  {current.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Typical Inquiry & Action Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200 space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#4338CA] uppercase tracking-wider block mb-1">
                  Core Question Solved
                </span>
                <p className="text-sm font-semibold text-slate-900 italic bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  "{current.sampleQuestion}"
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={onStartAssessment}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#161248] via-[#2A2B78] to-[#4338CA] hover:from-[#1E1B4B] hover:to-[#3730A3] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{current.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onBookCounseling}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Consultation Debrief</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-snug">
                Includes full algorithmic report + personalized growth roadmap.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

