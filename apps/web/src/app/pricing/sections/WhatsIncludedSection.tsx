import React from "react";
import Link from "next/link";

type Row = {
  group?: string;
  metric: string;
  growth: string;
  core: string;
  pro: string;
  protection: string;
  enterprise: string;
};

const T = "✓";
const X = "—";

const ROWS: Row[] = [
  // Outcomes
  { group: "Outcomes", metric: "What you get", growth: "Review growth foundation", core: "Growth + harmful-content removal", pro: "Growth + removals + AI + media", protection: "Full reputation protection", enterprise: "Enterprise insurance & global press" },
  { metric: "Best for", growth: "New businesses building 5 stars", core: "Established businesses maintaining their score", pro: "Multi-channel businesses growing across platforms", protection: "Multi-location and high-stakes reputations", enterprise: "Luxury, hospitality, regulated, multi-emirate" },

  // Plan
  { group: "Plan", metric: "Monthly price", growth: "AED 1,995", core: "AED 2,995", pro: "AED 3,995", protection: "AED 5,995", enterprise: "AED 9,995" },
  { metric: "Free review removals / month", growth: "0", core: "1", pro: "3", protection: "10", enterprise: "Provided" },
  { metric: "Discount on additional removals", growth: X, core: "20%", pro: "35%", protection: "50%", enterprise: "Included" },
  { metric: "90-day score guarantee", growth: T, core: T, pro: T, protection: T, enterprise: T },
  { metric: "Setup fee", growth: "None", core: "None", pro: "None", protection: "None", enterprise: "None" },

  // Reviews & responses
  { group: "Reviews & responses", metric: "Request channels", growth: "Email", core: "Email + SMS", pro: "Email + SMS + WhatsApp", protection: "Email + SMS + WhatsApp", enterprise: "Email + SMS + WhatsApp" },
  { metric: "Platforms monitored", growth: "1", core: "2", pro: "5", protection: "9", enterprise: "50+" },
  { metric: "Response languages", growth: "English", core: "English + Arabic", pro: "5 languages", protection: "8 languages", enterprise: "12 languages" },
  { metric: "Response SLA", growth: "24 hr", core: "12 hr", pro: "6 hr", protection: "2 hr, 24/7", enterprise: "1 hr, 24/7" },
  { metric: "Negative-review intercept funnel", growth: X, core: "2–3 / mo", pro: T, protection: T, enterprise: T },
  { metric: "Review widget for your website", growth: X, core: T, pro: T, protection: T, enterprise: T },

  // Protection
  { group: "Protection & defence", metric: "Negative content takedowns (FB, IG, fake pages, copyright)", growth: X, core: X, pro: X, protection: T, enterprise: T },
  { metric: "UAE defamation legal escalation", growth: X, core: X, pro: X, protection: T, enterprise: "Partner on retainer" },
  { metric: "Crisis response", growth: X, core: X, pro: T, protection: T, enterprise: T },
  { metric: "Reputation insurance", growth: X, core: X, pro: X, protection: X, enterprise: "Up to AED 250k / incident" },

  // Team & reporting
  { group: "Team & reporting", metric: "Account team", growth: "Shared", core: "Shared", pro: "Dedicated manager", protection: "Dedicated manager + senior director", enterprise: "Dedicated 3-person team" },
  { metric: "Reporting", growth: "Monthly", core: "Bi-weekly", pro: "Weekly", protection: "Weekly + monthly executive review", enterprise: "Weekly + monthly executive review" },

  // AI Search Visibility (moved in from standalone section)
  { group: "AI search visibility", metric: "ChatGPT", growth: X, core: T, pro: T, protection: T, enterprise: T },
  { metric: "Google AI Overview", growth: X, core: T, pro: T, protection: T, enterprise: T },
  { metric: "Perplexity", growth: X, core: X, pro: T, protection: T, enterprise: T },
  { metric: "Microsoft Copilot", growth: X, core: X, pro: T, protection: T, enterprise: T },
  { metric: "Claude", growth: X, core: X, pro: T, protection: T, enterprise: T },
  { metric: "Gemini", growth: X, core: X, pro: T, protection: T, enterprise: T },
  { metric: "Grok", growth: X, core: X, pro: X, protection: T, enterprise: T },
  { metric: "Meta AI", growth: X, core: X, pro: X, protection: T, enterprise: T },
  { metric: "Falcon (UAE) & Jais (Arabic)", growth: X, core: X, pro: X, protection: X, enterprise: T },

  // Media coverage (moved in from standalone section)
  { group: "Media coverage", metric: "Authority Press (Bloomberg, Reuters, Khaleej Times, Forbes, etc.)", growth: X, core: X, pro: "Limited", protection: "Full access", enterprise: "Full + premium editorial" },
  { metric: "Trade & Regional Press", growth: X, core: "Listed", pro: "Full access", protection: "Full access", enterprise: "Full access" },
  { metric: "Press releases distributed", growth: X, core: "Quarterly", pro: "Monthly", protection: "Monthly", enterprise: "Weekly" },
  { metric: "Featured editorial (long-form, branded)", growth: X, core: X, pro: "Quarterly", protection: "Quarterly", enterprise: "Monthly" },
  { metric: "“As Seen On” trust badge", growth: X, core: T, pro: T, protection: T, enterprise: T },
];

