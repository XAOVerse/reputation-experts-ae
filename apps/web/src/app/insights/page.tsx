import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "./data";

export const metadata: Metadata = {
  title: "Insights | Reputation Experts",
  description:
    "Consumer studies, industry research, and expert analysis on online reviews, search visibility, and digital reputation.",
};

const CATEGORIES = Array.from(
  new Set(ARTICLES.map((a) => a.category))
);

export default function InsightsPage() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured?.slug);

  return (
    <main className="pt-[64px] bg-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Hero / page intro */}
      <section className="bg-white pt-14 lg:pt-20 pb-10 lg:pb-14">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <p className="text-[#FF461E] text-[12px] font-semibold tracking-[0.12em] uppercase mb-4">
            Insights
          </p>
          <h1
            className="text-[#1a1a1a] font-semibold leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Consumer studies, industry research, and reputation analysis.
          </h1>
          <p className="text-[#555] text-[16px] lg:text-[17px] leading-[1.7] max-w-[680px]">
            Practical, evidence-led pieces on how online reviews, search visibility, and digital
            reputation shape buying decisions — and what to do about it.
          </p>

          {/* Category chips */}
          {CATEGORIES.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white text-[12px] font-medium">
                All
              </span>
              {CATEGORIES.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#e0e0e0] text-[#444] text-[12px] font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-white pb-14 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-[#f4f4f4] order-1">
                <Image
                  src={featured.heroImage}
                  alt={featured.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <p className="text-[#FF461E] text-[12px] font-semibold tracking-[0.1em] uppercase mb-4">
                  {featured.categoryEyebrow}
                </p>
                <h2
                  className="text-[#1a1a1a] font-semibold leading-[1.15] tracking-[-0.02em] mb-5 group-hover:text-[#FF461E] transition-colors"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#555] text-[15.5px] lg:text-[16px] leading-[1.7] mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#888] text-[13px] mb-7">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-[#1a1a1a] text-[13px] font-semibold tracking-[0.06em] uppercase">
                  Read the full study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest grid */}
      {rest.length > 0 && (
        <section className="bg-[#fafafa] py-14 lg:py-20 border-t border-[#eee]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
            <h2 className="text-[#1a1a1a] font-semibold text-[22px] lg:text-[28px] tracking-[-0.02em] mb-8">
              All Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {rest.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden rounded-xl aspect-[3/2] bg-[#f4f4f4]">
                    <Image
                      src={a.heroImage}
                      alt={a.heroImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[#1a1a1a] text-[11px] font-semibold tracking-[0.08em] uppercase leading-none">
                    {a.categoryEyebrow}
                  </p>
                  <h3 className="text-[#1a1a1a] text-[17px] font-normal leading-[1.4] tracking-[-0.01em] group-hover:text-[#FF461E] transition-colors duration-200">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#1a1a1a] text-[12px] font-semibold tracking-[0.06em] uppercase mt-auto">
                    <span>READ MORE</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8l4 4-4 4M8 12h8" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-[#1a1a1a] font-semibold text-[24px] lg:text-[34px] leading-tight tracking-[-0.02em] mb-4">
            Want a confidential review of your online reputation?
          </h2>
          <p className="text-[#555] text-[15px] lg:text-[16px] leading-[1.7] max-w-[620px] mx-auto mb-7">
            Our analysts will audit what shows up when your customers search for you — and tell you,
            in plain language, what's working and what isn't.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF461E] text-white text-[14px] font-medium px-7 py-3 hover:bg-[#e63b15] transition-colors"
          >
            Talk to an expert
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
