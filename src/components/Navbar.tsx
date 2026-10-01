import React, { useState } from "react";
import {
  Menu,
  X,
  Camera,
  Smartphone,
  MessageSquareHeart,
  Award,
  HelpCircle,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <img
              src="/gallery/logo-fe34f14e.png"
              alt="DAKSH Logo"
              className="h-18 w-auto object-contain"
            />
          </a>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200/80 rounded-2xl px-2 py-1.5">
            <a
              href="#gallery"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#4338CA] hover:bg-white rounded-xl transition-all"
            >
              Impact Gallery
            </a>

            <a
              href="#app"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#4338CA] hover:bg-white rounded-xl transition-all"
            >
              Mobile App
            </a>

            <a
              href="#partners"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#4338CA] hover:bg-white rounded-xl transition-all"
            >
              Partners
            </a>

            <a
              href="#stories"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#4338CA] hover:bg-white rounded-xl transition-all"
            >
              Success Stories
            </a>

            <a
              href="#faq"
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#4338CA] hover:bg-white rounded-xl transition-all"
            >
              FAQs
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* <a
              href="#gallery"
              className="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#161248] via-[#1E1B4B] to-[#4338CA] hover:opacity-95 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-cyan-300" />
              <span>View Gallery</span>
            </a> */}
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white p-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5 text-center"
            >
              <Camera className="w-4 h-4 text-[#4338CA]" />
              <span>Gallery</span>
            </a>

            <a
              href="#app"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5 text-center"
            >
              <Smartphone className="w-4 h-4 text-indigo-600" />
              <span>Mobile App</span>
            </a>

            <a
              href="#partners"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5 text-center"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Partners</span>
            </a>

            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5 text-center"
            >
              <MessageSquareHeart className="w-4 h-4 text-emerald-600" />
              <span>Stories</span>
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 p-2.5 rounded-xl bg-indigo-50/70 text-indigo-900 flex items-center justify-center gap-1.5 text-center"
            >
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>Parent & Student FAQs</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};