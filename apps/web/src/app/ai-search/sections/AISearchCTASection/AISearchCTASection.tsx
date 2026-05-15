"use client";

import React from "react";
import Link from "next/link";

export function AISearchCTASection() {
  return (
    <section
      className="bg-[#0f0f0f] text-white py-16 lg:py-24"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Final call to action"
    >
      <div className="max-w-[1499px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <h2
          className="font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[920px] mx-auto"
          style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
        >
          Be the answer AI gives when Dubai asks who is best.
        </h2>
        <p className="text-[#bbb] text-[16px] lg:text-[18px] leading-[1.6] max-w-[680px] mx-auto mb-10">
          Every engagement starts with a free 7-page audit of how Google AI
          Overview, ChatGPT, Perplexity and Gemini currently see your business,
          in every language your customers search in. Backed by a 90-day
          money-back guarantee.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#e8503a] text-white text-[15px] font-semibold tracking-[0.01em] hover:bg-[#d24330] transition-colors"
          >
            Schedule a demo
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white text-white text-[15px] font-semibold tracking-[0.01em] hover:bg-white hover:text-[#0f0f0f] transition-colors"
          >
            Check your AI visibility
          </Link>
        </div>
      </div>
    </section>
  );
}
