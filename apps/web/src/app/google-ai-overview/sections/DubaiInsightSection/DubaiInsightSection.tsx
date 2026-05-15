"use client";

import React from "react";

/**
 * DubaiInsightSection (Google AI Overview page edition)
 * Single-stat editorial insight on how much organic Google traffic in
 * Dubai now passes through an AI Overview before the user ever reaches
 * a traditional search result.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="The Dubai AI search reality"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="h-[2px] w-10 bg-[#e8503a] mb-6" aria-hidden="true" />
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai AI search reality
          </p>
          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Roughly{" "}
            <span className="font-semibold">61% of high-intent Dubai searches</span>
            {" "}now return a Google AI Overview before any blue link, and the
            cited businesses capture an estimated{" "}
            <span className="font-semibold">3 to 4 times the click-through</span>
            {" "}of the ten results below it.
          </h2>
          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            If your business is not one of the two or three cited at the top,
            your traffic from organic Google has effectively collapsed,
            regardless of how well you ranked last year. The same shift is
            playing out on ChatGPT, Perplexity and Gemini, where the answer is
            the only result and citations are even fewer.
          </p>
          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal tracking, 1,200 Dubai-intent
            queries across hospitality, healthcare, real estate, automotive and
            professional services, 2025. Directional benchmark, not an audited
            statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
