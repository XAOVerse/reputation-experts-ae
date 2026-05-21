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
];

export function getArticleBySlug(slug: string): InsightsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
