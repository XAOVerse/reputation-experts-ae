"use client";

import React, { useState } from "react";

const DENTAL_FAQ = [
  {
    question: "How can Reputation Experts protect your business from harmful new reviews?",
    answer:
      "We monitor your Google Business Profile around the clock, alongside how your firm surfaces in Google AI Overviews and ChatGPT recommendations. The moment a harmful review appears, in any language, our team is alerted and we begin the removal process immediately. If a review cannot be taken down, we craft a professional response on your behalf in the right language, showing prospective developers, consultants and end-clients that your firm takes feedback seriously. You're never caught off guard by a review again.",
  },
  {
    question: "How long does it take to see results for my fit-out firm?",
    answer:
      "Most Dubai fit-out contractors see measurable improvement within 30 to 60 days. Review removal cases typically resolve in 1 to 3 weeks, depending on the platform, and our review generation system starts delivering authentic 5-star reviews, in Arabic, English, Russian, Chinese and other client languages, within the first fortnight. By month three, you'll typically see a clear rating increase on Google, plus a stronger first page when developers search \"best fit-out contractor Dubai\" or \"top hospitality fit-out company Marina\". Full reputation transformation, including Google AI Overview positioning and ChatGPT authority building, is a 4 to 6 month process.",
  },
  {
    question: "How does Google's AI Overview affect my fit-out firm?",
    answer:
      "Google's AI Overviews now pull together information from reviews, your website, and third-party sources into a single AI-generated answer at the top of the search results. When someone searches for terms like \"best fit-out contractor Dubai\" or \"top hospitality fit-out company Downtown\", Google no longer just shows a list of websites; it increasingly highlights and recommends specific contractors. Reputation Experts strengthens your entire digital presence so your firm is in a far better position to be trusted and recommended by Google's AI. This includes improving your review profile, increasing rating strength and review volume, optimising trust signals across your web presence, and building authority through high-quality third-party coverage. When your firm is featured in trusted architecture, design, hospitality and business publications, something we specialise in, it creates the kind of authority signals that naturally improve how your firm is understood and recommended by Google AI Overviews, ChatGPT, and other AI-driven discovery platforms.",
  },
  {
    question: "How does Reputation Experts build a strong online reputation for my fit-out firm?",
    answer:
      "We work across three phases. First, we clean up: removing policy-violating reviews, suppressing negative search results, and fixing gaps in your Google Business Profile. Second, we strengthen: building a steady flow of authentic 5-star reviews from your real clients in their own languages, using follow-up systems timed around project handovers and snagging sign-off, and publishing authoritative content that positions your firm as a trusted Dubai contractor. Third, we establish long-term authority: securing press coverage in international architecture, design and business publications, optimising for Google AI Overviews and ChatGPT recommendations, and providing ongoing monitoring so your reputation stays protected month after month.",
  },
  {
    question: "How does Reputation Experts help my fit-out firm win more tenders and increase project revenue?",
    answer:
      "In Dubai's fit-out market, reputation directly drives revenue. With developers, consultants and end-clients comparing dozens of contractors before they issue an RFP, a firm sitting at 4.0 stars loses tender invitations to the 4.6-star contractor next door every single day, even when the technical capability, the team and the track record are equally strong. We close that gap by removing unfair reviews that drag your rating down, generating a consistent stream of authentic multilingual 5-star reviews that push it up, and ensuring your firm appears prominently when developers search on Google, ask ChatGPT for contractor recommendations in Dubai, or browse Google AI Overviews. The result is more tender invitations, more shortlists, and more awarded contracts. Dubai contractors typically see a 30 to 50% increase in new client enquiries within the first three months.",
  },
];

export function DentalFAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-6 pb-14 lg:pt-8 lg:pb-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
          FAQ
        </h2>

        <div>
          {DENTAL_FAQ.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={i} className="border-t border-[#e0e0e0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8502a] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] pb-6" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl text-justify lg:text-left">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
