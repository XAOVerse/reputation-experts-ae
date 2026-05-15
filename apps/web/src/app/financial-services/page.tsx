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
  title: "Dubai Financial & Professional Services | Brokerages, Investment Firms, Accountants, Advisors, Tax Planners & Company Formation | Multilingual Reputation Management",
  description:
    "Dubai's only multilingual reputation team built for brokerages, investment companies, family offices, wealth managers, accountants, auditors, financial advisors, tax planners, company formation specialists and business setup consultants. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee.",
};

export default function FinancialServicesPage() {
  return (
    <main>
      {/* 1. Hero */}
      <DentalHeroSection
        headline="Dubai’s only multilingual reputation team built for financial and professional services."
        subtitle="From brokerages, investment companies, family offices and wealth managers to accountants, auditors, financial advisors, tax planners, company formation specialists and business setup consultants. We remove damaging reviews, generate authentic 5-star feedback in Arabic, English, Russian, Mandarin, German and French, and position your firm at the top of Google and AI-driven search (Google AI Overviews and ChatGPT). Backed by a 90-day money-back guarantee. Hit your goals, or full refund, no questions."
        ctaLabel="Get Your Free 7-Page Audit"
        ctaLink="/contact"
        imageSrc="/images/financial-1.png"
        imageAlt="Dubai financial and professional services reputation management"
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
