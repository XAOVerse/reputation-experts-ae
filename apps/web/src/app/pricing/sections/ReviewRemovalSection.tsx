import React from "react";

type Row = {
  type: string;
  payg: string;
  growth: string;
  core: string;
  pro: string;
  protection: string;
  enterprise: string;
};

const ROWS: Row[] = [
  { type: "Image review (any age)", payg: "AED 1,500", growth: "AED 1,500", core: "AED 1,275", pro: "AED 975", protection: "AED 750", enterprise: "Included" },
  { type: "Recent text (under 4 weeks)", payg: "AED 2,000", growth: "AED 2,000", core: "AED 1,700", pro: "AED 1,300", protection: "AED 1,000", enterprise: "Included" },
  { type: "Older text (over 4 weeks)", payg: "AED 2,500", growth: "AED 2,500", core: "AED 2,125", pro: "AED 1,625", protection: "AED 1,250", enterprise: "Included" },
];

export function ReviewRemovalSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20 border-t border-[#f0f0f0]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Review removal pricing"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Review Removal Pricing
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          No-win, no-fee. Pay only when a review is removed.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-[820px]">
          Every removal attempt runs against a 14-day service-level agreement.
          If we cannot remove the review within that window, you owe nothing.
          Subscription tiers include monthly removals and discounted rates on
          everything above the included quota.
        </p>

        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="min-w-[860px] w-full text-left">
            <thead>
              <tr className="border-b border-[#e5e5e5]">
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Review type</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">PAYG</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Growth</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Core</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Pro</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Protection+</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} className="border-b border-[#f0f0f0]">
                  <td className="text-[#1a1a1a] text-[13.5px] py-3 pr-4 leading-[1.5]">{r.type}</td>
                  <td className="text-[#1a1a1a] text-[13px] py-3 px-3 text-center">{r.payg}</td>
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">14-day SLA</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              We aim to remove every confirmed-eligible review within 14
              calendar days. If we miss the window, the attempt fee is waived.
            </p>
          </div>
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">No-win, no-fee</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              Standalone removals are billed on confirmed removal only. If the
              review does not come down, you owe nothing for the attempt.
            </p>
          </div>
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">Ethical only</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              We dispute reviews that violate platform policy under UAE law and
              Google&rsquo;s own guidelines. We do not buy reviews, fake
              reviews, or coerce reviewers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
