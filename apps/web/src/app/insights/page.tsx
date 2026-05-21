import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "./data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Consumer studies, industry research, and expert analysis on online reviews, search visibility, and digital reputation.",
};

export default function InsightsPage() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured?.slug);

  return (
    <main className="pt-[64px] bg-white">
      {/* Page intro */}
      <section className="bg-white pt-14 lg:pt-20 pb-10 lg:pb-14">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <p className="text-[#FF461E] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">
            Insights
          </p>
          <h1
            className="text-[#1a1a1a] font-semibold leading-[1.05] tracking-[-0.025em] mb-6 max-w-[900px]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Consumer studies, industry research, and reputation analysis.
          </h1>
          <p className="text-[#1a1a1a] text-[17px] lg:text-[19px] leading-[1.55] max-w-[720px]">
            Practical, evidence-led pieces on how online reviews, search visibility, and digital
            reputation shape buying decisions — and what to do about it.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-white pb-14 lg:pb-24">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={featured.heroImage}
                  alt={featured.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <p className="text-[#FF461E] text-[12px] font-semibold tracking-[0.1em] uppercase mb-5">
                  {featured.categoryEyebrow}
                </p>
                <h2
                  className="text-[#1a1a1a] font-semibold leading-[1.1] tracking-[-0.02em] mb-6 group-hover:text-[#FF461E] transition-colors"
                  style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#1a1a1a] text-[17px] leading-[1.65] mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#888] text-[13px] mb-8">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-[#1a1a1a] text-[13px] font-semibold tracking-[0.06em] uppercase underline underline-offset-[5px] decoration-1 group-hover:text-[#FF461E] group-hover:decoration-[#FF461E] transition-colors">
                  Read the full study
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest grid */}
      {rest.length > 0 && (
        <section className="bg-white pb-14 lg:pb-24 border-t border-[#eee] pt-14 lg:pt-20">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <h2 className="text-[#1a1a1a] font-semibold text-[28px] lg:text-[36px] tracking-[-0.02em] mb-10">
              All Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <h3 className="text-[#1a1a1a] text-[18px] font-normal leading-[1.4] tracking-[-0.01em] group-hover:text-[#FF461E] transition-colors duration-200">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#1a1a1a] text-[12px] font-semibold tracking-[0.06em] uppercase mt-auto">
                    <span>Read more</span>
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

      {/* Full-width orange CTA banner */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="bg-[#FF461E] rounded-2xl px-8 lg:px-16 py-14 lg:py-20">
            <h2
              className="text-white font-semibold leading-[1.05] tracking-[-0.02em] mb-10 max-w-[800px]"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}
            >
              Ready to take control of your online reputation?
            </h2>
            <Link
              href="/contact"
              className="inline-block text-white text-[17px] font-medium underline underline-offset-[6px] decoration-1 hover:decoration-2 transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
