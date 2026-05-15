"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai fitness, spa and wellness
 * vertical (gyms, boutique studios, yoga, pilates, day spas, wellness
 * centres, personal trainers).
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai fitness, spa and wellness reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai fitness and wellness reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai gyms, studios and spas rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> convert{" "}
            <span className="font-semibold">39% fewer new-member trials</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a studio averaging 18 new members per month at AED 1,200
            average monthly membership and a 12-month average tenure, that gap
            is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 1.5 million per year in lost lifetime member value
            </span>
            , before considering the paid acquisition spend redirected to win
            those same members back through Meta and Google Ads.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 26 Dubai fitness,
            spa and wellness operators, 2025. Directional benchmark, not an
            audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
