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
  // ─── AI Search article ──────────────────────────────────────────────
  {
    slug: "60-percent-customers-use-ai-to-shop",
    category: "AI is redefining search",
    categoryEyebrow: "INSIGHTS — AI IS REDEFINING SEARCH",
    title:
      "Nearly 60% of customers now use AI to shop. They are not seeing your website — they are seeing the AI's answer.",
    excerpt:
      "Shopping just collapsed into a single AI-generated answer. Here is what being absent from that answer costs a UAE business — and how AI search visibility decides whether a customer ever sees you in the first place.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/blog-4.png",
    heroImageAlt:
      "Customer using a laptop to ask an AI assistant for a shopping recommendation",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "Customers used to browse, compare, and decide. That sequence is now compressed into a single sentence generated by an AI. Nearly 60% of consumers now use AI tools to help them shop, and 77% say AI makes them decide faster. Almost half say they trust an AI recommendation more than a friend's. The familiar marketing funnel — awareness, consideration, decision — has collapsed into one answer at the top of the page.",
      },
      {
        type: "p",
        text:
          "Which means a new and uncomfortable question for every UAE business owner: when an AI engine writes that one answer for your category, are you in it, or are you missing entirely?",
      },
    ],
    keyTakeaways: [
      "Nearly 60% of consumers now use AI tools to help them shop. The decision is made before they ever click through to a website.",
      "77% say AI helps them make faster decisions. Influence has to happen earlier in the journey than ever before.",
      "46% say they trust an AI recommendation more than a friend's for purchases in its area of expertise.",
      "AI engines name two or three businesses in their answer. If your brand is not one of them, you are functionally invisible — regardless of how well-ranked your website is.",
      "Classic SEO ranks pages. AI ranks businesses. Citation authority, multilingual reviews and structured data are now the signals that decide who gets named.",
      "AI search visibility is something you can engineer — and the brands that engineer it first will lock in category position before their competitors realise the rules changed.",
    ],
    sections: [
      {
        id: "shopping-journey-collapsed",
        title: "The shopping journey just collapsed into a single answer",
        blocks: [
          {
            type: "p",
            text:
              "For two decades, the digital purchase journey was a funnel: a Google search at the top, ten blue links to compare, a few tabs left open, a decision somewhere at the bottom. The customer did the work of comparing. The brand's job was to be on page one and convert when they arrived.",
          },
          {
            type: "p",
            text:
              "That funnel is gone. A customer in Dubai today opens ChatGPT, or scrolls to the Google AI Overview that now sits above the blue links, or asks Perplexity, and gets a single confident sentence: 'The best aesthetic clinic in Marina with Arabic-speaking consultants is X. Two others to consider are Y and Z.' The comparison has already been done — by the model, in silence, on the customer's behalf — before any website is ever opened.",
          },
          {
            type: "p",
            text:
              "Researchers describe this as 'augmented decision-making': the customer keeps the final say, but the AI does the filtering. 77% of consumers say it makes them decide faster. Almost half trust the AI's answer more than a friend's for purchases in the AI's area of expertise. The job of the brand has fundamentally inverted. It is not enough to be findable. You now have to be nameable by the model.",
          },
        ],
      },
      {
        id: "cost-of-being-invisible",
        title: "What being absent from the AI answer actually costs",
        blocks: [
          {
            type: "p",
            text:
              "When an AI engine names three businesses in its answer for your category, the rest of the market — however well-positioned on traditional Google, however clever the website, however active on social — simply does not exist for that customer. The funnel has collapsed and the AI's answer is now the only top of the page that matters.",
          },
          {
            type: "p",
            text:
              "For a Dubai service business, the financial picture compounds quickly and silently. The clicks are not measurably down on the campaign report. The customer never made it into the campaign. They got their answer from Perplexity at breakfast, picked one of the three businesses the model named, and the conversation with your category was over before you ever knew it had started.",
          },
          {
            type: "p",
            text:
              "The competitive math is unforgiving in a different way to traditional search. On a Google results page, even position six gets a few clicks. In an AI answer, there is no position six. There is the brand the model names, and there is everyone else. The difference between being named and not being named is the difference between being in the customer's consideration set and being completely absent from it.",
          },
        ],
      },
      {
        id: "not-about-blue-links",
        title: "This is not about ranking on Google any more",
        blocks: [
          {
            type: "p",
            text:
              "The most expensive mistake we see businesses make is to treat AI search as an SEO problem to be solved with more content and more backlinks. Classic SEO ranks pages. AI ranks businesses. The signals are different, the weighting is different, and the levers that move them are different.",
          },
          {
            type: "p",
            text:
              "What AI engines actually weight when they decide who to name in an answer is four things: how recently and how authentically you are reviewed (and in which languages the customer is searching in), how often you are cited by the third-party sources the model trusts in your category, how consistent and complete your business profile is across Google, Apple and Bing, and how cleanly your own website tells the model what you do.",
          },
          {
            type: "p",
            text:
              "Each of these is a discipline. Doing one of them well does not compensate for ignoring the others. A Dubai hotel with 800 five-star reviews but zero coverage in Hotelier Middle East or Condé Nast Traveller Middle East will lose to a competitor with 400 reviews and three citations in those publications, because the AI weights citation authority more heavily than raw review count. The rules of the game changed quietly. Most businesses are still playing the old one.",
          },
        ],
      },
      {
        id: "ai-search-our-expertise",
        title: "AI search visibility is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "We built a dedicated AI search practice for exactly this moment. Across Google AI Overview, ChatGPT, Perplexity and Gemini, in every language Dubai customers search in — English, Arabic, Russian, Mandarin — we measure who is being named in your category, who is being cited, and how the model is describing each location of your business. Then we close the gap.",
          },
          {
            type: "p",
            text:
              "The work is delivered by AI agents and a Dubai-based reputation team running in parallel. Agents push accurate, multilingual updates to your Google Business Profile, Apple Business Connect and Bing Places. Agents time review-request campaigns to your real operational rhythm — checkout, treatment completion, project handover. Our editorial and PR team secures placements in the Middle East and international publications the AI engines trust as citation sources in your category. The platform measures the lift, weekly, per location, per engine.",
          },
          {
            type: "p",
            text:
              "Multi-location brands we work with see AI search visibility lift by 61% within the first 60 days. Every engagement starts with a free 7-page audit of how each AI engine currently sees your business, and every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The outcome is not better content. The outcome is the AI naming your brand when your customer asks the question that matters.",
          },
        ],
      },
    ],
  },
  // ─── AI Overviews + reviews article ─────────────────────────────────
  {
    slug: "ai-overviews-cite-businesses-with-reviews",
    category: "AI Search",
    categoryEyebrow: "INSIGHTS — AI SEARCH",
    title:
      "Brands with no review presence appear in just 1% of AI Overviews. Engagement decides the rest.",
    excerpt:
      "AI engines now treat third-party review platforms as one of the biggest citation sources on the internet. Here is what that means for your AI visibility — and the gap we close.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/ai-search-hero.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "Customers stopped scrolling through ten blue links. They are reading the AI's answer at the top of the page, and acting on it. Roughly 58% of consumers now use AI to find a product or service. New research analysing 800,000 AI-generated answers across ChatGPT, Gemini, Perplexity and Google's AI Mode shows that one specific signal — your presence and activity on third-party review platforms — has become one of the single biggest factors in whether your brand is ever named in that answer.",
      },
      {
        type: "p",
        text:
          "Which makes for a simple but uncomfortable question: when an AI engine writes the one paragraph that decides whether a customer picks up the phone, are you in that paragraph, or are you invisible?",
      },
    ],
    keyTakeaways: [
      "Brands with no presence on third-party review platforms appear in just 1% of AI-generated answers.",
      "Simply creating a profile lifts citation share to 53.5%. Brands with 80+ reviews are cited in over three-quarters of AI answers.",
      "Review and trust platforms are now the second-most cited source type in AI-generated answers — 14% of all citations point to them.",
      "Responding to reviews matters as much as collecting them. Live two-way engagement signals an operational, accountable business.",
      "AI engines weight relevance, recency and ranking. A dormant profile fails all three.",
      "This is closeable. The gap between invisible and cited is a programme of reviews, responses and citation work — not a re-platforming.",
    ],
    sections: [
      {
        id: "ai-answer-is-the-new-front-page",
        title: "The AI answer is the new front page of the internet",
        blocks: [
          {
            type: "p",
            text:
              "For two decades the customer's first impression of a business happened in a search results page: ten links, a few star ratings, a handful of paid ads. Today it happens inside a single paragraph generated by an AI. The AI has already read the reviews, compared the businesses, weighted the citations, and condensed all of it into one confident answer at the top of the screen.",
          },
          {
            type: "p",
            text:
              "If your brand is in that paragraph, you are in the customer's consideration set. If your brand is not in it, your category just had a conversation about who to choose, and you were not in the room. There is no second page, no second chance. The funnel collapsed into a single sentence.",
          },
          {
            type: "p",
            text:
              "And that sentence is increasingly being built out of one specific source type. Of every citation an AI engine pulls into a typical answer, one in seven now points to a third-party review or trust platform. Reviews are not just a marketing signal any more. They are one of the raw materials the model uses to write the answer your customer reads.",
          },
        ],
      },
      {
        id: "no-review-presence-is-functionally-invisible",
        title: "No review presence means functionally invisible",
        blocks: [
          {
            type: "p",
            text:
              "The data is uncomfortable, and it is consistent across the major engines. Brands with no presence on the dominant third-party review platforms appear in just 1% of AI-generated answers in their category. Not a low number — a vanishingly small number. To an AI engine, the absence of an active review footprint reads as the absence of a legitimate operating business. The model fills the gap with the competitor who does have one.",
          },
          {
            type: "p",
            text:
              "Closing the gap delivers a step change. Simply creating a profile on the right platforms — Google, Trustpilot, the category-specific directories the AI engines weight in your sector — lifts your citation share in AI answers from 1% to roughly 53.5%. Adding genuine, recent reviews from your real customers and crossing the eighty-review threshold pushes citation share above 75%. The curve is not gradual. It is a step function with two cliffs, and most brands are sitting on the wrong side of both.",
          },
          {
            type: "p",
            text:
              "And those review platforms are no longer a niche signal inside the model. They are the second-most cited source type across the whole of AI search. Whatever else you spend on visibility — content, ads, PR — none of it compensates for missing the place the AI is most likely to look when it writes the answer about you.",
          },
        ],
      },
      {
        id: "responding-matters-as-much-as-collecting",
        title: "Responding matters as much as collecting",
        blocks: [
          {
            type: "p",
            text:
              "The next finding from the research is even more counterintuitive. Collecting reviews lifts AI citation share substantially. Replying to those reviews lifts it further. Engaged profiles — ones with consistent, professional responses to both positive and negative reviews — appear in AI answers materially more often than otherwise identical profiles that simply collect feedback in silence.",
          },
          {
            type: "p",
            text:
              "The mechanism is intuitive once you think about it. A live, two-way conversation tells the AI engine that the business is operationally real, that customer service exists, that complaints get addressed, that the profile is not a long-abandoned page. The model is, in effect, scoring your accountability. The brands that look accountable get named in the answer. The brands that look dormant do not.",
          },
          {
            type: "p",
            text:
              "The three signals the engines weight, in plain language, are relevance, recency and ranking. A dormant profile fails all three. A profile with steady, recent, professional engagement passes all three — and the AI rewards it with citations your competitors do not get.",
          },
        ],
      },
      {
        id: "closing-the-gap-is-our-expertise",
        title: "Closing the gap is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "We build and run the exact programme that closes this gap. We set up and maintain your presence on the review platforms AI engines actually weight for your category — Google Business Profile, Trustpilot, TripAdvisor, Booking.com and the industry-specific directories that matter in your vertical. We run multilingual review-request campaigns timed to your real operational rhythm so the profile fills with genuine, recent feedback from your real customers, not stale or solicited content.",
          },
          {
            type: "p",
            text:
              "Our team responds to every review on your behalf, in the languages your customers use, with on-brand voice and within the SLA the engines reward. And our editorial team secures placements in the wider third-party publications the AI models trust as citation sources — so the answer the model writes about you is built out of high-quality material the engine already has reason to believe.",
          },
          {
            type: "p",
            text:
              "The outcome is the AI naming your brand when your customer asks the question that matters. Every engagement starts with a free 7-page audit of how each AI engine currently sees your business, and every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The gap between 1% and 75%+ AI citation share is not a moonshot. It is operational work, done in the right order, by a team that has done it before.",
          },
        ],
      },
    ],
  },
  // ─── Hotel reviews + competitive analysis ───────────────────────────
  {
    slug: "your-competitors-reviews-are-costing-you-bookings",
    category: "Hospitality",
    categoryEyebrow: "INSIGHTS — HOSPITALITY",
    title:
      "Your competitors' reviews are quietly costing you bookings. New research shows by exactly how much.",
    excerpt:
      "Peer-reviewed research on US hotel bookings shows your competitors' review scores move your own demand almost as much as your own scores do. Here is what the gap costs a UAE hotel — and how we close it.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/hotels-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "Hoteliers have spent two decades treating online reviews as their own problem. Peer-reviewed research published in the Journal of Marketing now says it is just as much a competitor problem. Analysing three years of booking data from six US upscale hotels alongside TripAdvisor sentiment scores, the authors find that a 1% lift in a competitor's sentiment score quietly removes roughly 0.25% of your bookings at the average price point — and 0.34% at premium price points.",
      },
      {
        type: "p",
        text:
          "Which means the question is no longer 'how strong is our review profile?' The question is 'how strong is our review profile compared to the property across the road, the one that pulled an extra ten basis points of sentiment last quarter and is now siphoning room nights from us every weekend?'",
      },
    ],
    keyTakeaways: [
      "81% of travellers usually or always read reviews before booking a hotel; 52% will not book a property with no reviews at all.",
      "A 1% lift in your own sentiment score is worth about a 0.38% increase in bookings at average price — and 0.54% at premium price points.",
      "A 1% lift in a competitor's sentiment score removes about 0.25% of your bookings at average price, and 0.34% at premium prices.",
      "Pricing decisions made without watching competitor review movement are systematically wrong. The reviews are doing half of the pricing work.",
      "Business travellers respond more strongly to reviews than to price. Leisure travellers are the opposite. Both segments must be planned for separately.",
      "Closing the gap is operational work — done across your property and against the comp set — not a marketing campaign.",
    ],
    sections: [
      {
        id: "decided-by-reviews-you-do-not-own",
        title: "Your bookings are decided by reviews you do not own",
        blocks: [
          {
            type: "p",
            text:
              "The traditional model in hospitality has treated reviews as a self-contained scoreboard: every property worries about its own rating, its own response rate, its own monthly review volume. The Journal of Marketing study takes that view apart. Demand for a hotel does not just respond to its own sentiment. It responds to the relative position of its sentiment against the directly competing properties in the same market.",
          },
          {
            type: "p",
            text:
              "The effect is bigger than most pricing teams realise. A 1% improvement in your own sentiment score is worth roughly a 0.38% lift in bookings at the average price point. But a 1% improvement in the sentiment score of the property next door costs you about 0.25% of those same bookings. The two effects compound. A competitor that quietly pulls ahead by ten or twenty basis points of sentiment is not just winning their own room nights — they are taking yours.",
          },
          {
            type: "p",
            text:
              "In a Dubai market where any leisure traveller comparing two beach resorts in JBR, or any business traveller comparing two Downtown five-stars, is reading both review profiles in the same five minutes, the relative gap is the lever. The property with the better recent sentiment wins the booking. The property with the equivalent average rating but stale, unanswered reviews loses it — and the operator never sees the booking in their own report at all.",
          },
        ],
      },
      {
        id: "premium-price-makes-the-gap-bigger",
        title: "When you charge premium, the gap hits harder",
        blocks: [
          {
            type: "p",
            text:
              "The research finds the effect amplifies at premium price points. A property positioned at the high end of its market sees a 0.54% lift in bookings from a 1% sentiment improvement of its own, and a 0.34% drop from a 1% sentiment improvement at a competitor. In simple language: the more you charge, the more aggressively reviews swing demand in both directions.",
          },
          {
            type: "p",
            text:
              "For a premium UAE property charging above category average, the operational reality is uncomfortable. The market is forgiving of price as long as the review profile justifies it. The moment the reviews soften — three credible-looking complaints about cleanliness, two about slow check-in, one about a billing surprise — the premium becomes indefensible to the customer reading the profile. They book the competitor at a similar rate with the stronger profile, and the operator is left with two equally bad options: drop the rate to recover the booking, or hold the rate and watch occupancy fall.",
          },
          {
            type: "p",
            text:
              "Neither is sustainable. Reputation is doing the pricing work the revenue team thinks the revenue team is doing.",
          },
        ],
      },
      {
        id: "segment-and-content-differences",
        title: "The segment and content differences nobody talks about",
        blocks: [
          {
            type: "p",
            text:
              "Two more findings from the study are particularly useful for any property running a mixed-segment business. First, the segments behave differently. Leisure travellers are more sensitive to price than to reviews. Business travellers are the opposite — they are far more sensitive to reviews than to price, because comfort, service quality and reliability are non-negotiable when the trip is on the company card.",
          },
          {
            type: "p",
            text:
              "Second, the type of review content matters. Reviews about attributes the traveller cannot independently verify before arriving — service, cleanliness, comfort, the feel of the property — move bookings significantly more than reviews about attributes that are visible from the hotel's own website, like location or the photos of the suite. Reviews carry exactly the weight that the customer cannot verify any other way.",
          },
          {
            type: "p",
            text:
              "For an operator, that has direct implications. Responding well to a comment about service quality moves more demand than responding to a comment about distance to the airport. Investing in cleanliness or check-in speed and making sure those operational gains land in the next month's reviews moves more demand than a refurb of an already-photogenic lobby.",
          },
        ],
      },
      {
        id: "competitive-reputation-is-our-expertise",
        title: "Competitive hospitality reputation is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "We run reputation programmes for hotels, resorts, serviced apartments and hospitality groups in the UAE that explicitly include the comp set. We do not just track your property's reviews and sentiment across Google, TripAdvisor, Booking.com and the OTAs your buyers actually use. We track the same metrics for the three to five properties you genuinely compete with, weekly, in every language your guests are reviewing in, and we tell you exactly where the gap is widening or narrowing month over month.",
          },
          {
            type: "p",
            text:
              "We run the multilingual review-request workflow that fills your profile with recent, authentic feedback at the moment guests are happiest — post-stay, post-dining, post-spa, post-event. Our team responds to every review on your behalf in the languages your guests use, within the SLA the platforms reward. And we work the citation and press placements that influence the AI engines now writing the recommendation answers travellers read before they ever open Booking.com.",
          },
          {
            type: "p",
            text:
              "Every engagement starts with a free 7-page audit comparing your property to its three closest competitors across the metrics that move demand. Every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The gap your competitor's review profile is opening up against you is not a soft brand issue. It is room nights. We close it.",
          },
        ],
      },
    ],
  },
  // ─── Podium online review statistics ────────────────────────────────
  {
    slug: "the-data-on-why-reviews-decide-revenue",
    category: "Consumer Study",
    categoryEyebrow: "INSIGHTS — CONSUMER STUDY",
    title:
      "93% of customers say reviews decide what they buy. Here is what the rest of the data shows about how reviews now run your business.",
    excerpt:
      "Across more than twenty independent industry studies, the conclusion is the same — reviews now decide spend, pricing, hiring and brand. Here is what the numbers actually say, and what they mean for a UAE business.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "7 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "Operators sometimes argue about whether reviews really move revenue. The honest answer is that the argument was settled by the data a long time ago. Across more than twenty independent industry studies, the headline statistic does not move: roughly 93% of consumers now say online reviews directly influence their purchasing decisions, and 94% have avoided a business outright because of negative reviews. The remaining 6% are not a quiet minority — they are, in the language of survey research, statistical noise.",
      },
      {
        type: "p",
        text:
          "What is interesting is what the rest of the data says. Read together, the numbers describe a market in which reviews are no longer one input into the buying decision. They are the buying decision — and increasingly, the pricing decision, the hiring decision, and the survival decision too.",
      },
    ],
    keyTakeaways: [
      "93% of consumers say online reviews influence their purchase decisions. 94% have avoided a business because of negative reviews.",
      "88% trust online reviews as much as a personal recommendation. Among 18–34 year-olds, the figure rises to 91%.",
      "57% will only use a business with a four-star rating or higher. Only 9% would engage with a business at one or two stars.",
      "85% of consumers consider a review older than three months irrelevant. 40% don't trust reviews older than two weeks.",
      "31% will pay more at a business with excellent reviews. Products with a 4.5+ rating sell roughly four times more than those below.",
      "It takes about 40 positive reviews to outweigh a single negative one — and only 24% of businesses respond to negative reviews consistently.",
      "86% of job seekers read a business's reviews before applying. Reviews now affect talent acquisition, not just sales.",
    ],
    sections: [
      {
        id: "reviews-run-the-purchase-decision",
        title: "Reviews now run the purchase decision — the numbers leave no room",
        blocks: [
          {
            type: "p",
            text:
              "Start with the headline. 93% of consumers say online reviews influence their purchasing decisions. 94% have avoided a business outright because of negative reviews. 88% say they trust online reviews as much as a personal recommendation — a number that climbs to 91% among the 18-34 segment most service businesses spend the bulk of their marketing budget trying to reach.",
          },
          {
            type: "p",
            text:
              "Taken alone, any one of those numbers would already be enough to reorganise a marketing plan. Taken together, they describe an information landscape in which the customer has effectively outsourced the early stages of every purchase decision to other customers. They are not arriving on your site to be persuaded. They are arriving — if they arrive at all — having already been persuaded somewhere else.",
          },
          {
            type: "p",
            text:
              "And the place where the persuasion is happening is, increasingly, the review feed under your name on Google. The behaviour is not a phase. It is the new default.",
          },
        ],
      },
      {
        id: "star-ratings-are-hard-filters",
        title: "Star ratings are hard filters now, not soft signals",
        blocks: [
          {
            type: "p",
            text:
              "Most operators still think of their average rating as a directional summary — a soft signal that combines with price, location and reputation in the customer's mind. The data says otherwise. 57% of customers will only consider a business with a rating of four stars or higher. 49% need at least a four-star rating before they choose. At one or two stars, only 9% of customers will engage at all.",
          },
          {
            type: "p",
            text:
              "Those are not preferences. They are filters. Seven in ten consumers now use rating filters when searching on Google or category platforms. A 3.6 average is not a slightly weaker version of a 4.6 — it is, mechanically, a filter that removes your business from most of the searches it would otherwise have shown up in.",
          },
          {
            type: "p",
            text:
              "Volume matters in the same hard way. 60% of consumers explicitly weigh how many reviews a business has, and 43% want to see at least 100 before they trust a product or service. A perfect 5.0 with seven reviews looks less credible to the modern buyer than a 4.5 with 800 — and the data shows it converts worse.",
          },
        ],
      },
      {
        id: "recency-response-and-the-40-to-1-rule",
        title: "Recency, response rate, and the 40-to-1 rule",
        blocks: [
          {
            type: "p",
            text:
              "Two further findings reshape what 'reputation management' actually has to deliver to work. The first is recency. 85% of consumers consider a review older than three months no longer relevant. 40% will discount reviews older than two weeks. A profile that filled up two years ago and has not moved since reads, to today's buyer, as a brand that has stopped operating — or at least stopped caring whether its customers come back.",
          },
          {
            type: "p",
            text:
              "The second is response rate. Only 24% of businesses respond to negative reviews consistently — meaning the easiest competitive move available to any operator who actually does is to respond to every review professionally inside 48 hours. The data also gives a useful rule of thumb for the underlying maths: it takes roughly 40 positive reviews to outweigh the demand impact of a single negative one. The arithmetic is unforgiving in only one direction.",
          },
          {
            type: "p",
            text:
              "Put recency and response together and the same conclusion shows up in different forms across every study. Profiles that look alive — recent, responded-to, evolving — win. Profiles that look static lose, regardless of how good the underlying rating is.",
          },
        ],
      },
      {
        id: "reviews-decide-pricing-and-hiring",
        title: "Reviews now decide pricing and recruitment too",
        blocks: [
          {
            type: "p",
            text:
              "Two final data points are worth holding side by side. 31% of consumers say they will pay more at a business with excellent reviews — and businesses with positive review profiles earn, on average, 22% more revenue than those without. Products with a 4.5+ rating sell roughly four times more than equivalent products below 4.5. Reviews do not just influence whether the customer buys. They influence how much the customer is willing to pay.",
          },
          {
            type: "p",
            text:
              "And the effect is no longer confined to the sales funnel. 86% of job seekers now read a business's reviews before applying. Reputation has become a recruitment input. A weak review profile does not just cost an operator new customers — it costs them the next round of hires, the next twelve months of bench strength, and the ability to staff the very service experience that would have repaired the reviews in the first place.",
          },
          {
            type: "p",
            text:
              "Pulled together, the numbers describe a single, simple system. Reviews decide how much demand reaches you, how much of that demand converts, how much each converted customer will pay, and how good the team you can hire to serve them is. There is no functional area of the business they do not now run.",
          },
        ],
      },
      {
        id: "running-this-as-a-discipline-is-our-expertise",
        title: "Running this as a discipline is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "The reason this turns into a problem rather than an opportunity for most businesses is that the work of running a reputation properly is genuinely operational. It has to happen weekly, in every language your customers leave reviews in, across every platform that the AI and the search engines actually weight, with a 48-hour response SLA against every new review, and with active citation work in the third-party publications that influence both AI Overviews and human readers. No part of that is glamorous. All of it moves the curve.",
          },
          {
            type: "p",
            text:
              "We run this end-to-end for UAE operators across hospitality, healthcare, automotive, professional services and the wider service economy. The platform tracks; the team executes. Multilingual review-request workflows timed to your operational rhythm. Professional, on-brand responses to every review in the languages your customers use. Citation and editorial placements in the publications AI engines treat as authoritative. And weekly visibility against the three competitors that matter most in your specific market.",
          },
          {
            type: "p",
            text:
              "Every engagement starts with a free 7-page audit of how your reputation currently looks across the platforms that decide whether the customer ever finds you. Every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The data is unambiguous about what reviews do. Our job is to make sure the data starts working in your direction.",
          },
        ],
      },
    ],
  },
  // ─── Aesthetic clinics — reputation is the first consultation ──────
  {
    slug: "in-aesthetics-reputation-is-the-first-consultation",
    category: "Aesthetic Clinics",
    categoryEyebrow: "INSIGHTS — AESTHETIC CLINICS",
    title:
      "In aesthetics, your reputation is the first consultation. Your reviews decide whether the second one ever happens.",
    excerpt:
      "Patients now use Google to vet aesthetic clinics for safety long before they ever book a consultation. Here is what a weak review profile actually costs a UAE clinic — and how a reputation turnaround restores the consultation pipeline.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/aesthetic-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      {
        type: "p",
        text:
          "In every other category, a customer's first interaction with the business is the search. In aesthetics, it is the safety check. A prospective patient considering filler, laser, a surgical procedure, or any treatment that will alter how they look does not start by comparing brochures — they start by reading recent reviews to decide whether the clinic is one they would let near their face. That decision happens before any consultation is ever booked. In practical terms, your Google profile is the first consultation, and your reviews are doing the talking.",
      },
      {
        type: "p",
        text:
          "The market has also become harder. Reporting in The Times notes that UK complaints about cosmetic clinics have climbed from 18 to 118 in five years — a sixfold rise. Patients are reading the news, and they are taking it with them into your review feed when they look you up. The bar of evidence they want before booking is higher than it has ever been.",
      },
    ],
    keyTakeaways: [
      "Patients use Google reviews as a safety check, not a marketing input. The decision to book a consultation is made before the consultation.",
      "Cosmetic-clinic complaints in the UK have risen roughly sixfold in five years. Patients are now actively looking for warning signs.",
      "A handful of negative reviews can collapse new-patient acquisition at a clinic, regardless of how strong the clinical outcomes actually are.",
      "Aesthetic treatments have high per-patient revenue. A single visible negative review can quietly cost a clinic the equivalent of dozens of treatment packages a year.",
      "Patients trust clinics with active, recent, responded-to review profiles. Silence reads as risk.",
      "Reputation in aesthetics is not a brand exercise. It is the difference between a full diary and an empty one.",
    ],
    sections: [
      {
        id: "patients-vet-safety-not-aesthetics",
        title: "Patients now use reviews to vet safety, not just aesthetics",
        blocks: [
          {
            type: "p",
            text:
              "The aesthetic patient of 2026 is a different buyer to the aesthetic patient of even three years ago. They have read the news stories. They know the regulatory environment has tightened. They have been told by friends, by social-media commentary and by their own GPs to do their homework before walking into any clinic. And the homework they do is your Google profile.",
          },
          {
            type: "p",
            text:
              "What they read is not measured against your marketing. It is measured against a checklist of warning signs that the public conversation about the category has taught them to look for. A cluster of unanswered negative reviews. Recent complaints about safety or aftercare. A sudden run of suspicious-looking five-stars. A profile that has not moved in twelve months. Any one of these is enough for the patient to close the tab and move to the next clinic. They do not call. They do not tell you why.",
          },
          {
            type: "p",
            text:
              "The shift is not subtle. The conversation patients used to have with the clinic in the consultation room has migrated, almost entirely, to the moment they are scrolling on their phone the night before. Your reviews are now answering the questions you used to answer in person — and they are answering them whether you are paying attention or not.",
          },
        ],
      },
      {
        id: "what-it-actually-costs-a-clinic",
        title: "What a damaged review profile actually costs an aesthetic clinic",
        blocks: [
          {
            type: "p",
            text:
              "The financial picture in aesthetics is unusually unforgiving. Treatments are high-ticket. Repeat rates and referral rates from a happy patient are exceptional. The reverse is also true: a patient who never books because of what they read on Google is not a small loss. They are the loss of a full course of treatment, plus the maintenance package, plus the friend or family member who would have followed them in. A single visible negative review, in a clinic charging premium prices, can quietly cost the business the equivalent of dozens of treatment packages a year.",
          },
          {
            type: "p",
            text:
              "Several visible negative reviews collapse the pipeline. We have worked with UAE clinics where the clinical outcomes were genuinely excellent, the team was experienced, the equipment was first-rate, and the new-patient calendar was still emptying out month over month. The answer was sitting in plain sight on Google. Three credible-looking complaints from a few months earlier, no responses, no follow-up — and the prospective patients were quietly making the safer-feeling choice elsewhere.",
          },
          {
            type: "p",
            text:
              "Marketing spend cannot dig the clinic out of this on its own. You can run the most effective Meta and Google campaigns in the city. You can refurbish the clinic, expand the team, upgrade the laser. None of it converts if the patient, having clicked your ad, opens your profile and sees a story they cannot trust.",
          },
        ],
      },
      {
        id: "best-reviews-wins-the-consultation",
        title: "The clinic with the best reviews wins the consultation",
        blocks: [
          {
            type: "p",
            text:
              "Patients are not weighing dozens of positive reviews against a handful of negative ones. They are zooming in on the negatives, drawing their conclusions, and booking the clinic with the cleaner story. The data on this is consistent across consumer-review research: a profile that looks active, recent and responded-to wins disproportionately over a profile with an identical star average that looks dormant or defensive.",
          },
          {
            type: "p",
            text:
              "And once a clinic builds visible momentum — a strong recent review profile, professional responses, third-party press coverage that confirms the clinic's standing — the gap compounds. Patients refer friends. Search engines rank the clinic higher. AI assistants begin naming it when prospective patients ask, 'best aesthetic clinic near me'. The clinic that was already good becomes the clinic the market quietly agrees is the safest choice — and the bookings follow.",
          },
          {
            type: "p",
            text:
              "The gap between the clinic with momentum and the clinic without is rarely a clinical gap. It is almost always a reputation gap. And that gap is closeable.",
          },
        ],
      },
      {
        id: "aesthetic-reputation-is-our-expertise",
        title: "Aesthetic reputation is our expertise",
        blocks: [
          {
            type: "p",
            text:
              "We run dedicated reputation programmes for aesthetic and cosmetic clinics, dermatology practices, and surgical clinics across the UAE. We treat aesthetic reputation as its own discipline because the patient's standard of evidence is higher, the language is more clinical, the price sensitivity is different, and the regulatory environment is tighter than in any other consumer-facing category.",
          },
          {
            type: "p",
            text:
              "What we deliver is straightforward. Harmful reviews come down where platform policy permits. A professional pipeline of positive feedback comes online from your real, recent patients, in the languages they actually use — English, Arabic, Russian, Mandarin. Every public review is answered on your behalf, in your voice, inside a 48-hour SLA. The clinic moves into the top 3% of its category on Google Maps. And the answer prospective patients get from Google's AI Overview and ChatGPT, when they ask which clinic is best for filler, laser or any treatment in your specialty, starts naming you.",
          },
          {
            type: "p",
            text:
              "Same clinicians, same equipment, same team, same location. The reputation is different — and the consultation calendar is different with it. Every engagement starts with a free 7-page audit of how each platform currently presents your clinic, and every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start. The first consultation is happening on Google. We make sure your clinic wins it.",
          },
        ],
      },
    ],
  },
  // ─── Dental clinics — the lifetime-value math ──────────────────────
  {
    slug: "dental-patients-the-lifetime-value-of-a-google-review",
    category: "Dental Clinics",
    categoryEyebrow: "INSIGHTS — DENTAL CLINICS",
    title:
      "A dental patient is worth more than any local-business customer. Reviews decide whether you ever meet them.",
    excerpt:
      "Dental practices have the highest lifetime value per patient of any local-service business — and the lowest tolerance for risk in their review research. Here is the math behind what a weak profile actually costs.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "A dental patient is not a transaction. They are a fifteen-year relationship that contains a check-up every six months, two or three rounds of specialty work, an emergency or two, and — almost always — a referral chain into their family. Industry research consistently puts the lifetime value of a retained private dental patient in the tens of thousands of dirhams. Which is why the cost of losing one to a weak review profile is much larger than most clinic owners calculate in their head." },
      { type: "p", text: "And dental patients, more than almost any other consumer, do their homework before booking. Industry data shows that more than 90% of healthcare patients now check reviews before choosing a provider. For dental specifically, the consequence is sharp: the practice with the cleaner profile does not just win the first appointment. It wins the whole family for a decade." },
    ],
    keyTakeaways: [
      "A retained private dental patient typically delivers tens of thousands of dirhams of lifetime revenue, plus a referral chain into their family.",
      "Patients read reviews about pain management, hygiene, billing transparency, and bedside manner — the things they cannot verify from a website.",
      "84% of patients will not consider a healthcare provider rated below four stars. The threshold is a hard filter.",
      "A small number of unanswered negative reviews can collapse new-patient acquisition without affecting clinical outcomes at all.",
      "Patients who choose your clinic on the strength of a good review profile have higher trust on day one and convert better on treatment plans.",
      "Reputation work for a dental clinic is operations work with a marketing surface — not the other way round.",
    ],
    sections: [
      { id: "lifetime-value", title: "The lifetime value the marketing team is not modelling", blocks: [
        { type: "p", text: "Marketing dashboards for dental clinics tend to optimise for cost-per-new-patient. The metric flatters short-term campaigns but disguises the actual prize. The new patient acquired today is also the routine check-ups for the next decade, the orthodontic course for their teenager, the implant work in five years, and a constant low-rate flow of family and friends arriving on a referral. The patient acquisition number on the dashboard is roughly one tenth of the economic decision the customer just made." },
        { type: "p", text: "Reviews directly decide whether that economic chain ever begins. The patient who quietly clicks past your clinic because of three credible-looking negative reviews is not a one-treatment loss. They are the loss of an entire family of cases and the people they would have brought with them." },
      ] },
      { id: "the-questions-patients-actually-ask", title: "The questions patients ask before they book", blocks: [
        { type: "p", text: "What the prospective dental patient is reading reviews for is rarely the dentistry itself — that is taken for granted once they reach a clinic that crosses a basic credibility threshold. What they are reading for is hygiene, pain management, billing transparency, the warmth of the front desk, whether the consultation felt rushed, and whether the team explained the plan in plain language." },
        { type: "p", text: "Those are exactly the attributes you cannot establish on a website. They are also exactly the attributes the patient cannot tolerate uncertainty about. The clinic whose recent reviews repeatedly confirm those qualities, in patients' own words, becomes the safe choice. The clinic whose reviews are silent or unanswered becomes the risky one." },
      ] },
      { id: "what-this-costs-the-practice", title: "What a weak profile actually costs the practice", blocks: [
        { type: "p", text: "Run the arithmetic at the practice level. A clinic missing even one new patient a week because of a weak review profile is missing roughly fifty new patient relationships a year. With a long-term lifetime value in the tens of thousands per patient and a meaningful share of those bringing family with them, the annual revenue impact runs into the millions before the marketing manager has noticed anything is wrong. The reviews quietly do the damage and the dashboard quietly fails to report it." },
        { type: "p", text: "And the loss compounds rather than stays flat. The competitor who picks up those patients gets the long lifetime value, the referrals, the testimonials, and the rising review velocity that pulls more new patients in. The practice with the weak profile is not just losing today. It is losing the next decade." },
      ] },
      { id: "dental-reputation-is-our-expertise", title: "Dental reputation is our expertise", blocks: [
        { type: "p", text: "We work with dental clinics, paediatric practices, orthodontic groups and oral surgery centres across the UAE. We treat dental reputation as its own discipline because the patient's standard of evidence is exceptional, the language is clinical, and the long lifetime value means even small differences in conversion are very large in revenue terms over time." },
        { type: "p", text: "The outcome we deliver is straightforward: harmful reviews come down where platform policy permits, a steady multilingual pipeline of authentic patient feedback comes online, every review is answered on your behalf within a 48-hour SLA, and the clinic moves into the top 3% of its category on Google Maps. Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree." },
      ] },
    ],
  },
  // ─── Restaurants — the 7pm Friday decision ─────────────────────────
  {
    slug: "restaurants-the-friday-night-decision-on-google",
    category: "Restaurants",
    categoryEyebrow: "INSIGHTS — RESTAURANTS & CAFÉS",
    title:
      "It is 7pm on Friday in Dubai. Three couples are choosing where to eat in the next 90 seconds. Your Google profile is the menu they read first.",
    excerpt:
      "Restaurant booking decisions are the fastest commercial decisions consumers make. They are made on a phone, in under two minutes, and they are made by reading a Google profile — not yours, almost certainly your competitor's.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "Of every category of business in the consumer economy, restaurants have the shortest decision window. The customer is hungry. The customer is in a car. The customer has ninety seconds to choose, message the others, and book. They do not visit your website. They do not study your menu PDF. They open Google, glance at the star rating and the recent reviews, and act." },
      { type: "p", text: "Which means that for any restaurant in Dubai, what shows on the Google profile in those ninety seconds is the entire marketing engine. Everything else — the chef hire, the room refit, the social campaign, the press cuttings — converts only through that bottleneck." },
    ],
    keyTakeaways: [
      "Restaurant decisions are made in under 90 seconds on a phone — there is no time for a website visit.",
      "Star rating, photo carousel, recent review tone, and replies to negative comments are the only signals that get read.",
      "A 4.3 with 1,200 recent reviews outperforms a 4.7 with 60. Volume and freshness beat absolute rating.",
      "Talabat, Deliveroo and Zomato ratings act as a separate funnel — they are effectively your delivery menu's cover photo.",
      "A single visible bad review about hygiene, slow service or a billing surprise can move dozens of covers a week.",
      "Reputation runs the cover count. The chef does not.",
    ],
    sections: [
      { id: "ninety-seconds", title: "What happens inside ninety seconds", blocks: [
        { type: "p", text: "The behaviour is consistent enough to model. The customer opens Google Maps from a search like 'best Italian in Marina' or 'sushi near me'. They get a list. They tap the top two or three results. On each one, they scan four things in order: the star rating, the number of reviews, the most recent photo, and the most recent two or three reviews. That is the entire decision. They are choosing one of three options and rejecting the rest." },
        { type: "p", text: "Everything you have spent on your brand, your menu, your room and your hire pipeline meets the customer in those four signals. The restaurant with the cleaner signals wins the table. The restaurant next door, however good its food, does not get a chance to compete on it." },
      ] },
      { id: "the-volume-and-freshness-math", title: "Volume and freshness beat absolute rating", blocks: [
        { type: "p", text: "Operators sometimes obsess about pushing a 4.5 to a 4.7. The customer is rarely making that distinction. They are making a different one: a 4.3 with 1,200 recent reviews looks unambiguously alive. A 4.7 with 60 reviews and the most recent one from eight months ago looks suspect. The customer reads volume as proof of a steady, full restaurant. They read freshness as proof that things have not silently gone wrong recently." },
        { type: "p", text: "Which is why the operationally correct goal in restaurant reputation is not maximum average — it is maximum velocity. A steady cadence of authentic, recent reviews from real guests, in the languages your customers use, beats any single optimisation of the average score." },
      ] },
      { id: "delivery-platforms-are-a-separate-funnel", title: "Delivery platforms are a separate funnel", blocks: [
        { type: "p", text: "For any restaurant doing meaningful delivery volume, Talabat, Deliveroo, Zomato and Careem Food are not extensions of the dine-in funnel. They are a parallel storefront, with their own star rating, their own review pile, and their own customer base of decision-makers who never set foot in the restaurant. The rating in the app is the equivalent of the cover photo on a menu — it is the first and biggest signal the customer reads." },
        { type: "p", text: "A 3.9 average on Talabat for a restaurant doing 200 orders a week is not a small problem. It is the difference between 200 and 350 orders. The reputation work for delivery is operationally distinct from the dine-in work, and worth running explicitly." },
      ] },
      { id: "restaurant-reputation-is-our-expertise", title: "Restaurant reputation is our expertise", blocks: [
        { type: "p", text: "We work with independent restaurants, restaurant groups, cafés and dark-kitchen operators across the UAE. We run the multilingual review-request workflow timed to the moment guests are happiest, the 48-hour response SLA on every review across Google, TripAdvisor and the delivery platforms, and the citation and press placements that move both Google rank and AI Overview answers." },
        { type: "p", text: "The outcome is more covers, higher delivery volume, and a category position that compounds month over month. Same kitchen, same menu, same team — different reputation, different P&L. Free 7-page audit, 90-day money-back guarantee on the metrics we agree at the start." },
      ] },
    ],
  },
  // ─── Bars / Lounges / Entertainment — the 30-second decision ───────
  {
    slug: "bars-and-lounges-the-thirty-second-decision",
    category: "Bars & Entertainment",
    categoryEyebrow: "INSIGHTS — BARS, LOUNGES & ENTERTAINMENT",
    title:
      "The bar and lounge customer makes the fastest commercial decision in the consumer economy. Your reviews are the entire pitch.",
    excerpt:
      "By the time someone is deciding which lounge to walk into on a Friday night, they are not reading menus or websites. They are reading the Google profile that loads on their phone in five seconds. Here is what wins and loses in that window.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/bars-entertainment-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "Nobody plans a night out the way they plan a holiday. The customer who is going to spend AED 800 in your bar tonight is, twenty minutes earlier, in a taxi with three friends, looking at their phone, and deciding. The decision is short, social and ungenerous to any operator whose profile does not load a quick, confident answer to one question: is this place worth the next hour of our evening?" },
      { type: "p", text: "Which means the bar and lounge category has, by some distance, the shortest commercial decision window in the entire consumer economy. The website, the brand book and the launch campaign matter only insofar as they translate into what loads on the Google profile in five seconds at 9:15pm on a Friday." },
    ],
    keyTakeaways: [
      "The decision window for a bar or lounge is roughly 30 seconds on a phone in a group setting.",
      "Photos, recent star rating and recent review tone are the three signals that get read. Everything else is noise.",
      "Negative reviews about door policy, billing surprises, or rude staff disproportionately damage discovery — they confirm exactly the fears the customer already has.",
      "A flat profile (no recent reviews, no responses, no fresh photos) reads as a place that may have quietly closed or gone downhill.",
      "Friday and Saturday demand is decided on Friday afternoon. Slow review velocity in mid-week is invisible to the operator but visible to the algorithm.",
      "The economics of this category are unforgiving. A 20% lift in walk-in conversion is the difference between a profitable night and a flat one.",
    ],
    sections: [
      { id: "thirty-seconds", title: "What loads in the first thirty seconds", blocks: [
        { type: "p", text: "Watch the behaviour in any taxi at 9pm on a Thursday. The phone goes up, a Google search happens, three thumbnails get tapped, and the group is committed. The window is short enough that none of the deeper marketing assets ever load — no website, no Instagram bio, no booking page. The first impression has to be made by what Google decides to render in the preview pane: the headline rating, the photo carousel, the latest review snippets." },
        { type: "p", text: "If any of those three signals communicates risk, the group moves on. They do not pause to investigate. They do not read further. They scroll to the next result." },
      ] },
      { id: "the-fears-that-reviews-confirm", title: "The fears reviews disproportionately confirm", blocks: [
        { type: "p", text: "Customers walking into a bar at night are not anxious about the menu. They are anxious about three specific things: being turned away at the door, ending the night with an unexpectedly large bill, and being treated rudely by staff in front of friends. Reviews that mention any of those fears land with more weight than they should, because they confirm exactly what the customer was already half-expecting." },
        { type: "p", text: "A single recent review describing a billing surprise can therefore do disproportionate damage to discovery, even if the underlying complaint is unrepresentative. The operational work to fix it is not denial — it is a fast, public, professional reply that gives the next reader the reassurance the review removed." },
      ] },
      { id: "flat-profile-reads-as-closed", title: "A flat profile reads as quietly closed", blocks: [
        { type: "p", text: "Customers in this category are unusually pattern-matching. A bar with no reviews in the last three months, no fresh photos, and no responses to the few negative comments that exist looks, to the next customer in a hurry, like a venue that has quietly stopped trying. They will not call to check. They will move to the alternative one tap to the right." },
        { type: "p", text: "The corrective is operational, not creative. A steady velocity of recent, authentic reviews from real guests. Photos refreshed monthly. Professional, fast responses to everything. The profile has to look unambiguously alive at 9:15pm on a Friday — because that is the only time it gets read." },
      ] },
      { id: "bars-reputation-is-our-expertise", title: "Bars and lounges reputation is our expertise", blocks: [
        { type: "p", text: "We work with bars, lounges, nightlife venues and entertainment operators across Dubai and the wider UAE. We run the review-request workflow timed to the end of the night, when the guest is most likely to write. We handle every public reply within 48 hours, on-brand and on-tone. We secure citation and press placements in the Time Out Dubai, What's On and Hotelier Middle East ecosystem the AI engines now weight heavily." },
        { type: "p", text: "The outcome is sharper Friday and Saturday discovery, better walk-in conversion, and a profile that loads, in five seconds, the answer the group in the taxi was about to make their decision on. Free 7-page audit. 90-day money-back guarantee on the metrics we agree." },
      ] },
    ],
  },
  // ─── Fitness, Spa & Wellness — retention math ──────────────────────
  {
    slug: "fitness-spa-membership-reviews-decide-retention",
    category: "Fitness, Spa & Wellness",
    categoryEyebrow: "INSIGHTS — FITNESS, SPA & WELLNESS",
    title:
      "Membership businesses are reputation businesses. A weak Google profile costs you the renewal, not just the next sign-up.",
    excerpt:
      "Fitness, spa and wellness operators tend to model reviews as a new-member acquisition problem. The data says reviews matter at least as much for retention. Here is what that means for the LTV side of the business.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "Fitness studios, spas and wellness centres are membership businesses. Their economics depend on the renewal at month twelve more than the sign-up at month one. Which is why it is unusual that reputation work in the category is almost universally treated as a new-member acquisition problem. The data behind member behaviour suggests it should be treated as a retention problem too." },
      { type: "p", text: "Current members are reading new reviews about the venue they already belong to. They are noticing when the standard slips, when the team turns over, when the maintenance complaints start accumulating. The review feed is not just talking to prospective members. It is quietly telling existing members whether they should still be paying." },
    ],
    keyTakeaways: [
      "Existing members read reviews about their own gym, studio or spa — and decide whether to renew on what they see.",
      "Reviews about cleanliness, equipment maintenance and instructor quality move retention more than any retention email campaign.",
      "A noticeable drop in recent review tone is a leading indicator of churn that most operators see months too late.",
      "Mid-week walk-throughs to address the operational complaints in the reviews lift both retention and discovery at the same time.",
      "Member testimonials, properly captured, are the single most effective marketing asset a wellness business can produce.",
      "Reputation is the cheapest retention programme available — and the only one that simultaneously drives acquisition.",
    ],
    sections: [
      { id: "members-read-too", title: "Existing members are reading the reviews too", blocks: [
        { type: "p", text: "Operators tend to imagine the review reader as a prospective customer. Membership categories work differently. A meaningful share of the people reading new reviews about your studio every week are the members who already pay you. They are checking that the standard they signed up for still holds. They are looking, in particular, for the operational details — was the air conditioning fixed, did the new instructor land, is the spa pool clean — that they themselves might be quietly considering complaining about." },
        { type: "p", text: "What members read shapes the renewal conversation before it ever reaches the front desk. A profile filling with quiet complaints about declining standards is a profile telling existing members that their concerns are real. The renewal decision is half-made before the renewal email lands." },
      ] },
      { id: "leading-indicator-of-churn", title: "Reviews are the cheapest leading indicator of churn", blocks: [
        { type: "p", text: "Cancellations almost always lag the operational problem that caused them by weeks or months. Reviews do not. A drift in average sentiment, a cluster of complaints about the same instructor, a run of comments about the cleanliness of the changing rooms — these are visible in the review feed long before they show in the cancellation report. The operator who reads reviews weekly sees churn building eight to twelve weeks before the finance team does." },
        { type: "p", text: "The conversion is straightforward. Address what the reviews are telling you. Refresh the matt-room, retrain the front desk, replace the broken sauna door. The next batch of reviews changes. Member sentiment in the venue changes with it. The cancellation report eventually shows the lift two quarters later." },
      ] },
      { id: "testimonials-are-the-real-asset", title: "Authentic member testimonials are the real marketing asset", blocks: [
        { type: "p", text: "Wellness customers buy on belief that the experience will deliver. They do not buy on price comparison, and they do not buy on features. They buy on the strength of stories from other members. Authentic, recent testimonials — the kind that flow out of a working review programme — are therefore the most effective acquisition asset a wellness business can produce. They cost almost nothing. They convert better than every paid channel." },
        { type: "p", text: "The operational programme is the same one that retains members. Ask every happy member, in the moment they are happiest. Reply to every review, including the negative ones, professionally and quickly. The two outcomes — retention and acquisition — come out of one piece of work." },
      ] },
      { id: "wellness-reputation-is-our-expertise", title: "Wellness reputation is our expertise", blocks: [
        { type: "p", text: "We work with gyms, fitness studios, spas, pilates and yoga studios, and luxury wellness centres across the UAE. We design and run the review programme that captures member feedback at the moment of peak satisfaction — after the class, after the treatment, after the personal-training milestone — and turns it into a steady, recent, multilingual profile across Google, TripAdvisor and the category-specific platforms that move discovery." },
        { type: "p", text: "We also build the response programme that demonstrably lifts both retention and renewals. Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree." },
      ] },
    ],
  },
  // ─── Beauty Salons — walk-in conversion ────────────────────────────
  {
    slug: "beauty-salons-walk-in-and-rebook-decided-on-google",
    category: "Beauty Salons",
    categoryEyebrow: "INSIGHTS — PERSONAL CARE & BEAUTY SALONS",
    title:
      "The salon economy runs on walk-ins and rebooks. Both are decided on Google before the first appointment.",
    excerpt:
      "Personal-care and beauty salon businesses live or die on walk-in conversion and rebook rate. Both metrics move with the review profile in ways most owners systematically underestimate.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/aesthetic-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "A beauty salon's revenue is the product of two numbers most owners track only loosely: the walk-in conversion rate from passing footfall and Google discovery, and the rebook rate from the customer who has already had a treatment. Both numbers respond more strongly to the salon's online review profile than to any operational change the owner makes inside the salon." },
      { type: "p", text: "Which is why beauty salon owners are routinely surprised by how much the review work moves the books. The mechanism is not visible from the salon floor. It is happening on a phone, on a sofa, the night before." },
    ],
    keyTakeaways: [
      "Walk-in conversion responds directly to Google rating, recent review tone and replies to negatives.",
      "Rebook rate depends on whether the customer's positive experience is reinforced by a salon that asks them to share it — they then become a returning customer with public commitment.",
      "Reviews about specific stylists are now a key driver of both individual stylist bookings and the salon's overall acquisition.",
      "Salons with weak review profiles compete heavily on price. Salons with strong ones quietly raise prices and lose nobody.",
      "Negative reviews about hygiene, missed appointments and pushy upsells damage walk-in conversion more than any other category of complaint.",
      "A well-run review programme typically pays back within the first sixty days in measurable rebook lift alone.",
    ],
    sections: [
      { id: "walk-in-conversion", title: "Walk-in conversion is a Google function", blocks: [
        { type: "p", text: "The customer walking past the salon on the way home, or sitting on the sofa thinking about a treatment, is not making a decision based on the shopfront. They are taking five seconds to type the salon name into Google and reading what comes back. A 4.7 average with active recent reviews flips them from 'maybe' to 'walk in'. A 3.9 with two months of silence flips them the other way." },
        { type: "p", text: "The shopfront, the brand and the location all matter less than the operator imagines. The Google profile is the door the customer actually walks through." },
      ] },
      { id: "rebook-and-public-commitment", title: "The rebook lift hidden in the review request", blocks: [
        { type: "p", text: "There is a subtle behavioural effect that operators rarely model. When a customer is asked, professionally, for a review at the moment they leave the salon happy, two things happen at once. They write a review — which lifts acquisition for the next customer — and they publicly commit themselves to the salon, which materially lifts their own probability of rebooking. The same operational step delivers both effects." },
        { type: "p", text: "Salons that ask every happy customer for a review, in the right moment and in the right way, typically see rebook rate lift by a measurable margin within two months, before the new acquisition lift has even kicked in." },
      ] },
      { id: "stylist-level-reputation", title: "Reviews now attach to individual stylists", blocks: [
        { type: "p", text: "The other shift in this category over the last few years is that reviews are increasingly being written about specific stylists by name. The customer says they came for a colour with Mariam, that they want to come back to her specifically, that they would not see anyone else. Those reviews are gold — and they are also a recruitment and retention signal that ripples through the team." },
        { type: "p", text: "Salons that capture stylist-level praise systematically build named demand for their best staff, which both stabilises the team and gives the salon a defensible position against the competitor down the road." },
      ] },
      { id: "beauty-salon-reputation-is-our-expertise", title: "Beauty salon reputation is our expertise", blocks: [
        { type: "p", text: "We work with hair and beauty salons, nail studios, lash and brow specialists, and barbershops across the UAE. We design the review-capture moment, the multilingual request flow, the professional response programme and the operational reporting that lifts both walk-in conversion and rebook rate." },
        { type: "p", text: "Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree. The outcome is a salon that quietly stops needing to compete on price." },
      ] },
    ],
  },
  // ─── Real Estate Agencies — agent vetting ──────────────────────────
  {
    slug: "real-estate-agents-buyers-vet-you-on-google",
    category: "Real Estate",
    categoryEyebrow: "INSIGHTS — REAL ESTATE AGENCIES",
    title:
      "Buyers and sellers are vetting your real-estate agency the same way they vet a restaurant. The Google profile decides the listing.",
    excerpt:
      "Real estate has the largest single transaction value of any consumer category. And the customer increasingly decides whether to work with the agency on the strength of its Google reviews. Here is what that means for the listing pipeline.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "Property in Dubai is, on average, the single largest financial decision the buyer or seller will ever make. Which is why it is surprising how casually agencies treat the moment that decision begins — the moment a prospective client opens Google and types the agency name to see what comes back. A property listing worth millions of dirhams hinges, in part, on what shows up on a Google profile that takes ten seconds to read." },
      { type: "p", text: "The shift has been quiet but it is real. Buyers and sellers are now vetting agencies the way they vet restaurants. The agency with the cleaner, more recent, better-responded review profile wins the meeting and, more often than not, wins the listing." },
    ],
    keyTakeaways: [
      "Buyers and sellers now Google-vet real estate agencies before making contact, in the same way they vet a restaurant or a clinic.",
      "Property Finder, Bayut and dubizzle agent ratings combine with the agency's Google profile as the trust signal the client reads first.",
      "Reviews about communication, follow-through, paperwork transparency and fee surprises damage discovery disproportionately.",
      "Agency profiles with active responses to negative reviews convert leads at materially higher rates than profiles that do not respond.",
      "A high-value listing routed elsewhere because of a weak review profile is one of the most expensive invisible losses an agency can suffer.",
      "Reputation is now a listing-acquisition channel — not just a marketing surface.",
    ],
    sections: [
      { id: "google-vetting", title: "The Google-vet has migrated to real estate", blocks: [
        { type: "p", text: "Until recently, prospective sellers chose an agency on personal recommendation, a polished pitch deck and the agent's negotiation reputation in the building or compound. The recommendation still matters, but it is now corroborated against the agency's Google profile within five minutes of the conversation. If the profile undermines the recommendation, the recommendation loses." },
        { type: "p", text: "Buyers are doing the same exercise from the other side. The agency they are asked to view a property with becomes, in their head, a stand-in for the property itself. An agency that reads well on Google makes the property feel safer to commit to. An agency that does not undermines the listing it is trying to sell." },
      ] },
      { id: "platform-specific-trust", title: "Property Finder and Bayut profiles are a parallel signal", blocks: [
        { type: "p", text: "In the UAE the Google profile is half of the equation. The other half is the agent-level reputation on Property Finder, Bayut and dubizzle. Buyers comparing three listings of similar properties at similar prices are not reading the property descriptions in detail. They are looking at the listing agent's profile, their response rate, their other listings, and the client reviews where they exist." },
        { type: "p", text: "A weak agent profile on the listing portals quietly pushes enquiries to the agent down the floor with the better one. The property does not sell more slowly because of the property. It sells more slowly because of the agent." },
      ] },
      { id: "specific-complaints", title: "The complaints that move the needle", blocks: [
        { type: "p", text: "Some categories of negative review do more damage than others in real estate. The complaint that lands hardest is about communication — buyers and sellers reading reviews are alert to any signal that the agent disappears once the offer is made. Close behind are complaints about paperwork transparency, undisclosed fees, and pressure tactics at the moment of signing." },
        { type: "p", text: "Those are exactly the fears the customer has walking into the relationship. A handful of unanswered reviews confirming any of them collapses the pipeline before the agent has ever been on a call." },
      ] },
      { id: "real-estate-reputation-is-our-expertise", title: "Real estate reputation is our expertise", blocks: [
        { type: "p", text: "We work with real estate agencies, brokerages and developer sales teams across the UAE. We design the review-capture programme around the moments clients are happiest — successful handover, completed lease, smooth resale — and run the professional response programme across Google, Property Finder, Bayut and dubizzle." },
        { type: "p", text: "Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree. The outcome is a listing pipeline that the brokerage stops fighting for and starts winning by default." },
      ] },
    ],
  },
  // ─── Car Rental — tourist decision-making ──────────────────────────
  {
    slug: "car-rental-the-decision-is-made-before-the-plane-lands",
    category: "Car Rental",
    categoryEyebrow: "INSIGHTS — CAR RENTAL",
    title:
      "Tourists choose their Dubai rental car on the flight, before the plane lands. Your reviews are the entire ad campaign.",
    excerpt:
      "Car rental in tourist markets is decided in transit, on a phone, off a Google search. Here is what a competitive review profile actually buys you versus what marketing spend can never compensate for.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "5 min read",
    heroImage: "/images/auto-service-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "Tourists landing in Dubai for a week-long visit make most of their car rental decisions in the last hour of the flight. They open Google, search 'car rental Dubai', read the top results' star ratings, scroll the recent reviews, and book before they reach the carousel. The decision window is one in-flight WiFi connection. The shortlist is two or three companies." },
      { type: "p", text: "Which means that car rental, more than almost any other category, is decided not by branding or campaigns but by what loads on a Google profile somewhere over the Arabian Gulf. The rental operator with the cleanest profile wins the booking before the tourist has cleared immigration." },
    ],
    keyTakeaways: [
      "The car rental decision is made in transit, on a phone, with a 5-minute attention window.",
      "Recent reviews about hidden fees, deposit disputes and vehicle cleanliness damage discovery disproportionately.",
      "International tourists rely on TripAdvisor and Booking.com Cars in addition to Google — the multi-platform footprint matters.",
      "Multilingual reviews — English, Arabic, Russian, Mandarin — change which segments of the market actually find you.",
      "Repeat customers in this category are rare. Every booking is a one-shot decision driven almost entirely by reputation.",
      "Operators with strong recent profiles quietly raise daily rates and lose nobody. Operators with weak profiles discount and still see occupancy fall.",
    ],
    sections: [
      { id: "in-transit-decisions", title: "Booking decisions made before the plane lands", blocks: [
        { type: "p", text: "The behaviour is unusually consistent. Survey data on inbound Dubai visitors and our own work with rental operators show the same pattern: the rental decision is made on the inbound flight or in the immigration queue, on a phone, in under five minutes. The traveller is tired, time-pressured, and reading whatever Google decides to show in the preview pane." },
        { type: "p", text: "Which is why the marketing spend at the airport, on billboards and on tourist-paper inserts, is operating downstream of the actual decision. The decision has already happened. The tourist is just confirming the choice they made over Riyadh." },
      ] },
      { id: "the-specific-fears-tourists-have", title: "The specific fears that tourists are reading reviews for", blocks: [
        { type: "p", text: "Tourist car rental customers are not worried about the cars. They assume the cars will be fine. They are worried about three specific things and they will read reviews looking for evidence of any of them: hidden fees and surprise charges at handover, aggressive deposit disputes when the car is returned, and rude or unhelpful counter staff when something goes wrong." },
        { type: "p", text: "A single recent review confirming any of those fears moves the booking away from the operator. The operational fix is not a denial — it is a fast, professional, public response that gives the next reader the reassurance the review removed." },
      ] },
      { id: "multi-platform-multi-language", title: "Multi-platform and multilingual is not optional", blocks: [
        { type: "p", text: "Tourists do not all use Google. Russian-speaking visitors disproportionately use Russian-language platforms and review sources. Chinese tourists rely on Mandarin-language guides. International travellers use Booking.com Cars and TripAdvisor in addition to Google. The operator with reviews in only one language on only one platform is invisible to large segments of the inbound market." },
        { type: "p", text: "Multilingual review-request workflows, run systematically, are how the operator becomes visible to the right segments at the right moment." },
      ] },
      { id: "car-rental-reputation-is-our-expertise", title: "Car rental reputation is our expertise", blocks: [
        { type: "p", text: "We work with car rental operators across Dubai and the wider UAE, including luxury, economy and long-stay segments. We design the multilingual review-capture workflow at vehicle return, run the fast professional response programme across Google, TripAdvisor and Booking.com, and secure the citation placements that move both AI Overview recommendations and direct-channel bookings." },
        { type: "p", text: "Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree. The outcome is a rental operation that the inbound tourist already trusted before they sat down at the counter." },
      ] },
    ],
  },
  // ─── Google Ads waste — the financial framing ──────────────────────
  {
    slug: "google-ads-spend-leaks-to-competitors-with-better-reviews",
    category: "Strategy",
    categoryEyebrow: "INSIGHTS — STRATEGY",
    title:
      "US businesses will spend over $140 billion on Google ads this year. Most of it is leaking to competitors with better review profiles.",
    excerpt:
      "Ad spend at scale only converts when the destination it sends prospects to converts. Here is the financial math behind why a damaged review profile turns Google Ads into the most expensive customer-acquisition subsidy your competitor will ever receive.",
    date: "May 2026",
    lastUpdated: "May 21, 2026",
    readTime: "6 min read",
    heroImage: "/images/blog-1.png",
    heroImageAlt: "Placeholder image — to be replaced",
    author: { name: "Reputation Experts", role: "Editorial team" },
    intro: [
      { type: "p", text: "US businesses are projected to spend more than 140 billion dollars on Google ads this calendar year. The number is large enough that it stops registering — it becomes background scenery. But the question worth asking is a more uncomfortable one: of every dollar spent on Google ads, how many actually end with the booking landing at the advertiser, and how many end with the booking landing at a competitor whose review profile happened to be cleaner the day the prospect clicked?" },
      { type: "p", text: "The honest answer, in any category where reviews influence the buying decision, is that a meaningful portion of that 140 billion is being spent to deliver qualified, ready-to-buy customers to competitors. The advertiser pays the click. The competitor takes the customer. The dashboard reports the campaign as performing fine." },
    ],
    keyTakeaways: [
      "US Google ad spend is projected above $140 billion in 2026. A meaningful share of it converts at the competitor, not the advertiser.",
      "An ad click sends the prospect through the advertiser's funnel — which usually ends at the Google Business Profile and the review feed.",
      "If the review feed does not convert, the cost-per-click is no longer the cost of the click. It is the cost of an expensive lead-generation system for the competitor with a better profile.",
      "The CPC dashboard shows the campaign performing. The booking ledger shows the bookings going elsewhere. The two reports rarely meet.",
      "Reputation is not an alternative to advertising. It is the precondition for advertising to actually convert.",
      "Every dollar spent on ads without a clean review profile is being spent at the wrong sequence in the funnel.",
    ],
    sections: [
      { id: "the-leakage-math", title: "The leakage math nobody puts on the dashboard", blocks: [
        { type: "p", text: "An ad click is not a booking. The click sends the prospect into the funnel, where some sequence of pages and signals either converts them or does not. In almost every consumer-services category, the last step in that funnel is the same: the prospect checks the business's Google profile, reads the recent reviews, and either commits or walks. The CPC dashboard does not see that last step. It cannot. By the time the prospect is on Google, they are off the advertiser's domain." },
        { type: "p", text: "Which means the dashboard's verdict on the campaign — the cost per click, the cost per conversion, the campaign ROI — is structurally blind to the place where the actual conversion is being decided. A campaign can be performing perfectly on every measurable metric and still be subsidising the competitor's bookings month after month." },
      ] },
      { id: "what-it-looks-like-in-practice", title: "What this looks like inside a real operator's funnel", blocks: [
        { type: "p", text: "Picture an aesthetic clinic in Dubai spending forty thousand dirhams a month on Meta and Google performance ads. The reports show four hundred clicks a week at a healthy cost-per-click, with a falling cost-per-lead. The owner is reassured. What the report does not show is that of those four hundred clicks, perhaps three hundred and twenty open the clinic's Google profile within sixty seconds. Of those three hundred and twenty, half look at the recent reviews. Of that half, a meaningful fraction quietly closes the tab and opens the competitor's profile instead." },
        { type: "p", text: "The clinic is paying the cost of the ad. The competitor is taking the booking. The cost-per-acquisition metric on the dashboard never sees the part of the funnel where the loss is happening. The operator concludes the ad campaign needs more budget." },
      ] },
      { id: "sequencing-the-fix", title: "Reputation is the precondition for advertising to convert", blocks: [
        { type: "p", text: "The fix is sequencing, not substitution. Advertising and reputation are not alternatives — they are sequential. Advertising drives traffic. Reputation converts it. Skip the reputation step and the advertising spend simply moves prospects through a funnel that ends at someone else's profile." },
        { type: "p", text: "Operators who fix their review profile first, and then spend on ads, see materially different campaign performance. The same click that was being wasted now lands at a profile the prospect trusts. The booking happens. The CAC drops. The campaign that 'needed more budget' suddenly does not need more — it needed a profile worth advertising into." },
      ] },
      { id: "strategy-is-our-expertise", title: "Sequencing reputation before spend is our expertise", blocks: [
        { type: "p", text: "We sit with operators every week who are paying premium ad rates against a damaged or dormant review profile. The first conversation is always the same: stop expanding the ad budget for two months and let us close the gap on Google, Trustpilot, TripAdvisor and the platforms that matter for the category. Then put the ad budget back to work. The CAC numbers in month three are unrecognisable from the CAC numbers in month one." },
        { type: "p", text: "Free 7-page audit at the start. 90-day money-back guarantee on the metrics we agree. We do not run your ads. We make sure your ads actually convert." },
      ] },
    ],
  },
];

export function getArticleBySlug(slug: string): InsightsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
