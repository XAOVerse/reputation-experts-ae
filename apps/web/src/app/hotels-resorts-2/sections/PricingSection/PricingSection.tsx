"use client";

import React from "react";

/**
 * PricingSection
 * Three tiers tuned for the Dubai hospitality market.
 * Foundation = boutique hotels & guest houses (single property).
 * Growth = 4-star and established 5-star hotels (most popular).
 * Authority = 5-star resorts and hotel groups (full-service).
 */

interface Tier {
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  ideal: string;
  cta: string;
  ctaHref: string;
  features: string[];
  highlight?: boolean;
  highlightLabel?: string;
}

const TIERS: Tier[] = [
  {
    name: "Foundation",
    tagline: "Protect what you have built.",
    price: "AED 8,500",
    priceSuffix: "/ month",
    ideal: "Best for boutique hotels, guest houses and 4-star properties up to 100 rooms.",
    cta: "Start with Foundation",
    ctaHref: "/contact",
    features: [
      "24/7 monitoring across Google, Booking.com, TripAdvisor, Trustpilot",
      "Up to 5 review removal cases per month",
      "Multilingual review responses in English and Arabic",
      "Authentic 5-star review generation campaign — target +20 verified reviews per month",
      "Google Business Profile optimisation",
      "Monthly performance dashboard and reporting",
      "Direct WhatsApp support, replies within 4 working hours",
    ],
  },
  {
    name: "Growth",
    tagline: "Outrank the resort next door.",
    price: "AED 19,500",
    priceSuffix: "/ month",
    ideal: "Best for established 4 and 5-star hotels with 100–300 rooms competing for direct bookings.",
    cta: "Start with Growth",
    ctaHref: "/contact",
    highlight: true,
    highlightLabel: "Most chosen by Dubai hotels",
    features: [
      "Everything in Foundation",
      "Unlimited review removal cases — no monthly cap",
      "Multilingual review responses in 5 languages: English, Arabic, Russian, Mandarin, German or French",
      "Multilingual review generation campaign — target +50 verified reviews per month",
      "Google AI Overview optimisation for high-intent Dubai search queries",
      "ChatGPT and Perplexity citation positioning",
      "Schema markup and structured data implementation",
      "One PR placement per quarter in international travel or lifestyle media",
      "Bi-weekly strategy call with a dedicated reputation manager",
      "Performance guarantee: minimum 0.3 Google rating uplift in 90 days, or your next month is free",
    ],
  },
  {
    name: "Authority",
    tagline: "Become the obvious recommendation.",
    price: "AED 39,500",
    priceSuffix: "/ month",
    ideal: "Best for 5-star resorts, luxury properties and hotel groups managing up to three properties.",
    cta: "Speak to a director",
    ctaHref: "/contact",
    features: [
      "Everything in Growth",
      "Up to 3 properties under one engagement",
      "Monthly PR placement in international travel and luxury publications (Condé Nast Traveller, Travel + Leisure, TimeOut, Skift, Hotelier Middle East)",
      "Booking.com Genius and Preferred Partner status acceleration",
      "24/7 crisis response hotline — first response within 60 minutes, in any language",
      "One verified influencer partnership per quarter (luxury and Dubai-resident creators)",
      "Authentic review generation in 8 languages, including Spanish, Italian and Korean",
      "Dedicated account director with hospitality background",
      "Quarterly executive review presented to GM and ownership",
      "Performance guarantee: minimum 0.5 Google rating uplift in 90 days, or 50% of your fees refunded",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      className="bg-white py-16 lg:py-24"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Pricing"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-[760px] mx-auto">
          <p className="text-[#e8503a] text-[12px] tracking-[0.2em] uppercase font-semibold mb-4">
            Investment & Tiers
          </p>
          <h2
            className="text-[#0f0f0f] font-normal leading-[1.15] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
          >
            Transparent pricing. Performance-backed. No long-term lock-in.
          </h2>
          <p className="text-[#555] text-[15px] leading-[1.7]">
            Three engagement tiers built around the realities of Dubai hospitality. All plans bill monthly, cancel anytime, and include a written performance guarantee on rating uplift.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={[
                "relative rounded-3xl flex flex-col transition-all duration-300",
                tier.highlight
                  ? "bg-[#0e0e0e] text-white border border-[#0e0e0e] shadow-[0_20px_60px_rgba(232,80,58,0.15)] lg:scale-[1.02]"
                  : "bg-white text-[#1a1a1a] border border-[#e8e8e8] hover:border-[#d0d0d0]",
              ].join(" ")}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8503a] text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  {tier.highlightLabel}
                </div>
              )}

              <div className="p-7 lg:p-9 flex flex-col h-full">
                {/* Tier name + tagline */}
                <div className="mb-6">
                  <h3
                    className={[
                      "font-semibold mb-2 tracking-[-0.01em]",
                      tier.highlight ? "text-white" : "text-[#0f0f0f]",
                    ].join(" ")}
                    style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.65rem)" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={[
                      "text-[14px] leading-[1.5]",
                      tier.highlight ? "text-[#bbb]" : "text-[#666]",
                    ].join(" ")}
                  >
                    {tier.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={[
                        "font-bold tracking-[-0.02em] leading-none",
                        tier.highlight ? "text-white" : "text-[#0f0f0f]",
                      ].join(" ")}
                      style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)" }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={[
                        "text-[13px] font-medium",
                        tier.highlight ? "text-[#999]" : "text-[#777]",
                      ].join(" ")}
                    >
                      {tier.priceSuffix}
                    </span>
                  </div>
                  <p
                    className={[
                      "text-[12.5px] leading-[1.6]",
                      tier.highlight ? "text-[#aaa]" : "text-[#777]",
                    ].join(" ")}
                  >
                    {tier.ideal}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={[
                    "h-px w-full mb-5",
                    tier.highlight ? "bg-[#2a2a2a]" : "bg-[#eee]",
                  ].join(" ")}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className={[
                        "flex gap-2.5 text-[13.5px] leading-[1.55]",
                        tier.highlight ? "text-[#ddd]" : "text-[#333]",
                      ].join(" ")}
                    >
                      <svg
                        className="flex-shrink-0 mt-[3px]"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke={tier.highlight ? "#e8503a" : "#1a1a1a"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.ctaHref}
                  className={[
                    "block w-full text-center rounded-full font-semibold py-3.5 px-6 text-[14px] transition-colors",
                    tier.highlight
                      ? "bg-[#e8503a] text-white hover:bg-[#d4432f]"
                      : "bg-[#0e0e0e] text-white hover:bg-[#1a1a1a]",
                  ].join(" ")}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 lg:mt-14 text-center">
          <p className="text-[#666] text-[13px] leading-[1.7] max-w-[820px] mx-auto">
            Larger groups, branded residences, multi-property portfolios and ultra-luxury operators are priced on request. Every engagement begins with a free <strong className="text-[#0f0f0f]">7-page Dubai Hotel Reputation Audit</strong> delivered within 24 hours — no commitment, no card required.
          </p>
        </div>
      </div>
    </section>
  );
}
