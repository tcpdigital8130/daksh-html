import React, { useState } from 'react';
import { 
  Brain, Compass, Sparkles, Printer, ArrowRight, 
  CheckCircle2, Activity, Award, User, RefreshCw, BarChart3,
  Check, Settings, ChevronRight
} from 'lucide-react';
import { BenchmarkPersona, IntelligenceScore } from '../types';
import { BENCHMARK_PERSONAS } from '../data/assessmentData';

interface InteractiveReportViewerProps {
  customPersona: BenchmarkPersona | null;
  onRetakeTest: () => void;
  onBookCounseling: () => void;
}

export const InteractiveReportViewer: React.FC<InteractiveReportViewerProps> = ({
  customPersona,
  onRetakeTest,
  onBookCounseling,
}) => {
  // Available personas list: custom persona first if exists, then benchmarks
  const availablePersonas: BenchmarkPersona[] = customPersona
    ? [customPersona, ...BENCHMARK_PERSONAS]
    : BENCHMARK_PERSONAS;

  const [activePersonaId, setActivePersonaId] = useState<string>(
    customPersona ? customPersona.id : BENCHMARK_PERSONAS[0].id
  );
  const [activeHoverIntelligence, setActiveHoverIntelligence] = useState<IntelligenceScore | null>(null);
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Sync if customPersona changes
  React.useEffect(() => {
    if (customPersona) {
      setActivePersonaId(customPersona.id);
    }
  }, [customPersona]);

  const persona = availablePersonas.find(p => p.id === activePersonaId) || availablePersonas[0];

  // Radar chart mathematical geometry for 8 axes
  const radarRadius = 110;
  const centerX = 160;
  const centerY = 160;
  const totalAxes = 8;

  // Calculate polygon points based on persona's 8 intelligences
  const polygonPoints = persona.intelligences.slice(0, 8).map((item, index) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const normalizedScore = item.score / 100;
    const x = centerX + radarRadius * normalizedScore * Math.cos(angle);
    const y = centerY + radarRadius * normalizedScore * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const getAvatarEmoji = (id: string, name: string) => {
    if (id.includes('aarav')) return '👦';
    if (id.includes('ananya')) return '👧';
    if (id.includes('rahul')) return '👨';
    if (id.includes('priya')) return '👩';
    return '👤';
  };

  return (
    <section id="diagnostic-report" className="py-16 md:py-24 bg-[#F4F7FB] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>DAKSH Interactive Diagnostics</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Gardner 8-Factor & Dermatoglyphics Multiple Intelligence Test Biometrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Explore the multi-dimensional potential report.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Switch profiles below to inspect tailored brain dominance, multiple intelligence scores, and customized career pathways.
          </p>
        </div>

        {/* Switch Profile / Manage Family Header (From App Screenshot!) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Switch Profile
            </h3>
            <button
              onClick={onBookCounseling}
              className="text-xs font-bold text-[#4338CA] hover:text-[#312E81] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Manage Family</span>
            </button>
          </div>

          {/* Family Profile Avatars Bar */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2">
            {availablePersonas.map((p) => {
              const isActive = p.id === activePersonaId;
              const emoji = getAvatarEmoji(p.id, p.name);
              const isUserCustom = p.id === 'custom-user-profile';

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePersonaId(p.id)}
                  className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer focus:outline-none"
                >
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all shadow-xs ${
                        isActive
                          ? 'ring-3 ring-[#4338CA] ring-offset-2 bg-indigo-50 scale-105'
                          : 'bg-slate-100 hover:bg-slate-200/80'
                      }`}
                    >
                      {isUserCustom ? '✨' : emoji}
                    </div>

                    {/* Active checkmark circle badge matching screenshot */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#4338CA] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <span className={`text-xs font-bold transition-colors ${isActive ? 'text-[#4338CA]' : 'text-slate-800'}`}>
                    {p.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {p.ageGroup.split(' ')[0]} {p.category === 'Student' ? p.ageGroup.split(' ')[1] || '' : ''}
                  </span>
                </button>
              );
            })}

            {/* Quick action buttons on right */}
            <div className="ml-auto hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200">
              <button
                onClick={() => setShowPrintModal(true)}
                className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Print PDF</span>
              </button>
              <button
                onClick={onRetakeTest}
                className="text-xs text-white font-bold bg-[#4338CA] hover:bg-[#3730A3] flex items-center gap-1.5 py-2 px-3.5 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-200" />
                <span>{customPersona ? 'Retake Screener' : 'Evaluate Me'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* The Diagnostic Report Layout Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          
          {/* Profile Overview Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  {persona.name}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-[#4338CA] border border-indigo-200">
                  {persona.category} · {persona.ageGroup}
                </span>
              </div>
              <p className="text-base font-bold text-[#161248]">
                {persona.headline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {persona.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <button
                onClick={onBookCounseling}
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#161248] via-[#2A2B78] to-[#4338CA] hover:from-[#1E1B4B] hover:to-[#3730A3] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Certified Psychologist Debrief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setShowPrintModal(true)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Export Executive PDF Summary</span>
              </button>
            </div>
          </div>

          {/* Section 1: Gardner 8-Factor Spider Radar + Hemispheric Dominance */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Radar Spider Chart */}
            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200/80 flex flex-col items-center shadow-xs">
              <div className="w-full flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#4338CA]" />
                    <span>Multiple Intelligence Matrices (Gardner 8-Factor)</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Hover over any node to inspect lobe mapping</p>
                </div>
                <span className="text-xs text-[#4338CA] font-bold">View All 8 →</span>
              </div>

              {/* Radar Chart SVG */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                <svg width="320" height="320" viewBox="0 0 320 320" className="overflow-visible">
                  {/* Concentric reference grid rings */}
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, lvlIdx) => (
                    <circle
                      key={lvlIdx}
                      cx={centerX}
                      cy={centerY}
                      r={radarRadius * level}
                      fill="none"
                      stroke="#CBD5E1"
                      strokeWidth="1"
                      strokeDasharray={level < 1 ? "3 3" : undefined}
                      opacity={0.8}
                    />
                  ))}

                  {/* 8 Axes Rays and Labels */}
                  {persona.intelligences.slice(0, 8).map((item, idx) => {
                    const angle = (Math.PI * 2 / totalAxes) * idx - Math.PI / 2;
                    const rayEndX = centerX + radarRadius * Math.cos(angle);
                    const rayEndY = centerY + radarRadius * Math.sin(angle);
                    const labelX = centerX + (radarRadius + 24) * Math.cos(angle);
                    const labelY = centerY + (radarRadius + 24) * Math.sin(angle);

                    return (
                      <g key={item.key}>
                        <line
                          x1={centerX}
                          y1={centerY}
                          x2={rayEndX}
                          y2={rayEndY}
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                        />
                        <text
                          x={labelX}
                          y={labelY}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="#475569"
                          fontSize="9.5"
                          fontWeight="700"
                          className="select-none"
                        >
                          {item.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Data Polygon Fill */}
                  <polygon
                    points={polygonPoints}
                    fill="rgba(67, 56, 202, 0.18)"
                    stroke="#4338CA"
                    strokeWidth="2.5"
                  />

                  {/* Interactive Nodes for each intelligence */}
                  {persona.intelligences.slice(0, 8).map((item, idx) => {
                    const angle = (Math.PI * 2 / totalAxes) * idx - Math.PI / 2;
                    const normalizedScore = item.score / 100;
                    const x = centerX + radarRadius * normalizedScore * Math.cos(angle);
                    const y = centerY + radarRadius * normalizedScore * Math.sin(angle);
                    const isHovered = activeHoverIntelligence?.key === item.key;

                    return (
                      <circle
                        key={item.key}
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 4.5}
                        fill={isHovered ? "#00D2FF" : "#4338CA"}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-150"
                        onMouseEnter={() => setActiveHoverIntelligence(item)}
                        onMouseLeave={() => setActiveHoverIntelligence(null)}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Hover Tooltip / Detail Card */}
              <div className="w-full mt-4 p-3.5 bg-white border border-slate-200 rounded-2xl min-h-[64px] flex items-center justify-between text-xs shadow-xs">
                {activeHoverIntelligence ? (
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-[#4338CA]">
                        {activeHoverIntelligence.label} ({activeHoverIntelligence.score}/100)
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono font-semibold">
                        {activeHoverIntelligence.percentile}th Percentile
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-snug">
                      {activeHoverIntelligence.description} · <span className="text-[#161248] font-semibold">Lobe: {activeHoverIntelligence.associatedLobe}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-400 text-center w-full italic">
                    Hover over any dot on the chart to inspect score & neural lobe correlations.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Brain Dominance + The 4 Quotients */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Brain Dominance Panel */}
              <div className="p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200/80 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-sky-600" />
                    <span>Brain Dominance</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#4338CA]">
                    Left {persona.leftBrainPercentage}% | Right {persona.rightBrainPercentage}%
                  </span>
                </div>

                {/* Balance bar */}
                <div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-[#161248] to-[#4338CA] transition-all duration-500"
                      style={{ width: `${persona.leftBrainPercentage}%` }}
                    />
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-500"
                      style={{ width: `${persona.rightBrainPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <p className="font-bold text-[#161248] mb-1">Left Hemisphere Traits</p>
                    <ul className="text-slate-600 space-y-1 text-[11px] list-disc list-inside">
                      <li>Linear logic & step analysis</li>
                      <li>Mathematical computation</li>
                      <li>Verbal syntax & grammar</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <p className="font-bold text-sky-700 mb-1">Right Hemisphere Traits</p>
                    <ul className="text-slate-600 space-y-1 text-[11px] list-disc list-inside">
                      <li>Holistic spatial pattern grasp</li>
                      <li>Creative synthesis & intuition</li>
                      <li>Emotional tone & artistic sense</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* The 4-Quotient Quad (IQ, EQ, AQ, CQ) */}
              <div className="p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200/80 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#4338CA]" />
                    <span>The 4-Quotient Matrix</span>
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">Standardized Norms</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* IQ */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-slate-800">IQ (Intelligence)</span>
                      <span className="text-base font-extrabold text-[#4338CA] font-mono tabular-nums">
                        {persona.quotients.iq.score}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#161248] block">
                      {persona.quotients.iq.label}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {persona.quotients.iq.description}
                    </p>
                  </div>

                  {/* EQ */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-slate-800">EQ (Emotional)</span>
                      <span className="text-base font-extrabold text-sky-600 font-mono tabular-nums">
                        {persona.quotients.eq.score}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-sky-800 block">
                      {persona.quotients.eq.label}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {persona.quotients.eq.description}
                    </p>
                  </div>

                  {/* AQ */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-slate-800">AQ (Adversity)</span>
                      <span className="text-base font-extrabold text-emerald-600 font-mono tabular-nums">
                        {persona.quotients.aq.score}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 block">
                      {persona.quotients.aq.label}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {persona.quotients.aq.description}
                    </p>
                  </div>

                  {/* CQ */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-bold text-slate-800">CQ (Creativity)</span>
                      <span className="text-base font-extrabold text-purple-600 font-mono tabular-nums">
                        {persona.quotients.cq.score}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-800 block">
                      {persona.quotients.cq.label}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {persona.quotients.cq.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: VAK Learning Style Modality + Top Aligned Careers */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-6 border-t border-slate-100">
            
            {/* Learning Style VAK Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200/80 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#4338CA]" />
                  <span>VAK Learning Modality Profile</span>
                </h4>
                <span className="text-xs font-bold text-[#4338CA] px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200">
                  Primary: {persona.learningStyle.primaryStyle}
                </span>
              </div>

              {/* Progress bars for V, A, K */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span className="text-slate-700">Visual (Spatial Diagrams & Color)</span>
                    <span className="font-mono text-[#4338CA] tabular-nums">{persona.learningStyle.visual}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#161248] to-[#4338CA] rounded-full transition-all duration-500"
                      style={{ width: `${persona.learningStyle.visual}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span className="text-slate-700">Auditory (Lectures, Debates & Voice)</span>
                    <span className="font-mono text-sky-600 tabular-nums">{persona.learningStyle.auditory}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500 rounded-full transition-all duration-500"
                      style={{ width: `${persona.learningStyle.auditory}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span className="text-slate-700">Kinesthetic (Tactile, Building & Movement)</span>
                    <span className="font-mono text-amber-600 tabular-nums">{persona.learningStyle.kinesthetic}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${persona.learningStyle.kinesthetic}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
                <span className="font-bold text-slate-900 block mb-1">Nurturing Strategy:</span>
                {persona.learningStyle.recommendation}
              </div>
            </div>

            {/* Top Aligned Careers & Horizons */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#F8FAFD] border border-slate-200/80 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4338CA]" />
                  <span>Aligned Academic & Career Horizons</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">Weighted Fit Algorithm</span>
              </div>

              <div className="space-y-3">
                {persona.topCareers.map((career, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-colors shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-slate-900">{career.title}</h5>
                          <span className="text-[11px] text-[#4338CA] bg-indigo-50 px-2.5 py-0.5 rounded-full font-bold">
                            {career.field}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          <span className="text-slate-400 font-medium">Core Advantage:</span> {career.coreStrength}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          <span className="text-slate-800 font-semibold">Roadmap:</span> {career.roadmapHint}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-lg font-extrabold text-[#4338CA] font-mono tabular-nums">
                          {career.matchScore}%
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">
                          Match Index
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actionable recommendations */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-900 mb-2">Development Focus Points:</p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {persona.developmentRecommendations.map((rec, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Printable Executive Summary Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  DAKSH Diagnostic Summary · {persona.name}
                </h3>
                <p className="text-xs text-slate-500">
                  Empirical Potential Evaluation · Category: {persona.category} ({persona.ageGroup})
                </p>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Hemispheric Balance</span>
                  <span>{persona.leftBrainPercentage}% Left / {persona.rightBrainPercentage}% Right</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Primary Learning Modality</span>
                  <span>{persona.learningStyle.primaryStyle} (V: {persona.learningStyle.visual}%, A: {persona.learningStyle.auditory}%, K: {persona.learningStyle.kinesthetic}%)</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Standardized Quotients</span>
                  <span>IQ: {persona.quotients.iq.score} · EQ: {persona.quotients.eq.score} · AQ: {persona.quotients.aq.score} · CQ: {persona.quotients.cq.score}</span>
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-900 mb-2">Top Multiple Intelligences:</p>
                <div className="grid grid-cols-2 gap-2">
                  {persona.intelligences.slice(0, 4).map(item => (
                    <div key={item.key} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex justify-between">
                      <span className="font-medium text-slate-800">{item.label}</span>
                      <span className="font-bold text-[#4338CA]">{item.score}/100</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-900 mb-2">Recommended Career Directions:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {persona.topCareers.map((c, i) => (
                    <li key={i}>
                      <span className="font-semibold text-slate-900">{c.title}</span> ({c.field}) — Match: {c.matchScore}%
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Official DAKSH System Summary · Validated Report ID: DAK-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-bold text-white bg-[#161248] hover:bg-[#2A2B78] rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

