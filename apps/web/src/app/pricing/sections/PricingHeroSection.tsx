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
          You don&rsquo;t worry about reputation. We grind on it daily so you
          don&rsquo;t have to.
        </h1>
        <p className="text-[#555] text-[15px] leading-[1.65] mb-8 max-w-[820px]">
          Five subscription tiers, each with a written 90-day score guarantee.
          Every review removal is no-win, no-fee &mdash; no removal, no payment.
          We pick up the phone, write every reply by hand, file the disputes, run
          the press cycle, and report back weekly. You stay focused on the
          business. Looking for the full feature breakdown for a procurement
          team? See the {" "}
          <a
            href="/pricing-extended"
            className="text-[#FF461E] hover:underline"
          >
            extended detail view
          </a>
          .
        </p>
      </div>
    </section>
  );
}
