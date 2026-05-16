import type { Metadata } from "next";
import { DentalHeroSection } from "./sections/DentalHeroSection";
import { TrustStripSection } from "./sections/TrustStripSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { DubaiInsightSection } from "./sections/DubaiInsightSection";
import { ReputationManagementSection } from "./sections/ReputationManagementSection";
import { DentalServicesSection } from "./sections/DentalServicesSection";
import { DigitalReputationSection } from "./sections/DigitalReputationSection";
import { IndustryAuthoritySection } from "./sections/IndustryAuthoritySection";
import { GoogleAIOverviewSection } from "./sections/GoogleAIOverviewSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
// import { DentalCaseStudiesSection } from "./sections/DentalCaseStudiesSection"; // Hidden until real Dubai cases ready
import { DentalFAQSection } from "./sections/DentalFAQSection";
// Pricing intentionally hidden per request 2026-05-15
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Dubai Personal Care & Beauty Salons | Multilingual Reputation Management with 90-Day Money-Back Guarantee",
  description:
    "Dubai's only multilingual reputation team built for hair salons, barbers, beauty salons, nail bars, brow and lash studios, tattoo studios and personal care professionals. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your salon at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee.",
};

export default function PersonalCareBeautySalonsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for salons and beauty professionals."
        subtitle="From hair salons and barbers to beauty salons, nail bars, brow and lash studios and tattoo studios. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your salon at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 7-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/salons-1.png"
        imageAlt="Dubai personal care and beauty salon reputation management"
      />

      {/* 2. Trust Strip (press logos) */}
      <TrustStripSection />

      {/* 3. Problem Statement + Platform Cards */}
      <ProblemStatementSection />

      {/* 4. Dubai-specific market insight */}
      <DubaiInsightSection />

      {/* 5. Reputation Management Services */}
      <ReputationManagementSection />

      {/* 6. Services accordion + detail panel */}
      <DentalServicesSection />

      {/* 7. Digital Reputation Management */}
      <DigitalReputationSection />

      {/* 8. Industry Authority Brand in 6 Months */}
      <IndustryAuthoritySection />

      {/* 9. Google AI Overview */}
      <GoogleAIOverviewSection />

      {/* 10. Platforms & Media Outlets */}
      <PlatformsMediaSection />

      {/* 11. Case Studies (hidden until real Dubai cases ready) */}
      {/* <DentalCaseStudiesSection /> */}

      {/* 12. FAQ */}
      <DentalFAQSection />

      {/* 13. Pricing (hidden per request 2026-05-15) */}

      {/* 14. CTA */}
      <DentalCTASection />

      {/* 15. Get in Touch */}
      <DentalContactSection />
    </main>
  );
}
