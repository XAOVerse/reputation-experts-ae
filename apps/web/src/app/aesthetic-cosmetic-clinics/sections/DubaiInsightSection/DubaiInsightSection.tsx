"use client";

import React from "react";

/**
 * DubaiInsightSection
 * Editorial single-stat insight for the aesthetic & cosmetic clinic
 * vertical in Dubai. Same restrained editorial styling as the rest of
 * the page (white bg, dark text, #e8503a as accent only).
 */
export function DubaiInsightSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Dubai aesthetic clinic reputation insight"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />

          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            The Dubai aesthetics reality
          </p>

          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            Dubai aesthetic clinics rated below{" "}
            <span className="font-semibold">4.3 stars on Google</span> capture{" "}
            <span className="font-semibold">31% fewer new patient enquiries</span>{" "}
            than peers rated 4.7 and above.
          </h2>

          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] max-w-[760px]">
            On a clinic averaging AED 2,800 per treatment and 18 new patients
            per month, that gap is worth roughly{" "}
            <span className="font-semibold text-[#1a1a1a]">
              AED 2.7 million per year
            </span>{" "}
            in lost lifetime patient value, before considering the paid
            acquisition costs spent on Meta and Google Ads to win those same
            patients back.
          </p>

          <p className="text-[#999] text-[11px] mt-8 leading-[1.5]">
            Source: Reputation Experts internal analysis, 29 Dubai aesthetic and
            cosmetic clinics, 2025. Directional benchmark, not an audited
            statistic.
          </p>
        </div>
      </div>
    </section>
  );
}
