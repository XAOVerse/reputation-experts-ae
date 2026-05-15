"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai business services vertical:
 * company formation, business setup consultants, PRO services, visa and
 * immigration consultants, business licensing agents, accountants,
 * auditors and tax planners.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai business services reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai business setup reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai company formation and PRO firms rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> convert{" "}
            <span className="font-semibold">44% fewer international setup enquiries</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a firm closing 22 new setups per month at AED 18,500 average
            package fee plus annual renewal and PRO retainer, that gap is
            worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 4.9 million per year
            </span>{" "}
            in unrealised setup, renewal and ongoing PRO revenue, before
            counting referral value from international founders who would
            have introduced more clients to you.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 26 Dubai business
            setup, PRO and accounting firms, 2025. Directional benchmark, not
            an audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
