import React, { useMemo, useState } from "react";

import {
  Play,
  X,
  MapPin,
  Clock3,
  Quote,
  GraduationCap,
  Users,
  MessageSquareHeart,
  CheckCircle2,
} from "lucide-react";

interface TranscriptItem {
  time: string;
  text: string;
}

interface VideoItem {
  id: string;
  title: string;
  speaker: string;
  role: string;
  location: string;
  duration: string;
  category: "parent" | "student";
  thumbnailUrl: string;
  quote: string;
  outcome: string;
  videoUrl: string;
  transcript: TranscriptItem[];
}

export interface WrittenStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: "parent" | "student";
  location: string;
  outcome: string;
  avatarBg: string;
  initials: string;
}

/* =========================================================
   VIDEO STORIES
========================================================= */

const videos: VideoItem[] = [
  {
    id: "video-narang-parents",
    title:
      "Why We Stopped Forcing JEE Coaching After Dermatoglyphics Assessment",
    speaker: "Priya & Rajesh Narang",
    role: "Parents of Class 11 Student (Aarav)",
    location: "New Delhi",
    duration: "1:38",
    category: "parent",
    thumbnailUrl: "/gallery/narang.png",
    quote:
      "Seeing his natural spatial and kinesthetic dominance in the Dermatoglyphics Multiple Intelligence Test was the wake-up call we needed as parents. Today he is flourishing in Computational Architecture without dinner-table arguments.",
    outcome: "Saved ₹3.5L Coaching Fees · Zero Exam Anxiety",
    videoUrl:
      "https://drive.google.com/file/d/1qgQdPnVY5Gc72MhtTvYCMuxuCrSeTuW9/view?usp=drive_link",
    transcript: [
      {
        time: "0:00",
        text: "We were convinced standard engineering coaching was the only secure path for our son.",
      },
      {
        time: "0:22",
        text: "His Dermatoglyphics Multiple Intelligence Test showed his spatial-perceptual index was at 94%, while rote formulas caused deep friction.",
      },
      {
        time: "0:48",
        text: "We met with the educational counselor and redirected his focus toward architecture and product design.",
      },
      {
        time: "1:12",
        text: "Within weeks, his tension disappeared and his natural creative enthusiasm came back.",
      },
    ],
  },

  {
    id: "video-tanvi-student",
    title: "The 10-Minute Ridge Scan That Clarified My Board Exam Strategy",
    speaker: "Tanvi Rastogi",
    role: "Class 12 CBSE Aspirant",
    location: "Bengaluru",
    duration: "1:15",
    category: "student",
    thumbnailUrl: "/gallery/tanvi.png",
    quote:
      "The Dermatoglyphics Multiple Intelligence Test proved I was not bad at studies; I was just being taught through the wrong sensory channel. Shifting to visual mind-mapping doubled my study retention.",
    outcome: "94% CBSE Target Clarity · Applied Math Track Confirmed",
    videoUrl:
      "https://drive.google.com/file/d/1UrRLdFt0PVSixpvYxlw8h9gXxKVKQAF6/view?usp=sharing",
    transcript: [
      {
        time: "0:00",
        text: "I spent 4 hours every evening re-reading textbooks without remembering anything the next morning.",
      },
      {
        time: "0:20",
        text: "The Dermatoglyphics Multiple Intelligence Test report showed I have high tactile-visual neocortex wiring.",
      },
      {
        time: "0:42",
        text: "When I switched to interactive visual summaries and flowcharts, my mock test scores jumped by 22%.",
      },
      {
        time: "1:02",
        text: "It completely removed self-doubt before my Class 12 board examinations.",
      },
    ],
  },

  {
    id: "video-roy-educator",
    title: "Why Our School Administered the Assessment to 450+ High Schoolers",
    speaker: "Dr. Shalini Roy",
    role: "Principal & Academic Director",
    location: "Pune",
    duration: "2:04",
    category: "parent",
    thumbnailUrl: "/gallery/shalini.png",
    quote:
      "In traditional schooling, students with non-linear learning styles are too quickly misdiagnosed as careless. The Dermatoglyphics Multiple Intelligence Test provided empirical data on synaptic distribution, turning parent meetings into constructive partnerships.",
    outcome: "School-Wide Adoption · 96% Parent Satisfaction",
    videoUrl:
      "https://drive.google.com/file/d/1GdbD7dEntIjkXvMK8EMyZRQjySoQF19e/view?usp=drive_link",
    transcript: [
      {
        time: "0:00",
        text: "Our high school management rolled out the Dermatoglyphics Multiple Intelligence Test across our entire secondary section.",
      },
      {
        time: "0:35",
        text: "Faculty received individual VAK (Visual, Auditory, Kinesthetic) learning breakdowns for every student.",
      },
      {
        time: "1:10",
        text: "Parent-teacher conferences shifted from blaming children to creating personalized study frameworks.",
      },
      {
        time: "1:45",
        text: "It is the most respectful, scientifically grounded diagnostic tool we have implemented in 15 years.",
      },
    ],
  },
];

/* =========================================================
   WRITTEN STORIES
========================================================= */

