"use client";

import React, { useState } from "react";

// Authority Press = premium global + UAE flagship outlets
// Trade & Regional Press = regional, niche, and trade outlets
const AUTHORITY_PRESS = [
  { name: "Yahoo Finance",       region: "Global" as const, style: "italic" },
  { name: "Business Insider",    region: "Global" as const, style: "uppercase tracking-[0.18em]" },
  { name: "Associated Press",    region: "Global" as const, style: "font-semibold" },
  { name: "Bloomberg",           region: "Global" as const, style: "italic font-semibold" },
  { name: "Reuters",             region: "Global" as const, style: "uppercase tracking-[0.18em] font-semibold" },
  { name: "MSN",                 region: "Global" as const, style: "font-semibold tracking-[0.04em]" },
  { name: "Financial Times",     region: "Global" as const, style: "font-semibold tracking-[-0.01em] [font-family:Georgia,serif]" },
  { name: "Khaleej Times",       region: "UAE" as const,    style: "font-semibold tracking-[-0.01em]" },
  { name: "Gulf News",           region: "UAE" as const,    style: "font-semibold italic" },
  { name: "The National",        region: "UAE" as const,    style: "uppercase tracking-[0.22em] font-semibold" },
  { name: "WAM",                 region: "UAE" as const,    style: "uppercase tracking-[0.16em] font-semibold" },
  { name: "Forbes",              region: "MENA" as const,   style: "font-semibold italic tracking-[-0.02em]" },
  { name: "Arabian Business",    region: "MENA" as const,   style: "font-semibold" },
  { name: "Zawya",               region: "MENA" as const,   style: "font-semibold tracking-[-0.01em]" },
];

const TRADE_PRESS = [
  "MarketWatch", "Digital Journal", "Street Insider", "NewsBreak",
  "Inter Press Service", "Times of San Diego", "TechBullion",
  "Big News Network", "Minyanville", "BarChart", "Salisbury Post",
  "The Chronicle Journal", "Washington City Paper",
  "Time Out Dubai", "Lovin Dubai", "What's On Dubai",
  "Esquire", "Harper's Bazaar Arabia", "Vogue Arabia", "GQ",
  "Hotelier", "Caterer", "Construction Week", "Trade Arabia",
];

// Each AI platform now declares which tiers include it
// (fixes the bug where Pro had platforms Protection+ didn't)
const AI_PLATFORMS: { name: string; growth: boolean; core: boolean; pro: boolean; protection: boolean; enterprise: boolean }[] = [
  { name: "ChatGPT",                       growth: false, core: true,  pro: true, protection: true, enterprise: true },
  { name: "Google AI Overview",            growth: false, core: true,  pro: true, protection: true, enterprise: true },
  { name: "Perplexity",                    growth: false, core: false, pro: true, protection: true, enterprise: true },
  { name: "Microsoft Copilot",             growth: false, core: false, pro: true, protection: true, enterprise: true },
  { name: "Claude",                        growth: false, core: false, pro: true, protection: true, enterprise: true },
  { name: "Gemini",                        growth: false, core: false, pro: true, protection: true, enterprise: true },
  { name: "Grok",                          growth: false, core: false, pro: false, protection: true, enterprise: true },
  { name: "Meta AI",                       growth: false, core: false, pro: false, protection: true, enterprise: true },
  { name: "Falcon (UAE) & Jais (Arabic)",  growth: false, core: false, pro: false, protection: false, enterprise: true },
];

// Media availability per pricing tier — uses Authority / Trade naming
const MEDIA_ROWS = [
  { metric: "Authority Press (Bloomberg, Reuters, Khaleej Times, Forbes, etc.)",
    growth: "—", core: "—",       pro: "Limited",  protection: "Full access", enterprise: "Full + premium editorial" },
  { metric: "Trade & Regional Press",
    growth: "—", core: "Listed",  pro: "Full access", protection: "Full access", enterprise: "Full access" },
  { metric: "Press releases distributed",
    growth: "—", core: "Quarterly", pro: "Monthly", protection: "Monthly",      enterprise: "Weekly" },
  { metric: "Featured editorial (long-form, branded)",
    growth: "—", core: "—",       pro: "Quarterly", protection: "Quarterly",   enterprise: "Monthly" },
  { metric: "“As Seen On” trust badge",
    growth: "—", core: "✓",       pro: "✓",        protection: "✓",            enterprise: "✓" },
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
      className="bg-white pt-6 lg:pt-8 pb-14 lg:pb-20 border-t border-[#f0f0f0]"
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
          can&rsquo;t build trust without the right outlets. We pair them as
          one program. Core gets an entry-level placement quarterly, Pro
          steps up to monthly distribution, and Protection+ and Enterprise
          add Authority Press and premium editorial.
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
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Core</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center bg-[#FF461E]/[0.04]">Pro</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {AI_PLATFORMS.map((p) => (
                  <tr key={p.name} className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[14px] py-3 pr-4 leading-[1.5]">{p.name}</td>
                    <td className="py-3 px-3 text-center"><Tick on={p.growth} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={p.core} /></td>
                    <td className="py-3 px-3 text-center bg-[#FF461E]/[0.03]"><Tick on={p.pro} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={p.protection} /></td>
                    <td className="py-3 px-3 text-center"><Tick on={p.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Media coverage — Authority Press / Trade Press */}
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
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Core</th>
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
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.core}</td>
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

          <Accordion title="Authority Press" count={AUTHORITY_PRESS.length}>
            <p className="text-[#555] text-[13px] leading-[1.65] mb-5">
              Premium global, UAE flagship and MENA-leading press. Pro tier
              receives selected placements from this list; Protection+ gets
              full access; Enterprise gets full access plus premium editorial
              placements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {AUTHORITY_PRESS.map((o) => (
                <div key={o.name} className="flex items-center justify-between gap-3 py-1">
                  <span className={`text-[#1a1a1a] text-[15px] ${o.style}`}>{o.name}</span>
                  {regionPill(o.region)}
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Trade & Regional Press" count={TRADE_PRESS.length + 360}>
            <p className="text-[#555] text-[13px] leading-[1.65] mb-5">
              Regional, niche and trade press across global, MENA and UAE
              networks. Core tier is listed on entry placements; Pro and above
              get full access.
            </p>
            <div className="text-[#1a1a1a] text-[14px] leading-[2]">
              {TRADE_PRESS.join(" · ")} ·{" "}
              <span className="text-[#888]">and 360+ additional regional and niche outlets.</span>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
