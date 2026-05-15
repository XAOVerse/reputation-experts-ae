"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai cleaning services vertical:
 * residential, commercial, deep cleaning, end-of-tenancy, maid services,
 * carpet and sofa cleaning, window cleaning, disinfection, post-construction
 * cleaning and AC duct cleaning.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai cleaning services reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai cleaning services reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai cleaning companies rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> attract{" "}
            <span className="font-semibold">43% fewer new-customer bookings</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a cleaning company running 1,400 jobs per month at AED 180
            average ticket, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 1.3 million per year
            </span>{" "}
            in unrealised cleaning revenue, before counting the repeat-and-
            referral value of residents who would have made you their default
            cleaning provider on a monthly retainer.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 29 Dubai cleaning
            and maid service companies, 2025. Directional benchmark, not an
            audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
