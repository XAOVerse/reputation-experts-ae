"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight — Dubai-specific market data presented in
 * the same restrained, editorial style as the rest of the page (white bg,
 * dark text, #e8503a used as a small accent, never a fill).
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai hospitality insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          {/* Thin accent rule — single tiny mark of brand colour */}
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          {/* Eyebrow */}
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai hospitality reality
          </p>

          {/* Headline — dark editorial, key terms emphasised by weight, not colour */}
          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai 5-star hotels rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> convert{" "}
            <span className="font-semibold">26% fewer direct bookings</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          {/* Body */}
          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a 200-room property at AED 1,800 average daily rate, that gap
            costs roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 4.7 million per year
            </span>{" "}
            in unrealised direct revenue — before considering the OTA
            commissions paid to win those same guests back.
          </p>

          {/* Source */}
          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 38 Dubai properties,
            2025 — directional benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
