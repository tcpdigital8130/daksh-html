import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone, Mail, FileText, ArrowRight } from 'lucide-react';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [selectedFocus, setSelectedFocus] = useState('Stream Selection (Class 10/12)');
  const [selectedCounselor, setSelectedCounselor] = useState('Dr. Shalini Raman');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 4:00 PM IST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const focusOptions = [
    'Stream Selection (Class 10/12)',
    'College Major & Competitive Exams (JEE/NEET/CUET)',
    'Executive Mid-Career Pivot & Leadership',
    'Parenting & Adolescent Dynamics',
    'Founder AQ & Startup Synergy',
  ];

  const counselors = [
    {
      name: 'Dr. Shalini Raman',
      role: 'Chief Clinical Psychologist & Neuro-Counselor',
      exp: '14+ yrs exp · M.Phil NIMHANS',
      rating: '4.9/5 (1,200+ Debriefs)'
    },
    {
      name: 'Vikram Deshmukh',
      role: 'Executive Career Strategist & Psychometrician',
      exp: '12+ yrs exp · Certified Master Assessor',
      rating: '4.9/5 (980+ Debriefs)'
    },
    {
      name: 'Anandita Sengupta',
      role: 'Educational Pathologist & Dermatoglyphics Multiple Intelligence Test Specialist',
      exp: '9+ yrs exp · Adolescent Guidance',
      rating: '4.8/5 (850+ Debriefs)'
    }
  ];

  const availableSlots = [
    'Tomorrow, 11:30 AM IST',
    'Tomorrow, 4:00 PM IST',
    'Tomorrow, 6:30 PM IST',
    'Saturday, 10:00 AM IST',
    'Saturday, 2:30 PM IST',
  ];

  const handleInputChange = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required.';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit mobile number required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStep('confirmed');
  };

  const handleResetAndClose = () => {
    setStep('form');
    setFormData({ name: '', email: '', phone: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#4338CA] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Book 1-on-1 Certified Counseling</h3>
              <p className="text-[11px] text-slate-500">45-Minute In-Depth Diagnostic Debrief</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-white">
          {step === 'confirmed' ? (
            <div className="text-center py-8 space-y-5 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">Counseling Session Reserved</h4>
                <p className="text-xs text-[#4338CA] font-mono font-bold mt-1">
                  Session Token: DAKSH-CNS-{Math.floor(100000 + Math.random() * 900000)}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Client:</span>
                  <span className="font-bold text-slate-900">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Consultant:</span>
                  <span className="font-bold text-slate-900">{selectedCounselor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Scheduled Time:</span>
                  <span className="font-bold text-[#4338CA]">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Topic:</span>
                  <span className="font-bold text-slate-800">{selectedFocus}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                A calendar invitation and encrypted Google Meet conference link have been dispatched to <span className="text-slate-900 font-bold">{formData.email}</span> and SMS confirmation to <span className="text-slate-900 font-bold">{formData.phone}</span>.
              </p>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#161248] to-[#4338CA] hover:opacity-95 rounded-2xl transition-all cursor-pointer shadow-sm"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5">
              
              {/* Focus Area */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  1. Select Discussion Objective
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {focusOptions.map(focus => (
                    <button
                      key={focus}
                      type="button"
                      onClick={() => setSelectedFocus(focus)}
                      className={`text-left p-3 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        selectedFocus === focus
                          ? 'bg-indigo-50/80 border-[#4338CA] text-slate-900 font-bold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {focus}
                    </button>
                  ))}
                </div>
              </div>

              {/* Counselor selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  2. Select Master Psychologist / Assessor
                </label>
                <div className="space-y-2">
                  {counselors.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCounselor(c.name)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                        selectedCounselor === c.name
                          ? 'bg-indigo-50/80 border-[#4338CA] text-slate-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900">{c.name}</p>
                        <p className="text-[11px] text-[#4338CA] font-medium">{c.role} · {c.exp}</p>
                      </div>
                      <span className="text-[11px] text-slate-500 font-bold">{c.rating}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  3. Select Preferred Slot
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        selectedDate === slot
                          ? 'bg-[#161248] text-white border-[#161248] shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* User details */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs text-slate-700 mb-1 font-bold">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    placeholder="Candidate or Parent Name"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338CA]/20 focus:border-[#4338CA]"
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs text-slate-700 mb-1 font-bold">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338CA]/20 focus:border-[#4338CA]"
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs text-slate-700 mb-1 font-bold">WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338CA]/20 focus:border-[#4338CA]"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs text-slate-700 mb-1 font-bold">Current Grade / Occupation</label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={e => handleInputChange('notes', e.target.value)}
                    placeholder="e.g. Class 8 or Class 11 PCM"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4338CA]/20 focus:border-[#4338CA]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#161248] to-[#4338CA] hover:opacity-95 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Counseling Reservation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  No payment required for initial 15-minute diagnostic walkthrough.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
