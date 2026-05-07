"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Single-stat credibility block — Dubai-specific market insight that
 * reinforces the cost of a weak rating with a concrete data point.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-[#0e0e0e] py-16 lg:py-24"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai hospitality insight"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <p className="text-[#e8503a] text-[12px] tracking-[0.2em] uppercase font-semibold mb-5">
          The Dubai Hospitality Reality
        </p>
        <h2
          className="text-white font-normal leading-[1.18] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
        >
          Dubai 5-star hotels rated below <strong className="font-bold text-white">4.3 stars on Google</strong> convert <strong className="font-bold text-[#e8503a]">26% fewer direct bookings</strong> than peers rated 4.7 and above.
        </h2>
        <p className="text-[#aaa] text-[14px] sm:text-[15px] leading-[1.7] max-w-[700px] mx-auto">
          On a 200-room property at AED 1,800 average daily rate, that gap costs roughly <strong className="text-white">AED 4.7 million per year</strong> in unrealised direct revenue — before considering the OTA commissions paid to win those same guests back.
        </p>
        <p className="text-[#666] text-[11px] mt-6 tracking-wide">
          Source: Reputation Experts internal analysis, 38 Dubai properties, 2025 — directional benchmark, not an audited statistic.
        </p>
      </div>
    </section>
  );
}
