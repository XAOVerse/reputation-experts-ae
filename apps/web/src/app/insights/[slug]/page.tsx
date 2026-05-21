import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug, getAllSlugs } from "../data";
import type { Block } from "../data";
import ArticleTOC from "./ArticleTOC";
import BackToTop from "./BackToTop";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
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
          className="text-[#1a1a1a] text-[17px] lg:text-[18px] leading-[1.75] mb-6"
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="text-[#1a1a1a] font-semibold text-[22px] lg:text-[24px] leading-tight mt-10 mb-4 tracking-[-0.01em]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="mb-8 pl-6 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[#1a1a1a] text-[17px] lg:text-[18px] leading-[1.75] list-disc marker:text-[#FF461E]"
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
          className="my-10 border-l-[3px] border-[#FF461E] pl-6"
        >
          <div className="text-[#FF461E] font-semibold text-[44px] lg:text-[56px] leading-none mb-3 tracking-[-0.02em]">
            {block.value}
          </div>
          <div className="text-[#1a1a1a] text-[17px] leading-snug">
            {block.label}
          </div>
          {block.source && (
            <div className="text-[#888] text-[13px] mt-2">Source: {block.source}</div>
          )}
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-10 border-l-[3px] border-[#1a1a1a] pl-6 text-[#1a1a1a] text-[20px] lg:text-[22px] leading-[1.5] font-normal"
        >
          <p className="italic mb-3">"{block.text}"</p>
          {block.attribution && (
            <footer className="not-italic text-[#666] text-[14px] font-normal">
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

  return (
    <main className="pt-[64px] bg-white">
      {/* ── Two-col hero: image left, title right ───────────── */}
      <section className="bg-white pt-10 lg:pt-16 pb-12 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f4f4f4] order-2 lg:order-1">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="order-1 lg:order-2">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#FF461E] text-[12px] font-semibold tracking-[0.1em] uppercase mb-6 hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Insights
            </Link>
            <h1
              className="text-[#1a1a1a] font-semibold leading-[1.08] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.5rem)" }}
            >
              {article.title}
            </h1>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF461E]/10 flex items-center justify-center shrink-0">
                <span className="text-[#FF461E] font-semibold text-[15px]">RE</span>
              </div>
              <div>
                <p className="text-[#1a1a1a] text-[14px]">Last updated: {article.lastUpdated}</p>
                <p className="text-[#1a1a1a] text-[15px] font-medium mt-1">
                  {article.author.name}
                </p>
                <p className="text-[#888] text-[13px]">{article.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: TOC + content ────────────────────────────── */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">

          {/* Left rail: TOC + share */}
          <aside className="lg:sticky lg:top-[96px] lg:self-start">
            <ArticleTOC
              sections={article.sections.map((s) => ({ id: s.id, title: s.title }))}
              extra={[{ id: "key-takeaways", title: "Key takeaways" }]}
            />
            <div className="mt-10">
              <p className="text-[#1a1a1a] text-[14px] font-medium mb-4">Share:</p>
              <div className="flex gap-5 text-[14px]">
                <a
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] underline underline-offset-[3px] decoration-1 hover:text-[#FF461E] hover:decoration-[#FF461E] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] underline underline-offset-[3px] decoration-1 hover:text-[#FF461E] hover:decoration-[#FF461E] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] underline underline-offset-[3px] decoration-1 hover:text-[#FF461E] hover:decoration-[#FF461E] transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </aside>

          {/* Right: article content */}
          <article className="max-w-[760px]">
            {/* Intro — large/bold */}
            <div className="mb-12">
              {article.intro.map((b, i) => {
                if (b.type === "p") {
                  return (
                    <p
                      key={i}
                      className="text-[#1a1a1a] text-[22px] lg:text-[26px] font-semibold leading-[1.35] tracking-[-0.015em] mb-6"
                    >
                      {b.text}
                    </p>
                  );
                }
                return renderBlock(b, i);
              })}
            </div>

            {/* Sections */}
            {article.sections.map((section, sIdx) => {
              const isFirst = sIdx === 0;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-[96px] mb-14 lg:mb-20"
                >
                  <h2 className="text-[#FF461E] font-semibold text-[32px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-8">
                    {section.title}
                  </h2>
                  {section.blocks.map((b, i) => renderBlock(b, i))}

                  {/* Mid-page orange CTA after the second section */}
                  {sIdx === 1 && (
                    <div className="mt-14 -mx-5 lg:mx-0">
                      <div className="bg-[#FF461E] rounded-none lg:rounded-2xl px-6 lg:px-14 py-12 lg:py-16">
                        <h3
                          className="text-white font-semibold leading-[1.1] tracking-[-0.02em] mb-10"
                          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                        >
                          Ready to take control of your online reputation?
                        </h3>
                        <Link
                          href="/contact"
                          className="inline-block text-white text-[17px] font-medium underline underline-offset-[6px] decoration-1 hover:decoration-2 transition-all"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Key takeaways at the end */}
            {article.keyTakeaways.length > 0 && (
              <section id="key-takeaways" className="scroll-mt-[96px] mb-14">
                <h2 className="text-[#FF461E] font-semibold text-[32px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-8">
                  Key takeaways
                </h2>
                <ul className="space-y-3 mb-6">
                  {article.keyTakeaways.map((t, i) => (
                    <li
                      key={i}
                      className="text-[#1a1a1a] text-[17px] lg:text-[18px] leading-[1.75] pl-6 list-disc marker:text-[#FF461E]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>
      </section>

      {/* ── More Insights ──────────────────────────────────── */}
      {otherArticles.length > 0 && (
        <section className="bg-white py-14 lg:py-20 border-t border-[#eee]">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <div className="flex items-end justify-between mb-8 lg:mb-10">
              <h2 className="text-[#1a1a1a] font-semibold text-[28px] lg:text-[36px] tracking-[-0.02em]">More Insights</h2>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[#FF461E] text-[13px] font-semibold tracking-[0.06em] uppercase hover:opacity-80 transition-opacity"
              >
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden rounded-xl aspect-[3/2] bg-[#f4f4f4]">
                    <Image src={a.heroImage} alt={a.heroImageAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <p className="text-[#1a1a1a] text-[11px] font-semibold tracking-[0.08em] uppercase leading-none">{a.categoryEyebrow}</p>
                  <h3 className="text-[#1a1a1a] text-[18px] font-normal leading-[1.4] tracking-[-0.01em] group-hover:text-[#FF461E] transition-colors duration-200">{a.title}</h3>
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

      <BackToTop />
    </main>
  );
}
