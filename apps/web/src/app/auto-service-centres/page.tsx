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
  title: "Dubai Auto Service & Repair Centres | Garages, Body Shops, Tyres, AC, Car Wash, Oil Change & Diagnostics | Multilingual Reputation Management",
  description:
    "Dubai's only multilingual reputation team built for garages, body shops, tyre shops, car air-conditioning specialists, car washes, service stations, oil change centres and diagnostics workshops. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your workshop at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee.",
};

export default function AutoServiceCentresPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for auto service and repair workshops."
        subtitle="From garages and body shops to tyre centres, car air-conditioning specialists, car washes, service stations, oil change centres and diagnostics workshops. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your workshop at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 7-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/auto-service-1.png"
        imageAlt="Dubai auto service and repair workshop reputation management"
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
