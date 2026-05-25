import React from "react";

// Stylized outlet card with BrandPush-style typography per outlet name.
// Logo PNGs can be dropped into /public/images/outlets/ later — for now we
// use distinctive typography for each outlet as a credible placeholder.

type OutletRow = {
  name: string;
  // included on which tiers
  pro: boolean;
  protection: boolean;
  enterprise: boolean;
  region: "Global" | "MENA" | "UAE";
  // optional inline style override to give visual variation per outlet
  style?: React.CSSProperties;
  className?: string;
};

const OUTLETS: OutletRow[] = [
  // Pro tier entry-level — global financial / press wires
  { name: "Yahoo Finance",      pro: true,  protection: true,  enterprise: true,  region: "Global", className: "italic" },
  { name: "Business Insider",   pro: true,  protection: true,  enterprise: true,  region: "Global", className: "uppercase tracking-[0.18em]" },
  { name: "Associated Press",   pro: true,  protection: true,  enterprise: true,  region: "Global", className: "font-semibold" },
  { name: "MarketWatch",        pro: true,  protection: true,  enterprise: true,  region: "Global" },
  { name: "Digital Journal",    pro: true,  protection: true,  enterprise: true,  region: "Global", className: "tracking-[-0.02em]" },
  { name: "Street Insider",     pro: true,  protection: true,  enterprise: true,  region: "Global" },
  { name: "NewsBreak",          pro: true,  protection: true,  enterprise: true,  region: "Global", className: "font-semibold" },

  // Protection+ tier — MENA / UAE flagship
  { name: "Bloomberg",          pro: false, protection: true,  enterprise: true,  region: "Global", className: "italic font-semibold" },
  { name: "Reuters",            pro: false, protection: true,  enterprise: true,  region: "Global", className: "uppercase tracking-[0.18em] font-semibold" },
  { name: "Khaleej Times",      pro: false, protection: true,  enterprise: true,  region: "UAE",    className: "font-semibold tracking-[-0.01em]" },
  { name: "Gulf News",          pro: false, protection: true,  enterprise: true,  region: "UAE",    className: "font-semibold italic" },
  { name: "The National",       pro: false, protection: true,  enterprise: true,  region: "UAE",    className: "uppercase tracking-[0.22em] font-semibold" },
  { name: "Arabian Business",   pro: false, protection: true,  enterprise: true,  region: "MENA",   className: "font-semibold" },
  { name: "Zawya",              pro: false, protection: true,  enterprise: true,  region: "MENA",   className: "font-semibold tracking-[-0.01em]" },

  // Enterprise tier — premium tier-1 only
  { name: "Forbes Middle East", pro: false, protection: false, enterprise: true,  region: "MENA",   className: "font-semibold italic tracking-[-0.02em]" },
  { name: "Financial Times",    pro: false, protection: false, enterprise: true,  region: "Global", className: "font-semibold tracking-[-0.01em]", style: { fontFamily: "Georgia, serif" } },
  { name: "MSN",                pro: false, protection: false, enterprise: true,  region: "Global", className: "font-semibold tracking-[0.04em]" },
  { name: "WAM (Emirates News Agency)", pro: false, protection: false, enterprise: true, region: "UAE", className: "uppercase tracking-[0.16em] font-semibold" },
  { name: "Hotelier Middle East", pro: false, protection: false, enterprise: true, region: "MENA",  className: "italic" },
];

const AI_PLATFORMS: { name: string; protection: boolean; enterprise: boolean }[] = [
  { name: "ChatGPT",                       protection: true, enterprise: true },
  { name: "Google AI Overview",            protection: true, enterprise: true },
  { name: "Perplexity",                    protection: true, enterprise: true },
  { name: "Microsoft Copilot",             protection: true, enterprise: true },
  { name: "Claude",                        protection: true, enterprise: true },
  { name: "Gemini",                        protection: true, enterprise: true },
  { name: "Grok",                          protection: false, enterprise: true },
  { name: "Meta AI",                       protection: false, enterprise: true },
  { name: "Falcon (UAE) & Jais (Arabic)",  protection: false, enterprise: true },
];

function Tick({ on }: { on: boolean }) {
  if (on) return <span className="text-[#FF461E] text-[18px] leading-none">✓</span>;
  return <span className="text-[#d4d4d4] text-[16px] leading-none">—</span>;
}

function regionPill(region: OutletRow["region"]) {
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
          can&rsquo;t build trust without the right outlets. That&rsquo;s why
          we run them as one program from Pro upward. Growth and Core focus on
          review growth only.
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

        {/* Media outlets — BrandPush style */}
        <div>
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Media outlets we place you on
          </p>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[860px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Outlet</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3"></th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Growth</th>
                  <th className="text-[#888] text-[12px] py-3 px-3 text-center">Core</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center bg-[#FF461E]/[0.04]">Pro</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {OUTLETS.map((o) => (
                  <tr key={o.name} className="border-b border-[#f0f0f0]">
                    <td className="py-4 pr-4">
                      <span
                        className={`text-[#1a1a1a] text-[16px] leading-tight ${o.className || ""}`}
                        style={o.style}
                      >
                        {o.name}
                      </span>
                    </td>
                    <td className="py-4 px-3">{regionPill(o.region)}</td>
                    <td className="py-4 px-3 text-center"><Tick on={false} /></td>
                    <td className="py-4 px-3 text-center"><Tick on={false} /></td>
                    <td className="py-4 px-3 text-center bg-[#FF461E]/[0.03]"><Tick on={o.pro} /></td>
                    <td className="py-4 px-3 text-center"><Tick on={o.protection} /></td>
                    <td className="py-4 px-3 text-center"><Tick on={o.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#888] text-[12.5px] leading-[1.7] mt-6 max-w-[820px]">
            Plus 380+ additional regional, niche, and trade outlets across
            Pro, Protection+ and Enterprise. Sample reports available on
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
