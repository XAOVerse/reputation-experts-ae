import React from "react";

const AI_PLATFORMS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "Google AI Overview",
  "Microsoft Copilot",
  "Grok",
  "You.com",
  "Meta AI",
  "Falcon (UAE)",
  "Jais (Arabic LLM)",
];

type Row = {
  feature: string;
  growth: boolean | string;
  core: boolean | string;
  pro: boolean | string;
  protection: boolean | string;
  enterprise: boolean | string;
};

const ROWS: Row[] = [
  { feature: "Google Knowledge Graph optimisation", growth: true, core: true, pro: true, protection: true, enterprise: true },
  { feature: "Schema markup deployment", growth: true, core: true, pro: true, protection: true, enterprise: true },
  { feature: "Bing & Yandex entity signals", growth: false, core: true, pro: true, protection: true, enterprise: true },
  { feature: "ChatGPT citation engineering", growth: false, core: false, pro: true, protection: true, enterprise: true },
  { feature: "Perplexity source-list inclusion", growth: false, core: false, pro: true, protection: true, enterprise: true },
  { feature: "Google AI Overview targeting", growth: false, core: false, pro: true, protection: true, enterprise: true },
  { feature: "Gemini & Claude entity training", growth: false, core: false, pro: false, protection: true, enterprise: true },
  { feature: "Wikipedia / Wikidata entry setup", growth: false, core: false, pro: false, protection: true, enterprise: true },
  { feature: "Falcon & Jais (UAE / Arabic AI) optimisation", growth: false, core: false, pro: false, protection: true, enterprise: true },
  { feature: "Monthly AI citation network expansion", growth: false, core: false, pro: false, protection: true, enterprise: true },
  { feature: "AI sentiment tracking dashboard", growth: false, core: false, pro: false, protection: false, enterprise: true },
  { feature: "Quarterly answer-share report (you vs competitors)", growth: false, core: false, pro: false, protection: false, enterprise: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-[#FF461E] text-[16px]">✓</span>;
  if (value === false) return <span className="text-[#cccccc] text-[16px]">—</span>;
  return <span className="text-[#1a1a1a] text-[12.5px]">{value}</span>;
}

export function AISearchVisibilitySection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI search visibility"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          AI Search Visibility
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          Be the answer when your customers ask AI.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-[820px]">
          When a prospect asks ChatGPT, Perplexity, Google AI Overview, or
          Gemini for the &ldquo;best [your business] in Dubai&rdquo;, your brand
          needs to be the one mentioned. We engineer the citation network,
          entity signals, and authority placements that AI models pull from,
          including the Arabic-first models that matter in the Gulf.
        </p>

        {/* Platform logo strip */}
        <div className="border-t border-[#e5e5e5] pt-6 mb-10">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-4">
            AI platforms we optimise for
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {AI_PLATFORMS.map((p) => (
              <span
                key={p}
                className="text-[#1a1a1a] text-[14.5px] font-medium"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Per-tier capability grid */}
        <div className="border-t border-[#e5e5e5] pt-6">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            What&rsquo;s included by tier
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[760px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">
                    Capability
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">
                    Growth
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">
                    Core
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">
                    Pro
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">
                    Protection+
                  </th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i} className="border-b border-[#f0f0f0]">
                    <td className="text-[#1a1a1a] text-[13.5px] py-3 pr-4 leading-[1.5]">
                      {r.feature}
                    </td>
                    <td className="py-3 px-3 text-center"><Cell value={r.growth} /></td>
                    <td className="py-3 px-3 text-center"><Cell value={r.core} /></td>
                    <td className="py-3 px-3 text-center"><Cell value={r.pro} /></td>
                    <td className="py-3 px-3 text-center"><Cell value={r.protection} /></td>
                    <td className="py-3 px-3 text-center"><Cell value={r.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-[#555] text-[14.5px] leading-[1.7] mt-8 max-w-[760px] italic">
          Last year, ChatGPT mentioned a Dubai business by name an estimated 47
          million times. We engineer who gets mentioned, and on which queries.
        </p>
      </div>
    </section>
  );
}
