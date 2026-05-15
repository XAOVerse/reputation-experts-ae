"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai automotive vertical
 * (showrooms, dealers, exporters, importers). Same restrained editorial
 * styling as the rest of the page.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai automotive reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai automotive reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai car showrooms and dealers rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> convert{" "}
            <span className="font-semibold">34% fewer showroom enquiries</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a showroom moving 25 vehicles per month at AED 180,000 average
            ticket and 9% gross margin, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 5.5 million per year in lost gross profit
            </span>
            , before considering the marketing budget redirected to win those
            same buyers back through paid traffic and aggregator listings.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 21 Dubai automotive
            showrooms, dealers, exporters and importers, 2025. Directional
            benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
