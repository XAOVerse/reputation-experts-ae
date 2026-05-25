import React from "react";

type Outlet = {
  name: string;
  reach: string;
  da: number;
  region: "Global" | "MENA" | "UAE";
};

const TIER1: Outlet[] = [
  { name: "MSN", reach: "689.1m", da: 95, region: "Global" },
  { name: "Yahoo Finance", reach: "240.8m", da: 93, region: "Global" },
  { name: "Associated Press", reach: "156.0m", da: 94, region: "Global" },
  { name: "Business Insider", reach: "89.0m", da: 92, region: "Global" },
  { name: "Bloomberg Middle East", reach: "45.0m", da: 92, region: "MENA" },
  { name: "Reuters Middle East", reach: "38.0m", da: 94, region: "MENA" },
  { name: "Forbes Middle East", reach: "12.0m", da: 88, region: "MENA" },
  { name: "Gulf News", reach: "11.0m", da: 84, region: "UAE" },
  { name: "Khaleej Times", reach: "8.5m", da: 82, region: "UAE" },
  { name: "The National", reach: "6.2m", da: 78, region: "UAE" },
  { name: "Zawya", reach: "5.5m", da: 76, region: "MENA" },
  { name: "Arabian Business", reach: "4.8m", da: 72, region: "MENA" },
  { name: "WAM (Emirates News Agency)", reach: "3.2m", da: 74, region: "UAE" },
  { name: "Trade Arabia", reach: "2.1m", da: 68, region: "MENA" },
];

const TIER2 = [
  "Time Out Dubai",
  "Lovin Dubai",
  "What's On Dubai",
  "Esquire Middle East",
  "Harper's Bazaar Arabia",
  "Vogue Arabia",
  "GQ Middle East",
  "Hotelier Middle East",
  "Caterer Middle East",
  "Construction Week ME",
  "MarketWatch",
  "Digital Journal",
  "Inter Press Service",
  "Street Insider",
  "NewsBreak",
  "The Chronicle Journal",
  "Minyanville",
  "BarChart",
];

type Row = {
  metric: string;
  growth: string;
  core: string;
  pro: string;
  protection: string;
  enterprise: string;
};

const TABLE: Row[] = [
  { metric: "Press releases distributed / month", growth: "—", core: "—", pro: "1", protection: "1", enterprise: "4 (weekly)" },
  { metric: "News outlets per release", growth: "—", core: "—", pro: "200", protection: "300", enterprise: "400+" },
  { metric: "Quarterly premium placements", growth: "—", core: "—", pro: "—", protection: "1", enterprise: "3" },
  { metric: "Monthly reach (estimated readers)", growth: "—", core: "—", pro: "30m", protection: "50m", enterprise: "215m+" },
  { metric: "Max Domain Authority of outlets", growth: "—", core: "—", pro: "81", protection: "94", enterprise: "94" },
  { metric: "Publication SLA", growth: "—", core: "—", pro: "7 days", protection: "5 days", enterprise: "5 days" },
  { metric: "“As Seen On” trust badge", growth: "—", core: "—", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Featured editorial (long-form, branded)", growth: "—", core: "—", pro: "—", protection: "1 / quarter", enterprise: "1 / month" },
  { metric: "Influencer collaborations", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "Monthly" },
  { metric: "AI mention potential from coverage", growth: "—", core: "—", pro: "Standard", protection: "High", enterprise: "Maximized" },
];

function regionPill(region: Outlet["region"]) {
  const color =
    region === "UAE"
      ? "bg-[#FF461E]/10 text-[#FF461E]"
      : region === "MENA"
      ? "bg-[#e8503a]/10 text-[#e8503a]"
      : "bg-[#1a1a1a]/10 text-[#1a1a1a]";
  return (
    <span className={`inline-block ${color} text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full px-2 py-0.5`}>
      {region}
    </span>
  );
}

export function MediaCoverageSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Media coverage and press distribution"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Media Coverage & Press Distribution
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          Be on the front page of trust.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-[820px]">
          One bad Google review hurts. One mention in Khaleej Times, Forbes
          Middle East, or Yahoo Finance buries it. We publish your story across
          regional and global news outlets every month, built into your
          subscription. Every coverage cycle compounds your trust, search
          authority, and the chance an AI model cites you when prospects ask.
        </p>

        {/* Tier-1 outlets logo strip with stats */}
        <div className="border-t border-[#e5e5e5] pt-6 mb-12">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Tier-1 outlets (Protection+ and Enterprise)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {TIER1.map((o) => (
              <div key={o.name} className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-[#1a1a1a] text-[15px] font-medium leading-[1.3]">
                    {o.name}
                  </p>
                  <p className="text-[#555] text-[12.5px] mt-0.5">
                    {o.reach} monthly readers &middot; DA {o.da}
                  </p>
                </div>
                <div className="pt-1">{regionPill(o.region)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier-2 outlets */}
        <div className="border-t border-[#e5e5e5] pt-6 mb-12">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-4">
            Tier-2 outlets (Pro and above)
          </p>
          <p className="text-[#555] text-[14px] leading-[1.7]">
            {TIER2.join(" · ")} &middot; <span className="text-[#1a1a1a] font-medium">and 380+ more across global, MENA and UAE press networks.</span>
          </p>
        </div>

        {/* Per-tier media coverage table */}
        <div className="border-t border-[#e5e5e5] pt-6">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Coverage by tier
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[760px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">
                    Metric
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Growth</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Core</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Pro</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((r, i) => (
                  <tr key={i} className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[13.5px] py-3 pr-4 leading-[1.5]">
                      {r.metric}
                    </td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.growth}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.core}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.pro}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.protection}</td>
                    <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
