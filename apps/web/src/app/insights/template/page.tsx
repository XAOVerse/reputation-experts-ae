import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TemplateTOC from "./TemplateTOC";

export const metadata: Metadata = {
  title: "Template",
  description: "Insights article template — design preview.",
  robots: { index: false, follow: false },
};

const ORANGE = "#FF461E";
const BORDER = "#d2d2d5";

// Article sections used by both the body and the sticky TOC.
const SECTIONS = [
  { id: "trust-economy", label: "Reputation in the trust economy" },
  { id: "law", label: "Where reviews and the law meet" },
  { id: "fake-reviews", label: "Defending against fake reviews" },
  { id: "mindset", label: "The operator mindset that wins" },
  { id: "key-takeaways", label: "Key takeaways" },
];

export default function InsightsTemplatePage() {
  return (
    <main className="bg-white pt-[64px]">
      {/* ─────────────────────────────────────────────────────
          HERO — two-column: image left (8/24), title right (16/24)
      ───────────────────────────────────────────────────── */}
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
              src="/images/blog-1.png"
              alt="A reputation manager reviewing customer feedback dashboards"
              fill
              priority
              sizes="(max-width: 1280px) 33vw, 640px"
              className="object-cover object-bottom"
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
          <h1
            className="text-black font-normal"
            style={{ fontSize: "40px", lineHeight: "46px", letterSpacing: "-0.01em" }}
          >
            How online reviews shape every booking, enquiry, and sale
          </h1>

          <div className="grid grid-cols-[4fr_12fr]">
            <div className="flex flex-col justify-center text-black" style={{ fontSize: "14px", lineHeight: "20px" }}>
              <p>Last updated: May 21,</p>
              <p>2026</p>
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
                <p className="underline underline-offset-[3px] decoration-1">Editorial team,</p>
                <p>Reputation Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          BODY — TOC left (sticky), article right
      ───────────────────────────────────────────────────── */}
      <section
        className="grid w-full"
        style={{ gridTemplateColumns: "8fr 16fr" }}
      >
        {/* LEFT: sticky TOC */}
        <aside className="relative">
          <div
            className="sticky top-[80px]"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <div style={{ height: "100px", borderLeft: `1px solid ${BORDER}` }} />

            <div style={{ borderLeft: `1px solid ${BORDER}` }}>
              <div style={{ padding: "0 32px 16px 33px" }}>
                <p className="text-black font-normal" style={{ fontSize: "18px", lineHeight: "26px" }}>
                  What&apos;s inside
                </p>
              </div>

              <TemplateTOC items={SECTIONS} borderColor={BORDER} activeColor={ORANGE} />
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
                <a href="#" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>Facebook</a>
                <a href="#" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>LinkedIn</a>
                <a href="#" className="text-black underline underline-offset-[3px] decoration-1" style={{ fontSize: "14px", lineHeight: "20px" }}>X</a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: article content */}
        <article style={{ borderLeft: `1px solid ${BORDER}` }} className="relative">
          <div style={{ padding: "0 32px" }}>
            {/* Big intro lead */}
            <div style={{ paddingTop: "44px", paddingBottom: "12px" }}>
              <p
                className="text-black"
                style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.003em" }}
              >
                Every customer you have not yet met is researching you right now. They are reading{" "}
                <span className="underline decoration-from-font underline-offset-[3px]">what other people</span>{" "}
                wrote about your business — and that single feed of opinions decides whether they pick up the phone, book the table, or walk past your door.
              </p>
            </div>

            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              Reputation does not announce itself. It accumulates quietly in star ratings, in screenshots forwarded between friends, in the answer your prospect gets when they type your brand name into ChatGPT. Most operators feel it only when bookings dip — and by then the damage has compounded.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The good news: reputation is one of the few business outcomes you can engineer. With the right systems, the right responses, and the right rhythm, the same internet that exposes you also amplifies you.
            </p>

            {/* H2 — section 1 */}
            <div style={{ paddingTop: "44px" }} id="trust-economy" className="scroll-mt-[100px]">
              <h2 className="font-normal" style={{ color: ORANGE, fontSize: "30px", lineHeight: "38px" }}>
                Reputation in the trust economy
              </h2>
            </div>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The first thing a prospective customer wants to know is whether anyone like them has used you and what happened next. Eighty-two per cent will read reviews before booking. More than half will not book at all if you have none. The platforms they trust most — Google, TripAdvisor, Booking.com, Trustpilot — surface the same signals in different shapes: star average, total count, recency, and how the business replies.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              For an operator the implication is concrete. A 4.3 rating with eight hundred reviews outperforms a 5.0 with seven. A quiet profile reads as risk. A two-year-old review profile, however good, reads as stale. The job is not to manufacture sentiment; it is to make sure every honest happy customer leaves a trace, and every unhappy one finds you respond like an adult.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              Done well, this becomes the cheapest customer research instrument you will ever run. Patterns surface quickly: a particular shift, a specific room, a recurring menu item, a process bottleneck. The reviews are not the problem — they are the diagnostic.
            </p>

            {/* H2 — section 2 */}
            <div style={{ paddingTop: "44px" }} id="law" className="scroll-mt-[100px]">
              <h2 className="font-normal" style={{ color: ORANGE, fontSize: "30px", lineHeight: "38px" }}>
                Where reviews and the law meet
              </h2>
            </div>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The legal floor under online reviews has risen sharply. In the UK, the Digital Markets, Competition and Consumers Act 2024 made fake reviews, paid-for reviews, and undisclosed-incentivised reviews directly unlawful. In the UAE, platform policies enforced by Google, TripAdvisor and Booking.com now do similar work — content that breaches policy is filtered, deindexed, or removed entirely on appeal.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The implication for operators is that the old shortcuts — review-gating, friends-and-family posts, agency-sourced ratings — are not just risky, they are increasingly self-defeating. Platform filters suppress suspicious content alongside the legitimate reviews around it. The downside is permanent and the upside short.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              What still works is unglamorous: ask every customer, the same way, every time. Make it easy. Reply to every review. Fix what the reviews tell you to fix. The compounding is slow at first and decisive over a year.
            </p>

            {/* ─── Mid-page CTA ─── */}
            <div
              style={{
                background: ORANGE,
                padding: "56px 32px",
                marginTop: "56px",
                borderTop: `1px solid ${ORANGE}`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 className="text-white font-normal" style={{ fontSize: "40px", lineHeight: "46px", letterSpacing: "-0.01em" }}>
                  Ready to take control of your online reputation?
                </h2>
                <p className="text-white" style={{ fontSize: "17px", lineHeight: "26px" }}>
                  Get a free, confidential audit of how your business appears to customers across Google, review platforms, and AI assistants — and a plain-language plan for what to fix first.
                </p>
                <div style={{ paddingTop: "20px" }}>
                  <Link
                    href="#get-in-touch"
                    className="text-white underline underline-offset-[6px] decoration-1"
                    style={{ fontSize: "20px", lineHeight: "28px" }}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            {/* H2 — section 3 */}
            <div style={{ paddingTop: "56px" }} id="fake-reviews" className="scroll-mt-[100px]">
              <h2 className="font-normal" style={{ color: ORANGE, fontSize: "30px", lineHeight: "38px" }}>
                Defending against fake reviews
              </h2>
            </div>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              Most operators never expect to be targeted, and most are at least once. A competitor with a grudge, a single disgruntled former employee, or a coordinated group from a country you have never traded in — all leave the same fingerprint: a sudden cluster of one-star reviews from new accounts, often within a narrow window, often with no order history.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              Every major review platform has an appeals process, but it rewards specificity. The reports that succeed cite the policy clause that was broken, include screenshots, and attach evidence — booking systems, dates, signed receipts, IP logs where you have them. Vague complaints rarely move the needle.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              We run review-monitoring across every major platform daily, so an attack rarely sits unnoticed for more than a few hours, and the appeals that follow are filed against the right policy with the evidence the moderators actually need.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The underlying point is the same one that runs through every section of this guide: the price of being passive is paid in lost bookings you never knew you had.
            </p>

            {/* H2 — section 4 */}
            <div style={{ paddingTop: "44px" }} id="mindset" className="scroll-mt-[100px]">
              <h2 className="font-normal" style={{ color: ORANGE, fontSize: "30px", lineHeight: "38px" }}>
                The operator mindset that wins
              </h2>
            </div>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The operators who consistently end up at the top of a category are usually not the ones with the slickest marketing or the largest budgets. They are the ones who treat reputation as an operations problem with a marketing surface — owned by the front-line manager, reviewed weekly, and tied to a small number of unambiguous metrics.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              They ask every customer. They reply within forty-eight hours. They share the highlights with the team on Monday and the lowlights on Tuesday. They fix the slow check-in, the missing item, the cold soup — and the next batch of reviews changes accordingly.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              The visible result is a steady rise in rating and volume. The less visible result is that everyone on the team starts to think about customer outcomes the way the customer does.
            </p>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              That is the real win. Reputation is the lagging indicator. The leading indicator is the discipline of paying attention.
            </p>

            {/* Key takeaways — black H2 */}
            <div style={{ paddingTop: "44px" }} id="key-takeaways" className="scroll-mt-[100px]">
              <h2 className="text-black font-normal" style={{ fontSize: "30px", lineHeight: "38px" }}>
                Key takeaways
              </h2>
            </div>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px" }}>
              To build a reputation that consistently drives bookings, focus on the four practices that actually move the needle:
            </p>
            <ul style={{ paddingTop: "12px", paddingBottom: "12px" }} className="space-y-2">
              {[
                "A standardised, polite review request sent to every customer at the moment they are happiest.",
                "An internal 48-hour response SLA for every public review, especially the negative ones.",
                "Active monitoring across Google, TripAdvisor, Booking.com, Trustpilot, and category-specific platforms.",
                "Operational follow-through that fixes the cause of recurring complaints — not just the symptom.",
              ].map((line, i) => (
                <li key={i} className="text-black flex gap-3" style={{ fontSize: "17px", lineHeight: "26px" }}>
                  <span aria-hidden style={{ paddingLeft: "1px" }}>•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-black" style={{ fontSize: "17px", lineHeight: "26px", paddingTop: "20px", paddingBottom: "60px" }}>
              By focusing on these critical disciplines, you can ensure a steady supply of trust signals and build a reputation that quietly does the selling for you.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
