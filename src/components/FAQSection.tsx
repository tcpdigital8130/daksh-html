import React, { useState, useId } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Fingerprint, 
  Search,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface FAQ {
  id: string;
  category: 'all' | 'parents' | 'students' | 'science';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FAQ[] = [
  {
    id: 'what-is-dermatoglyphics',
    category: 'science',
    categoryLabel: 'Scientific Foundation',
    question: 'What is the Dermatoglyphics Multiple Intelligence Test, and how does fingerprint ridge analysis reveal brain potential?',
    answer: 'Dermatoglyphics is the scientific study of ridged epidermal patterns on human fingers and palms. During embryonic development (between the 13th and 19th week of gestation), dermal friction ridges develop simultaneously with the cerebral cortex from the same ectoderm tissue. The Dermatoglyphics Multiple Intelligence Test quantitatively examines ridge counts (TRC), pattern configurations (whorls, loops, and arches), and atd angles to map innate neurological distribution across the five cerebral lobes. This provides an objective, unalterable blueprint of an individual’s hardwired cognitive potential.',
    highlight: 'Dermal ridges and cerebral cortex both develop simultaneously from the embryonic ectoderm.'
  },
  {
    id: 'safety-and-age',
    category: 'parents',
    categoryLabel: 'Process & Safety',
    question: 'Is the Dermatoglyphics Multiple Intelligence Test safe, non-invasive, and suitable for young children?',
    answer: 'Yes, it is 100% painless, safe, and completely non-invasive. We use high-resolution optical biometric scanners that capture the ridge topography of all 10 fingers in just 3 to 5 minutes without any radiation, discomfort, or messy ink. The Dermatoglyphics Multiple Intelligence Test can be administered to children as young as 3 to 4 years old, teenagers, and adults alike.',
    highlight: '100% non-invasive optical scan with zero ink and zero radiation.'
  },
  {
    id: 'stream-selection',
    category: 'parents',
    categoryLabel: 'Stream Selection',
    question: 'How does the Dermatoglyphics Multiple Intelligence Test help parents and students choose the right stream after Class 10 or 12?',
    answer: 'Rather than forcing a student into a stream based on peer pressure or societal trends, the Dermatoglyphics Multiple Intelligence Test identifies innate cognitive wiring. It clearly reveals whether a student’s natural strengths lie in analytical logic and spatial reasoning (ideal for Engineering, Architecture, or Pure Sciences), linguistic and interpersonal intelligence (ideal for Law, Civil Services, or Humanities), or commercial acumen (ideal for Finance, Economics, or Management). This removes academic friction and guesswork in family decision-making.',
    highlight: 'Replaces peer pressure and guesswork with scientific stream alignment.'
  },
  {
    id: 'difference-from-online-quizzes',
    category: 'students',
    categoryLabel: 'Scientific Comparison',
    question: 'How is the Dermatoglyphics Multiple Intelligence Test different from ordinary online psychometric quizzes or aptitude tests?',
    answer: 'Standard online quizzes rely strictly on subjective self-reporting questionnaires. A student’s answers can be skewed by mood, stress, coaching, or wanting to impress parents. In contrast, epidermal ridge patterns analyzed in the Dermatoglyphics Multiple Intelligence Test are formed before birth and remain identical throughout life. It provides an objective baseline of innate potential that is unaffected by test-day anxiety or exam fatigue.',
    highlight: 'Measures unalterable innate potential rather than temporary mood-dependent answers.'
  },
  {
    id: 'learning-styles',
    category: 'students',
    categoryLabel: 'Study Strategies',
    question: 'Can the Dermatoglyphics Multiple Intelligence Test identify why a student struggles with specific subjects or study habits?',
    answer: 'Yes. The assessment details your primary learning mode (Visual, Auditory, or Kinesthetic/Tactile) along with Left-Brain vs. Right-Brain dominance. Often, academic struggles do not mean a lack of intelligence; they simply indicate that the student is an Auditory or Kinesthetic learner being forced to memorize through traditional visual textbook methods. Identifying the natural learning modality transforms study efficiency and restores academic self-confidence.',
    highlight: 'Pinpoints Visual, Auditory, and Kinesthetic learning profiles for customized study habits.'
  },
  {
    id: 'limiting-potential',
    category: 'parents',
    categoryLabel: 'Assessment Philosophy',
    question: 'Will this assessment label my child or limit their future career possibilities?',
    answer: 'Never. DAKSH adheres strictly to an empowerment philosophy. The Dermatoglyphics Multiple Intelligence Test does not place limits on what a child can achieve; rather, it highlights where their natural potential energy is highest. Just as knowing a swimmer’s natural buoyancy helps tailor their training regimen, knowing a student’s cognitive profile allows parents and educators to support them with appropriate tools and encouragement.',
    highlight: 'Designed to empower and tailor learning styles, never to restrict or label.'
  },
  {
    id: 'report-contents-timeline',
    category: 'students',
    categoryLabel: 'Report Delivery',
    question: 'What is included in the diagnostic report, and how quickly is it generated?',
    answer: 'The comprehensive 35+ page diagnostic report delivers an in-depth breakdown of Howard Gardner’s 8 Multiple Intelligences, brain hemisphere dominance, learning speed indices, VAK study modalities, emotional (EQ) and adversity (AQ) quotients, and personalized career pathways. Reports are computed algorithmically and made available in your dashboard with interactive visualizations.',
    highlight: 'Complete 35+ page diagnostic report with interactive multi-dimensional dashboards.'
  },
  {
    id: 'data-privacy',
    category: 'science',
    categoryLabel: 'Privacy & Security',
    question: 'How does DAKSH ensure student data privacy and biometric security?',
    answer: 'Biometric privacy is paramount. Ridge scans are encrypted with enterprise-grade AES-256 protocols and converted mathematically into structural ridge indices. Fingerprint images are never sold or shared with any third party, marketing network, or government entity. DAKSH adheres to Indian Digital Personal Data Protection (DPDP) standards and strict student privacy ethics.',
    highlight: 'Enterprise AES-256 encryption with zero third-party data sharing.'
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'parents' | 'students' | 'science'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'what-is-dermatoglyphics': true, // Open the primary question by default
    'stream-selection': true
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQS.forEach(faq => {
      allOpen[faq.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Parent & Student Guidance</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Comprehensive FAQs</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Everything you need to know about the Dermatoglyphics Multiple Intelligence Test.
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            Clear, transparent answers for parents and students on embryonic ridge science, cognitive potential mapping, stream selection, and data privacy.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Questions ({FAQS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('parents')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                activeCategory === 'parents'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span>For Parents</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('students')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                activeCategory === 'students'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>For Students</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('science')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                activeCategory === 'science'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Fingerprint className="w-3.5 h-3.5 text-cyan-500" />
              <span>Science & Privacy</span>
            </button>
          </div>

          {/* Quick Search and Expand/Collapse Action */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
              />
            </div>
            
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
              <button
                type="button"
                onClick={expandAll}
                className="px-2 py-1 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Expand all
              </button>
              <span className="text-slate-300">/</span>
              <button
                type="button"
                onClick={collapseAll}
                className="px-2 py-1 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Collapse
              </button>
            </div>
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">No matching questions found.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-2 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#F8FAFD] border-indigo-200/90 shadow-xs' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4338CA]">
                          0{index + 1} · {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-900 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-200 ${
                      isOpen 
                        ? 'bg-indigo-600 text-white rotate-180 shadow-xs' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 animate-in fade-in duration-150">
                      <p className="font-normal text-slate-600">
                        {faq.answer}
                      </p>
                      
                      {faq.highlight && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-indigo-50/80 border border-indigo-100/90 text-xs font-medium text-indigo-950">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Key takeaway:</strong> {faq.highlight}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Certified Ethical Diagnostic Protocol
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Compliant with Indian DPDP standards · Non-invasive optical capture · Zero third-party telemetry sharing.
              </p>
            </div>
          </div>

          <a
            href="#stories"
            className="shrink-0 px-4 py-2 text-xs font-bold text-slate-700 hover:text-indigo-600 bg-white border border-slate-200 hover:border-indigo-300 rounded-xl transition-all shadow-xs"
          >
            Read Parent & Student Experiences
          </a>
        </div>

      </div>
    </section>
  );
};
