"use client";

import React from "react";

/**
 * MethodologyPillarsSection
 * The four signals AI search engines (Google AI Overview, ChatGPT,
 * Perplexity, Gemini) weigh when deciding which Dubai businesses to
 * name in an answer. Editorial four-column grid, brand accent only.
 */

const PILLARS = [
  {
    number: "01",
    title: "Review depth and recency",
    body: "Volume of reviews matters less than weighted recency. An AI engine looks for a steady cadence of authentic, multi-paragraph reviews in the past 12 to 18 months across Google and Apple Business Connect. A flat profile, or a sudden spike, gets discounted. We rebuild a consistent organic cadence in every language your customers actually speak.",
  },
  {
    number: "02",
    title: "Language coverage",
    body: "Dubai customers search in Arabic, English, Russian, Mandarin, German and French. An AI engine that sees a Dubai business profile with 600 English reviews and zero Arabic interprets the business as serving only one language community, and demotes it for the other queries. We rebuild a profile that is convincing in every language the AI sees the searcher using.",
  },
  {
    number: "03",
    title: "Third-party citation authority",
    body: "AI engines weight independent sources. A mention in Condé Nast Traveller Middle East, Hotelier Middle East, Khaleej Times, Time Out Dubai or international outlets like Forbes, Bloomberg or Yahoo Finance signals authority in a way an owned website cannot. We secure the placements, in the right outlets, with the right context, so the AI has a verifiable third-party source to cite.",
  },
  {
    number: "04",
    title: "Structured data and topical clarity",
    body: "AI engines need a clean answer to three questions: what is this business, who does it serve, where does it operate. Most Dubai websites give muddled signals. We fix the Google Business Profile categories, the schema markup, the on-site topical clusters and the Arabic/English content parity, so when the AI parses your business it builds the correct mental model the first time.",
  },
];

export function MethodologyPillarsSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="How AI search engines choose what to recommend"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <div className="h-[2px] w-10 bg-[#e8503a] mb-6" aria-hidden="true" />
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            What the AI weighs
          </p>
          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Four signals decide whether your business gets cited.
          </h2>
          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7]">
            Google AI Overview, ChatGPT, Perplexity and Gemini do not all use
            identical models, but in our work with Dubai businesses across
            hospitality, healthcare, real estate and professional services,
            four signals consistently separate the businesses an AI recommends
            from the ones it ignores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((p) => (
            <div key={p.number} className="border-t border-[#e5e5e5] pt-6">
              <p className="text-[#e8503a] text-[12px] tracking-[0.18em] uppercase font-semibold mb-3">
                {p.number}
              </p>
              <h3 className="text-[#1a1a1a] text-[20px] sm:text-[22px] font-medium leading-[1.25] tracking-[-0.01em] mb-3">
                {p.title}
              </h3>
              <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
