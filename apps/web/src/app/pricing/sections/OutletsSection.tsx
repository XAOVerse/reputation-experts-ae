"use client";

import React, { useState } from "react";

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

export function OutletsSection() {
  return (
    <section
      className="bg-white pt-2 pb-10 lg:pb-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Outlet lists"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
          See the actual outlets
        </p>

        <Accordion title="Authority Press" count={AUTHORITY_PRESS.length}>
          <p className="text-[#555] text-[13px] leading-[1.65] mb-5">
            Premium global, UAE flagship and MENA-leading press. Pro tier
            receives selected placements; Protection+ gets full access;
            Enterprise gets full access plus premium editorial placements.
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
            networks. Core tier gets entry placements; Pro and above receive
            full access.
          </p>
          <div className="text-[#1a1a1a] text-[14px] leading-[2]">
            {TRADE_PRESS.join(" · ")} ·{" "}
            <span className="text-[#888]">and 360+ additional regional and niche outlets.</span>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
