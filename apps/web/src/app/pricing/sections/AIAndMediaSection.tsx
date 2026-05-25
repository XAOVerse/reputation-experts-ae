"use client";

import React, { useState } from "react";

// Tier-1 = premium global + UAE flagship outlets
// Tier-2 = regional, niche, and trade outlets
const TIER1_OUTLETS = [
  { name: "Yahoo Finance",           region: "Global" as const, style: "italic" },
  { name: "Business Insider",        region: "Global" as const, style: "uppercase tracking-[0.18em]" },
  { name: "Associated Press",        region: "Global" as const, style: "font-semibold" },
  { name: "Bloomberg",               region: "Global" as const, style: "italic font-semibold" },
  { name: "Reuters",                 region: "Global" as const, style: "uppercase tracking-[0.18em] font-semibold" },
  { name: "MSN",                     region: "Global" as const, style: "font-semibold tracking-[0.04em]" },
  { name: "Financial Times",         region: "Global" as const, style: "font-semibold tracking-[-0.01em] [font-family:Georgia,serif]" },
  { name: "Khaleej Times",           region: "UAE" as const,    style: "font-semibold tracking-[-0.01em]" },
  { name: "Gulf News",               region: "UAE" as const,    style: "font-semibold italic" },
  { name: "The National",            region: "UAE" as const,    style: "uppercase tracking-[0.22em] font-semibold" },
  { name: "WAM (Emirates News Agency)", region: "UAE" as const, style: "uppercase tracking-[0.16em] font-semibold" },
  { name: "Forbes Middle East",      region: "MENA" as const,   style: "font-semibold italic tracking-[-0.02em]" },
  { name: "Arabian Business",        region: "MENA" as const,   style: "font-semibold" },
  { name: "Zawya",                   region: "MENA" as const,   style: "font-semibold tracking-[-0.01em]" },
];

const TIER2_OUTLETS = [
  "MarketWatch", "Digital Journal", "Street Insider", "NewsBreak",
  "Inter Press Service", "Times of San Diego", "TechBullion",
  "Big News Network", "Minyanville", "BarChart", "Salisbury Post",
  "The Chronicle Journal", "Washington City Paper", "Time Out Dubai",
  "Lovin Dubai", "What's On Dubai", "Esquire Middle East",
  "Harper's Bazaar Arabia", "Vogue Arabia", "GQ Middle East",
  "Hotelier Middle East", "Caterer Middle East", "Construction Week ME",
  "Trade Arabia", "ZAWYA",
];

const AI_PLATFORMS: { name: string; protection: boolean; enterprise: boolean }[] = [
  { name: "ChatGPT",                       protection: true,  enterprise: true },
  { name: "Google AI Overview",            protection: true,  enterprise: true },
  { name: "Perplexity",                    protection: true,  enterprise: true },
  { name: "Microsoft Copilot",             protection: true,  enterprise: true },
  { name: "Claude",                        protection: true,  enterprise: true },
  { name: "Gemini",                        protection: true,  enterprise: true },
  { name: "Grok",                          protection: false, enterprise: true },
  { name: "Meta AI",                       protection: false, enterprise: true },
  { name: "Falcon (UAE) & Jais (Arabic)",  protection: false, enterprise: true },
];

// Media availability per pricing tier
// Pro = limited Tier-1 + full Tier-2
// Protection+ = full Tier-1 + Tier-2 + monthly press
// Enterprise = full Tier-1 + Tier-2 + weekly press + premium placements
const MEDIA_ROWS = [
  { metric: "Tier-1 outlets (Bloomberg, Khaleej Times, Forbes ME, etc.)",
    growth: "—", core: "—", pro: "Limited",         protection: "Full access", enterprise: "Full + premium" },
  { metric: "Tier-2 outlets (regional, niche, trade press)",
    growth: "—", core: "—", pro: "Full access",     protection: "Full access", enterprise: "Full access" },
  { metric: "Press releases distributed",
    growth: "—", core: "—", pro: "Monthly",         protection: "Monthly",     enterprise: "Weekly" },
  { metric: "Featured editorial (long-form, branded)",
    growth: "—", core: "—", pro: "—",               protection: "Quarterly",   enterprise: "Monthly" },
  { metric: "“As Seen On” trust badge",
    growth: "—", core: "—", pro: "✓",               protection: "✓",           enterprise: "✓" },
];

