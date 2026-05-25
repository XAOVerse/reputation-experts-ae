import React from "react";

export function PricingHeroSection() {
  return (
    <section
      className="bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Pricing hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-7 sm:pt-10 lg:pt-11 pb-6 lg:pb-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Pricing
        </p>
        <h1
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.625rem)" }}
        >
          Five tiers. One outcome. A reputation that wins customers before
          they ever read a review.
        </h1>
        <p className="text-[#555] text-[15px] leading-[1.65] mb-8 max-w-[820px]">
          Transparent monthly pricing from AED 1,995 to AED 9,995. Every tier
          includes our 90-day written score guarantee. No setup fees, no
          long-term contracts, cancel any time within the trial window. The
          higher tiers add review removals, AI search visibility, and press
          coverage across hundreds of news outlets every month.
        </p>
      </div>
    </section>
  );
}
