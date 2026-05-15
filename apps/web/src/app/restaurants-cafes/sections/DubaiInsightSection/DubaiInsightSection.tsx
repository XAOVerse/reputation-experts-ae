"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight, Dubai-specific market data for the
 * restaurant and café vertical. Same restrained editorial styling as
 * the rest of the page (white bg, dark text, #e8503a as accent only).
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai restaurant reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai dining reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai restaurants rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> attract{" "}
            <span className="font-semibold">35% fewer new diners</span> from
            search than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a venue serving 150 covers per day at AED 220 average spend, that
            gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 4.2 million per year
            </span>{" "}
            in lost walk-ins and reservations, before considering the discount
            fees paid to win those same diners back through delivery and promo
            platforms.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 46 Dubai restaurants
            and cafés, 2025. Directional benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
