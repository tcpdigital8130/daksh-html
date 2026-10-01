import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Camera, MessageSquareHeart, CheckCircle2, Upload } from 'lucide-react';
import { getImageFromStore, saveImageToStore } from '../utils/imageStore';

interface HeroProps {
  onExploreReport?: () => void;
}

const HERO_IMAGE_FILENAME = 'WhatsApp Image 2026-10-01 at 12.05.58.jpeg';

export const Hero: React.FC<HeroProps> = () => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>('/gallery/D1.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded this image into IndexedDB           
    getImageFromStore(HERO_IMAGE_FILENAME).then((stored) => {
      if (stored) {
        setHeroImageSrc(stored);
      }
    });

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ filename: string }>;
      if (customEvent.detail?.filename === HERO_IMAGE_FILENAME || customEvent.detail?.filename === 'all') {
        getImageFromStore(HERO_IMAGE_FILENAME).then((stored) => {
          if (stored) setHeroImageSrc(stored);
          else setHeroImageSrc('/gallery/D1.png');
        });
      }
    };

    window.addEventListener('daksh_image_updated', handleUpdate);
    return () => window.removeEventListener('daksh_image_updated', handleUpdate);
  }, []);

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      setHeroImageSrc(dataUrl);
      await saveImageToStore(HERO_IMAGE_FILENAME, dataUrl);
    };
    reader.readAsDataURL(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-[#F4F7FB]">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hidden File Input for Hero Image */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleHeroImageUpload}
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold, Punchy, Minimal Text */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* National Initiative Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-900">National Initiative</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-bold text-[#4338CA]">शक्ति की दिशा (Shakti ki Disha)</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] [text-wrap:balance]">
              Decode Innate Potential. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#161248] via-[#4338CA] to-cyan-600">
                Powered by Touch.
              </span>
            </h1>

            {/* Punchy 1-Sentence Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              India’s first smartphone-guided biometric ridge diagnostic and cognitive analytics engine. Guiding students, families, and institutions nationwide.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#gallery"
                className="px-5 py-3 rounded-2xl bg-[#161248] hover:bg-[#2A2B78] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-indigo-950/20 flex items-center gap-2.5 cursor-pointer group"
              >
                <Camera className="w-4 h-4 text-cyan-300" />
                <span>Explore Impact Gallery</span>
                <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#stories"
                className="px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-all shadow-xs flex items-center gap-2"
              >
                <MessageSquareHeart className="w-4 h-4 text-emerald-600" />
                <span>Success Stories</span>
              </a>
            </div>

            {/* National Governance & Global Partners Trust Strip */}
            <div className="pt-5 border-t border-slate-200/80">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Featured at National Summits & Partnered with
              </p>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-700">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span className="text-rose-600">🏛️</span>
                  <span>Smt. Smriti Irani (Keynote)</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span className="text-blue-600">🇬🇧</span>
                  <span>British Council (MOU)</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span>Bill & Melinda Gates Foundation</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span>The SPARK Collective</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image (Replacing Live Ground Data Section) */}
          <div className="lg:col-span-6">
            <div className="relative group">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#161248]/20 via-[#4338CA]/20 to-cyan-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Hero Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 aspect-[16/11] sm:aspect-[4/3] flex items-center justify-center">
                <img
                  src={heroImageSrc}
                  alt="Smt. Smriti Irani Keynote Address with SPARK Collective and DAKSH"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Gradient shadow overlay for legible text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 pointer-events-none" />

                {/* Top Location / Event Pill */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                    National Leadership Summit · New Delhi
                  </span>
                </div>

                {/* Top Right Quick Upload / Replace Button */}
                {/* <div className="absolute top-3.5 right-3.5 z-20">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload / Replace Hero Photo"
                    className="p-2 rounded-xl bg-black/50 hover:bg-[#161248] text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Camera className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="hidden sm:inline text-[11px]">Update Photo</span>
                  </button>
                </div> */}

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 space-y-1 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Keynote Address by Smt. Smriti Irani</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                    DAKSH & The SPARK Collective National Summit
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-normal line-clamp-1">
                    Powering leading public and educational institutions with Gates Foundation & CII.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
