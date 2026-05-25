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
  // Plan
  { group: "Plan", metric: "Monthly price", growth: "AED 1,995", core: "AED 2,995", pro: "AED 3,995", protection: "AED 5,995", enterprise: "AED 9,995" },
  { metric: "Free review removals / month", growth: "0", core: "1", pro: "3", protection: "10", enterprise: "Unlimited" },
  { metric: "Discount on additional removals", growth: "—", core: "20%", pro: "35%", protection: "50%", enterprise: "Included" },
  { metric: "90-day score guarantee", growth: "✓", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Setup fee", growth: "None", core: "None", pro: "None", protection: "None", enterprise: "None" },

  // Reviews & responses
  { group: "Reviews & responses", metric: "Request channels", growth: "Email", core: "Email + SMS", pro: "Email + SMS + WhatsApp", protection: "Email + SMS + WhatsApp", enterprise: "Email + SMS + WhatsApp" },
  { metric: "Platforms monitored", growth: "Google", core: "+ Facebook", pro: "+ TripAdvisor, Booking, Trustpilot", protection: "+ Yelp, Foursquare, Zomato, Talabat", enterprise: "All 50+" },
  { metric: "Response languages", growth: "English", core: "English + Arabic", pro: "5 languages", protection: "8 languages", enterprise: "12 languages" },
  { metric: "Response SLA", growth: "24 hr", core: "12 hr", pro: "6 hr", protection: "2 hr, 24/7", enterprise: "1 hr, 24/7" },
  { metric: "Negative-review intercept funnel", growth: "—", core: "2–3 / mo", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Review widget for your website", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },

  // Protection
  { group: "Protection & defence", metric: "Negative content takedowns (FB, IG, fake pages, copyright)", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "UAE defamation legal escalation", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "Unlimited, partner on retainer" },
  { metric: "Crisis response", growth: "—", core: "—", pro: "We manage the case", protection: "We manage the case", enterprise: "We manage the case" },
  { metric: "Reputation insurance", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "Up to AED 250k / incident" },

  // Team & reporting
  { group: "Team & reporting", metric: "Account team", growth: "Shared", core: "Shared", pro: "Named manager", protection: "Dedicated manager", enterprise: "Account manager + 3-person team" },
  { metric: "Reporting", growth: "Monthly", core: "Bi-weekly", pro: "Weekly", protection: "Weekly + monthly executive review", enterprise: "Weekly + monthly executive review" },
];

export function WhatsIncludedSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
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
