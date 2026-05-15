"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai entertainment vertical
 * (bars, lounges, beach clubs, rooftops, cabarets, live venues, bowling
 * and other entertainment destinations).
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai entertainment reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai entertainment reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai venues rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> see{" "}
            <span className="font-semibold">37% fewer new-guest reservations</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a venue averaging 280 covers per weekend night at AED 320 spend
            per head, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 6.8 million per year
            </span>{" "}
            in lost weekend revenue, before counting the bottle-service,
            day-pass and table-minimum revenue that follows a stronger search
            rating.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 28 Dubai
            entertainment venues including bars, lounges, beach clubs and
            rooftops, 2025. Directional benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
