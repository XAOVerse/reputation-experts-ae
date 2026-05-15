"use client";

import React, { useState } from "react";

const FAQ = [
  {
    question: "Is this just SEO with a new name?",
    answer:
      "No. Classic SEO optimises a website to rank in the ten blue links. AI search optimisation works on a different surface entirely. Google AI Overview, ChatGPT, Perplexity and Gemini do not pick winners from a ranked list; they read across reviews, press coverage, schema markup and the open web, then generate an answer that names two or three businesses. The signals overlap with SEO in places but are weighted very differently. A page that ranks 7th in the blue links can still be cited as the first AI answer, and a page that ranks 1st can be ignored entirely. You need both, and they are not the same job.",
  },
  {
    question: "Does paying Google Ads help me appear in AI Overviews?",
    answer:
      "No. Google AI Overviews are generated from organic signals only. Ad spend does not influence which businesses get cited. Spending more on Google Ads is not a route to AI search visibility, although ads still have value for direct-response acquisition while the AI side of your funnel is being rebuilt.",
  },
  {
    question: "How long does it take to see my business cited in an AI answer?",
    answer:
      "For mid-volume Dubai queries, most businesses begin appearing in Google AI Overviews within 60 to 90 days, once review depth, language coverage and at least one credible press citation are in place. Highly competitive queries (best 5-star hotel in Dubai, best aesthetic clinic in DIFC, best brokerage in Marina) typically take 4 to 6 months because the AI weights citation authority heavily and that authority compounds. We benchmark visibility weekly and report monthly so you can see the curve.",
  },
  {
    question: "Why does multilingual coverage matter so much in Dubai?",
    answer:
      "Dubai customers search in Arabic, English, Russian, Mandarin, German and French. When an AI engine reads a business profile with 600 English reviews and zero Arabic, it builds a mental model of a business that serves English speakers, and demotes it for Arabic queries. The same business with 400 reviews split evenly across Arabic, English and Russian appears for all three language queries. This is the single biggest unforced error we see Dubai businesses make.",
  },
  {
    question: "What kind of press coverage actually moves the needle?",
    answer:
      "AI engines weight credibility and topical relevance. A feature in Condé Nast Traveller Middle East moves the needle for a hotel; a feature in Khaleej Times Business or Hotelier Middle East moves it differently; a Forbes or Bloomberg mention adds international credibility for global queries. A directory listing on a low-authority site does not move the needle. We secure placements that match the AI's idea of trustworthy sources for your category, not vanity coverage.",
  },
  {
    question: "Can ChatGPT and Perplexity really send me customers in Dubai?",
    answer:
      "Yes, and the share is growing every quarter. We see Dubai businesses now receiving 8 to 15% of their new-customer enquiries from people who first asked ChatGPT or Perplexity \"best X in Dubai\" before opening Google. The share is higher in tourism-led categories (hotels, restaurants, car rental, aesthetic clinics) where international visitors plan from abroad before they fly. The traffic is harder to attribute than Google clicks, but the leads are typically higher-intent because the searcher has already pre-qualified with the AI.",
  },
  {
    question: "What happens if a competitor games the system with fake reviews?",
    answer:
      "Google AI Overview and the major LLM search engines are increasingly sophisticated at detecting review-pattern anomalies, and a competitor caught buying reviews typically sees their AI visibility collapse within weeks of a sweep. We do not engage in review fabrication. The methodology we use generates authentic reviews from real customers and disputes only reviews that violate Google's published policies. The result is durable; gamed reviews are not.",
  },
];

export function DentalFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-6 pb-14 lg:pt-8 lg:pb-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
          FAQ
        </h2>

        <div>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-[#e5e5e5]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 lg:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[16px] sm:text-[17px] font-medium leading-[1.45] tracking-[-0.01em]">
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[14px] leading-none transition-transform"
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-7 lg:pb-8 pr-12">
                    <p className="text-[#555] text-[14.5px] sm:text-[15.5px] leading-[1.7]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
