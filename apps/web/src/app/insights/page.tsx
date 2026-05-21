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
  return (
    <main className="pt-[64px] bg-white">
      <section className="pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          {/* Page title */}
          <h1
            className="text-[#1a1a1a] font-semibold tracking-[-0.02em] mb-10 lg:mb-12"
            style={{ fontSize: "clamp(2rem, 3.6vw, 2.75rem)" }}
          >
            All Insights
          </h1>

          {/* Card grid — 1/2/3 cols responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-12 lg:gap-y-14">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="relative w-full overflow-hidden rounded-lg aspect-[16/10] bg-[#d2d2d5]">
                  <Image
                    src={a.heroImage}
                    alt={a.heroImageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <p
                  className="text-[#1a1a1a]"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    lineHeight: "16px",
                  }}
                >
                  {a.categoryEyebrow}
                </p>

                <h2
                  className="text-[#1a1a1a] group-hover:text-[#FF461E] transition-colors"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.title}
                </h2>

                <div
                  className="flex items-center gap-2 text-[#1a1a1a] mt-auto"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>Read more</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
