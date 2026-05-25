import React from "react";
import Link from "next/link";

type Tier = {
  name: string;
  price: string;
  per: string;
  bestFor: string;
  blurb: string;
  highlights: string[];
  removalsLabel: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Growth",
    price: "AED 1,995",
    per: "/ month",
    bestFor: "New businesses building a 5-star foundation",
    blurb:
      "Built for owners who need to grow authentic reviews fast, on the platforms customers actually check before they book.",
    highlights: [
      "Up to 500 review requests per month",
      "Google reviews focus + monitoring",
      "English review responses",
      "Monthly score & growth report",
    ],
    removalsLabel: "0 removals included",
    cta: "Start with Growth",
    ctaHref: "/contact?tier=growth",
  },
  {
    name: "Core",
    price: "AED 2,995",
    per: "/ month",
    bestFor: "Established businesses maintaining their score",
    blurb:
      "Covers review growth, the first removal of the month, bilingual responses, and the intercept funnel that stops a 1-star from going public.",
    highlights: [
      "Up to 1,500 review requests / month",
      "Google + Facebook monitoring",
      "Bilingual responses (EN + AR)",
      "Negative-review intercept funnel",
    ],
    removalsLabel: "1 removal included / month",
    cta: "Start with Core",
    ctaHref: "/contact?tier=core",
  },
  {
    name: "Pro",
    price: "AED 3,995",
    per: "/ month",
    bestFor: "Multi-channel businesses growing across platforms",
    blurb:
      "Adds AI search visibility, monthly press coverage across 200 news outlets, and five-language response capability. Most clients land here.",
    highlights: [
      "Up to 5,000 review requests / month",
      "AI search visibility (ChatGPT, Perplexity, Google AI Overview)",
      "1 press release / month → 200 outlets",
      "5-language responses",
    ],
    removalsLabel: "3 removals included / month",
    cta: "Start with Pro",
    ctaHref: "/contact?tier=pro",
    popular: true,
  },
  {
    name: "Protection+",
    price: "AED 5,995",
    per: "/ month",
    bestFor: "Multi-location and high-stakes reputations",
    blurb:
      "24/7 monitoring, 200 directory listings managed, monthly press across 300 outlets, fake-page takedowns, and a senior director on your account.",
    highlights: [
      "Up to 20,000 review requests / month",
      "24/7 monitoring + 2-hour response SLA",
      "1 press release / month → 300 outlets",
      "Fake-page & impostor takedowns",
    ],
    removalsLabel: "10 removals included / month",
    cta: "Request proposal",
    ctaHref: "/contact?tier=protection-plus",
  },
  {
    name: "Enterprise",
    price: "AED 9,995",
    per: "/ month",
    bestFor: "Luxury, hospitality, regulated industries, multi-emirate",
    blurb:
      "Weekly press distribution to 400+ outlets, unlimited removals, 12-language responses, defamation legal partner on retainer, and a dedicated three-person account team.",
    highlights: [
      "Unlimited review requests",
      "4 press releases / month → 400+ outlets",
      "Defamation legal partner on retainer",
      "Reputation insurance up to AED 250k",
    ],
    removalsLabel: "Unlimited removals (fair use)",
    cta: "Apply to Enterprise",
    ctaHref: "/contact?tier=enterprise",
  },
];

export function PricingTiersSection() {
  return (
    <section
      className="bg-white py-10 lg:py-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Pricing tiers"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border ${
                t.popular
                  ? "border-[#FF461E] shadow-[0_8px_30px_rgba(255,70,30,0.08)]"
                  : "border-[#e5e5e5]"
              } bg-white p-6 lg:p-7`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-6 inline-block bg-[#FF461E] text-white text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full px-3 py-1">
                  Most popular
                </span>
              )}

              <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
                {t.name}
              </p>

              <div className="mb-4">
                <span
                  className="text-[#0f0f0f] font-medium tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
                >
                  {t.price}
                </span>
                <span className="text-[#555] text-[14px] ml-1">{t.per}</span>
              </div>

              <p className="text-[#1a1a1a] text-[13px] font-medium mb-2 leading-[1.4]">
                {t.bestFor}
              </p>
              <p className="text-[#555] text-[13.5px] leading-[1.7] mb-5">
                {t.blurb}
              </p>

              <ul className="space-y-2 mb-5">
                {t.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-[#1a1a1a] text-[13.5px] leading-[1.55] flex gap-2"
                  >
                    <span className="text-[#FF461E] flex-shrink-0">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#e5e5e5] pt-4 mb-5">
                <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold">
                  {t.removalsLabel}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={t.ctaHref}
                  className={`block text-center rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-colors whitespace-nowrap ${
                    t.popular
                      ? "bg-[#FF461E] text-white hover:bg-[#e63b15]"
                      : "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#888] text-[12.5px] leading-[1.7] mt-7 max-w-[820px]">
          Pricing in AED, billed monthly. No setup fees. 90-day written score
          guarantee included on every tier. All tiers can be upgraded or
          cancelled inside the trial window. Enterprise tier is by application.
        </p>
      </div>
    </section>
  );
}