type TierMeta = {
  name: string;
  price: string;
  recommended?: boolean;
  cta: string;
  href: string;
};

const TIERS: TierMeta[] = [
  { name: "Growth",       price: "AED 1,995", cta: "Start with Growth",      href: "/contact?tier=growth" },
  { name: "Core",         price: "AED 2,995", cta: "Start with Core",        href: "/contact?tier=core" },
  { name: "Pro",          price: "AED 3,995", recommended: true, cta: "Start with Pro", href: "/contact?tier=pro" },
  { name: "Protection+",  price: "AED 5,995", cta: "Request proposal",       href: "/contact?tier=protection-plus" },
  { name: "Enterprise",   price: "AED 9,995", cta: "Apply to Enterprise",    href: "/contact?tier=enterprise" },
];

export function WhatsIncludedSection() {
  return (
    <section
      id="plans"
      className="bg-white py-10 lg:py-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="What's included"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          What&rsquo;s included
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-10 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          One table, every tier. No surprises later.
        </h2>

        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="min-w-[960px] w-full text-left">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 pr-4"></th>
                {TIERS.map((t) => (
                  <th
                    key={t.name}
                    className={`text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center ${
                      t.recommended ? "bg-[#FF461E]/[0.04]" : ""
                    }`}
                  >
                    <div className={`font-medium text-[14px] inline-flex items-center gap-2 ${t.recommended ? "text-[#FF461E]" : ""}`}>
                      <span>{t.name}</span>
                      {t.recommended && (
                        <span className="inline-block bg-[#FF461E] text-white text-[9px] tracking-[0.16em] uppercase font-semibold rounded-full px-2 py-0.5 whitespace-nowrap">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="text-[12px] text-[#555] font-normal">{t.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <React.Fragment key={i}>
                  {r.group && (
                    <tr>
                      <td colSpan={6} className="pt-6 pb-2">
                        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold">
                          {r.group}
                        </p>
                      </td>
                    </tr>
                  )}
                  <tr className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[13.5px] py-3 pr-4 leading-[1.5]">{r.metric}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.growth}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.core}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center bg-[#FF461E]/[0.03]">{r.pro}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.protection}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.enterprise}</td>
                  </tr>
                </React.Fragment>
              ))}

              {/* CTA row at bottom of table */}
              <tr>
                <td className="pt-6 pr-4"></td>
                {TIERS.map((t) => (
                  <td
                    key={t.name}
                    className={`pt-6 px-3 text-center ${t.recommended ? "bg-[#FF461E]/[0.03]" : ""}`}
                  >
                    <Link
                      href={t.href}
                      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors whitespace-nowrap ${
                        t.recommended
                          ? "bg-[#FF461E] text-white hover:bg-[#e63b15]"
                          : "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                      }`}
                    >
                      {t.cta}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#888] text-[12.5px] leading-[1.7] mt-7 max-w-[820px]">
          Pricing in AED, billed monthly. No setup fees. 90-day written score
          guarantee included on every tier. Enterprise tier is by application.
        </p>
      </div>
    </section>
  );
}