const WRITTEN_STORIES: WrittenStory[] = [
  {
    id: "ananya-mom",
    quote:
      "We were pushing Ananya toward standard engineering coaching. Her diagnostic report revealed extraordinary spatial and design dexterity. She switched to Architecture & Design — her academic anxiety vanished overnight.",
    author: "Sunita Sharma",
    role: "Mother of Class 11 Student",
    category: "parent",
    location: "New Delhi",
    outcome: "Shifted to Architecture & Design",
    avatarBg: "bg-indigo-600 text-white",
    initials: "SS",
  },

  {
    id: "rohit-student",
    quote:
      "The 10-minute scan didn't just give me scores; it showed how my brain naturally absorbs concepts. Realizing I'm an auditory-kinesthetic learner completely changed how I prepare for CBSE board exams.",
    author: "Rohit Kulkarni",
    role: "Class 10 Student",
    category: "student",
    location: "Bengaluru",
    outcome: "Board Exam Prep Clarity",
    avatarBg: "bg-cyan-600 text-white",
    initials: "RK",
  },

  {
    id: "meera-dad",
    quote:
      "As a physician, I was skeptical of biometric profiling until the counselor walked us through Meera's neocortex balance. It predicted her exact problem-solving strengths with empirical accuracy.",
    author: "Dr. Rajesh Menon",
    role: "Father of Class 8 Student",
    category: "parent",
    location: "Pune",
    outcome: "Scientific Stream Fit",
    avatarBg: "bg-emerald-600 text-white",
    initials: "RM",
  },

  {
    id: "kabir-student",
    quote:
      "Our school pushed every student toward Pure Science. DAKSH gave my parents the empirical data they needed to support my passion for International Relations and Economics.",
    author: "Kabir Mehta",
    role: "Class 12, Humanities",
    category: "student",
    location: "Mumbai",
    outcome: "International Relations Track",
    avatarBg: "bg-amber-600 text-white",
    initials: "KM",
  },

  {
    id: "verma-parents",
    quote:
      "The post-scan counseling session resolved learning friction we had struggled with for two years. It replaced dinner-table arguments with genuine empathy for how our son thinks.",
    author: "Kavita & Alok Verma",
    role: "Parents of Class 9 Student",
    category: "parent",
    location: "Jaipur",
    outcome: "Family Friction Resolved",
    avatarBg: "bg-purple-600 text-white",
    initials: "KV",
  },

  {
    id: "tanvi-student",
    quote:
      "Zero ink, zero anxiety — just a simple smartphone ridge scan. The report felt like looking into a mirror that understood my cognitive strengths better than conventional report cards.",
    author: "Tanvi Rastogi",
    role: "Class 11, Commerce",
    category: "student",
    location: "Chandigarh",
    outcome: "Applied Math Stream Confirmed",
    avatarBg: "bg-blue-600 text-white",
    initials: "TR",
  },
];

/* =========================================================
   GOOGLE DRIVE PREVIEW
========================================================= */

const getDrivePreviewUrl = (url: string): string => {
  const match = url.match(/\/file\/d\/([^/]+)/);

  if (!match) {
    return url;
  }

  const fileId = match[1];

  return `https://drive.google.com/file/d/${fileId}/preview`;
};

/* =========================================================
   COMPONENT
========================================================= */

export const SuccessStories: React.FC = () => {
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);

  const [activeTab, setActiveTab] = useState<
    "all" | "parent" | "student"
  >("all");

  const selectedVideoUrl = useMemo(() => {
    if (!selectedVideo) return "";

    return getDrivePreviewUrl(selectedVideo.videoUrl);
  }, [selectedVideo]);

  const filteredWritten = useMemo(() => {
    if (activeTab === "all") {
      return WRITTEN_STORIES;
    }

    return WRITTEN_STORIES.filter(
      (story) => story.category === activeTab
    );
  }, [activeTab]);

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section
        id="stories"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-4">
              <Play className="w-3.5 h-3.5" />

              <span>Real Stories</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Stories From Our Community
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
              Hear directly from parents, students, and educators who
              have experienced the impact of scientific assessment.
            </p>
          </div>

          {/* =================================================
              VIDEO STORIES
          ================================================= */}

          {/* <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-[#4338CA]">
                <Play className="w-4 h-4" />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Video Stories
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="relative block w-full h-64 overflow-hidden cursor-pointer"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 text-indigo-700 fill-indigo-700 ml-1" />
                    </span>

                    <span className="absolute bottom-3 right-3 bg-black/80 text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                      {video.duration}
                    </span>
                  </button>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {video.category === "student" ? (
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                      ) : (
                        <Users className="w-4 h-4 text-emerald-600" />
                      )}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                        {video.category === "student"
                          ? "Student Story"
                          : "Parent Story"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-3">
                      {video.title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm font-bold text-slate-800">
                        {video.speaker}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {video.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{video.location}</span>
                      <span className="mx-1">·</span>
                      <Clock3 className="w-3.5 h-3.5" />
                      <span>{video.duration}</span>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <Quote className="w-5 h-5 text-indigo-200 mb-2" />
                      <p className="text-xs leading-relaxed text-slate-600">
                        {video.quote}
                      </p>
                    </div>
                    <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2.5">
                      <p className="text-xs font-bold text-indigo-700">
                        {video.outcome}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedVideo(video)}
                      className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#161248] text-white text-xs font-bold hover:bg-[#4338CA] transition-colors"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Watch Story
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div> */}

          {/* =================================================
              WRITTEN STORIES
          ================================================= */}

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

                      <span className="truncate">
                        {story.outcome}
                      </span>
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

                          <span className="mx-1 text-slate-300">
                            ·
                          </span>

                          <span>{story.location}</span>
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

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <div className="min-w-0 pr-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                  {selectedVideo.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {selectedVideo.speaker} · {selectedVideo.role}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Video */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                key={selectedVideo.id}
                src={selectedVideoUrl}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Transcript */}
            <div className="max-h-64 overflow-y-auto px-5 py-5">
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                Transcript
              </h4>

              <div className="space-y-3">
                {selectedVideo.transcript.map((item) => (
                  <div
                    key={`${selectedVideo.id}-${item.time}`}
                    className="flex gap-3"
                  >
                    <span className="shrink-0 text-xs font-bold text-indigo-600 w-10">
                      {item.time}
                    </span>

                    <p className="text-xs leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessStories;