import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug, getAllSlugs } from "../data";
import type { Block } from "../data";
import ArticleTOC from "./ArticleTOC";

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
          className="text-black"
          style={{ fontSize: "17px", lineHeight: "26px", paddingTop: idx === 0 ? "0" : "20px" }}
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="text-black font-semibold"
          style={{ fontSize: "20px", lineHeight: "28px", paddingTop: "28px", paddingBottom: "4px" }}
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
              className="text-black flex gap-3"
              style={{ fontSize: "17px", lineHeight: "26px" }}
            >
              <span aria-hidden style={{ paddingLeft: "1px" }}>•</span>
              <span>{item}</span>
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

  return (
    <main className="bg-white pt-[64px]">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="grid w-full"
        style={{
          gridTemplateColumns: "8fr 16fr",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          className="relative flex items-stretch"
          style={{ borderBottom: `1px solid ${BORDER}`, padding: "28px" }}
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#d2d2d5]">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 33vw, 640px"
              className="object-cover"
            />
          </div>
        </div>

        <div
          style={{
            borderLeft: `1px solid ${BORDER}`,
            padding: "56px 32px",
          }}
          className="flex flex-col gap-[36px]"
        >
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
            className="text-black font-normal"
            style={{ fontSize: "40px", lineHeight: "46px", letterSpacing: "-0.01em" }}
          >
            {article.title}
          </h1>

          <div className="grid grid-cols-[4fr_12fr]">
            <div className="flex flex-col justify-center text-black" style={{ fontSize: "14px", lineHeight: "20px" }}>
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
              <div className="flex flex-col text-black" style={{ fontSize: "14px", lineHeight: "20px" }}>
                <p className="underline underline-offset-[3px] decoration-1">{article.author.role},</p>
                <p>{article.author.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────── */}
      <section
        className="grid w-full"
        style={{ gridTemplateColumns: "8fr 16fr" }}
      >
        {/* LEFT: sticky TOC */}
        <aside className="relative">
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
                <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>Facebook</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>LinkedIn</a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.reputationexperts.ae/insights/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>X</a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: article content */}
        <article style={{ borderLeft: `1px solid ${BORDER}` }} className="relative">
          <div style={{ padding: "0 32px" }}>
            {/* Intro lead */}
            <div style={{ paddingTop: "44px", paddingBottom: "12px" }}>
              {article.intro.map((b, i) => {
                if (b.type === "p" && i === 0) {
                  return (
                    <p
                      key={i}
                      className="text-black"
                      style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.003em" }}
                    >
                      {b.text}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-black"
                    style={{ fontSize: "17px", lineHeight: "26px", paddingTop: i === 0 ? "0" : "20px" }}
                  >
                    {b.type === "p" ? b.text : ""}
                  </p>
                );
              })}
            </div>

            {/* Sections + mid-CTA after section index 1 */}
            {article.sections.map((section, sIdx) => (
              <div key={section.id}>
                <div style={{ paddingTop: sIdx === 0 ? "32px" : "44px" }} id={section.id} className="scroll-mt-[100px]">
                  <h2 className="font-normal" style={{ color: ORANGE, fontSize: "30px", lineHeight: "38px" }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  {section.blocks.map((b, i) => renderBlock(b, i))}
                </div>

                {/* Mid-page CTA banner — after the SECOND section */}
                {sIdx === 1 && (
                  <div
                    style={{
                      background: ORANGE,
                      padding: "56px 32px",
                      marginTop: "56px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <h2 className="text-white font-normal" style={{ fontSize: "40px", lineHeight: "46px", letterSpacing: "-0.01em" }}>
                        Ready to turn your reputation — and your business — around?
                      </h2>
                      <p className="text-white" style={{ fontSize: "17px", lineHeight: "26px" }}>
                        Get a free, confidential audit of how your business appears to customers across Google, review platforms, and AI assistants — and a plain-language plan for what we will fix first.
                      </p>
                      <div style={{ paddingTop: "20px" }}>
                        <Link
                          href="/contact"
                          className="text-white underline underline-offset-[6px] decoration-1"
                          style={{ fontSize: "20px", lineHeight: "28px" }}
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
                <div style={{ paddingTop: "44px" }} id="key-takeaways" className="scroll-mt-[100px]">
                  <h2 className="text-black font-normal" style={{ fontSize: "30px", lineHeight: "38px" }}>
                    Key takeaways
                  </h2>
                </div>
                <ul style={{ paddingTop: "20px", paddingBottom: "12px" }} className="space-y-2">
                  {article.keyTakeaways.map((t, i) => (
                    <li key={i} className="text-black flex gap-3" style={{ fontSize: "17px", lineHeight: "26px" }}>
                      <span aria-hidden style={{ paddingLeft: "1px" }}>•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ paddingBottom: "60px" }} />
              </>
            )}
          </div>
        </article>
      </section>

      {/* ── More Insights ───────────────────────────────── */}
      {otherArticles.length > 0 && (
        <section className="bg-white py-14 lg:py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div style={{ padding: "0 32px", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-black font-semibold" style={{ fontSize: "28px", lineHeight: "34px", letterSpacing: "-0.02em" }}>More Insights</h2>
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
                  <div className="relative w-full overflow-hidden aspect-[3/2] bg-[#d2d2d5]">
                    <Image src={a.heroImage} alt={a.heroImageAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <p className="text-black" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: "16px" }}>{a.categoryEyebrow}</p>
                  <h3 className="text-black group-hover:text-[#FF461E] transition-colors" style={{ fontSize: "17px", lineHeight: "24px" }}>{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
