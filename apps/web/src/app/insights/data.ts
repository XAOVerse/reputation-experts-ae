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
      "82% of customers read your reviews before booking. What they see decides whether they call.",
    excerpt:
      "Reviews are no longer a marketing detail. They are the deciding factor between a booking and a competitor taking that booking. Here is what poor reviews actually cost a business — and what a reputation turnaround looks like in practice.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "A reputation manager reviewing customer feedback dashboards",
    author: { name: "Reputation Experts", role: "Editorial team" },
    featured: true,
    intro: [
      {
        type: "p",
        text:
          "Before a single customer ever calls your business, walks through your door, or fills out an enquiry form, they have already made up their mind about you — by reading what other customers have written about you online. The latest research is unambiguous: 82% of buyers read reviews before booking. What they see in those reviews is the single biggest factor between a booking for you and a booking for your competitor.",
      },
      {
        type: "p",
        text:
          "This is not a marketing problem. It is a revenue problem, and in a competitive market like the UAE, it is rapidly becoming a survival problem.",
      },
    ],
    keyTakeaways: [
      "82% of customers read reviews before booking. Your review profile is the front door to your business.",
      "A single visible negative review, in a competitive category, can cost a service business hundreds of thousands of dirhams in lost annual revenue.",
      "Several visible negative reviews can end an otherwise healthy business inside twelve months.",
      "Customers do not weigh 50 positive reviews against 5 negative ones. They focus on the negatives, draw their conclusion, and book the competitor.",
      "Ad spend, renovations, equipment upgrades, website redesigns and discounts cannot compensate for a damaged review profile.",
      "Turn the reputation around and the business turns around with it.",
    ],
    sections: [
      {
        id: "front-door",
        title: "Reviews are your front door — and the competition is vicious",
        blocks: [
          { type: "p", text: "For a modern service business in Dubai or anywhere else in the UAE, the review profile is the front door. Customers do not arrive on your website cold. They arrive having already seen your Google star rating, scrolled the most recent comments, and compared you against the two or three competitors directly next to you on the map." },
          { type: "p", text: "If what they see looks strong, they call. If what they see looks weak, they call the competitor instead. There is no third option. The hesitation that costs you the booking is invisible — the customer never tells you why they didn't pick up the phone." },
          { type: "p", text: "Every category in the country now has more capable competitors than there are customers willing to spend. Your review profile is the single tie-breaker. The 82% number is not abstract. It is the difference between a fully booked diary and an empty one." },
        ],
      },
      {
        id: "cost-of-bad-reviews",
        title: "One bad review can cost hundreds of thousands of dirhams. Several can close the business.",
        blocks: [
          { type: "p", text: "A single negative review is rarely a single problem. It is a permanent piece of marketing collateral that sits at the top of your Google profile, gets read by every prospect who looks you up, and quietly removes them from your funnel one by one. For a clinic, a salon, a restaurant, a hotel or any service business, a single visible one-star review in a competitive category can cost the business hundreds of thousands of dirhams in lost annual revenue." },
          { type: "p", text: "Several visible negative reviews are not a marketing inconvenience. They are a business-ending event. We have seen otherwise viable businesses — strong service, good team, good location — close within twelve months because the review profile turned against them and they did not know how to recover." },
          { type: "p", text: "And here is the cruel part of the math: good reviews do not undo bad ones. A prospect reading your profile does not weigh fifty positive reviews against five negative ones. They zoom in on the five, draw their conclusion, and book the competitor. Those few reviews define the business in the customer's mind, and that definition is the verdict." },
        ],
      },
      {
        id: "ad-spend-cannot-save-you",
        title: "Your ad spend is not protecting you",
        blocks: [
          { type: "p", text: "This is the part most operators miss, and it is the most expensive blind spot in the business. You can spend tens of thousands of dirhams a month on Meta and Google ads. You can renovate the showroom. You can redesign the website. You can install million-dirham equipment. You can run a generous launch discount. None of it matters if the prospect, having clicked your ad, opens your Google Business Profile and sees four negative reviews." },
          { type: "p", text: "Every dirham of your ad spend is now paying to send qualified prospects straight to your Google profile, where your review profile then decides whether the booking lands with you or with the competitor. If the profile is weak, you are paying — at premium rates — to feed customers to your competitors. The campaign metric looks like cost-per-click. The business reality is cost-per-customer-handed-to-someone-else." },
          { type: "p", text: "This is the verdict, and it is the same verdict in every category: reviews decide. Reviews are the difference between a sale and no sale, a booking and no booking, a call picked up and a call ignored. Nothing else in your operation compensates for it." },
        ],
      },
      {
        id: "turnaround",
        title: "Turn the reputation around. The business follows.",
        blocks: [
          { type: "p", text: "What we do is not a tactical clean-up. It is a complete turnaround of how the business appears to every prospective customer, and by turning the reputation around, we turn the business around." },
          { type: "p", text: "We remove the harmful reviews dragging the profile down. We build a steady, professional pipeline of positive feedback from your real customers. We move the business into the top 3% of its category on Google Maps. We change the answer prospects get when they look you up on Google, and we change the answer AI assistants like Google's AI Overview and ChatGPT give when buyers ask for recommendations in your category." },
          { type: "p", text: "The outcome is a business that finally converts the customers it was already paying to attract — and a category position that compounds month after month instead of decaying under negative content. Same operation, same team, same location. Different reputation. Different business." },
        ],
      },
    ],
  },

  // ─── Healthcare article ──────────────────────────────────────────────
  {
    slug: "94-percent-patients-use-reviews-to-choose-provider",
    category: "Healthcare",
    categoryEyebrow: "INSIGHTS — HEALTHCARE INDUSTRY",
    title:
      "94% of patients use online reviews to choose their doctor. What yours say decides whether they book.",
    excerpt:
      "In healthcare, a star rating is not a marketing metric — it is a trust verdict. Here is what a damaged review profile actually costs a clinic, dental practice or medical centre, and what a reputation turnaround means for the practice.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/blog-2.png",
    heroImageAlt:
      "Reception of a modern medical centre — the first thing patients see online before they ever visit in person",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "When a patient is choosing a clinic, a dentist, an aesthetic provider or a hospital, they are not comparing brochures. They are comparing reviews. Roughly 94% of patients now use online reviews to evaluate a provider before they book — and the bar in healthcare is the highest of any industry. People are trusting their bodies, their faces, the health of their children. The margin for hesitation is zero.",
      },
      {
        type: "p",
        text:
          "What sits on your Google profile, your TripAdvisor, your Doctify or your Trustpilot is therefore not a marketing artefact. It is the verdict patients use to decide whether their family ends up in your chair or in the chair of the practice down the road.",
      },
    ],
    keyTakeaways: [
      "94% of patients use online reviews to evaluate a provider. Your review profile is the trust verdict.",
      "84% will not even consider a provider rated four stars or lower — even a referred one.",
      "A handful of visible negative reviews can collapse new-patient acquisition for a clinic, regardless of clinical excellence.",
      "65% of physicians have zero reviews. Silence reads as risk and quietly hands enquiries to competitors with stronger profiles.",
      "Patients do not weigh 50 positive reviews against 5 negative ones. They focus on the negatives and call the competitor.",
      "Marketing spend, premium equipment and a beautiful clinic cannot compensate for what patients read about you online.",
    ],
    sections: [
      {
        id: "patients-decide-before-they-call",
        title: "Patients decide before they ever call",
        blocks: [
          { type: "p", text: "By the time a prospective patient picks up the phone or fills out your enquiry form, the decision has already been made elsewhere — on a Google search results page, inside a TripAdvisor or Doctify profile, on an Instagram tagged-photo feed. They have read what other patients said about your bedside manner, your wait times, your billing, the cleanliness of the clinic, the result of the procedure. They have done all of this before they have ever met you." },
          { type: "p", text: "Three in four patients begin their search for a new provider on these platforms. 84% will not even consider a provider rated four stars or below, even one that has been personally recommended to them by a friend or another doctor. A four-star average, in healthcare, is not a good rating. It is a stop sign." },
          { type: "p", text: "And here is what makes healthcare different from every other category: the patient is not choosing between two restaurants. They are choosing whether to trust you with their body, with their child's health, with their face, with their teeth. The threshold of confidence required is much higher — and the cost of falling under it is total." },
        ],
      },
      {
        id: "what-it-costs-a-clinic",
        title: "What a damaged review profile actually costs a clinic",
        blocks: [
          { type: "p", text: "The damage is not abstract. A clinic with a few visible one-star reviews does not lose a few percentage points of new-patient acquisition — it can lose the majority of it. Healthcare buyers are uniquely cautious. They will see one credible-looking complaint about a botched outcome, a rude reception, a misdiagnosis, or a billing surprise, and they will quietly close the tab. They will not call. They will not tell you why." },
          { type: "p", text: "For a private clinic or dental practice in the UAE, the financial picture compounds quickly. A single visible negative review can divert hundreds of thousands of dirhams of new-patient revenue per year to a competitor. Several such reviews can collapse new-patient acquisition entirely. We have seen well-equipped, clinically excellent practices spend twelve months pouring money into marketing without understanding why bookings keep falling — and the answer was sitting in plain sight on their Google profile the entire time." },
          { type: "p", text: "Equally damaging is silence. Roughly 65% of physicians have zero online reviews at all. To a prospective patient, a profile with no reviews is not neutral — it is risk. They cannot tell whether the practice is new, sleepy, untested, or simply ignored by its own patients. They book the practice with twelve hundred reviews and a 4.8 instead." },
        ],
      },
      {
        id: "marketing-cannot-compensate",
        title: "Your marketing budget cannot make up for what patients read about you",
        blocks: [
          { type: "p", text: "This is the part most clinic owners and practice managers miss. You can have the best aesthetic surgeon in the city. You can have million-dirham equipment, a flagship clinic in Business Bay, a brand campaign on every channel, a generous package deal, a polished website. None of it converts if the prospective patient — having clicked your ad — opens your Google Business Profile and reads three reviews mentioning a bad result, rude staff, or surprise billing." },
          { type: "p", text: "Your ad spend at that point is doing the opposite of what it was meant to do. It is paying — at premium healthcare CPCs — to send carefully qualified patients straight into your Google profile, where the review profile decides whether the enquiry lands with you or with the competitor down the corniche. The campaign report still shows clicks. The clinic sees fewer bookings every month." },
          { type: "p", text: "In healthcare more than any other category, this is the verdict, and it is unforgiving. Reviews are the difference between a booking and no booking, a consultation and a missed consultation, a referral that converts and a referral that quietly goes elsewhere. Nothing else in the operation makes up for it." },
        ],
      },
      {
        id: "our-expertise",
        title: "Healthcare reputation is our expertise",
        blocks: [
          { type: "p", text: "We work specifically with clinics, dental practices, aesthetic centres and medical groups across the UAE — and we treat healthcare reputation as its own discipline, because it is. The stakes are higher, the language patients use is more clinical, the platforms are different, and the regulatory environment around what providers can say in public is tighter than in any other industry." },
          { type: "p", text: "The outcome we deliver is straightforward to describe. Harmful reviews come down. A professional pipeline of positive patient feedback comes online. The practice moves into the top 3% of its category on Google Maps. The answer patients get from Google's AI Overview, ChatGPT and the major AI assistants — when they ask, 'best aesthetic clinic near me', 'best paediatric dentist in Dubai', 'best laser eye clinic Abu Dhabi' — starts naming you." },
          { type: "p", text: "Same surgeons, same equipment, same team, same location. The reputation is different — and the booking calendar is different with it. That is what healthcare reputation, done as a specialty, actually changes." },
        ],
      },
    ],
  },
  // ─── Automotive article ─────────────────────────────────────────────
  {
    slug: "92-percent-car-buyers-research-online-before-showroom",
    category: "Automotive",
    categoryEyebrow: "INSIGHTS — AUTOMOTIVE INDUSTRY",
    title:
      "92% of car buyers research online before they ever visit a showroom. Your reviews decide which showroom they walk into.",
    excerpt:
      "The buyer has already chosen their dealer before they pull into the car park. Here is what weak reviews cost a UAE dealership in lost test drives, lost finance enquiries and lost gross margin — and what a reputation turnaround means for showroom traffic.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/blog-3.png",
    heroImageAlt:
      "Modern Dubai automotive showroom floor with premium vehicles on display",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "By the time a car buyer pulls into your showroom, the choice has already been made. 92% of buyers research online before they ever set foot in a dealership. They spend more than 14 hours building a shortlist on Google, comparing star ratings, reading recent reviews, scrolling forum threads and watching walkaround videos — and by the time they call you, they are either confirming a decision or eliminating you from one.",
      },
      {
        type: "p",
        text:
          "Your showroom, your sales team and your inventory are no longer your first impression. Your Google profile is. What sits on it decides whether the test drive happens in your showroom or in a competitor's.",
      },
    ],
    keyTakeaways: [
      "92% of car buyers research online before stepping into a dealership. Your Google profile, not your showroom, is your first impression.",
      "86% of buyers will not consider a dealership rated below four stars. A 3.8 is not a low score — it is a screening filter that removes you.",
      "Weak reviews quietly cost a dealership hundreds of thousands of dirhams a month in lost test drives, lost trade-ins and lost finance enquiries.",
      "Buyers narrow their shortlist to one or two dealerships before they make contact. A weak profile is not a slow start — it is a complete absence from the shortlist.",
      "Ad spend, inventory depth and aggressive finance packages do not compensate for what your buyers read about you on Google.",
      "A clean review profile compounds: 86% of satisfied buyers come back and refer others. The reputation does not just win the next sale, it wins the next ten.",
    ],
    sections: [
      {
        id: "showroom-not-first-impression",
        title: "The showroom is no longer your first impression",
        blocks: [
          {
            type: "p",
            text:
              "For most of the history of the car business, the showroom was where the sale began. A polished forecourt, the right car on the floor, a confident salesperson — and the relationship started. That sequence has now inverted. The relationship begins on Google, on TripAdvisor for car rental, on Property Finder-style listings for used cars, on YouTube walkarounds and on Instagram reels. The showroom is where the buyer comes to confirm a decision they already made online.",
          },
          {
            type: "p",
            text:
              "The numbers behind that shift are unambiguous. A typical car buyer now spends more than fourteen hours researching online during their purchase journey, and arrives at the dealership with a shortlist of one or perhaps two showrooms. They have already read your reviews. They have already compared you against the dealership down the road. They are not arriving to be sold to — they are arriving to be served.",
          },
          {
            type: "p",
            text:
              "What that means for an operator is simple, even if it is uncomfortable. A dealership with a weak online reputation does not get a chance to lose the sale on the showroom floor. It loses the sale before the buyer ever walks in.",
          },
        ],
      },
      {
        id: "cost-to-dealership",
        title: "What weak reviews actually cost a dealership",
        blocks: [
          {
            type: "p",
            text:
              "The financial damage from a damaged review profile is rarely visible on a single P&L line. It surfaces as quietly missing footfall: test drives that never get booked, finance enquiries that never come in, trade-in valuations that get done by the competitor instead. For a UAE dealership selling new vehicles at a typical margin structure, a steady leak of even ten qualified buyers a month — each carrying a vehicle, a finance package and a service-plan attachment — runs into hundreds of thousands of dirhams of monthly gross.",
          },
          {
            type: "p",
            text:
              "The threshold is unforgiving. 86% of buyers will not even consider a business rated below four stars. A 3.8 is not a low score — it is a screening filter that removes the dealership from the buyer's shortlist before any salesperson, any package, any test drive ever enters the conversation. A 4.7 with twelve hundred reviews, by contrast, becomes the default choice in its segment.",
          },
          {
            type: "p",
            text:
              "And buyers reading your profile are unusually sensitive in this category. They are about to spend more on a single purchase than they will on almost anything else this year. They are not weighing fifty positive reviews against four bad ones. They are zooming in on the four bad ones — the one about the hidden cost at handover, the one about the bait-and-switch on the trim, the one about the service department that never returns a call — and quietly removing your showroom from the route.",
          },
        ],
      },
      {
        id: "marketing-cannot-fix-it",
        title: "Your inventory, financing and ad spend cannot fix it",
        blocks: [
          {
            type: "p",
            text:
              "This is the blind spot most dealer principals miss. You can have the cleanest used stock in the city. You can have the most aggressive finance package on the lot. You can run Google Vehicle Ads, Meta carousel ads, OEM-funded display, and a polished SEO content stack. None of it converts if the buyer, having clicked your ad, opens your Google Business Profile and reads three recent reviews mentioning hidden fees, slow service, or a misleading listing.",
          },
          {
            type: "p",
            text:
              "Your ad spend at that point is performing the most expensive trick in the business: feeding qualified, ready-to-buy customers straight into your competitor's funnel. The campaign report still shows clicks. The buyer still requests a brochure — from the dealership across town. The cost-per-click looks fine on the dashboard. The cost-per-customer-handed-to-someone-else is what is actually being paid.",
          },
          {
            type: "p",
            text:
              "And the math compounds in the wrong direction. 86% of satisfied buyers come back and refer others. The dealership with the strong profile is not just winning the current sale — it is winning the next service contract, the next trade-up, the next family member who pulls into the same showroom three years later because they remember the first experience. The dealership with the weak profile loses all of it, silently.",
          },
        ],
      },
      {
        id: "automotive-reputation-expertise",
        title: "Automotive reputation is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "We work with dealerships, showrooms, automotive groups and rental companies across the UAE — and we treat automotive reputation as its own discipline. The buyer journey is longer than other categories, the financial commitment is bigger, and the channels that matter (Google, Booking.com for rental, TripAdvisor, the OEM directories, the local agent profiles) are different. A general-purpose reputation playbook does not move the needle here. A specialist one does.",
          },
          {
            type: "p",
            text:
              "The outcome is straightforward to describe. Harmful reviews come down. A professional pipeline of positive feedback comes online from your real, recent customers. The dealership moves into the top 3% of its category on Google Maps. The answer buyers get from Google's AI Overview and ChatGPT — when they ask, 'best Audi dealer in Dubai', 'best used car showroom Sharjah', 'most reliable luxury car rental Marina' — starts naming you instead of the competitor down the road.",
          },
          {
            type: "p",
            text:
              "Same forecourt, same inventory, same team, same finance partners. The reputation is different — and the test-drive calendar, the trade-in funnel and the monthly gross margin are different with it. That is what automotive reputation, done as a specialty, actually changes.",
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
