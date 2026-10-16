"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can take a DAKSH assessment?",
    answer:
      "DAKSH is for adults at every stage — working professionals, entrepreneurs, homemakers, job seekers, career changers and those exploring their next step.",
  },
  {
    question: "Why should I take a DAKSH assessment?",
    answer:
      "DAKSH helps you understand your strengths, behavioural tendencies, abilities, preferences and potential, giving you greater clarity about yourself.",
  },
  {
    question: "Can DAKSH help with career growth or a career change?",
    answer:
      "Yes. DAKSH provides insights that can help you evaluate your strengths and preferences when considering career growth, new roles or a career transition.",
  },
  {
    question: "Can DAKSH help me understand my work and leadership style?",
    answer:
      "Yes. Your profile can provide insights into behavioural and leadership tendencies, helping you better understand how you approach work, people and situations.",
  },
  {
    question: "I’m not working right now. Is DAKSH still relevant to me?",
    answer:
      "Absolutely. Whether you are on a career break, exploring opportunities, building a business or planning your next chapter, DAKSH can support self-discovery and direction.",
  },
  {
    question: "What will I receive after the assessment?",
    answer:
      "You receive a personalised DAKSH report with insights into key aspects of your individual profile, including strengths, behavioural patterns, abilities and preferences.",
  },
  {
    question: "Will DAKSH tell me what career I should choose?",
    answer:
      "No. DAKSH is designed to provide insights and support better decisions — your choices remain yours.",
  },
];

export default function FAQSections() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index],
    );
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            FAQs — Individuals
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-4xl">
            Everything you need to know about <br />
            <span className="text-indigo-700">DAKSH</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-slate-600 sm:text-base">
            Find answers to common questions about DAKSH assessments, personal
            insights and discovering your potential.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-200 shadow-[0_8px_30px_rgba(79,70,229,0.07)]"
                    : "border-slate-200 hover:border-indigo-200 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
                >
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isOpen ? "text-indigo-800" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-700"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="px-4 pb-5 sm:px-6 sm:pb-6"
                >
                  <div className="ml-0 border-l-2 border-indigo-200 pl-4 sm:ml-11 sm:pl-5">
                    <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <ChevronDown size={18} />
            </span>

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Explore how DAKSH can help you understand your potential.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-800"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
