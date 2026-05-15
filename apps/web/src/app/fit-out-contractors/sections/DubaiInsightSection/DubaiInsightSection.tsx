"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the Dubai fit-out contractor vertical
 * (interior fit-out, MEP, joinery, civil contractors). Same restrained
 * editorial styling as the rest of the page.
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai fit-out contractor reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai fit-out reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai fit-out contractors rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> receive{" "}
            <span className="font-semibold">36% fewer tender invitations</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a contractor delivering 14 projects per year at AED 1.2 million
            average ticket and 14% gross margin, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 845,000 per year in lost gross profit
            </span>
            , before considering the cost of paid lead generation redirected to
            win those same enquiries back.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 19 Dubai fit-out and
            interior contracting firms, 2025. Directional benchmark, not an
            audited statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
