import React from "react";

type Row = {
  group?: string;
  metric: string;
  growth: string;
  core: string;
  pro: string;
  protection: string;
  enterprise: string;
};

const ROWS: Row[] = [
  // Pricing summary
  { group: "Plan summary", metric: "Monthly price", growth: "AED 1,995", core: "AED 2,995", pro: "AED 3,995", protection: "AED 5,995", enterprise: "AED 9,995" },
  { metric: "Review removals included / month", growth: "0", core: "1", pro: "3", protection: "10", enterprise: "Unlimited" },
  { metric: "Discount on additional PAYG removals", growth: "—", core: "15%", pro: "35%", protection: "50%", enterprise: "70%" },
  { metric: "90-day score guarantee", growth: "✓", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Setup fee", growth: "None", core: "None", pro: "None", protection: "None", enterprise: "None" },
  { metric: "Contract", growth: "Monthly", core: "Monthly", pro: "Monthly", protection: "Monthly", enterprise: "Monthly or annual" },

  // Reviews
  { group: "Reviews & responses", metric: "Review request capacity / month", growth: "500", core: "1,500", pro: "5,000", protection: "20,000", enterprise: "Unlimited" },
  { metric: "Platforms monitored", growth: "Google", core: "+ Facebook", pro: "+ TripAdvisor, Booking, Trustpilot", protection: "+ Yelp, Foursquare, Zomato, Talabat", enterprise: "All 50+" },
  { metric: "Response languages", growth: "EN", core: "EN + AR", pro: "5 languages", protection: "8 languages", enterprise: "12 languages" },
  { metric: "Response SLA", growth: "24 hr", core: "12 hr", pro: "6 hr", protection: "2 hr, 24/7", enterprise: "1 hr, 24/7" },
  { metric: "Negative-review intercept funnel", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Multi-location tracking", growth: "1", core: "1", pro: "3", protection: "10", enterprise: "Unlimited" },

  // Listings
  { group: "Listings & directories", metric: "Directory listings managed", growth: "10", core: "25", pro: "50", protection: "200", enterprise: "400+" },
  { metric: "Voice-of-customer feedback collection", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Review widget on your website", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },

  // AI search
  { group: "AI search visibility", metric: "Google Knowledge Graph + Schema", growth: "✓", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Bing & Yandex entity signals", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "ChatGPT, Perplexity, Google AI Overview", growth: "—", core: "—", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Gemini, Claude entity training", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Wikipedia / Wikidata entry", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Falcon (UAE) & Jais (Arabic) optimisation", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Quarterly AI answer-share report", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "✓" },

  // Media
  { group: "Media coverage", metric: "Press releases / month", growth: "—", core: "—", pro: "1", protection: "1", enterprise: "4" },
  { metric: "Outlets per release", growth: "—", core: "—", pro: "200", protection: "300", enterprise: "400+" },
  { metric: "Monthly reach", growth: "—", core: "—", pro: "30m", protection: "50m", enterprise: "215m+" },
  { metric: "Max Domain Authority of outlets", growth: "—", core: "—", pro: "81", protection: "94", enterprise: "94" },
  { metric: "Featured editorial", growth: "—", core: "—", pro: "—", protection: "1 / quarter", enterprise: "1 / month" },
  { metric: "“As Seen On” trust badge for your site", growth: "—", core: "—", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Influencer collaborations", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "Monthly" },

  // Protection
  { group: "Protection & defence", metric: "Facebook / Instagram negative-post takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Fake-website / impostor-page takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Copyrighted content takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "UAE defamation legal escalation", growth: "—", core: "—", pro: "—", protection: "1 / quarter", enterprise: "Unlimited" },
  { metric: "Crisis response", growth: "—", core: "Email playbook", pro: "Phone playbook", protection: "24/7 hotline", enterprise: "24/7 war-room" },
  { metric: "Reputation insurance", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "AED 250k / incident" },

  // Team
  { group: "Team & strategy", metric: "Dedicated account team", growth: "Shared", core: "Shared", pro: "Named manager", protection: "Senior director", enterprise: "3-person team" },
  { metric: "Strategy call cadence", growth: "Monthly report", core: "Bi-weekly", pro: "Weekly + 1 call / mo", protection: "Weekly + bi-weekly call", enterprise: "Weekly + monthly exec review" },
  { metric: "Quarterly competitive intelligence", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
];

export function FeatureGridSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Full feature comparison"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Compare all features
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-10 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          The full feature grid, side by side.
        </h2>

        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="min-w-[960px] w-full text-left">
            <thead className="sticky top-0">
              <tr className="border-b border-[#1a1a1a] bg-white">
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 pr-4"></th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center">
                  <div className="font-medium text-[14px]">Growth</div>
                  <div className="text-[12px] text-[#555] font-normal">AED 1,995</div>
                </th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center">
                  <div className="font-medium text-[14px]">Core</div>
                  <div className="text-[12px] text-[#555] font-normal">AED 2,995</div>
                </th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center bg-[#FF461E]/[0.04]">
                  <div className="font-medium text-[14px] text-[#FF461E]">Pro</div>
                  <div className="text-[12px] text-[#555] font-normal">AED 3,995</div>
                </th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center">
                  <div className="font-medium text-[14px]">Protection+</div>
                  <div className="text-[12px] text-[#555] font-normal">AED 5,995</div>
                </th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-4 px-3 text-center">
                  <div className="font-medium text-[14px]">Enterprise</div>
                  <div className="text-[12px] text-[#555] font-normal">AED 9,995</div>
                </th>
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
