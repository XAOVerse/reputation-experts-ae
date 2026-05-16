import type { Metadata } from "next";
import { DentalHeroSection } from "./sections/DentalHeroSection";
import { TrustStripSection } from "./sections/TrustStripSection";
import { AIOverviewExplainerSection } from "./sections/AIOverviewExplainerSection";
import { DubaiInsightSection } from "./sections/DubaiInsightSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { MethodologyPillarsSection } from "./sections/MethodologyPillarsSection";
import { DentalServicesSection } from "./sections/DentalServicesSection";
import { DigitalReputationSection } from "./sections/DigitalReputationSection";
import { IndustryAuthoritySection } from "./sections/IndustryAuthoritySection";
import { GoogleAIOverviewSection } from "./sections/GoogleAIOverviewSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
import { DentalFAQSection } from "./sections/DentalFAQSection";
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Google AI Overview, ChatGPT & Perplexity Optimisation for Dubai Businesses | Reputation Experts",
  description:
    "Google AI Overview, ChatGPT, Perplexity and Gemini have replaced ten blue links with a single AI-generated answer that names two or three businesses. We engineer the review depth, multilingual coverage, press citations and structured data Dubai businesses need to be the answer AI gives. Backed by a 90-day money-back guarantee.",
};

export default function GoogleAIOverviewPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        ctaLabel="Get Your Free 5-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/hero-laptop.jpg"
        imageAlt="Dubai business named in a Google AI Overview answer"
      />

      {/* 2. Trust strip (press logos) */}
      <TrustStripSection />

      {/* 3. Visual explainer of what an AI Overview looks like */}
      <AIOverviewExplainerSection />

      {/* 4. Dubai-specific insight */}
      <DubaiInsightSection />

      {/* 5. Problem statement + platform cards */}
      <ProblemStatementSection />

      {/* 6. The four signals AI engines weight */}
      <MethodologyPillarsSection />

      {/* 7. Reputation Management Services (services accordion) */}
      <DentalServicesSection />

      {/* 8. Digital Reputation strands */}
      <DigitalReputationSection />

      {/* 9. Industry authority */}
      <IndustryAuthoritySection />

      {/* 10. The existing GoogleAIOverviewSection (visual on-page block) */}
      <GoogleAIOverviewSection />

      {/* 11. Press placements / media outlets we secure */}
      <PlatformsMediaSection />

      {/* 12. FAQ tuned to AI search */}
      <DentalFAQSection />

      {/* 13. CTA */}
      <DentalCTASection />

      {/* 14. Get in touch */}
      <DentalContactSection />
    </main>
  );
}
