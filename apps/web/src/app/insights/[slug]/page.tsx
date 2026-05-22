import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug, getAllSlugs } from "../data";
import type { Block } from "../data";
import ArticleTOC from "./ArticleTOC";
import MobileTOC from "./MobileTOC";

type Props = { params: Promise<{ slug: string }> };

const ORANGE = "#FF461E";
const BORDER = "#d2d2d5";

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
          className="text-black text-[16px] leading-[26px] lg:text-[17px] lg:leading-[26px] break-words [hyphens:auto]"
          style={{ paddingTop: idx === 0 ? "0" : "20px" }}
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="text-black font-semibold text-[18px] leading-[26px] lg:text-[20px] lg:leading-[28px] break-words"
          style={{ paddingTop: "28px", paddingBottom: "4px" }}
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} style={{ paddingTop: "12px", paddingBottom: "12px" }} className="space-y-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-black flex gap-3 text-[16px] leading-[26px] lg:text-[17px] lg:leading-[26px] break-words [hyphens:auto]"
            >
              <span aria-hidden style={{ paddingLeft: "1px" }}>•</span>
              <span className="flex-1 min-w-0">{item}</span>
            </li>
          ))}
        </ul>
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

  // Build TOC items from sections plus a final "Key takeaways" entry
  const tocItems = [
    ...article.sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "key-takeaways", label: "Key takeaways" },
  ];

  const shareUrl = `https://www.reputationexperts.ae/insights/${article.slug}`;

  return (
    <main className="bg-white pt-[64px]">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="w-full lg:grid"
        style={{
          gridTemplateColumns: "8fr 16fr",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        {/* Title / meta block — mobile: appears FIRST, desktop: right column */}
        <div className="order-1 lg:order-2 flex flex-col gap-5 lg:gap-[36px] px-5 pt-8 pb-6 lg:p-[56px_32px] lg:border-l lg:border-[#d2d2d5]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: ORANGE, fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Insights
          </Link>
          <h1
            className="text-black font-normal text-[30px] leading-[36px] lg:text-[40px] lg:leading-[46px]"
            style={{ letterSpacing: "-0.01em" }}
          >
            {article.title}
          </h1>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[4fr_12fr] lg:gap-0">
            <div className="flex flex-col justify-center text-black text-[14px] leading-[20px]">
              <p>Last updated:</p>
              <p>{article.lastUpdated}</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                style={{ background: ORANGE + "1a" }}
                aria-hidden
              >
                <span style={{ color: ORANGE, fontWeight: 600, fontSize: 13 }}>RE</span>
              </div>
              <div className="flex flex-col text-black text-[14px] leading-[20px]">
                <p className="underline underline-offset-[3px] decoration-1">{article.author.role},</p>
                <p>{article.author.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image — mobile: appears SECOND, desktop: left column */}
        <div className="order-2 lg:order-1 relative flex items-stretch px-5 pb-8 lg:p-[28px]">
          <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-[#d2d2d5] rounded-md lg:rounded-none">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MOBILE-ONLY: collapsible TOC + share ────────── */}
      <div className="lg:hidden" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <MobileTOC items={tocItems} borderColor={BORDER} activeColor={ORANGE} />
        <div
          className="flex items-center gap-4 px-5"
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "18px",
            paddingBottom: "18px",
          }}
        >
          <span className="text-black text-[14px] leading-[20px]">Share:</span>
          <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1 text-[14px] leading-[20px]">Facebook</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1 text-[14px] leading-[20px]">LinkedIn</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1 text-[14px] leading-[20px]">X</a>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <section className="w-full lg:grid" style={{ gridTemplateColumns: "8fr 16fr" }}>
        {/* LEFT: sticky TOC — desktop only */}
        <aside className="relative hidden lg:block">
          <div className="sticky top-[80px]" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <div style={{ height: "100px", borderLeft: `1px solid ${BORDER}` }} />

            <div style={{ borderLeft: `1px solid ${BORDER}` }}>
              <div style={{ padding: "0 32px 16px 33px" }}>
                <p className="text-black font-normal" style={{ fontSize: "18px", lineHeight: "26px" }}>
                  What&apos;s inside
                </p>
              </div>
              <ArticleTOC items={tocItems} borderColor={BORDER} activeColor={ORANGE} />
            </div>

            <div
              className="grid"
              style={{
                borderTop: `1px solid ${BORDER}`,
                borderLeft: `1px solid ${BORDER}`,
                padding: "20px 32px 20px 33px",
              }}
            >
              <div className="flex items-end gap-4">
                <span className="text-black" style={{ fontSize: "14px", lineHeight: "20px" }}>Share:</span>
                <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>Facebook</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>LinkedIn</a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>X</a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: article content */}
        <article className="relative lg:border-l lg:border-[#d2d2d5]">
          <div className="px-6 lg:px-[32px]">
            {/* Intro lead */}
            <div className="pt-8 lg:pt-[44px]" style={{ paddingBottom: "12px" }}>
              {article.intro.map((b, i) => {
                if (b.type === "p" && i === 0) {
                  return (
                    <p
                      key={i}
                      className="text-black text-[19px] leading-[28px] lg:text-[22px] lg:leading-[30px]"
                      style={{ letterSpacing: "-0.003em" }}
                    >
                      {b.text}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-black text-[16px] leading-[26px] lg:text-[17px] lg:leading-[26px]"
                    style={{ paddingTop: i === 0 ? "0" : "20px" }}
                  >
                    {b.type === "p" ? b.text : ""}
                  </p>
                );
              })}
            </div>

            {/* Sections + mid-CTA after section index 1 */}
            {article.sections.map((section, sIdx) => (
              <div key={section.id}>
                <div
                  className={`${sIdx === 0 ? "pt-8 lg:pt-[32px]" : "pt-10 lg:pt-[44px]"} scroll-mt-[100px]`}
                  id={section.id}
                >
                  <h2
                    className="font-normal text-[24px] leading-[30px] lg:text-[30px] lg:leading-[38px]"
                    style={{ color: ORANGE }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  {section.blocks.map((b, i) => renderBlock(b, i))}
                </div>

                {/* Mid-page CTA banner — after the SECOND section */}
                {sIdx === 1 && (
                  <div
                    className="px-6 py-10 mt-10 lg:p-[56px_32px] lg:mt-[56px] -mx-6 lg:mx-0"
                    style={{ background: ORANGE }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <h2
                        className="text-white font-normal text-[26px] leading-[32px] lg:text-[40px] lg:leading-[46px]"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        Ready to turn your reputation — and your business — around?
                      </h2>
                      <p className="text-white text-[16px] leading-[26px] lg:text-[17px] lg:leading-[26px]">
                        Get a free, confidential audit of how your business appears to customers across Google, review platforms, and AI assistants — and a plain-language plan for what we will fix first.
                      </p>
                      <div className="pt-3 lg:pt-5">
                        <Link
                          href="/contact"
                          className="text-white underline underline-offset-[6px] decoration-1 text-[18px] leading-[26px] lg:text-[20px] lg:leading-[28px]"
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Key takeaways — black H2 */}
            {article.keyTakeaways.length > 0 && (
              <>
                <div className="pt-10 lg:pt-[44px] scroll-mt-[100px]" id="key-takeaways">
                  <h2 className="text-black font-normal text-[24px] leading-[30px] lg:text-[30px] lg:leading-[38px]">
                    Key takeaways
                  </h2>
                </div>
                <ul style={{ paddingTop: "20px", paddingBottom: "12px" }} className="space-y-2">
                  {article.keyTakeaways.map((t, i) => (
                    <li key={i} className="text-black flex gap-3 text-[16px] leading-[26px] lg:text-[17px] lg:leading-[26px]">
                      <span aria-hidden style={{ paddingLeft: "1px" }}>•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="pb-12 lg:pb-[60px]" />
              </>
            )}
          </div>
        </article>
      </section>

      {/* ── More Insights ───────────────────────────────── */}
      {otherArticles.length > 0 && (
        <section className="bg-white py-12 lg:py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="px-5 lg:px-[32px] max-w-[1280px] mx-auto">
            <div className="flex items-end justify-between mb-6 lg:mb-8">
              <h2 className="text-black font-semibold text-[22px] leading-[28px] lg:text-[28px] lg:leading-[34px]" style={{ letterSpacing: "-0.02em" }}>More Insights</h2>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: ORANGE, fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden aspect-[3/2] bg-[#d2d2d5] rounded-md">
                    <Image src={a.heroImage} alt={a.heroImageAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <p className="text-black" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: "16px" }}>{a.categoryEyebrow}</p>
                  <h3 className="text-black group-hover:text-[#FF461E] transition-colors text-[16px] leading-[22px] lg:text-[17px] lg:leading-[24px]">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
