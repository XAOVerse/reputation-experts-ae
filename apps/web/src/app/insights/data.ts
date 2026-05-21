export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "quote"; text: string; attribution?: string };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface InsightsArticle {
  slug: string;
  category: string;
  categoryEyebrow: string;
  title: string;
  excerpt: string;
  date: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  author: { name: string; role: string };
  intro: Block[];
  keyTakeaways: string[];
  sections: Section[];
  featured?: boolean;
}

export const ARTICLES: InsightsArticle[] = [
  {
    slug: "82-percent-consumers-read-reviews-before-booking",
    category: "Consumer Study",
    categoryEyebrow: "INSIGHTS — CONSUMER STUDY",
    title:
      "82% of UAE consumers read online reviews before booking a restaurant, hotel or service",
    excerpt:
      "What the latest review-behaviour data means for hospitality, clinics, and service businesses across Dubai, Abu Dhabi and the wider GCC — and the operational steps that actually move the needle.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "7 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt:
      "Group of guests reviewing a menu and discussing a restaurant with a server in a modern Dubai café",
    author: { name: "Reputation Experts", role: "Editorial team" },
    featured: true,
    intro: [
      {
        type: "p",
        text:
          "Before a guest walks through your door, books a table, or pays a deposit, they're already deciding whether to trust you — and they're doing it by reading what other people have written about you online. The latest consumer research puts a number on it: 82% of consumers always read online reviews before booking a restaurant, hotel, clinic or service provider. For UAE operators, where word travels fast on Google, TripAdvisor, Talabat and WhatsApp groups alike, that number is not a marketing metric. It's the front door.",
      },
      {
        type: "p",
        text:
          "This piece breaks down what the data actually says, why it hits UAE businesses harder than most, and the operational moves that move bookings, covers, and revenue — not just star ratings.",
      },
    ],
    keyTakeaways: [
      "82% of consumers read reviews before booking, and 96% say reviews are important in the research stage.",
      "52% will not book at a property or service with zero reviews — silence reads as risk.",
      "UAE buyers compare you against international standards on global platforms (Google, Booking.com, TripAdvisor) and on Arabic-first channels at the same time.",
      "Volume, freshness, and your response rate matter more than chasing a perfect 5.0 average.",
      "A structured review programme reliably lifts conversion — but only if it's compliant with platform rules and never asks for review-gating.",
    ],
    sections: [
      {
        id: "why-it-matters-uae",
        title: "Why this number matters more in the UAE",
        blocks: [
          {
            type: "p",
            text:
              "Dubai and Abu Dhabi are two of the most review-driven hospitality markets in the world. Tourists arrive with TripAdvisor and Google Maps open. Residents pick clinics, salons and contractors from Instagram and Google in the same scroll. And word-of-mouth — historically the most powerful sales channel in the region — has migrated almost entirely onto screens.",
          },
          {
            type: "p",
            text:
              "The result is a market where a single visible negative review can quietly cost you bookings for months, and where a clinic or restaurant with a steady stream of recent, well-written reviews can out-book a better-known competitor down the road.",
          },
          {
            type: "stat",
            value: "82%",
            label: "of consumers always read online reviews before booking.",
            source: "Consumer review behaviour study, 2024",
          },
          {
            type: "stat",
            value: "96%",
            label: "say reviews are important during research.",
          },
          {
            type: "stat",
            value: "52%",
            label:
              "would never book with a provider that has zero reviews — even if the brand is well known.",
          },
        ],
      },
      {
        id: "what-buyers-actually-read",
        title: "What guests actually read (and what they ignore)",
        blocks: [
          {
            type: "p",
            text:
              "Buyers don't read every review. They skim. The research consistently shows the same pattern: they look at the average star rating first, then the total number of reviews, then the most recent reviews — and finally how the business has responded to negative ones.",
          },
          { type: "h3", text: "The four things they check, in order" },
          {
            type: "ul",
            items: [
              "Average star rating — but only as a filter. A 4.3 with 800 reviews beats a 5.0 with 7.",
              "Volume of reviews — credibility comes from numbers.",
              "Recency — reviews older than 3–6 months feel stale, especially after a refurb or menu change.",
              "Owner responses — buyers want to see that you reply, especially to one- and two-star reviews.",
            ],
          },
          {
            type: "quote",
            text:
              "A measured, professional response to a bad review converts more prospects than a perfect review ever will. It tells the next reader, 'these people are accountable.'",
            attribution: "Reputation Experts, UAE operations",
          },
        ],
      },
      {
        id: "platforms-that-matter",
        title: "The platforms that actually drive UAE bookings",
        blocks: [
          {
            type: "p",
            text:
              "Reviews aren't all created equal. In the UAE, attention concentrates on a small number of high-traffic platforms, and the right priority order depends on what you sell.",
          },
          { type: "h3", text: "Hospitality (hotels, resorts, F&B)" },
          {
            type: "ul",
            items: [
              "Google Business Profile — the default first impression on mobile.",
              "TripAdvisor — still decisive for international guests.",
              "Booking.com — drives last-minute room nights and influences your displayed score.",
              "Talabat / Deliveroo / Zomato — for F&B, the in-app rating is the menu.",
            ],
          },
          { type: "h3", text: "Clinics, salons & wellness" },
          {
            type: "ul",
            items: [
              "Google Business Profile — local intent searches dominate.",
              "Instagram — not technically reviews, but tagged-photo social proof works the same way.",
              "Specialist directories (e.g., Vezeeta, Carbon Free Dining) where applicable.",
            ],
          },
          { type: "h3", text: "Real estate, automotive & professional services" },
          {
            type: "ul",
            items: [
              "Google Business Profile — buyers verify the firm before any meeting.",
              "Property Finder, Bayut, dubizzle agent profiles — listing-platform reputation feeds your enquiries.",
              "LinkedIn for B2B credibility on the decision-maker side.",
            ],
          },
        ],
      },
      {
        id: "operational-playbook",
        title: "An operational playbook that actually works",
        blocks: [
          {
            type: "p",
            text:
              "The biggest mistake we see UAE operators make is treating reviews as a marketing problem. They aren't. They're an operations problem with a marketing surface. The businesses that consistently win run the same loop, week after week.",
          },
          { type: "h3", text: "1. Ask every happy guest, the same way, every time" },
          {
            type: "p",
            text:
              "A standardised, polite ask — at the moment the guest is happiest — typically triples organic review volume within 90 days. The mechanism (WhatsApp follow-up, table card, post-stay email) matters less than the consistency.",
          },
          { type: "h3", text: "2. Respond to every review, especially the bad ones" },
          {
            type: "p",
            text:
              "Set an internal SLA: every review answered inside 48 hours. Use the response to acknowledge specifics, never to argue. Future buyers are the audience, not the reviewer.",
          },
          { type: "h3", text: "3. Fix the operational cause, not the symptom" },
          {
            type: "p",
            text:
              "If three reviews mention slow check-in, the answer isn't a better reply template — it's a faster check-in. Reviews are the cheapest customer-research instrument you'll ever run.",
          },
          { type: "h3", text: "4. Never gate, never buy, never fake" },
          {
            type: "p",
            text:
              "Review-gating (asking only happy customers to post publicly), purchased reviews and incentivised reviews violate Google, TripAdvisor and Booking.com policies and trigger filters that suppress your legitimate reviews. The downside is permanent; the upside is short.",
          },
        ],
      },
      {
        id: "how-we-help",
        title: "How Reputation Experts helps UAE operators",
        blocks: [
          {
            type: "p",
            text:
              "We run end-to-end review programmes for hospitality groups, clinics, salons and service businesses across the UAE. That means: setting up the right asking workflows on WhatsApp and email, monitoring every mention across the platforms that matter for your category, drafting on-brand responses in English and Arabic, and addressing problematic content through the legitimate platform channels.",
          },
          {
            type: "p",
            text:
              "Where appropriate, we also pursue review-removal where a post breaches platform policy (fake, off-topic, defamatory, or competitor-posted). We never gate, never buy, and never coach guests on what to write — we just make it easy for happy customers to be heard.",
          },
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): InsightsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