function Tick({ on }: { on: boolean }) {
  if (on) return <span className="text-[#FF461E] text-[18px] leading-none">✓</span>;
  return <span className="text-[#d4d4d4] text-[16px] leading-none">—</span>;
}

function regionPill(region: "Global" | "MENA" | "UAE") {
  const styles =
    region === "UAE"
      ? "bg-[#FF461E]/10 text-[#FF461E]"
      : region === "MENA"
      ? "bg-[#e8503a]/10 text-[#e8503a]"
      : "bg-[#1a1a1a]/10 text-[#1a1a1a]";
  return (
    <span className={`inline-block ${styles} text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full px-2 py-0.5`}>
      {region}
    </span>
  );
}

function Accordion({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left py-5 flex items-center justify-between gap-6 hover:opacity-80 transition-opacity"
      >
        <span className="text-[#1a1a1a] text-[15.5px] sm:text-[16px] font-medium leading-[1.4]">
          {title}
          <span className="text-[#888] text-[13px] font-normal ml-2">({count})</span>
        </span>
        <span
          className={`flex-shrink-0 text-[#FF461E] text-[22px] leading-none transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

export function AIAndMediaSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI search and media coverage"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          AI Search Visibility & Media Coverage
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          The two engines that move the needle, run together.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-12 max-w-[820px]">
          You can&rsquo;t move AI search without media coverage, and you
          can&rsquo;t build trust without the right outlets. We run them as one
          program from Pro upward. Growth and Core focus on review growth only.
        </p>

        {/* AI platforms table */}
        <div className="mb-14">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            AI platforms we optimise for
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[760px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Platform</th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Growth</th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Core</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center bg-[#FF461E]/[0.04]">Pro</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {AI_PLATFORMS.map((p) => (
                  <tr key={p.name} className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[14px] py-3 pr-4 leading-[1.5]">{p.name}</td>
                    <td className="py-3 px-3 text-center"><Tick on={false} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={false} /></td>
                    <td className="py-3 px-3 text-center bg-[#FF461E]/[0.03]"><Tick on={p.protection || p.enterprise} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={p.protection} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={p.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Media coverage — Tier-1/Tier-2 groups (NOT outlet-by-outlet) */}
        <div className="mb-10">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Media coverage by tier
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[760px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Coverage</th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Growth</th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Core</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center bg-[#FF461E]/[0.04]">Pro</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {MEDIA_ROWS.map((r, i) => (
                  <tr key={i} className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[14px] py-3 pr-4 leading-[1.5]">{r.metric}</td>
                    <td className="text-[#888] text-[13px] py-3 px-3 text-center">{r.growth}</td>
                    <td className="text-[#888] text-[13px] py-3 px-3 text-center">{r.core}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center bg-[#FF461E]/[0.03]">{r.pro}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.protection}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expandable outlet lists */}
        <div>
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
            See the actual outlets
          </p>

          <Accordion title="Tier-1 outlets" count={TIER1_OUTLETS.length}>
            <p className="text-[#555] text-[13px] leading-[1.65] mb-5">
              Premium global, UAE flagship and MENA-leading press. Pro tier
              gets selected placements from this list; Protection+ gets full
              access; Enterprise gets full access plus premium editorial
              placements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {TIER1_OUTLETS.map((o) => (
                <div key={o.name} className="flex items-center justify-between gap-3 py-1">
                  <span className={`text-[#1a1a1a] text-[15px] ${o.style}`}>{o.name}</span>
                  {regionPill(o.region)}
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Tier-2 outlets" count={TIER2_OUTLETS.length + 360}>
            <p className="text-[#555] text-[13px] leading-[1.65] mb-5">
              Regional, niche and trade press across global, MENA and UAE
              networks. Included on every Pro tier and above.
            </p>
            <div className="text-[#1a1a1a] text-[14px] leading-[2]">
              {TIER2_OUTLETS.join(" · ")} ·{" "}
              <span className="text-[#888]">and 360+ additional regional and niche outlets.</span>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
