import React from "react";
import Image from "next/image";

export function ReviewsHeroSection() {
  return (
    <section
      className="bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-7 sm:pt-10 lg:pt-11 pb-6 lg:pb-10">
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          Grow the good. Remove the bad.
        </p>
        <h1
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.625rem)" }}
        >
          Grow the reviews that win customers. Remove the ones that cost you
          them.
        </h1>
        <p className="text-[#555] text-[15px] leading-[1.65] mb-8 max-w-[860px]">
          Two products, two guarantees, one team. Our review-growth work lifts
          your score across nearly 200 platforms on a written 90-day guarantee
          &mdash; miss the target and we keep working free until we hit it. Our
          review-removal work is no-win, no-fee: no removal, no payment. And we
          optimise every listing that search engines and AI engines actually
          read, so the reputation you earn is the one people see.
        </p>
        <div className="flex flex-wrap gap-3 mb-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#FF461E] text-white px-5 py-2.5 text-[14px] font-medium hover:bg-[#e63b15] transition-colors"
          >
            Get a free reputation assessment
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] text-[#1a1a1a] px-5 py-2.5 text-[14px] font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            See pricing
          </a>
        </div>

        {/* Panoramic dashboard image — raw per Figma, no card wrapping */}
        <Image
          src="/images/reviews/birdeye-panoramic.png"
          alt="Reputation Experts dashboard showing review monitoring, location-level scores, and AI-powered review request campaigns across major platforms."
          width={2950}
          height={1185}
          priority
          className="w-full h-auto rounded-3xl mt-8"
        />
      </div>
    </section>
  );
}
