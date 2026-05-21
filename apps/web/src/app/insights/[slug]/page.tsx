import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug, getAllSlugs } from "../data";
import type { Block } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.heroImage }],
      type: "article",
    },
  };
}

function renderBlock(block: Block, idx: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={idx}
          className="text-[#333] text-[16px] lg:text-[17px] leading-[1.8] mb-6"
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="text-[#1a1a1a] font-semibold text-[20px] lg:text-[22px] leading-tight mt-10 mb-4 tracking-[-0.01em]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="mb-6 pl-5 space-y-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[#333] text-[16px] lg:text-[17px] leading-[1.8] list-disc marker:text-[#FF461E]"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "stat":
      return (
        <div
          key={idx}
          className="my-8 border-l-4 border-[#FF461E] bg-[#fff7f4] pl-6 pr-5 py-5 rounded-r-lg"
        >
          <div className="text-[#FF461E] font-bold text-[32px] lg:text-[40px] leading-none mb-2">
            {block.value}
          </div>
          <div className="text-[#1a1a1a] text-[15px] leading-snug font-medium">
            {block.label}
          </div>
          {block.source && (
            <div className="text-[#888] text-[12px] mt-2">Source: {block.source}</div>
          )}
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 border-l-4 border-[#1a1a1a] pl-6 pr-2 py-1 italic text-[#1a1a1a] text-[17px] lg:text-[19px] leading-[1.6]"
        >
          {block.text}
          {block.attribution && (
            <footer className="not-italic text-[#666] text-[14px] mt-3 font-normal">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function InsightsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const shareUrl = `https://${typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_HOST ? process.env.NEXT_PUBLIC_SITE_HOST : ""}/insights/${article.slug}`;

  return (
    <main className="pt-[64px] bg-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* ── Title block ────────────────────────────────────── */}
      <section className="bg-white pt-10 lg:pt-16 pb-6 lg:pb-10">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[#FF461E] text-[12px] font-semibold tracking-[0.1em] uppercase mb-6 hover:opacity-80 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Insights
          </Link>
          <p className="text-[#FF461E] text-[12px] font-semibold tracking-[0.1em] uppercase mb-4">
            {article.categoryEyebrow}
          </p>
          <h1
            className="text-[#1a1a1a] font-semibold leading-[1.12] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#666] text-[13.5px]">
            <span>Last updated: {article.lastUpdated}</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#ccc]" />
            <span>{article.readTime}</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#ccc]" />
            <span>By {article.author.name}, {article.author.role}</span>
          </div>
        </div>
      </section>

      {/* ── Hero image ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden bg-[#f4f4f4]">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Body: TOC + content ────────────────────────────── */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">

          {/* Left rail: TOC + share */}
          <aside className="lg:sticky lg:top-[96px] lg:self-start">
            <div className="border-l-2 border-[#FF461E] pl-5 mb-10">
              <p className="text-[#1a1a1a] font-semibold text-[15px] mb-4">What's inside</p>
              <ul className="space-y-3">
                {article.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[#444] text-[14px] leading-[1.5] hover:text-[#FF461E] transition-colors block"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-5">
              <p className="text-[#888] text-[12px] font-medium uppercase tracking-[0.1em] mb-3">Share</p>
              <div className="flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-9 h-9 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#666] hover:text-[#FF461E] hover:border-[#FF461E] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#666] hover:text-[#FF461E] hover:border-[#FF461E] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-9 h-9 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#666] hover:text-[#FF461E] hover:border-[#FF461E] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.012L4.5 22H1.244l8.024-9.167L1 2h7l4.84 6.4L18.244 2zm-2.4 18h2.05L7.255 4H5.06l10.784 16z" /></svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Right: article content */}
          <article>
            {/* Intro */}
            <div className="mb-10">
              {article.intro.map((b, i) => renderBlock(b, i))}
            </div>

            {/* Key takeaways */}
            {article.keyTakeaways.length > 0 && (
              <div className="mb-12 bg-[#fafafa] border border-[#eee] rounded-2xl p-6 lg:p-8">
                <p className="text-[#1a1a1a] font-semibold text-[15px] mb-4">Key takeaways</p>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex gap-3 text-[#333] text-[15px] leading-[1.7]">
                      <span className="text-[#FF461E] font-bold shrink-0 mt-[2px]">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {article.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-[96px] mb-12 lg:mb-16"
              >
                <h2 className="text-[#1a1a1a] font-semibold text-[26px] lg:text-[32px] leading-[1.2] tracking-[-0.02em] mb-6 pb-3 border-b border-[#f0f0f0]">
                  {section.title}
                </h2>
                {section.blocks.map((b, i) => renderBlock(b, i))}
              </section>
            ))}

            {/* End-of-article CTA */}
            <div className="mt-12 bg-[#1a1a1a] rounded-2xl p-8 lg:p-10 text-center">
              <h3 className="text-white font-semibold text-[22px] lg:text-[26px] mb-3 tracking-[-0.01em]">
                Ready to take control of your reputation?
              </h3>
              <p className="text-white/70 text-[15px] leading-[1.7] mb-6 max-w-[520px] mx-auto">
                Book a free, confidential consultation with the Reputation Experts team.
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
          </article>
        </div>
      </section>

      {/* ── More Insights ──────────────────────────────────── */}
      {otherArticles.length > 0 && (
        <section className="bg-[#fafafa] py-14 lg:py-20 border-t border-[#eee]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
            <div className="flex items-end justify-between mb-8 lg:mb-10">
              <h2 className="text-[#1a1a1a] font-semibold text-[24px] lg:text-[30px] tracking-[-0.02em]">More Insights</h2>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[#FF461E] text-[13px] font-semibold tracking-[0.06em] uppercase hover:opacity-80 transition-opacity"
              >
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden rounded-xl aspect-[3/2] bg-[#f4f4f4]">
                    <Image src={a.heroImage} alt={a.heroImageAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <p className="text-[#1a1a1a] text-[11px] font-semibold tracking-[0.08em] uppercase leading-none">{a.categoryEyebrow}</p>
                  <h3 className="text-[#1a1a1a] text-[16px] font-normal leading-[1.45] tracking-[-0.01em] group-hover:text-[#FF461E] transition-colors duration-200">{a.title}</h3>
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
    </main>
  );
}
