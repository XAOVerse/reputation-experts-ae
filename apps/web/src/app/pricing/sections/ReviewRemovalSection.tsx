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

// Promotional rate card. Prices reduced from previous list rates.
// Enterprise = Unlimited (no PAYG calculation needed).
const ROWS: Row[] = [
  { type: "Image review (any age)",  payg: "AED 995",   growth: "AED 695",   core: "AED 595",   pro: "AED 495",   protection: "AED 395",   enterprise: "Unlimited" },
  { type: "Recent text (under 4 weeks)", payg: "AED 1,295", growth: "AED 995",   core: "AED 895",   pro: "AED 695",   protection: "AED 595",   enterprise: "Unlimited" },
  { type: "Older text (over 4 weeks)",   payg: "AED 1,695", growth: "AED 1,295", core: "AED 1,095", pro: "AED 995",   protection: "AED 795",   enterprise: "Unlimited" },
];

const SUMMARY = [
  { tier: "Growth",       free: "0 free", discount: "20% off Pay-as-you-go" },
  { tier: "Core",         free: "1 free / month", discount: "30% off Pay-as-you-go" },
  { tier: "Pro",          free: "3 free / month", discount: "40% off Pay-as-you-go" },
  { tier: "Protection+",  free: "10 free / month", discount: "50% off Pay-as-you-go" },
  { tier: "Enterprise",   free: "Unlimited", discount: "Included in subscription" },
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
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-5 max-w-[820px]">
          You pay only for successful removals &mdash; a 100% guarantee. You pay
          upfront, and we then have 30 days to remove the review. If we don&rsquo;t
          remove it, you don&rsquo;t pay: we issue a full refund. Each subscription
          tier also includes free removals every month, plus a stacked discount
          on Pay-as-you-go removals beyond the included quota.
        </p>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-[820px]">
          Because you pay by card, you&rsquo;re fully protected &mdash; that
          guarantee is in writing.
        </p>

        {/* Per-tier summary strip */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4 mb-10 lg:mb-12">
          {SUMMARY.map((s) => (
            <div key={s.tier} className="border-t border-[#e5e5e5] pt-4">
              <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-2">
                {s.tier}
              </p>
              <p className="text-[#1a1a1a] text-[14px] font-medium leading-[1.4] mb-1">
                {s.free}
              </p>
              <p className="text-[#555] text-[12.5px] leading-[1.5]">
                {s.discount}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed price grid */}
        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="min-w-[860px] w-full text-left">
            <thead>
              <tr className="border-b border-[#e5e5e5]">
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 pr-4">Review type</th>
                <th className="text-[#1a1a1a] text-[12.5px] font-semibold py-3 px-3 text-center">Pay as you go</th>
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
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">30-day guarantee</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              You pay upfront and we have 30 calendar days to remove a
              confirmed-eligible review. If we don&rsquo;t remove it, you get a
              full refund.
            </p>
          </div>
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">No-win, no-fee</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              You only pay for removals that succeed. If a review does not come
              down within 30 days, you owe nothing &mdash; we refund it in full.
            </p>
          </div>
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">Ethical only</p>
            <p className="text-[#555] text-[14.5px] leading-[1.7]">
              We dispute reviews that violate platform policy under UAE law
              and Google&rsquo;s own guidelines. We do not buy reviews, fake
              reviews, or coerce reviewers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
