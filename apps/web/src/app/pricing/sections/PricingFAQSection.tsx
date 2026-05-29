"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "Are these prices final, or are there extra fees?",
    a: "These are the full monthly prices. No setup fee, no onboarding fee, no platform fee. The only optional cost is additional review removals beyond your tier's included quota, billed at the tier-discounted rate (no-win, no-fee, 14-day SLA).",
  },
  {
    q: "What is included on the 90-day guarantee?",
    a: "Before work begins we agree a written target — for example moving from 4.2 to 4.6 stars in 90 days. Miss the target by day 90, and we continue working at no extra cost until we hit it. The guarantee applies on every tier.",
  },
  {
    q: "How do review removals work?",
    a: "No upfront fees for standalone (PAYG) removals you pay only on confirmed removal — no removal, no fee. Subscription tiers include monthly free removals; unused removals do not bank.",
  },
  {
    q: "Why are AI search and media coverage combined into one program?",
    a: "Because they can't move without each other. AI models like ChatGPT and Perplexity cite high-authority press placements. So press coverage is what drives AI search visibility — running them separately wastes both. We run them as one engine from Pro upward.",
  },
  {
    q: "Do you use AI to write the responses to my reviews?",
    a: "No. Every reply is written by a human, in your voice, in your customer's language. AI is used to identify what to find. People are used to write what gets said.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left py-5 flex items-start justify-between gap-6 hover:opacity-80 transition-opacity"
      >
        <span className="text-[#1a1a1a] text-[15.5px] sm:text-[16px] font-medium leading-[1.4]">
          {q}
        </span>
        <span
          className={`flex-shrink-0 text-[#FF461E] text-[22px] leading-none mt-0.5 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7] max-w-[820px]">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export function PricingFAQSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Pricing FAQ"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Questions
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-10 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          The honest answers, before you ask.
        </h2>

        <div>
          {FAQS.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
