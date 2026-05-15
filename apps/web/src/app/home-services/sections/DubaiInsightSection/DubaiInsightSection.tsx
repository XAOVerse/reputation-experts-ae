"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai home services vertical:
 * AC servicing, plumbing, electrical, handyman, painting, carpentry,
 * pest control, moving, pool maintenance, landscaping and gardening.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai home services reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai home services reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai home service companies rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> book{" "}
            <span className="font-semibold">41% fewer new-customer jobs</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a company running 320 jobs per month at AED 480 average ticket,
            that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 1.6 million per year
            </span>{" "}
            in unrealised service revenue, before counting the repeat-and-
            referral value of residents who would have made you their default
            handyman, AC technician or plumber.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 33 Dubai home
            services companies covering AC, plumbing, electrical, handyman,
            painting, pest control and pool maintenance, 2025. Directional
            benchmark, not an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
