import React from "react";
import {
  ArrowUp,
  CheckCircle2,
  ChevronRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigationLinks = [
    {
      label: "National Impact Gallery",
      href: "#gallery",
    },
    {
      label: "Mobile App Showcase",
      href: "#app",
    },
    {
      label: "National Partners",
      href: "#partners",
    },
    // {
    //   label: "Success Stories",
    //   href: "#stories",
    // },
    {
      label: "Parent & Student FAQs",
      href: "#faq",
    },
  ];

  const partnerList = [
    "The SPARK Collective · Rise & Roar",
    "British Council · MOU Signatory",
    "Confederation of Indian Industry (CII)",
    "Bill & Melinda Gates Foundation",
    "Alliance for Global Good Gender Equity",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-indigo-900/60 bg-[#100D3D] text-slate-300">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-[-120px] top-[-100px] h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/5 blur-3xl" />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            TOP FOOTER CONTENT
        =================================================== */}

        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 md:grid-cols-12 md:gap-x-10 md:gap-y-10 lg:py-14 lg:gap-x-16">

          {/* =================================================
              BRAND COLUMN
          ================================================= */}

          <div className="sm:col-span-2 md:col-span-5">

            {/* LOGO */}

            <a
              href="#"
              aria-label="DAKSH Home"
              className="inline-flex items-center"
            >
              <img
                src="/gallery/logo-wht.png"
                alt="DAKSH Logo"
                className="h-[82px] w-auto object-contain sm:h-[88px]"
              />
            </a>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[590px] text-sm leading-7 text-indigo-200/75">
              Empowering India&apos;s youth, families, and
              institutions through smartphone biometric
              diagnostics and empirical cognitive analytics.
            </p>

            {/* PRIVACY / COMPLIANCE */}

            <div className="mt-6 flex max-w-[510px] items-start gap-3 rounded-xl border border-indigo-700/50 bg-indigo-950/40 px-4 py-3.5">

              {/* ICON */}

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10">

                <ShieldCheck
                  className="h-[18px] w-[18px] text-emerald-400"
                  strokeWidth={2}
                />

              </div>

              {/* CONTENT */}

              <div className="min-w-0">

                <p className="text-xs font-bold text-emerald-300">
                  Data &amp; Privacy Commitment
                </p>

                <p className="mt-1.5 text-[11px] leading-5 text-indigo-200/60">
                  Compliant with Indian DPDP Act
                  Biometric Encryption Norms.
                </p>

              </div>

            </div>

            {/* CONTACT */}

            <a
              href="mailto:info@daksh.com"
              className="mt-6 inline-flex items-center gap-2.5 text-xs font-semibold text-indigo-200/70 transition-colors duration-200 hover:text-cyan-300"
            >

              <Mail
                className="h-[17px] w-[17px]"
                strokeWidth={1.8}
              />

              <span>
                Contact DAKSH
              </span>

            </a>

          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="md:col-span-3">

            {/* HEADING */}

            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
              Navigation
            </h3>

            {/* LINKS */}

            <ul className="mt-6 space-y-4">

              {navigationLinks.map((item) => (
                <li key={item.href}>

                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-sm leading-5 text-indigo-200/70 transition-all duration-200 hover:translate-x-1 hover:text-cyan-300"
                  >

                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 text-indigo-500/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      strokeWidth={2}
                    />

                    <span>
                      {item.label}
                    </span>

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              NATIONAL PARTNERS
          ================================================= */}

          <div className="md:col-span-4">

            {/* HEADING */}

            <h3 className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
              National Partners
            </h3>

            {/* PARTNERS */}

            <div className="mt-6 space-y-4">

              {partnerList.map((partner) => (
                <div
                  key={partner}
                  className="group flex items-start gap-3"
                >

                  {/* CHECK ICON */}

                  <CheckCircle2
                    className="mt-0.5 h-[17px] w-[17px] shrink-0 text-violet-400 transition-colors duration-200 group-hover:text-cyan-300"
                    strokeWidth={1.8}
                  />

                  {/* PARTNER */}

                  <span className="text-sm leading-5 text-indigo-200/70 transition-colors duration-200 group-hover:text-indigo-100">
                    {partner}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="h-px w-full bg-indigo-900/70" />

        {/* ===================================================
            BOTTOM FOOTER
        =================================================== */}

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* LEFT */}

          <div className="text-center sm:text-left">

            <p className="text-[11px] leading-5 text-indigo-300/60 sm:text-xs">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-indigo-200/80">
                DAKSH
              </span>{" "}

              (Trust Your Touch) · All Rights Reserved.

            </p>

            {/* LEGAL LINKS */}

            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[10px] text-indigo-300/45 sm:justify-start sm:text-[11px]">

              <a
                href="#"
                className="transition-colors duration-200 hover:text-indigo-100"
              >
                Privacy Policy
              </a>

              <span className="text-indigo-800">
                •
              </span>

              <a
                href="#"
                className="transition-colors duration-200 hover:text-indigo-100"
              >
                Terms &amp; Conditions
              </a>

              <span className="text-indigo-800">
                •
              </span>

              <a
                href="#faq"
                className="transition-colors duration-200 hover:text-indigo-100"
              >
                Help &amp; FAQs
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group mx-auto flex items-center gap-3 rounded-full border border-indigo-700/70 bg-indigo-950/40 px-4 py-2.5 text-xs font-semibold text-indigo-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/70 hover:bg-indigo-900/60 hover:text-white sm:mx-0"
          >

            <span>
              Back to Top
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-700/70 bg-indigo-900/60 transition-all duration-300 group-hover:border-violet-400/70 group-hover:bg-violet-500/10">

              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />

            </span>

          </button>

        </div>

      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-500" />

    </footer>
  );
};