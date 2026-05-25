"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "Are these prices final, or are there extra fees?",
    a: "These are the full monthly prices. No setup fee, no onboarding fee, no platform fee. The only optional cost is additional review removals above your tier's included quota, billed at the tier-discounted PAYG rate (no-win, no-fee, 14-day SLA).",
  },
  {
    q: "What is included on the 90-day guarantee?",
    a: "Before work begins we agree a written target — for example moving from 4.2 to 4.6 stars, or adding 80 new 5-star reviews per location in 90 days. Miss the target by day 90, and we continue working at no extra cost until we hit it. The guarantee applies on every tier.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes. Most clients start on Pro or Core and move up to Protection+ once they've seen the first 60 days of results. You can move up at any time. Moving down requires 30 days' notice so we can rebalance your team allocation.",
  },
  {
    q: "How do review removals work?",
    a: "We dispute reviews that violate platform policy or UAE law. Each removal attempt runs against a 14-day SLA. For standalone (PAYG) removals you pay only on confirmed removal — no removal, no fee. On a subscription, included monthly removals roll within the month; unused removals do not bank.",
  },
  {
    q: "Why are AI search and press coverage separate sections instead of in the base tier?",
    a: "AI search visibility and press coverage are the highest-leverage parts of modern reputation work — when ChatGPT cites you or Bloomberg Middle East publishes your story, that beats almost any review-management activity. We isolated them so each tier shows exactly what you get and the higher tiers earn their price tag honestly.",
  },
  {
    q: "Do you actually publish on Bloomberg, Khaleej Times, Forbes ME and the rest?",
    a: "Yes, on the tiers that include them. Tier-1 outlets (Bloomberg ME, Reuters ME, Forbes ME, Khaleej Times, Gulf News, AP, Yahoo Finance) are included on Protection+ and Enterprise. Pro tier includes 200 mid-tier and regional outlets per release. Sample reports available on request.",
  },
  {
    q: "Do you use AI to write the responses to my reviews?",
    a: "No. Every response is written by a human, in your voice, in your customer's language. AI is used to identify the right things to find (entity signals, citation networks, AI-search optimisation). People are used to write what gets said. This is locked policy.",
  },
  {
    q: "Is this white-labelled? Will my customers see your branding?",
    a: "Your customers see your brand, not ours. Review widgets, response signatures, request emails and SMS all carry your name and your domain. We operate in the background. The only place Reputation Experts appears is on this website and on the invoices we send you.",
  },
  {
    q: "What about Sharjah, Abu Dhabi and the rest of the Emirates?",
    a: "All seven Emirates are covered on every tier. Multi-location tracking starts on Pro (3 locations), Protection+ (10) and Enterprise (unlimited). KSA, Qatar, Bahrain and Oman expansion is available on Enterprise.",
  },
  {
    q: "How quickly can we start?",
    a: "Onboarding is 5 working days from contract sign on Growth, Core and Pro. Protection+ is 7 days because of the directory build-out and crisis-response setup. Enterprise is 10 working days and includes a kick-off with your dedicated 3-person team.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, any time. Subscription is billed monthly with no lock-in. We don't believe in trapping clients. The 90-day guarantee gives you a fair window to evaluate, and if the work is not delivering you can walk.",
  },
  {
    q: "Is Enterprise really worth the AED 9,995?",
    a: "For a hotel, multi-location clinic, real estate group or luxury brand where a single bad PR cycle costs AED 50,000+ in lost bookings, the answer is yes. The reputation insurance alone (up to AED 250k per incident) covers it. For a single-location salon, Pro is the right tier. Talk to us if you're not sure.",
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
