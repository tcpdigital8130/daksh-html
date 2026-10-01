import React from "react";
import { ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#161248] text-slate-300 text-xs border-t border-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 pb-10 border-b border-indigo-900/60">

          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-5">

            {/* Logo */}
            <a
              href="#"
              className="inline-flex items-center"
            >
              <img
                src="/gallery/logo-wht.png"
                alt="DAKSH Logo"
                className="h-[120px] w-auto object-contain"
              />
            </a>

            {/* Description */}
            <p className="text-indigo-200/80 text-sm leading-6 max-w-lg font-normal">
              Empowering India’s youth, families, and institutions through
              smartphone biometric diagnostics and empirical cognitive
              analytics.
            </p>

            {/* Compliance */}
            <div className="flex items-start gap-2.5 text-[11px] text-cyan-300 font-semibold pt-1 max-w-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

              <span className="leading-5">
                Compliant with Indian DPDP Act Biometric Encryption Norms
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="sm:col-span-1 md:col-span-3 space-y-4">

            <p className="text-xs font-bold text-white uppercase tracking-[0.12em]">
              Navigation
            </p>

            <ul className="space-y-3 text-indigo-200/70">

              <li>
                <a
                  href="#gallery"
                  className="inline-block hover:text-cyan-300 hover:translate-x-0.5 transition-all duration-200"
                >
                  National Impact Gallery
                </a>
              </li>

              <li>
                <a
                  href="#app"
                  className="inline-block hover:text-cyan-300 hover:translate-x-0.5 transition-all duration-200"
                >
                  Mobile App Showcase
                </a>
              </li>

              <li>
                <a
                  href="#partners"
                  className="inline-block hover:text-cyan-300 hover:translate-x-0.5 transition-all duration-200"
                >
                  National Partners
                </a>
              </li>

              <li>
                <a
                  href="#stories"
                  className="inline-block hover:text-cyan-300 hover:translate-x-0.5 transition-all duration-200"
                >
                  Success Stories
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="inline-block hover:text-cyan-300 hover:translate-x-0.5 transition-all duration-200"
                >
                  Parent & Student FAQs
                </a>
              </li>

            </ul>
          </div>

          {/* National Partners */}
          <div className="sm:col-span-1 md:col-span-4 space-y-4">

            <p className="text-xs font-bold text-white uppercase tracking-[0.12em]">
              National Partners
            </p>

            <div className="text-indigo-200/70 space-y-3 text-sm leading-5">

              <p className="hover:text-indigo-100 transition-colors">
                • The SPARK Collective · Rise & Roar
              </p>

              <p className="hover:text-indigo-100 transition-colors">
                • British Council · MOU Signatory
              </p>

              <p className="hover:text-indigo-100 transition-colors">
                • Confederation of Indian Industry (CII)
              </p>

              <p className="hover:text-indigo-100 transition-colors">
                • Bill & Melinda Gates Foundation
              </p>

              <p className="hover:text-indigo-100 transition-colors">
                • Alliance for Global Good Gender Equity
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-5 text-indigo-300/60 text-[11px]">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} DAKSH (Trust Your Touch) · All Rights
            Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span>
              Back to Top
            </span>

            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-indigo-800/70 group-hover:border-cyan-400/60 group-hover:bg-indigo-900/40 transition-all">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

        </div>
      </div>
    </footer>
  );
};