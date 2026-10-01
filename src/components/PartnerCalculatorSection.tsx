import React, { useState } from 'react';
import { Building2, ShieldCheck, Users, Calculator, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { INSTITUTIONAL_PARTNERS } from '../data/assessmentData';

interface PartnerCalculatorSectionProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const PartnerCalculatorSection: React.FC<PartnerCalculatorSectionProps> = ({
  isModalOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const [cohortSize, setCohortSize] = useState(350);
  const [institutionType, setInstitutionType] = useState<'School' | 'University' | 'Corporate' | 'CSR'>('School');
  
  // Pilot request state
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactPerson: '',
    workEmail: '',
    phone: '',
    city: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Computed metrics
  const counselingHoursSaved = Math.round(cohortSize * 2.2);
  const streamCertaintyRate = cohortSize > 500 ? 94 : 91;
  const estimatedCostPerCandidate = cohortSize > 1000 ? '₹450' : cohortSize > 300 ? '₹650' : '₹850';

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.orgName || !partnerForm.workEmail) return;
    setIsSubmitted(true);
  };

  return (
    <section id="partners" className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase mb-1">
            <span>National Scale & Impact</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Institutional Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
            Trusted by India's premier public enterprises and institutions.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            DAKSH powers large-scale human capital benchmarking for central government enterprises, industry federations, and nationwide educational consortia.
          </p>
        </div>

        {/* Institutional Partner Logos & Impact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {INSTITUTIONAL_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[#F8FAFD] border border-slate-200 hover:border-indigo-300 transition-all space-y-3 shadow-xs"
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

        {/* Interactive Volume & Impact Estimator Calculator */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F8FAFD] border border-slate-200 space-y-8 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wider block mb-1">
              Interactive Impact Calculator
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Estimate deployment scale for your school or organization
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Adjust the slider below to project evaluation bandwidth, counseling time saved, and bulk pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Select Organization Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['School', 'University', 'Corporate', 'CSR'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInstitutionType(type)}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        institutionType === type
                          ? 'bg-[#4338CA] text-white border-[#4338CA] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-bold text-slate-800">
                    Cohort Size: Number of Candidates
                  </span>
                  <span className="text-lg font-extrabold text-[#4338CA] font-mono tabular-nums">
                    {cohortSize.toLocaleString('en-IN')} Candidates
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="25"
                  value={cohortSize}
                  onChange={e => setCohortSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#4338CA]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1 font-semibold">
                  <span>50 (Pilot)</span>
                  <span>1,000 (Campus)</span>
                  <span>3,000+ (Enterprise)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Includes White-labeled Institutional Analytics Dashboard.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Bulk batch report downloads with comparative cohort ranking.</span>
                </div>
              </div>
            </div>

            {/* Projected Impact Output Card */}
            <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold block uppercase">
                    Counseling Hours Saved
                  </span>
                  <p className="text-2xl font-extrabold text-[#161248] font-mono tabular-nums mt-1">
                    {counselingHoursSaved} <span className="text-xs font-bold text-[#4338CA]">hrs</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">Automated algorithmic synthesis</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold block uppercase">
                    Decision Clarity Rate
                  </span>
                  <p className="text-2xl font-extrabold text-emerald-600 font-mono tabular-nums mt-1">
                    {streamCertaintyRate}%
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">Stream & career fit certainty</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">Estimated Tier Rate:</span>
                  <p className="text-lg font-bold text-[#4338CA] font-mono">
                    {estimatedCostPerCandidate} <span className="text-xs text-slate-500 font-normal">/ candidate</span>
                  </p>
                </div>
                <span className="text-xs text-slate-600 font-mono font-semibold">
                  Total Impact: ₹{(cohortSize * parseInt(estimatedCostPerCandidate.replace('₹', ''))).toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#161248] via-[#2A2B78] to-[#4338CA] hover:from-[#1E1B4B] hover:to-[#3730A3] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Institutional Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Institutional Pilot Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 text-slate-900">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Institutional Partnership Request</h3>
                <p className="text-xs text-slate-500">Schedule an enterprise pilot walkthrough</p>
              </div>
              <button
                onClick={onCloseModal}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Pilot Proposal Transmitted</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our Institutional Partnerships team will connect with <span className="text-slate-900 font-semibold">{partnerForm.contactPerson}</span> within 24 business hours with an institutional syllabus demo.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onCloseModal();
                  }}
                  className="px-6 py-2 text-xs font-bold text-white bg-[#161248] hover:bg-[#2A2B78] rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">Institution / Corporate Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.orgName}
                    onChange={e => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                    placeholder="e.g. St. Xavier's Senior Secondary School"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#4338CA]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-800 font-semibold mb-1">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactPerson}
                      onChange={e => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                      placeholder="Principal / HR Director"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#4338CA]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-800 font-semibold mb-1">City / State *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.city}
                      onChange={e => setPartnerForm({ ...partnerForm, city: e.target.value })}
                      placeholder="e.g. New Delhi, Bengaluru"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#4338CA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-800 font-semibold mb-1">Official Work Email *</label>
                    <input
                      type="email"
                      required
                      value={partnerForm.workEmail}
                      onChange={e => setPartnerForm({ ...partnerForm, workEmail: e.target.value })}
                      placeholder="admin@school.edu.in"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#4338CA]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-800 font-semibold mb-1">Direct Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={e => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#4338CA]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#161248] to-[#4338CA] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Pilot Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Official partnership MoU includes NDA and institutional privacy protocols.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};

