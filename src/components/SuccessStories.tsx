import React, { useMemo, useState } from "react";

import { Play, Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";

export interface WrittenStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: "parent" | "student" | "user";
  location: string;
  outcome: string;
  avatarBg: string;
  initials: string;
}

const WRITTEN_STORIES: WrittenStory[] = [
  {
    id: "neha-thapar",
    quote:
      "I worked in HR for many years, but I felt a lack of inner fulfillment compared to things I loved doing like cooking. When my brother introduced me to DAKSH, it revealed that I could excel in business. Taking that step gave me the courage to leave my job, start my own venture from home — “The Rasa Kitchen” — and find true happiness. I am deeply thankful to DAKSH!",
    author: "Neha Thapar",
    role: "Home Chef",
    category: "user",
    location: "",
    outcome: "Started her own home-based venture, The Rasa Kitchen",
    avatarBg: "bg-indigo-600 text-white",
    initials: "NT",
  },
  {
    id: "ritu-mahajan",
    quote:
      "As a practicing Company Secretary, I was present at the Spark Boot Camp and tried the DAKSH app. The behavioral insights and process-oriented traits it highlighted were an exact match to my actual experience and nature. It's amazingly precise and insightful!",
    author: "Ritu Mahajan",
    role: "Practicing Company Secretary",
    category: "user",
    location: "",
    outcome: "Found DAKSH's behavioral insights aligned with her experience",
    avatarBg: "bg-purple-600 text-white",
    initials: "RM",
  },
  {
    id: "hazel-richmond-pyrtuh",
    quote:
      "As a retired government officer from Meghalaya, I wondered what next after retirement. When I came across the DAKSH aptitude test, the results were both insightful and reassuring — highlighting my deep-rooted love for plants and gardening. It gave me the courage to follow my passion and start my own little herb nursery in my backyard. Taking this test was truly one of my best post-retirement decisions!",
    author: "Hazel Richmond Pyrtuh",
    role: "Retired Government Officer, Government of Meghalaya",
    category: "user",
    location: "Meghalaya",
    outcome: "Started a backyard herb nursery after retirement",
    avatarBg: "bg-emerald-600 text-white",
    initials: "HP",
  },
  {
    id: "anjali-matharu",
    quote:
      "Running a diamond and gold jewelry business as a single parent came with its responsibilities, but getting my assessment report through the DAKSH App at the Spark Collective camp was an eye-opener. It felt like looking into a mirror and truly sparked my inner drive. No work is ever too small or big — you just need to look within and find your true identity. I highly recommend every woman to take this step!",
    author: "Anjali Matharu",
    role: "Diamond & Gold Jewelry Business Owner",
    category: "user",
    location: "",
    outcome: "Gained self-awareness and motivation through the DAKSH assessment",
    avatarBg: "bg-rose-600 text-white",
    initials: "AM",
  },
  {
    id: "rekha-verma",
    quote:
      "I attended a boot camp organized through Spark and discovered the DAKSH app. Within 10-15 minutes, using just my fingerprints, the app gave me an incredibly accurate report about my personality, behavior, and hidden potential. It felt amazing to see how precisely it understood me without asking anything. I'm going to use these insights to enhance my business, and I strongly recommend everyone to download and try DAKSH!",
    author: "Rekha Verma",
    role: "Entrepreneur",
    category: "user",
    location: "",
    outcome: "Plans to use DAKSH insights to enhance her business",
    avatarBg: "bg-amber-600 text-white",
    initials: "RV",
  },
  {
    id: "pooja-sharma",
    quote:
      "I visited the Spark boot camp and tried the fingerprint scanning app. I was truly amazed to see how accurate the report was — about 80% of what it revealed about me was spot-on and completely true. Coming to this camp and trying out the app has been a wonderful experience!",
    author: "Pooja Sharma",
    role: "Homemaker",
    category: "user",
    location: "",
    outcome: "Reported a positive experience with the DAKSH assessment",
    avatarBg: "bg-cyan-600 text-white",
    initials: "PS",
  },
  {
    id: "suddha-babbar",
    quote:
      "As a numerologist and graphologist, I test many things, but DAKSH really blew me away. By reading my fingerprints, it generated a report that was 100% accurate. It left me wondering how it could know so much about me with such precision! It's an amazing experience, and I strongly recommend everyone to try it and learn more about themselves.",
    author: "Suddha Babbar",
    role: "Numerologist and Graphologist",
    category: "user",
    location: "",
    outcome: "Shared a positive assessment experience and recommends DAKSH",
    avatarBg: "bg-violet-600 text-white",
    initials: "SB",
  },
];

export const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "parent" | "student">(
    "all"
  );

  const filteredWritten = useMemo(() => {
    if (activeTab === "all") {
      return WRITTEN_STORIES;
    }

    // The Word document contains general user testimonials, not parent/student stories.
    // Keep those testimonials visible in the existing filters without changing the UI.
    return WRITTEN_STORIES.filter(
      (story) => story.category === activeTab || story.category === "user"
    );
  }, [activeTab]);

  return (
    <>
      <section id="stories" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-4">
              <Play className="w-3.5 h-3.5" />
              <span>Real Stories</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Stories From Our Community
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
              Hear directly from parents, students, and educators who have
              experienced the impact of scientific assessment.
            </p>
          </div>

          {/* VIDEO STORIES section remains hidden, as in the original component. */}

          {/* WRITTEN STORIES */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center text-[#4338CA]">
                <MessageSquareHeart className="w-4 h-4" />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Parent & Student Written Perspectives
              </h3>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "all"
                    ? "bg-[#161248] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("parent")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "parent"
                    ? "bg-[#161248] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Parents
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("student")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "student"
                    ? "bg-[#161248] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Students
              </button>
            </div>

            {/* Written Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredWritten.map((story) => (
                <div
                  key={story.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 relative overflow-hidden"
                >
                  {/* Decorative Quote */}
                  <div className="absolute top-4 right-4 text-slate-100 group-hover:text-indigo-50 transition-colors pointer-events-none">
                    <Quote className="w-10 h-10 fill-current" />
                  </div>

                  <div className="relative z-10 space-y-3.5">
                    {/* Outcome */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#4338CA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{story.outcome}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-slate-800 text-sm font-medium leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl ${story.avatarBg} flex items-center justify-center font-bold text-xs shadow-xs`}
                      >
                        {story.initials}
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug">
                          {story.author}
                        </h4>

                        <p className="text-[11px] text-slate-500">
                          <span>{story.role}</span>

                          {story.location && (
                            <>
                              <span className="mx-1 text-slate-300">·</span>
                              <span>{story.location}</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Verified */}
                    <div className="text-[10px] font-semibold text-slate-400 flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;