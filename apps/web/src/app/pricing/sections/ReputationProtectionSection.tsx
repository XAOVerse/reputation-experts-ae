import React from "react";

type Row = {
  metric: string;
  growth: string;
  core: string;
  pro: string;
  protection: string;
  enterprise: string;
};

const TABLE: Row[] = [
  { metric: "Review request capacity / month", growth: "500", core: "1,500", pro: "5,000", protection: "20,000", enterprise: "Unlimited" },
  { metric: "Send channels (WhatsApp, SMS, email)", growth: "All 3", core: "All 3", pro: "All 3", protection: "All 3", enterprise: "All 3" },
  { metric: "Platforms monitored", growth: "Google", core: "+ Facebook", pro: "+ TripAdvisor, Booking, Trustpilot", protection: "+ Yelp, Foursquare, Zomato, Talabat", enterprise: "All 50+" },
  { metric: "Negative-review intercept (1-star → private DM)", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Owner-style human responses (no AI templates)", growth: "EN", core: "EN + AR", pro: "5 languages", protection: "8 languages", enterprise: "12 languages" },
  { metric: "Response SLA", growth: "24 hr", core: "12 hr", pro: "6 hr", protection: "2 hr, 24/7", enterprise: "1 hr, 24/7" },
  { metric: "Directory listings managed", growth: "10", core: "25", pro: "50", protection: "200", enterprise: "400+" },
  { metric: "Multi-location tracking", growth: "1 location", core: "1", pro: "3", protection: "10", enterprise: "Unlimited" },
  { metric: "Voice-of-customer feedback collection", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Reputation recovery campaigns", growth: "—", core: "—", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Review widget for your website", growth: "—", core: "✓", pro: "✓", protection: "✓", enterprise: "✓" },
  { metric: "Facebook / Instagram negative-post takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Fake-website / impostor-page takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "Copyrighted content takedown", growth: "—", core: "—", pro: "—", protection: "✓", enterprise: "✓" },
  { metric: "UAE defamation legal escalation", growth: "—", core: "—", pro: "—", protection: "1 / quarter", enterprise: "Unlimited" },
  { metric: "Crisis response", growth: "—", core: "Email playbook", pro: "Phone playbook", protection: "24/7 hotline", enterprise: "24/7 war-room" },
  { metric: "Reputation insurance coverage", growth: "—", core: "—", pro: "—", protection: "—", enterprise: "AED 250k / incident" },
  { metric: "Dedicated account team", growth: "Shared", core: "Shared", pro: "Named manager", protection: "Senior director", enterprise: "3-person team" },
];

export function ReputationProtectionSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reputation protection and review management"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Reputation Protection & Review Management
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          The full reputation engine. Built and run by people, not bots.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-[820px]">
          Every response on your behalf is written by a human, in your voice,
          in your customer&rsquo;s language. We do not use AI to reply to
          reviews. We use AI to make sure the right things get found, and people
          to make sure the right things get said.
        </p>

        <div className="border-t border-[#e5e5e5] pt-6">
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Full capability matrix
          </p>
          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="min-w-[860px] w-full text-left">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Capability</th>
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
                    <td className="text-[#1a1a1a] text-[13.5px] py-3 pr-4 leading-[1.5]">{r.metric}</td>
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
