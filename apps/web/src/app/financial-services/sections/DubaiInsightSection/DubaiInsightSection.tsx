"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai financial and professional
 * services vertical: brokerages, investment companies, accountants,
 * financial and tax advisors, company formation specialists and business
 * setup consultants.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai financial services reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai professional services reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai brokerages, accountants and advisory firms rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> convert{" "}
            <span className="font-semibold">33% fewer qualified mandates</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a firm onboarding 6 new mandates per month at AED 75,000
            average annual fee, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 1.8 million per year
            </span>{" "}
            in lost first-year fee revenue, before counting retention,
            cross-sell and referral value those same clients would have
            generated over a typical multi-year engagement.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 23 Dubai financial,
            accounting, advisory and business-setup firms, 2025. Directional
            benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
