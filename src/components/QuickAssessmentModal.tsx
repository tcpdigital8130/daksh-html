import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, Brain, Sparkles, Award } from 'lucide-react';
import { ASSESSMENT_QUESTIONS } from '../data/assessmentData';
import { BenchmarkPersona, IntelligenceScore } from '../types';

interface QuickAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (customPersona: BenchmarkPersona) => void;
}

export const QuickAssessmentModal: React.FC<QuickAssessmentModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'Student' | 'Professional' | 'Entrepreneur' | 'Creative'>('Student');
  const [hasStarted, setHasStarted] = useState(false);

  if (!isOpen) return null;

  const currentQ = ASSESSMENT_QUESTIONS[currentIndex];
  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate results and synthesize custom persona
      synthesizeReport();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const synthesizeReport = () => {
    let totalLeft = 0;
    let totalRight = 0;
    let totalVisual = 0;
    let totalAuditory = 0;
    let totalKinesthetic = 0;
    let eqSum = 100;
    let aqSum = 100;

    const intelligenceScores: Record<string, number> = {
      logical: 65,
      spatial: 65,
      linguistic: 65,
      bodily: 65,
      intrapersonal: 65,
      interpersonal: 65,
      musical: 55,
      naturalistic: 60
    };

    ASSESSMENT_QUESTIONS.forEach(q => {
      const selectedOptIdx = selectedAnswers[q.id];
      if (selectedOptIdx !== undefined) {
        const opt = q.options[selectedOptIdx];
        totalLeft += opt.bias.leftBrain;
        totalRight += opt.bias.rightBrain;
        totalVisual += opt.bias.visual;
        totalAuditory += opt.bias.auditory;
        totalKinesthetic += opt.bias.kinesthetic;
        eqSum += opt.bias.eqDelta * 4;
        aqSum += opt.bias.aqDelta * 4;

        if (opt.bias.intelligenceKey && intelligenceScores[opt.bias.intelligenceKey] !== undefined) {
          intelligenceScores[opt.bias.intelligenceKey] += 6;
        }
      }
    });

    // Normalize brain balance
    const totalHemisphere = totalLeft + totalRight || 1;
    const leftPercentage = Math.round((totalLeft / totalHemisphere) * 100);
    const rightPercentage = 100 - leftPercentage;

    // Normalize VAK
    const totalVak = totalVisual + totalAuditory + totalKinesthetic || 1;
    const visualPct = Math.round((totalVisual / totalVak) * 100);
    const auditoryPct = Math.round((totalAuditory / totalVak) * 100);
    const kinestheticPct = Math.max(0, 100 - visualPct - auditoryPct);

    let primaryStyle: 'Visual' | 'Auditory' | 'Kinesthetic' | 'Multimodal' = 'Visual';
    if (visualPct >= auditoryPct && visualPct >= kinestheticPct) primaryStyle = 'Visual';
    else if (auditoryPct >= visualPct && auditoryPct >= kinestheticPct) primaryStyle = 'Auditory';
    else primaryStyle = 'Kinesthetic';

    // Clamp intelligence scores between 45 and 96
    const intList: IntelligenceScore[] = [
      { key: 'logical', label: 'Logical-Math', score: Math.min(96, Math.max(50, intelligenceScores.logical)), percentile: 85, description: 'Deductive systems, numerical modeling, structured problem decomposition.', associatedLobe: 'Left Frontal & Parietal' },
      { key: 'spatial', label: 'Spatial-Visual', score: Math.min(95, Math.max(50, intelligenceScores.spatial)), percentile: 88, description: '3D structural imagery, spatial rotation, conceptual architecture.', associatedLobe: 'Right Parietal & Occipital' },
      { key: 'linguistic', label: 'Linguistic', score: Math.min(94, Math.max(50, intelligenceScores.linguistic)), percentile: 82, description: 'Semantic precision, rhetorical clarity, conceptual synthesis.', associatedLobe: 'Left Temporal' },
      { key: 'bodily', label: 'Bodily-Kinesthetic', score: Math.min(92, Math.max(50, intelligenceScores.bodily)), percentile: 79, description: 'Tactile execution, physical ergonomics, fine motor precision.', associatedLobe: 'Motor Cortex' },
      { key: 'intrapersonal', label: 'Intrapersonal', score: Math.min(95, Math.max(50, intelligenceScores.intrapersonal)), percentile: 89, description: 'Self-governance, internal calibration, deep solitary focus.', associatedLobe: 'Prefrontal Cortex' },
      { key: 'interpersonal', label: 'Interpersonal', score: Math.min(93, Math.max(50, intelligenceScores.interpersonal)), percentile: 81, description: 'Team alignment, social resonance, stakeholder persuasion.', associatedLobe: 'Frontal & Temporal' },
      { key: 'naturalistic', label: 'Naturalistic', score: Math.min(88, Math.max(45, intelligenceScores.naturalistic)), percentile: 74, description: 'Environmental taxonomies, pattern recognition in nature.', associatedLobe: 'Parietal' },
      { key: 'musical', label: 'Musical-Rhythmic', score: Math.min(85, Math.max(45, intelligenceScores.musical)), percentile: 70, description: 'Cadence sensitivity, auditory harmony, acoustic resonance.', associatedLobe: 'Right Temporal' },
    ].sort((a, b) => b.score - a.score);

    const displayName = userName.trim() || 'My Assessment Profile';

    const customResult: BenchmarkPersona = {
      id: 'custom-user-profile',
      name: displayName,
      category: userRole,
      ageGroup: userRole === 'Student' ? '15–20 yrs' : '22–45 yrs',
      headline: `${leftPercentage > 53 ? 'Analytical Left-Brain' : rightPercentage > 53 ? 'Creative Right-Brain' : 'Bilateral Balanced'} Dominance · ${primaryStyle} Learner`,
      summary: `Evaluated through DAKSH multi-lens cognitive screener. Shows pronounced aptitude in ${intList[0].label} and ${intList[1].label} with high ${primaryStyle.toLowerCase()} learning retention.`,
      leftBrainPercentage: leftPercentage,
      rightBrainPercentage: rightPercentage,
      dominantHemisphere: leftPercentage > 53 ? 'Left (Analytical & Logical)' : rightPercentage > 53 ? 'Right (Holistic & Creative)' : 'Bilateral Equilibrium',
      learningStyle: {
        visual: visualPct,
        auditory: auditoryPct,
        kinesthetic: kinestheticPct,
        primaryStyle: primaryStyle,
        recommendation: primaryStyle === 'Visual'
          ? 'Retains maximum information through visual frameworks, architecture diagrams, and concept maps.'
          : primaryStyle === 'Auditory'
          ? 'Accelerates mastery through structured debates, oral presentations, and analytical podcast listening.'
          : 'Gains deepest mastery through tactile experiments, direct sandbox problem solving, and hands-on drills.'
      },
      intelligences: intList,
      quotients: {
        iq: { score: 125, label: 'Superior Analytical', description: 'Strong pattern synthesis and deductive reasoning agility.' },
        eq: { score: Math.min(140, eqSum), label: eqSum > 120 ? 'High Empathic' : 'Balanced Composure', description: 'Regulates interpersonal dynamics and communication under pressure.' },
        aq: { score: Math.min(142, aqSum), label: aqSum > 125 ? 'High Adversity Mastery' : 'Steady Tenacity', description: 'Handles unexpected blockers and pivots systematically.' },
        cq: { score: 126, label: 'Inventive Applied', description: 'Translates theoretical insights into functional execution strategies.' }
      },
      topCareers: [
        {
          title: intList[0].key === 'logical' ? 'Computational Engineering & AI Systems' : intList[0].key === 'spatial' ? 'Industrial & Product Architecture' : 'Strategic Systems & Governance',
          field: 'Core Specialization',
          matchScore: 96,
          coreStrength: `${intList[0].label} + ${intList[1].label}`,
          growthHorizon: 'High National & Global Growth',
          roadmapHint: 'Focus on high-leverage projects combining your top 2 multiple intelligence vectors.'
        },
        {
          title: 'Cross-Functional Decision Architecture',
          field: 'Strategic Leadership',
          matchScore: 91,
          coreStrength: `High ${primaryStyle} processing + AQ ${Math.min(142, aqSum)}`,
          growthHorizon: 'Executive & Strategic Need',
          roadmapHint: 'Build cross-domain fluency to bridge technical and business requirements.'
        },
        {
          title: 'Applied Applied Research & Innovation',
          field: 'R&D / Strategy',
          matchScore: 88,
          coreStrength: 'Innate cognitive balance',
          growthHorizon: 'Expanding Frontier',
          roadmapHint: 'Leverage your unique quotient profile to tackle open-ended challenges.'
        }
      ],
      developmentRecommendations: [
        `Harness your ${primaryStyle} learning modality by using active ${primaryStyle === 'Visual' ? 'diagramming' : primaryStyle === 'Auditory' ? 'verbal deconstruction' : 'tactile prototypes'}.`,
        `Cultivate your secondary strength in ${intList[2].label} to develop a rare cross-disciplinary advantage.`,
        'Schedule a 1-on-1 counseling session with a certified DAKSH psychometrician to review full 35-page parameters.'
      ]
    };

    onComplete(customResult);
  };

  const isCurrentAnswered = selectedAnswers[currentQ?.id] !== undefined;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#4338CA] flex items-center justify-center font-bold text-xs">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                DAKSH Cognitive & Potential Screener
              </h2>
              <p className="text-[11px] text-slate-500">
                10 Adaptive Questions · Scientifically Calibrated
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Assessment"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          
          {!hasStarted ? (
            /* Onboarding screen */
            <div className="space-y-6 max-w-xl mx-auto py-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold text-[#4338CA] tracking-wider uppercase block mb-1">
                  Step 0 of 10 · Calibration
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Welcome to your Potential Discovery
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  In this fast 3-minute screening, answer instinctively based on your natural cognitive preferences rather than what you feel you "ought" to do.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label htmlFor="user-name-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name or Alias
                  </label>
                  <input
                    id="user-name-input"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4338CA]/20 focus:border-[#4338CA] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Primary Profile Focus
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Student', 'Professional', 'Entrepreneur', 'Creative'] as const).map(role => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setUserRole(role)}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                          userRole === role
                            ? 'bg-[#161248] text-white border-[#161248] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end">
                <button
                  onClick={() => setHasStarted(true)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#161248] to-[#4338CA] hover:opacity-95 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Begin Assessment</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ) : (
            /* Question flow */
            <div className="space-y-6">
              
              {/* Progress Bar & Indicators */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-[#4338CA] font-bold">
                      Q{currentIndex + 1}
                    </span>
                    <span>/ {totalQuestions}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-700 font-sans font-medium">{currentQ.pillar}</span>
                  </div>
                  <span className="font-mono text-slate-500">{progressPercent}% Completed</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-[#161248] transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Scenario Context & Question */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#4338CA] uppercase tracking-wider">
                  {currentQ.categoryLabel}
                </p>
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                  <p className="text-[11px] text-[#4338CA] font-bold uppercase tracking-wider mb-0.5">Scenario Context:</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-800">{currentQ.scenario}</p>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 pt-1 leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50/80 border-[#4338CA] text-slate-900 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-[#4338CA] bg-[#4338CA] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className="text-xs sm:text-sm leading-relaxed font-normal">{option.text}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        {hasStarted && (
          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className={`px-3 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!isCurrentAnswered}
              className={`px-5 py-2.5 text-xs font-bold rounded-2xl flex items-center gap-2 transition-all ${
                isCurrentAnswered
                  ? 'bg-gradient-to-r from-[#161248] to-[#4338CA] hover:opacity-95 text-white shadow-xs cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Compute & Generate Report' : 'Next Question'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
