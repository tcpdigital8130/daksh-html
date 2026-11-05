import React, { useState } from "react";
import {
  Menu,
  Bell,
  Crown,
  Sparkles,
  MessageSquare,
  Bot,
  Activity,
  Brain,
  Home,
  Calendar,
  Camera,
  FileText,
  User,
  Check,
  Star,
  ChevronDown,
  CheckCircle2,
  Play,
} from "lucide-react";

const PROFILES = [
  {
    id: "aarav",
    name: "Aarav",
    role: "Class 8",
    emoji: "👦",
    bodily: "85%",
    linguistic: "80%",
    left: 52,
    right: 48,
  },
  {
    id: "ananya",
    name: "Ananya",
    role: "Class 11",
    emoji: "👧",
    bodily: "72%",
    linguistic: "91%",
    left: 44,
    right: 56,
  },
  {
    id: "rahul",
    name: "Rahul",
    role: "Father",
    emoji: "👨",
    bodily: "68%",
    linguistic: "88%",
    left: 61,
    right: 39,
  },
  {
    id: "priya",
    name: "Priya",
    role: "Mother",
    emoji: "👩",
    bodily: "79%",
    linguistic: "84%",
    left: 49,
    right: 51,
  },
];

export const MobileAppSection: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState("aarav");
  const activeProfile =
    PROFILES.find((p) => p.id === activeProfileId) || PROFILES[0];
  const [activeBottomNav, setActiveBottomNav] = useState("home");
  return (
    <section
      id="app"
      className="py-16 md:py-24 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & App Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4338CA] tracking-wider uppercase">
              <span>Mobile App Architecture</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Available for Android</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight [text-wrap:balance]">
              Your personalized cognitive companion on the go.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              From family profile switching and Vayo AI counseling to
              high-precision pattern scanning, the DAKSH mobile app gives
              everyone immediate guidance anytime.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">
                    Family Profile Central:
                  </strong>{" "}
                  Seamlessly switch between all family members; children to
                  parents under a single account.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Vayo AI Counselor:</strong>{" "}
                  Instant real-time advice grounded in your DISC, personality,
                  and SWOT diagnostic matrices.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">
                    One-Tap Camera Ridge Scanner:
                  </strong>{" "}
                  Guided macro scanning for instant pattern capture.
                </span>
              </div>
            </div>

            {/* Direct Play Store / App Store CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-[#161248] hover:bg-[#2A2B78] text-white flex items-center gap-3 transition-all group cursor-pointer shadow-sm shadow-indigo-950/20"
              >
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 font-bold text-xs">
                  <Play />
                </div>
                <div>
                  <span className="text-[10px] text-indigo-200 block uppercase tracking-wider font-semibold">
                    Download on
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Google Play Store
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-600 px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-slate-900">4.2 / 5.0</span>
                {/* <span>(15,000+ Reviews)</span> */}
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Exact Mobile Screenshot Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[330px] sm:w-[350px] rounded-[48px] bg-slate-900 p-2.5 shadow-2xl border-[6px] border-slate-800 relative text-slate-900">
              {/* Phone Speaker Notch */}
              <div className="w-28 h-4 bg-slate-950 rounded-full mx-auto mb-1.5" />

              {/* Screen Body */}
              <div className="rounded-[40px] bg-[#F4F7FB] p-3.5 space-y-3 overflow-hidden text-xs border border-slate-200">
                {/* 1. Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 px-1 pt-0.5">
                  <span>11:42</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span className="text-[10px] font-mono">57%</span>
                  </div>
                </div>

                {/* 2. Top App Header */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2.5">
                    <button className="p-1 text-slate-700 hover:text-slate-900">
                      <Menu className="w-5 h-5" />
                    </button>
                    {/* Active profile badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs">
                        {activeProfile.emoji}
                      </span>
                      <span className="font-bold text-slate-900 text-xs">
                        {activeProfile.name}
                      </span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-500 ml-0.5">
                        {activeProfile.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-xs">
                      <Bell className="w-3.5 h-3.5" />
                    </button>
                    <div className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-[11px] font-bold flex items-center gap-1 shadow-xs">
                      <Crown className="w-3 h-3 text-amber-600" />
                      <span>Upgrade</span>
                    </div>
                  </div>
                </div>

                {/* 3. Switch Profile / Manage Family */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-900">
                      Switch Profile
                    </span>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#4338CA] hover:underline cursor-pointer"
                    >
                      Manage Family
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {PROFILES.map((p) => {
                      const isActive = p.id === activeProfileId;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActiveProfileId(p.id)}
                          className="flex flex-col items-center gap-0.5 cursor-pointer"
                        >
                          <div className="relative">
                            <div
                              className={`w-11 h-11 rounded-full flex items-center justify-center text-lg ${
                                isActive
                                  ? "bg-amber-100 border-2 border-[#4338CA] shadow-xs"
                                  : "bg-slate-100"
                              }`}
                            >
                              {p.emoji}
                            </div>
                            {isActive && (
                              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#4338CA] text-white flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <span
                            className={`text-[11px] ${
                              isActive
                                ? "font-bold text-[#4338CA]"
                                : "font-semibold text-slate-700"
                            }`}
                          >
                            {p.name}
                          </span>
                          <span className="text-[9px] text-slate-400">{p.role}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. VAYO • AI COUNSELOR Card */}
                <div className="rounded-2xl p-4 bg-gradient-to-br from-[#161248] via-[#1E1B4B] to-[#2E2A72] text-white space-y-3 shadow-md relative overflow-hidden">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-bold text-cyan-200 tracking-wider uppercase">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                    <span>VAYO · AI COUNSELOR</span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-8 space-y-1">
                      <h4 className="text-base font-extrabold flex items-center gap-1.5">
                        <span>Hi {activeProfile.name}!</span>
                        <span>👋</span>
                      </h4>
                      <p className="text-[10px] text-indigo-100/90 leading-tight">
                        I'm <strong className="text-cyan-300">Vayo</strong>.
                        I've analyzed your DISC, Personality and SWOT profile.
                        Ask me anything, I'm here to guide your best future.
                      </p>
                    </div>

                    {/* Vayo Bot Face */}
                    <div className="col-span-4 flex justify-end">
                      <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex flex-col items-center justify-between shadow-md">
                        <div className="w-full h-9 bg-slate-950 rounded-lg flex items-center justify-center gap-1.5 px-1 shadow-inner">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                        <span className="text-[8px] font-black text-white bg-[#4338CA] px-1.5 py-0.5 rounded-full uppercase">
                          VAYO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>🎯</span>
                      <span className="truncate">Best Career</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>⭐</span>
                      <span className="truncate">My Strengths</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>📈</span>
                      <span className="truncate">How can I improve?</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>📋</span>
                      <span className="truncate">Create Growth Plan</span>
                    </a>
                  </div>

                  {/* Chat CTA row */}
                  <div className="flex items-center justify-between pt-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white text-[#161248] font-bold text-[10px] flex items-center gap-1 shadow-xs cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-[#4338CA]" />
                      <span>Chat with Vayo</span>
                    </a>

                    <div className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 text-[9px] font-bold flex items-center gap-1 border border-cyan-400/30">
                      <Bot className="w-2.5 h-2.5 text-cyan-300" />
                      <span>vayo AI</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-300">Online</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-indigo-200/70 text-center">
                    Free Basic AI: 3 queries · Then Live Counselor
                  </p>
                </div>

                {/* 5. Multiple Intelligence Matrices */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-900">
                      Multiple Intelligence Matrices
                    </span>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#4338CA] hover:underline cursor-pointer"
                    >
                      View All 8 →
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-2xl bg-white border border-amber-200 shadow-xs flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-900 leading-tight">
                          8 Intelligences
                        </p>
                        <p className="text-[9px] text-slate-500 mt-0.5">
                          Bodily {activeProfile.bodily} · Linguistic {activeProfile.linguistic}
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white border border-sky-200 shadow-xs flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-900 leading-tight">
                          Brain Dominance
                        </p>
                        <p className="text-[9px] text-slate-500 mt-0.5">
                          Left {activeProfile.left}% | Right {activeProfile.right}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Bottom Navigation Bar with Center Floating Scan Button */}
                <div className="relative pt-2">
                  <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm flex items-center justify-between px-3 text-[10px] text-slate-500 font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveBottomNav("home")}
                      className={`flex flex-col items-center cursor-pointer ${
                        activeBottomNav === "home" ? "text-[#4338CA]" : "text-slate-500"
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      <span className="text-[9px] mt-0.5">Home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveBottomNav("assessment")}
                      className={`flex flex-col items-center relative cursor-pointer ${
                        activeBottomNav === "assessment" ? "text-[#4338CA]" : "text-slate-500"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA] absolute top-0 right-1" />
                      <span className="text-[9px] mt-0.5">Assessment</span>
                    </button>

                    {/* Placeholder space for floating center scan button */}
                    <div className="w-10" />

                    <button
                      type="button"
                      onClick={() => setActiveBottomNav("report")}
                      className={`flex flex-col items-center cursor-pointer ${
                        activeBottomNav === "report" ? "text-[#4338CA]" : "text-slate-500"
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span className="text-[9px] mt-0.5">Report</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveBottomNav("profile")}
                      className={`flex flex-col items-center cursor-pointer ${
                        activeBottomNav === "profile" ? "text-[#4338CA]" : "text-slate-500"
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-[9px] mt-0.5">Profile</span>
                    </button>
                  </div>

                  {/* The Floating Center Camera Scan Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                    title="Scan via DAKSH App"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-[#4338CA] flex items-center justify-center text-white shadow-md shadow-sky-500/40 group-hover:scale-105 transition-transform">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-[#4338CA] mt-0.5 flex items-center gap-0.5">
                      <span>scan</span>
                      <span className="w-1 h-1 rounded-full bg-[#4338CA]" />
                    </span>
                  </a>
                </div>

                {/* Android Navigation Keys */}
                <div className="flex items-center justify-around text-slate-400 text-xs py-0.5">
                  <span>|||</span>
                  <span>◯</span>
                  <span>〈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
